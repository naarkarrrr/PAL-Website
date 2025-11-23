'use client';
import { HandHeart, Heart, Siren, Telescope } from 'lucide-react';
import { MotionDiv } from '../shared/MotionDiv';
import Link from 'next/link';

const actions = [
  {
    icon: HandHeart,
    title: 'Adopt a Pet',
    description: 'Find your new best friend.',
    href: '/adopt',
  },
  {
    icon: Siren,
    title: 'Ambulance Request',
    description: 'Emergency help for animals.',
    href: '/ambulance',
  },
  {
    icon: Telescope,
    title: 'Report a Stray',
    description: 'Spotted an animal in need?',
    href: '/contact',
  },
  {
    icon: Heart,
    title: 'Donate',
    description: 'Support our life-saving work.',
    href: '/donate',
  },
];

export function QuickActions() {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {actions.map((action, index) => (
            <MotionDiv
              key={action.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={action.href} className="block group">
                <div className="text-center p-6 rounded-2xl h-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                  <div className="inline-block bg-primary/20 text-primary p-4 rounded-full mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <action.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{action.title}</h3>
                  <p className="text-muted-foreground text-sm">{action.description}</p>
                </div>
              </Link>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
