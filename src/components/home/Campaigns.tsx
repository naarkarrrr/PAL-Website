'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PawPrint, RefreshCcw, Target } from 'lucide-react';
import Link from 'next/link';

const campaigns = [
  {
    title: 'Emergency Surgery Fund',
    description: 'Contribute to our fund for life-saving emergency surgeries.',
    raised: 8200,
    goal: 15000,
    image: PlaceHolderImages.find((p) => p.id === 'sterilization_header'),
  },
  {
    title: 'Homeless Street Cat',
    description: 'Funding medical care and food for a recently rescued street cat.',
    raised: 1350,
    goal: 1500,
    image: PlaceHolderImages.find((p) => p.id === 'donate_card'),
  },
  {
    title: 'Puppy Vaccination Drive',
    description: 'Help us vaccinate a litter of puppies against deadly diseases.',
    raised: 450,
    goal: 1000,
    image: PlaceHolderImages.find((p) => p.id === 'why_choose_us'),
  },
];

export function Campaigns() {
  return (
    <section className="py-16 md:py-24 bg-primary/5">
       <div className="container mx-auto px-4">
        <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="relative">
                    <Carousel
                        opts={{
                        align: 'start',
                        loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                        {campaigns.map((campaign, index) => {
                            const progress = (campaign.raised / campaign.goal) * 100;
                            return (
                            <CarouselItem key={index}>
                                <div className='flex flex-col gap-6'>
                                    <h4 className="text-3xl font-bold font-headline text-accent">
                                        {campaign.title}
                                    </h4>
                                    <p className="text-muted-foreground">
                                        {campaign.description}
                                    </p>
                                    <div className="relative pt-4">
                                        <Progress value={progress} className="h-2 bg-secondary" />
                                        <div
                                            className="absolute -top-1 text-xs font-bold text-primary-foreground bg-primary px-2 py-0.5 rounded-full"
                                            style={{ left: `calc(${Math.min(progress, 95)}% - 10px)` }}
                                        >
                                            {Math.round(progress)}%
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center text-sm">
                                        <div className="flex items-center gap-2">
                                            <div className="p-2 bg-primary/10 rounded-full text-primary">
                                                <RefreshCcw className="h-4 w-4" />
                                            </div>
                                            <div>
                                                <span className="text-muted-foreground text-xs">Raised:</span>
                                                <p className="font-bold text-base">₹{campaign.raised.toLocaleString()}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="p-2 bg-primary/10 rounded-full text-primary">
                                                <Target className="h-4 w-4" />
                                            </div>
                                            <div className="text-right">
                                                <span className="text-muted-foreground text-xs">Goal:</span>
                                                <p className="font-bold text-base">₹{campaign.goal.toLocaleString()}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <Button asChild className="w-full" size="lg">
                                        <Link href="/donate">Donate Now</Link>
                                    </Button>
                                </div>
                            </CarouselItem>
                            );
                        })}
                        </CarouselContent>
                        <CarouselPrevious className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2" />
                        <CarouselNext className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2" />
                    </Carousel>
                </div>
                <div className="relative h-80 md:h-[400px] w-full rounded-xl overflow-hidden shadow-md hidden md:block">
                     {campaigns[0].image && (
                        <Image
                            src={campaigns[0].image.imageUrl}
                            alt={campaigns[0].image.description}
                            data-ai-hint={campaigns[0].image.imageHint}
                            fill
                            className="object-cover"
                        />
                    )}
                </div>
            </div>
        </div>
       </div>
    </section>
  );
}