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
          <div className="p-8 md:p-16 text-center md:text-left">
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
          <div className="relative h-64 md:h-full w-full">
            {notFoundImage && (
                <div className='relative h-full w-full min-h-[300px]'>
                    <Image
                        src={notFoundImage.imageUrl}
                        alt={notFoundImage.description}
                        data-ai-hint={notFoundImage.imageHint}
                        fill
                        className="object-contain object-bottom"
                    />
                </div>
            )}
             <div className="absolute top-1/4 left-1/4 md:top-10 md:left-10 transform -translate-x-1/2 -translate-y-1/2">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 md:w-32 md:h-32 text-foreground">
                    <path d="M21.5 24C41.5 9 78.5 10.5 91 30.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M91 30.5L84 19.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M91 30.5L78.5 35" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
