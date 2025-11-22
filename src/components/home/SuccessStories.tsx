'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MotionDiv } from '@/components/shared/MotionDiv';
import type { SuccessStory } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Calendar, PawPrint, User } from 'lucide-react';
import { Badge } from '../ui/badge';
import { format } from 'date-fns';

const stories: SuccessStory[] = [
    {
      id: 'story1',
      slug: 'charlie-finds-his-forever-family',
      title: 'Charlie Finds His Forever Family',
      story: "Charlie arrived at our shelter as a timid stray, scared of his own shadow. With patience and love from our volunteers, he slowly came out of his shell. Today, Charlie is the heart of his new family, spending his days playing fetch and getting endless cuddles. His journey is a beautiful reminder of the power of a second chance.",
      imageUrl: PlaceHolderImages.find(p => p.id === 'story1')?.imageUrl || '',
      imageHint: PlaceHolderImages.find(p => p.id === 'story1')?.imageHint || '',
      author: 'Admin',
      date: new Date('2024-05-15T10:00:00Z'),
      tags: ['Adoption', 'Dog'],
    },
    {
      id: 'story2',
      slug: 'mittens-brings-joy-to-a-senior',
      title: 'Mittens Brings Joy to a Senior',
      story: "When Mittens, a senior cat, was surrendered to us, we worried she'd be overlooked. But it was love at first sight when an elderly gentleman came looking for a quiet companion. Now, Mittens and her new owner are inseparable, bringing each other comfort and joy every day.",
      imageUrl: PlaceHolderImages.find(p => p.id === 'story2')?.imageUrl || '',
      imageHint: PlaceHolderImages.find(p => p.id === 'story2')?.imageHint || '',
      author: 'Admin',
      date: new Date('2024-05-12T14:30:00Z'),
      tags: ['Senior', 'Cat'],
    },
    {
      id: 'story3',
      slug: 'a-playful-start-for-pip',
      title: 'A Playful Start for Pip',
      story: "Found alone as a tiny kitten, Pip was bottle-fed by our dedicated team. He grew into a bundle of energy and mischief. He was quickly adopted by a family with children, where he now has endless playmates and a life full of fun and adventure. From a fragile beginning to a happy home, Pip's story is one of true resilience.",
      imageUrl: PlaceHolderImages.find(p => p.id === 'story3')?.imageUrl || '',
      imageHint: PlaceHolderImages.find(p => p.id === 'story3')?.imageHint || '',
      author: 'Admin',
      date: new Date('2024-05-10T09:00:00Z'),
      tags: ['Rescue', 'Kitten'],
    },
  ];

export function SuccessStories() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <div className="flex items-center gap-2 text-primary mb-2">
                <h3 className="font-bold uppercase tracking-wider text-sm">News & Blogs</h3>
                <PawPrint className="h-5 w-5"/>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Recent Articles</h2>
          </div>
          <Button asChild variant="ghost" className="hidden sm:inline-flex">
            <Link href="/success-stories">
              See All Posts <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <MotionDiv 
              key={story.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-visible shadow-none border-none bg-transparent group">
                <CardHeader className="p-0">
                  <div className="relative w-full aspect-[4/3] p-3">
                    <div className="absolute inset-0 bg-dashed-border group-hover:animate-dashed-border"></div>
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                       <Image
                        src={story.imageUrl}
                        alt={story.title}
                        data-ai-hint={story.imageHint}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute bottom-2 left-2 flex gap-2">
                        {story.tags?.map(tag => (
                          <Badge key={tag} variant="default" className="bg-primary/80 backdrop-blur-sm">{tag}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                   <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4"/>
                        <span>By {story.author}</span>
                      </div>
                       <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4"/>
                        <span>{format(story.date!, 'dd LLL, yyyy')}</span>
                      </div>
                   </div>
                  <CardTitle className="text-xl font-headline leading-tight group-hover:text-primary transition-colors">
                     <Link href={`/success-stories/${story.slug}`}>
                      {story.title}
                    </Link>
                  </CardTitle>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>
        <div className="text-center mt-12 sm:hidden">
            <Button asChild size="lg">
                <Link href="/success-stories">View More Stories</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
