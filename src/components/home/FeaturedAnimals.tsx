'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MotionDiv } from '@/components/shared/MotionDiv';

const featuredAnimals = PlaceHolderImages.filter(p => ['1', '2', '3']);

export function FeaturedAnimals() {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Pets Waiting for a Home</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            These lovely souls are looking for a forever family. Your new best friend might be just a click away.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredAnimals.map((animal, index) => (
            <MotionDiv 
              key={animal.id} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group rounded-2xl shadow-lg h-full flex flex-col">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={animal.imageUrl}
                    alt={animal.description}
                    data-ai-hint={animal.imageHint}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">{animal.description}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground line-clamp-2">
                    Now safe in our care, on the path to recovery and a new home.
                  </p>
                </CardContent>
                <CardFooter className="p-4">
                  <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link href={`/adopt/${animal.id}`}>Learn Their Story</Link>
                  </Button>
                </CardFooter>
              </Card>
            </MotionDiv>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
            <Link href="/adopt">Meet More Animals</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
