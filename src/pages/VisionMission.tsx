import { motion } from 'framer-motion';
import { Compass, Eye } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import Reveal from '@/components/ui/Reveal';
import { visionMission as vm } from '@/data/about';

/** Vision & Mission (vision.asp), led by the Sanskrit shloka from the original page. */
export default function VisionMission() {
  return (
    <>
      <PageHeader title="Vision and Mission" docTitle="Vision & Mission" crumbs={[{ label: 'About Us', to: '/about' }]} />
      <section className="py-16 sm:py-24">
        <div className="container">
          <Reveal className="mx-auto max-w-4xl rounded-[2rem] bg-gold-50 px-6 py-12 text-center ring-1 ring-gold-200 sm:px-14">
            <p className="font-deva text-2xl leading-relaxed text-brand-600 sm:text-3xl">{vm.shloka}</p>
            <p className="mt-6 font-display text-lg italic text-ink sm:text-xl">{vm.english}</p>
            <p className="mt-3 font-deva text-base text-ink-soft sm:text-lg">{vm.hindi}</p>
          </Reveal>

          <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.3fr]">
            <Reveal className="relative overflow-hidden rounded-3xl bg-brand-600 p-8 text-white shadow-lift sm:p-10">
              <Eye className="h-10 w-10 text-gold-300" strokeWidth={1.5} />
              <h2 className="mt-6 font-display text-3xl font-semibold">VISION</h2>
              <p className="mt-4 text-lg leading-relaxed text-white/85">{vm.vision}</p>
              <span className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-gold-300/10" />
            </Reveal>
            <Reveal delay={0.1} className="rounded-3xl bg-white p-8 shadow-card ring-1 ring-ink/5 sm:p-10">
              <Compass className="h-10 w-10 text-brand-600" strokeWidth={1.5} />
              <h2 className="mt-6 font-display text-3xl font-semibold text-ink">MISSION</h2>
              <ol className="mt-6 space-y-4">
                {vm.mission.map((m, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex gap-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-300 text-sm font-bold text-ink">{i + 1}</span>
                    <span className="pt-1 leading-relaxed text-ink-soft">{m}</span>
                  </motion.li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
