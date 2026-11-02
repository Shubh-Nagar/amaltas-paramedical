import { useState } from 'react';
import type { FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import { enquiryDepartments } from '@/data/courses';
import { contact } from '@/data/site';
import { cn } from '@/lib/cn';

type Values = { name: string; email: string; phone: string; department: string };
type Errors = Partial<Record<keyof Values, string>>;

const ENDPOINT = import.meta.env.VITE_ENQUIRY_ENDPOINT;

function validate(v: Values): Errors {
  const e: Errors = {};
  if (!v.name.trim()) e.name = 'Please enter your name.';
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Please enter a valid email address.';
  if (!/^[6-9]\d{9}$/.test(v.phone.replace(/[\s-]/g, '').replace(/^(\+91|0)/, ''))) e.phone = 'Please enter a valid 10-digit mobile number.';
  if (!v.department) e.department = 'Please select a department.';
  return e;
}

/**
 * Enquiry form — same fields as the original enquiry.asp (Name, Email Address,
 * Phone No., Select Department). If VITE_ENQUIRY_ENDPOINT is set it POSTs JSON;
 * otherwise it opens the visitor's e-mail app addressed to the institute.
 */
export default function EnquiryForm({ compact = false }: { compact?: boolean }) {
  const [values, setValues] = useState<Values>({ name: '', email: '', phone: '', department: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [honeypot, setHoneypot] = useState('');

  const set = (k: keyof Values) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (honeypot) return; // bot
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) return;

    if (ENDPOINT) {
      setStatus('sending');
      try {
        const res = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(values) });
        if (!res.ok) throw new Error(String(res.status));
        setStatus('done');
      } catch {
        setStatus('error');
      }
      return;
    }
    const body = `Name: ${values.name}\nEmail Address: ${values.email}\nPhone No.: ${values.phone}\nDepartment: ${values.department}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(`Enquiry - ${values.department}`)}&body=${encodeURIComponent(body)}`;
    setStatus('done');
  }

  const field = 'w-full rounded-xl border bg-white px-4 py-3.5 text-[15px] text-ink outline-none transition placeholder:text-ink-muted/70 focus:border-brand-600 focus:ring-4 focus:ring-brand-100';

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === 'done' ? (
          <motion.div key="done" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center rounded-2xl bg-brand-50 px-6 py-12 text-center">
            <CheckCircle2 className="h-14 w-14 text-brand-600" />
            <p className="mt-4 font-display text-2xl font-semibold text-ink">Thank you, {values.name.split(' ')[0]}!</p>
            <p className="mt-2 max-w-sm text-ink-muted">
              {ENDPOINT ? 'Your enquiry has been submitted.' : 'Your email app should now open with your enquiry — just press send.'}
            </p>
            <button onClick={() => setStatus('idle')} className="mt-6 text-sm font-bold text-brand-600 hover:underline">Send another enquiry</button>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={onSubmit} noValidate initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={cn('grid gap-4', !compact && 'sm:grid-cols-2')}>
            {/* Honeypot (hidden from people) */}
            <input type="text" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} className="hidden" aria-hidden />
            {([
              ['name', 'Name', 'text', 'name'],
              ['email', 'Email Address', 'email', 'email'],
              ['phone', 'Phone No.', 'tel', 'tel'],
            ] as const).map(([k, label, type, ac]) => (
              <label key={k} className={cn('block', k === 'name' && !compact && 'sm:col-span-2')}>
                <span className="mb-1.5 block text-sm font-semibold text-ink">{label}</span>
                <input type={type} autoComplete={ac} value={values[k]} onChange={set(k)} placeholder={label} aria-invalid={!!errors[k]} className={cn(field, errors[k] ? 'border-red-400' : 'border-ink/10')} />
                {errors[k] && <span className="mt-1 block text-xs font-semibold text-red-600">{errors[k]}</span>}
              </label>
            ))}
            <label className={cn('block', !compact && 'sm:col-span-2')}>
              <span className="mb-1.5 block text-sm font-semibold text-ink">Select Department</span>
              <select value={values.department} onChange={set('department')} aria-invalid={!!errors.department} className={cn(field, 'appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%2311803C%27 stroke-width=%272.5%27%3E%3Cpath d=%27m6 9 6 6 6-6%27/%3E%3C/svg%3E")] bg-[length:18px] bg-[right_1rem_center] bg-no-repeat pr-10', errors.department ? 'border-red-400' : 'border-ink/10', !values.department && 'text-ink-muted/80')}>
                <option value="">Select Department</option>
                {enquiryDepartments.map((d) => <option key={d} value={d}>{d}</option>)}
              </select>
              {errors.department && <span className="mt-1 block text-xs font-semibold text-red-600">{errors.department}</span>}
            </label>
            {status === 'error' && (
              <p className={cn('rounded-xl bg-red-50 p-3 text-sm text-red-700', !compact && 'sm:col-span-2')}>
                Something went wrong. Please call {contact.phones.join(' / ')} or email {contact.email}.
              </p>
            )}
            <button type="submit" disabled={status === 'sending'} className={cn('group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-4 text-sm font-bold text-white shadow-[0_10px_30px_-10px_rgba(16,128,60,.8)] transition hover:bg-brand-700 disabled:opacity-70', !compact && 'sm:col-span-2')}>
              {status === 'sending' ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
              Submit
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
