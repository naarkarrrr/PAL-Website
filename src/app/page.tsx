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

const heroImage = PlaceHolderImages.find(p => p.id === 'hero');

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-primary/30">
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
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/ambulance">Request Ambulance</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
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

        {/* How You Can Help Section */}
        <HowYouCanHelp />

        {/* What We Do Section */}
        <WhatWeDo />
        
        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Featured Animals Section */}
        <FeaturedAnimals />

        {/* Success Story Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <MotionDiv 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl"
              >
                <Image
                  src={PlaceHolderImages.find(p => p.id === 'story1')?.imageUrl || ''}
                  alt={PlaceHolderImages.find(p => p.id === 'story1')?.description || ''}
                  data-ai-hint={PlaceHolderImages.find(p => p.id === 'story1')?.imageHint || ''}
                  fill
                  className="object-cover"
                />
              </MotionDiv>
              <MotionDiv 
                initial={{ opacity: 0, x: 50 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true, amount: 0.5 }} 
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">A Happy Tail to Tell</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Read about Charlie's journey from a shy stray to a cherished family member. Success stories like this are made possible by your support.
                </p>
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/success-stories">More Success Stories</Link>
                </Button>
              </MotionDiv>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
