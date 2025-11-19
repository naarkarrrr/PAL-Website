'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, Shield, PawPrint } from 'lucide-react';
import { MotionDiv } from '@/components/shared/MotionDiv';

const services = [
  {
    icon: Shield,
    title: 'Ambulance Service',
    description: 'Emergency rescue for animals in distress. Our team is ready to respond 24/7.',
    href: '/ambulance',
    cta: 'Request Help',
  },
  {
    icon: Heart,
    title: 'Adoption',
    description: 'Give a loving home to a deserving animal. Find your new best friend and change a life forever.',
    href: '/adopt',
    cta: 'Find a Pet',
  },
  {
    icon: Users,
    title: 'Volunteer',
    description: 'Join our team of dedicated volunteers and make a hands-on difference in the lives of our animals.',
    href: '/volunteer',
    cta: 'Get Involved',
  },
   {
    icon: PawPrint,
    title: 'Donate',
    description: 'Your contributions help us provide food, shelter, and essential medical care to animals in need.',
    href: '/donate',
    cta: 'Support Our Cause',
  },
];

export function HowYouCanHelp() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">How You Can Help</h2>
        <p className="max-w-3xl mx-auto text-muted-foreground mb-12 text-lg">
          Every act of kindness, big or small, contributes to a brighter future for our animals. Your support can change lives.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <MotionDiv 
              key={service.title}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full text-center bg-card shadow-lg rounded-xl border-t-4 border-accent">
                <CardHeader className="items-center">
                  <div className="bg-accent/10 p-4 rounded-full">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="pt-4 font-headline text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
                <CardFooter className="p-4 mt-auto">
                  <Button asChild variant="link" className="w-full text-accent">
                    <Link href={service.href}>{service.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
