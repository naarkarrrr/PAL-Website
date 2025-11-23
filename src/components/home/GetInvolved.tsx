'use client';
import Link from 'next/link';
import { ArrowRight, Handshake, Heart, Shield, Users } from 'lucide-react';
import { MotionDiv } from '../shared/MotionDiv';

const getInvolvedOptions = [
  {
    icon: Users,
    title: 'Become a Member',
    description: 'Join our community of animal lovers and get involved in our activities.',
    href: '/volunteer'
  },
  {
    icon: Heart,
    title: 'Sponsor an Animal',
    description: 'Provide for an animal\'s needs and receive regular updates on their journey.',
    href: '/sponsor-partner'
  },
  {
    icon: Shield,
    title: 'Join Advocate Program',
    description: 'Use your legal or advocacy skills to fight for animal rights.',
    href: '/advocate'
  },
  {
    icon: Handshake,
    title: 'Propose a Collaboration',
    description: 'Partner with us on projects, events, or campaigns to amplify our impact.',
    href: '/collaboration'
  }
];

export function GetInvolved() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Get Involved</h2>
        <p className="max-w-2xl mx-auto text-center text-muted-foreground mb-12">
          There are many ways you can contribute to our cause. Find the one that's right for you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {getInvolvedOptions.map((option, index) => (
            <MotionDiv
              key={option.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Link href={option.href} className="block group h-full">
                <div className="bg-card p-8 rounded-2xl border h-full flex items-start gap-6 transition-all duration-300 hover:border-accent hover:shadow-lg">
                  <div className="bg-primary/20 text-primary p-3 rounded-lg group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <option.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{option.description}</p>
                    <span className="font-bold text-accent flex items-center gap-2">
                      Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
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
