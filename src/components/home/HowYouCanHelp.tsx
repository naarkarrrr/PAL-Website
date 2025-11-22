'use client';

import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MotionDiv } from '@/components/shared/MotionDiv';
import Image from 'next/image';

const helpOptions = [
  {
    title: 'Donate',
    description: 'Your support allows us to continue our important work, providing medical care, food, shelter, and love to animals in need.',
    href: '/donate',
    image: PlaceHolderImages.find(p => p.id === 'donate_card'),
  },
  {
    title: 'Volunteer',
    description: 'If you love animals and want to make a difference, consider volunteering with us. Your time and effort can help change lives.',
    href: '/volunteer',
    image: PlaceHolderImages.find(p => p.id === 'volunteer_card'),
  },
  // {
  //   title: 'Adopt',
  //   description: "Give an animal a second chance at life by adopting one of our rescues. You're not just gaining a pet – you're saving a life.",
  //   href: '/adopt',
  //   image: PlaceHolderImages.find(p => p.id === 'adopt_card'),
  // },
];

export function HowYouCanHelp() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">How You Can Help</h2>
        <p className="max-w-3xl mx-auto text-muted-foreground mb-12 text-lg">
          Together, we can make a difference in the lives of countless animals. Thank you for supporting our cause!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {helpOptions.map((option, index) => (
             <MotionDiv
                key={option.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
            >
                <Link href={option.href} className="block h-full">
                    <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
                        {option.image && (
                            <Image
                                src={option.image.imageUrl}
                                alt={option.title}
                                data-ai-hint={option.image.imageHint}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-6 text-left text-white">
                            <h3 className="text-2xl font-bold font-headline mb-2">{option.title}</h3>
                            <p className="text-sm opacity-90">{option.description}</p>
                        </div>
                    </div>
                </Link>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
