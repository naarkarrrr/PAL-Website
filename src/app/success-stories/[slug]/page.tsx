import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { SuccessStory } from '@/lib/types';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Calendar, User } from 'lucide-react';
import { format } from 'date-fns';

const storiesData: SuccessStory[] = [
    {
      id: 'story1',
      slug: 'charlie-finds-his-forever-family',
      title: 'Charlie Finds His Forever Family',
      story: "Charlie arrived at our shelter as a timid stray, scared of his own shadow. With patience and love from our volunteers, he slowly came out of his shell. Today, Charlie is the heart of his new family, spending his days playing fetch and getting endless cuddles. His journey is a beautiful reminder of the power of a second chance.",
      imageUrl: PlaceHolderImages.find(p => p.id === 'story1')?.imageUrl || '',
      imageHint: PlaceHolderImages.find(p => p.id === 'story1')?.imageHint || '',
      author: 'Admin',
      date: new Date(),
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
      date: new Date(),
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
      date: new Date(),
      tags: ['Rescue', 'Kitten'],
    },
];

async function getStoryBySlug(slug: string): Promise<SuccessStory | null> {
  const story = storiesData.find(s => s.slug === slug);
  return story || null;
}

export default async function StoryDetailPage({ params }: { params: { slug: string } }) {
  const story = await getStoryBySlug(params.slug);

  if (!story) {
    return <div className="text-center py-20">Story not found.</div>;
  }

  return (
    <div>
        <div className="relative w-full h-96">
            <Image
                src={story.imageUrl}
                alt={story.title}
                data-ai-hint={story.imageHint}
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto max-w-3xl -mt-20 relative z-10 px-4">
             <div className="bg-card p-8 rounded-xl shadow-lg">
                <div className="mb-4">
                    <Breadcrumbs
                        segments={[
                            { title: 'Home', href: '/' },
                            { title: 'Success Stories', href: '/success-stories' },
                            { title: story.title, href: `/success-stories/${story.slug}` },
                        ]}
                    />
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                    {story.tags?.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                </div>
                <h1 className="text-4xl font-bold font-headline mb-4">{story.title}</h1>
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
                    <div className="flex items-center gap-2">
                        <User className="h-4 w-4"/>
                        <span>By {story.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4"/>
                        <span>{format(story.date!, 'dd LLL, yyyy')}</span>
                    </div>
                </div>

                <div className="prose prose-lg max-w-none">
                    <p>{story.story}</p>
                </div>
             </div>
        </div>
    </div>
  );
}
