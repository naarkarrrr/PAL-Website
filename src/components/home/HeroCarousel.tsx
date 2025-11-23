'use client';

import React from 'react';
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

const carouselSlides = [
  {
    id: 'hero1',
    image: PlaceHolderImages.find(p => p.id === 'hero'),
    title: 'Give a Paw a Chance',
    description: 'Join us in our mission to rescue, rehabilitate, and rehome animals in need.',
    cta: {
      text: 'Donate Now',
      href: '/donate'
    }
  },
  {
    id: 'hero2',
    image: PlaceHolderImages.find(p => p.id === 'story1'),
    title: 'Find Your Forever Friend',
    description: 'Open your heart and home to a loyal companion. See our adoptable pets.',
    cta: {
      text: 'Adopt a Pet',
      href: '/adopt'
    }
  },
  {
    id: 'hero3',
    image: PlaceHolderImages.find(p => p.id === 'volunteer_header'),
    title: 'Be a Hero. Volunteer.',
    description: 'Your time and skills can change an animal\'s life. Join our passionate team.',
    cta: {
      text: 'Join Us',
      href: '/volunteer'
    }
  },
];

export function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {carouselSlides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative w-full h-full">
                {slide.image && (
                  <Image
                    src={slide.image.imageUrl}
                    alt={slide.title}
                    data-ai-hint={slide.image.imageHint}
                    fill
                    className="object-cover"
                    priority
                  />
                )}
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <MotionDiv 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="container mx-auto px-4 text-center text-white"
                  >
                    <h1 className="text-4xl md:text-6xl font-bold">{slide.title}</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
                      {slide.description}
                    </p>
                    <Button asChild size="lg" className="mt-8 rounded-full text-lg py-7 px-10">
                      <Link href={slide.cta.href}>{slide.cta.text}</Link>
                    </Button>
                  </MotionDiv>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-white/20 hover:bg-white/40 border-none" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-white/20 hover:bg-white/40 border-none" />
      </Carousel>
    </section>
  );
}
