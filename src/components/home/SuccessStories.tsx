'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MotionDiv } from '@/components/shared/MotionDiv';
import type { SuccessStory } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const stories: SuccessStory[] = [
    {
      id: 'story1',
      title: 'Charlie Finds His Forever Family',
      story: "Charlie arrived at our shelter as a timid stray, scared of his own shadow. With patience and love from our volunteers, he slowly came out of his shell. Today, Charlie is the heart of his new family, spending his days playing fetch and getting endless cuddles. His journey is a beautiful reminder of the power of a second chance.",
      imageUrl: PlaceHolderImages.find(p => p.id === 'story1')?.imageUrl || '',
      imageHint: PlaceHolderImages.find(p => p.id === 'story1')?.imageHint || '',
    },
    {
      id: 'story2',
      title: 'Mittens Brings Joy to a Senior',
      story: "When Mittens, a senior cat, was surrendered to us, we worried she'd be overlooked. But it was love at first sight when an elderly gentleman came looking for a quiet companion. Now, Mittens and her new owner are inseparable, bringing each other comfort and joy every day.",
      imageUrl: PlaceHolderImages.find(p => p.id === 'story2')?.imageUrl || '',
      imageHint: PlaceHolderImages.find(p => p.id === 'story2')?.imageHint || '',
    },
    {
      id: 'story3',
      title: 'A Playful Start for Pip',
      story: "Found alone as a tiny kitten, Pip was bottle-fed by our dedicated team. He grew into a bundle of energy and mischief. He was quickly adopted by a family with children, where he now has endless playmates and a life full of fun and adventure. From a fragile beginning to a happy home, Pip's story is one of true resilience.",
      imageUrl: PlaceHolderImages.find(p => p.id === 'story3')?.imageUrl || '',
      imageHint: PlaceHolderImages.find(p => p.id === 'story3')?.imageHint || '',
    },
  ];

export function SuccessStories() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">Happy Tails & New Beginnings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <MotionDiv 
              key={story.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden shadow-lg border hover:shadow-xl transition-shadow">
                <div className="relative w-full h-56">
                  <Image
                    src={story.imageUrl}
                    alt={story.title}
                    data-ai-hint={story.imageHint}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{story.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3">{story.story}</p>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>
        <div className="text-center mt-12">
            <Button asChild size="lg">
                <Link href="/success-stories">View More Stories</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}