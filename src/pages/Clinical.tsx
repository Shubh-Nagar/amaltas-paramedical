import PageHeader from '@/components/layout/PageHeader';
import PhotoGrid from '@/components/ui/PhotoGrid';
import { clinicalImages } from '@/data/infrastructure';

/** Clinical Departments (clinical.asp) — photo gallery. */
export default function Clinical() {
  return (
    <>
      <PageHeader title="Clinical Departments" crumbs={[{ label: 'Infrastructure', to: '/infrastructure' }]} />
      <section className="py-16 sm:py-24">
        <div className="container">
          <PhotoGrid images={clinicalImages} caption="Clinical Departments" altPrefix="Clinical department photo" />
        </div>
      </section>
    </>
  );
}
