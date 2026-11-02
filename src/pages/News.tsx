import PageHeader from '@/components/layout/PageHeader';
import PhotoGrid from '@/components/ui/PhotoGrid';
import { newsClippings } from '@/data/media';

/** News Release (news.asp) — press clippings. */
export default function News() {
  return (
    <>
      <PageHeader title="News Release" docTitle="News" />
      <section className="py-16 sm:py-24">
        <div className="container">
          <PhotoGrid images={newsClippings} caption="News Release" altPrefix="News clipping" />
        </div>
      </section>
    </>
  );
}
