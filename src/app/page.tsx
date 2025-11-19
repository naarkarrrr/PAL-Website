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

const heroImage = PlaceHolderImages.find(p => p.id === 'hero');

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-primary/10">
          <div className="container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 items-center gap-12">
            <MotionDiv 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
                Rescue • Rehabilitate • Restart Lives
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
                className="relative hidden md:flex w-full h-96"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
               <Image
                  src={heroImage?.imageUrl || ''}
                  alt={heroImage?.description || ''}
                  data-ai-hint={heroImage?.imageHint}
                  fill
                  className="object-cover rounded-xl shadow-2xl"
                  priority
                />
            </MotionDiv>
          </div>
        </section>

        {/* Stats Counter Section */}
        <StatsCounter />

        {/* How You Can Help Section */}
        <HowYouCanHelp />

        {/* What We Do Section */}
        <WhatWeDo />
        
        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Featured Animals Section */}
        <FeaturedAnimals />

        {/* Success Story Section */}
        <SuccessStories />

      </main>
    </div>
  );
}
