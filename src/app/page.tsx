
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
  const imageCluster = [
    PlaceHolderImages.find(p => p.id === 'gallery1'),
    PlaceHolderImages.find(p => p.id === 'gallery2'),
    PlaceHolderImages.find(p => p.id === 'gallery3'),
    PlaceHolderImages.find(p => p.id === 'gallery4'),
  ].filter(Boolean);


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1">
        <HeroCarousel />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
          {imageCluster.map(img => (
            img && <Image key={img.id} className="rounded-xl shadow-lg w-full h-full object-cover" src={img.imageUrl} alt={img.description} width={400} height={400} data-ai-hint={img.imageHint} />
          ))}
        </div>

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
