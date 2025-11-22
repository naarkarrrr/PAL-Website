
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
import { Card } from '../ui/card';
import { ArrowLeft, ArrowRight, PawPrint } from 'lucide-react';
import Link from 'next/link';

const campaigns = [
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
  {
    title: 'Emergency Surgery Fund',
    description: 'Contribute to our fund for life-saving emergency surgeries.',
    raised: 8200,
    goal: 15000,
    image: PlaceHolderImages.find((p) => p.id === 'sterilization_header'),
  },
];

export function Campaigns() {
  return (
    <section className="py-16 md:py-24 bg-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
          {/* You can add a subtle background pattern here if you want */}
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center bg-card p-8 md:p-12 rounded-2xl shadow-lg">
          <div>
            <div className="flex items-center gap-2 text-primary mb-2">
              <PawPrint className="h-5 w-5" />
              <h3 className="font-bold uppercase tracking-wider">Campaigns</h3>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
              Join Our Lifesaving Missions
            </h2>
            <p className="text-muted-foreground mb-8">
              Encouraging hands and hearts to rewrite the fate of countless street animals. Your contribution can make all the difference.
            </p>
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
                      <div className="p-1">
                        <Card className="border-none shadow-none">
                            <h4 className="text-xl font-bold font-headline text-accent mb-2">
                                {campaign.title}
                            </h4>
                            <p className="text-sm text-muted-foreground mb-4">
                                {campaign.description}
                            </p>
                            <div className="relative mb-4 pt-4">
                                <Progress value={progress} className="h-2" />
                                <div
                                    className="absolute -top-1 text-xs font-bold text-primary-foreground bg-primary px-2 py-0.5 rounded-full"
                                    style={{ left: `calc(${Math.min(progress, 95)}%)` }}
                                >
                                    {Math.round(progress)}%
                                </div>
                            </div>

                            <div className="flex justify-between items-center text-sm mb-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full border-2 border-muted flex items-center justify-center">
                                       <ArrowLeft className="w-3 h-3 text-muted-foreground" />
                                    </div>
                                    <div>
                                        <span className="text-muted-foreground text-xs">Raised:</span>
                                        <p className="font-bold text-base">₹{campaign.raised.toLocaleString()}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-right">
                                     <div>
                                        <span className="text-muted-foreground text-xs">Goal:</span>
                                        <p className="font-bold text-base">₹{campaign.goal.toLocaleString()}</p>
                                    </div>
                                    <div className="w-6 h-6 rounded-full border-2 border-muted flex items-center justify-center">
                                       <ArrowRight className="w-3 h-3 text-muted-foreground" />
                                    </div>
                                </div>
                            </div>
                            <Button asChild className="w-full" size="lg">
                                <Link href="/donate">Donate Now</Link>
                            </Button>
                        </Card>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2" />
              <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2" />
            </Carousel>
          </div>
           <div className="relative h-80 md:h-[450px] w-full rounded-xl overflow-hidden shadow-md">
            <Image
                src={PlaceHolderImages.find((p) => p.id === 'donate_card')?.imageUrl || ''}
                alt="Campaign image"
                data-ai-hint="officer dog"
                fill
                className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
