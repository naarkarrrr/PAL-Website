import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MotionDiv } from '@/components/shared/MotionDiv';
import { StatsCounter } from '@/components/shared/StatsCounter';
import { HowYouCanHelp } from '@/components/home/HowYouCanHelp';
import { FeaturedAnimals } from '@/components/home/FeaturedAnimals';
import { WhatWeDo } from '@/components/home/WhatWeDo';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { SuccessStories } from '@/components/home/SuccessStories';
import { RotatingText } from '@/components/home/RotatingText';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero');

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full bg-primary/10 overflow-hidden">
          <div className="container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 items-center gap-12 relative z-10">
            <MotionDiv 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
                Giving Animals a Second Chance
              </h1>
              <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto md:mx-0 text-muted-foreground">
                PAL Foundation is a non-profit organization dedicated to animal welfare, providing rescue, medical care, and a safe haven for animals in need.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <Button asChild size="lg">
                  <Link href="/ambulance">Request Ambulance</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/donate">Donate Now</Link>
                </Button>
              </div>
            </MotionDiv>
             <MotionDiv 
                className="relative hidden md:flex justify-center items-center w-full h-[500px]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
               <div className="absolute bg-pink-200 rounded-full w-96 h-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
               <Image
                  src={heroImage?.imageUrl || ''}
                  alt={heroImage?.description || ''}
                  data-ai-hint={heroImage?.imageHint}
                  width={500}
                  height={500}
                  className="object-contain z-10"
                  priority
                />
                <div className="absolute top-20 right-0 z-20">
                    <RotatingText />
                </div>
            </MotionDiv>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Stats Counter Section */}
        <StatsCounter />

        {/* How You Can Help Section */}
        <HowYouCanHelp />

        {/* What We Do Section */}
        <WhatWeDo />
        
        {/* Featured Animals Section */}
        <FeaturedAnimals />

        {/* Success Story Section */}
        <SuccessStories />

      </main>
    </div>
  );
}
