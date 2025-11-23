
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
import { HeroCarousel } from '@/components/home/HeroCarousel';

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1">
        <HeroCarousel />

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
