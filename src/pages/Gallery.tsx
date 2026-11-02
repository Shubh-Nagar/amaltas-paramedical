import PageHeader from '@/components/layout/PageHeader';
import PhotoGrid from '@/components/ui/PhotoGrid';
import { photoGallery } from '@/data/media';

/** Photo Gallery (photogallery.asp). */
export default function Gallery() {
  return (
    <>
      <PageHeader title="Photo Gallery" docTitle="Gallery" />
      <section className="py-16 sm:py-24">
        <div className="container">
          <PhotoGrid images={photoGallery} caption="Photo Gallery" altPrefix="Gallery photo" />
        </div>
      </section>
    </>
  );
}
