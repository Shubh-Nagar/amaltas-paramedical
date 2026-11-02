import PageHeader from '@/components/layout/PageHeader';
import CommitteeTable from '@/components/ui/CommitteeTable';
import { grievanceCommittee } from '@/data/committees';

/** Student Grievance Committee (student_grievance_committee.asp). */
export default function StudentGrievance() {
  return (
    <>
      <PageHeader title="Student Grievance Committee" crumbs={[{ label: 'Anti-Ragging Measures', to: '/anti-ragging' }]} />
      <section className="py-16 sm:py-24">
        <div className="container">
          <CommitteeTable committee={grievanceCommittee} />
        </div>
      </section>
    </>
  );
}
