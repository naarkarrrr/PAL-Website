import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  const notFoundImage = PlaceHolderImages.find(p => p.id === 'not-found-cat');

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted/40 p-4">
      <div className="relative w-full max-w-4xl bg-card rounded-2xl shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 items-center">
          <div className="p-8 md:p-16 text-center md:text-left z-10 order-2 md:order-1">
            <h1 className="text-5xl md:text-6xl font-bold font-headline leading-tight">This Cat is shocked</h1>
            <div className="flex items-center gap-4 mt-4 justify-center md:justify-start">
              <div className="h-0.5 w-12 bg-accent" />
              <p className="text-lg text-muted-foreground">This page no longer exists</p>
            </div>
            <Button asChild size="lg" className="mt-8">
              <Link href="/">
                Back to Home <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="relative h-64 md:h-full w-full order-1 md:order-2">
            {notFoundImage && (
                <div className='relative h-full w-full min-h-[300px] md:min-h-[450px]'>
                    <Image
                        src={notFoundImage.imageUrl}
                        alt={notFoundImage.description}
                        data-ai-hint={notFoundImage.imageHint}
                        fill
                        className="object-contain object-bottom"
                    />
                </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
