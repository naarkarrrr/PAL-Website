import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MotionDiv } from '@/components/shared/MotionDiv';
import { StatsCounter } from '@/components/shared/StatsCounter';
import { FeaturedAnimals } from '@/components/home/FeaturedAnimals';
import { WhatWeDo } from '@/components/home/WhatWeDo';
import { SuccessStories } from '@/components/home/SuccessStories';
import { HowYouCanHelp } from '@/components/home/HowYouCanHelp';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { Campaigns } from '@/components/home/Campaigns';
import { Button } from '@/components/ui/button';
import { RotatingText } from '@/components/home/RotatingText';

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center text-center">
          {heroImage && (
            <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                data-ai-hint={heroImage.imageHint}
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
            <h1 className="text-4xl md:text-6xl font-bold mt-4">Give a Paw a Chance</h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
              We are a non-profit organization dedicated to rescuing, rehabilitating, and rehoming animals in need.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/adopt">Adopt Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className='bg-transparent text-white'>
                <Link href="/donate">Donate</Link>
              </Button>
            </div>
          </MotionDiv>
        </section>

        <StatsCounter />
        <WhyChooseUs />
        <FeaturedAnimals />
        <WhatWeDo />
        <Campaigns />
        <HowYouCanHelp />
        <SuccessStories />
      </main>
    </div>
  );
}