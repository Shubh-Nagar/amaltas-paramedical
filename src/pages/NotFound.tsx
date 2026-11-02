import PageHeader from '@/components/layout/PageHeader';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <>
      <PageHeader title="Page not found" />
      <section className="py-24 text-center">
        <p className="font-display text-7xl font-semibold text-brand-100">404</p>
        <p className="mt-4 text-ink-muted">The page you are looking for does not exist or has moved.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Button to="/" variant="green">Home</Button>
          <Button to="/courses" variant="outline">Courses Offered</Button>
        </div>
      </section>
    </>
  );
}
