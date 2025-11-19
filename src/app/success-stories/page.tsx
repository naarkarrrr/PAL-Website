import Image from 'next/image';
import { PageHeader } from "@/components/shared/PageHeader";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { SuccessStory } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MotionDiv } from '@/components/shared/MotionDiv';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';

async function getSuccessStories(): Promise<SuccessStory[]> {
  // Mock data
  return [
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
}


export default async function SuccessStoriesPage() {
  const stories = await getSuccessStories();
  const headerImage = PlaceHolderImages.find(p => p.id === 'story1');

  return (
    <div>
      <PageHeader
        title="Happy Tails & New Beginnings"
        subtitle="Read the heartwarming stories of animals who found their forever homes through PAL Foundation."
        imageUrl={headerImage?.imageUrl}
        imageHint={headerImage?.imageHint}
        imageAlt={headerImage?.description}
      />
       <div className="container mx-auto px-4 py-4">
          <Breadcrumbs
              segments={[
                  { title: 'Home', href: '/' },
                  { title: 'Who We Are', href: '/our-story' },
                  { title: 'Success Stories', href: '/success-stories' },
              ]}
          />
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <MotionDiv 
              key={story.id} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
                  <p className="text-muted-foreground">{story.story}</p>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </div>
    </div>
  );
}
