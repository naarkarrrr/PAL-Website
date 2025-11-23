
'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MotionDiv } from '../shared/MotionDiv';
import { RotatingText } from './RotatingText';

const heroSlides = [
  {
    id: 'hero-1',
    image: PlaceHolderImages.find((p) => p.id === 'hero'),
    title: 'Give a Paw a Chance',
    subtitle: 'We are a non-profit organization dedicated to rescuing, rehabilitating, and rehoming animals in need.',
  },
  {
    id: 'hero-2',
    image: PlaceHolderImages.find((p) => p.id === 'story1'),
    title: 'Your New Best Friend Awaits',
    subtitle: 'Open your heart and home. Adopt a loyal companion today.',
  },
  {
    id: 'hero-3',
    image: PlaceHolderImages.find((p) => p.id === 'gallery5'),
    title: 'Volunteer With Us',
    subtitle: 'Join our team of passionate animal lovers and make a direct impact.',
  },
];

export function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="relative h-[80vh] w-full">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="h-full">
          {heroSlides.map((slide) => (
            <CarouselItem key={slide.id} className="h-full">
              <div className="relative h-full w-full flex items-center justify-center text-center">
                {slide.image && (
                  <Image
                    src={slide.image.imageUrl}
                    alt={slide.image.description}
                    data-ai-hint={slide.image.imageHint}
                    fill
                    className="object-cover"
                    priority
                  />
                )}
                <div className="absolute inset-0 bg-black/60" />
                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="z-10 text-white container mx-auto px-4"
                >
                  <div className="flex justify-center items-center">
                    <RotatingText />
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold mt-4">
                    {slide.title}
                  </h1>
                  <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
                    {slide.subtitle}
                  </p>
                  <div className="mt-8 flex justify-center gap-4">
                    <Button asChild size="lg">
                      <Link href="/adopt">Adopt Now</Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="bg-transparent text-white"
                    >
                      <Link href="/donate">Donate</Link>
                    </Button>
                  </div>
                </MotionDiv>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex" />
      </Carousel>
    </section>
  );
}
