
import Image from 'next/image';
import { PageHeader } from '@/components/shared/PageHeader';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MotionDiv } from '@/components/shared/MotionDiv';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';

export default function GalleryPage() {
  const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery'));

  return (
    <div>
      <PageHeader
        title="Our Gallery"
        subtitle="A glimpse into our daily work, the lives we've touched, and the happy faces we help create."
      />
      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs
            segments={[
                { title: 'Home', href: '/' },
                { title: 'Media', href: '/media' },
                { title: 'Gallery', href: '/gallery' },
            ]}
        />
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          {galleryImages.map((image, index) => (
            <MotionDiv
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
            >
              <Image
                alt={image.description}
                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                style={{ transform: 'translate3d(0, 0, 0)' }}
                src={image.imageUrl}
                data-ai-hint={image.imageHint}
                width={720}
                height={480}
                sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
              />
            </MotionDiv>
          ))}
        </div>
      </div>
    </div>
  );
}
