'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MotionDiv } from '@/components/shared/MotionDiv';
import { ArrowRight, PawPrint } from 'lucide-react';

const featuredAnimals = PlaceHolderImages.filter(p => ['1', '2', '3'].includes(p.id));

export function FeaturedAnimals() {
  return (
    <section className="py-16 md:py-24 bg-primary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">Meet Our Animals</h2>
        <div className="text-center bg-card border border-dashed rounded-xl p-8">
            <PawPrint className="mx-auto h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold font-headline mb-2">Adoption Section Coming Soon!</h3>
            <p className="text-muted-foreground max-w-lg mx-auto">We're getting our gallery ready to introduce you to some amazing animals looking for their forever homes. Please check back soon to meet them!</p>
        </div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredAnimals.map((animal, index) => (
            <MotionDiv 
              key={animal.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group rounded-xl shadow-lg h-full flex flex-col">
                <div className="relative aspect-square">
                  <Image
                    src={animal.imageUrl}
                    alt={animal.description}
                    data-ai-hint={animal.imageHint}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                   <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <CardTitle className="text-white font-headline text-2xl">{animal.description}</CardTitle>
                  </div>
                </div>
                <CardContent className="p-4 flex-grow">
                  <p className="text-muted-foreground text-sm">
                    Now safe in our care, on the path to recovery and a new home.
                  </p>
                </CardContent>
                <CardFooter className="p-4 pt-0 mt-auto">
                  <Button asChild className="w-full">
                    <Link href={`/adopt/${animal.id}`}>Learn Their Story</Link>
                  </Button>
                </CardFooter>
              </Card>
            </MotionDiv>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link href="/adopt">
              Meet More Animals <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div> */}
      </div>
    </section>
  );
}
