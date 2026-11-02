import { ArrowRight, Download } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import CourseCard from '@/components/CourseCard';
import Reveal from '@/components/ui/Reveal';
import Img from '@/components/ui/Img';
import Button from '@/components/ui/Button';
import { courseLevels } from '@/data/courses';
import { homeIntro } from '@/data/home';
import { institute } from '@/data/site';

type Props = { showFees?: boolean };

/**
 * Courses Offered (courses.asp). With `showFees` it becomes the
 * Admissions & Fees page (fees.asp), which lists the same courses plus fees.
 */
export default function Courses({ showFees = false }: Props) {
  return (
    <>
      <PageHeader
        title={showFees ? 'Fees' : 'Courses Offered'}
        docTitle={showFees ? 'Admissions & Fees' : 'Courses Offered'}
        crumbs={showFees ? [{ label: 'Academic', to: '/admission-criteria' }] : []}
      >
        {!showFees && homeIntro.body}
      </PageHeader>

      <section className="py-16 sm:py-24">
        <div className="container space-y-20">
          {courseLevels.map((level) => (
            <div key={level.key} id={level.key} className="scroll-mt-28">
              <Reveal className="mb-8 flex items-center gap-5">
                <Img src={level.image} alt={level.title} wrapperClassName="h-16 w-24 shrink-0 overflow-hidden rounded-xl" className="h-full w-full object-cover" />
                <div>
                  <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">{level.title}</h2>
                  <div className="mt-2 h-1 w-16 rounded-full bg-gold-300" />
                </div>
              </Reveal>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {level.courses.map((c, i) => (
                  <CourseCard key={c.name + c.code} course={c} index={i} showFee={showFees} levelLabel={level.title.replace(' Courses', '')} />
                ))}
              </div>
            </div>
          ))}

          <Reveal className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-white p-8 shadow-card ring-1 ring-ink/5 md:flex-row md:items-center">
            <p className="max-w-xl font-display text-2xl font-semibold text-ink">{showFees ? 'Admission Criteria' : 'Admissions & Fees'}</p>
            <div className="flex flex-wrap gap-3">
              <Button to={showFees ? '/admission-criteria' : '/fees'} variant="green">
                {showFees ? 'Admission Criteria' : 'Admissions & Fees'} <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to={institute.brochure} file variant="outline"><Download className="h-4 w-4" /> Brochure</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
