import { ArrowRight } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import Reveal from '@/components/ui/Reveal';
import Img from '@/components/ui/Img';
import Button from '@/components/ui/Button';
import { placement } from '@/data/academics';

/** Placement (placement.asp). */
export default function Placement() {
  return (
    <>
      <PageHeader title={placement.title} />
      <section className="py-16 sm:py-24">
        <div className="container">
          <Reveal className="mx-auto flex max-w-4xl flex-col items-center rounded-[2rem] bg-white p-10 text-center shadow-card ring-1 ring-ink/5 sm:p-14">
            <Img src={placement.icon} alt="" wrapperClassName="h-20 w-20 rounded-2xl !bg-gold-50" className="h-full w-full object-contain p-3" />
            <p className="mt-8 font-display text-2xl leading-relaxed text-ink sm:text-3xl">{placement.text}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button to="/courses" variant="green">Courses Offered <ArrowRight className="h-4 w-4" /></Button>
              <Button to="/enquiry" variant="outline">Enquiry</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
