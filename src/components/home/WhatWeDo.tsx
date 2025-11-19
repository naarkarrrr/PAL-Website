'use client';

import { ServiceCard } from './ServiceCard';
import { LegalHelpIcon } from '../icons/LegalHelp';
import { RescueIcon } from '../icons/Rescue';
import { AnimalCrueltyIcon } from '../icons/AnimalCruelty';
import { SpayNeuterIcon } from '../icons/SpayNeuter';
import { FeedStrayIcon } from '../icons/FeedStray';
import { VaccinationIcon } from '../icons/Vaccination';
import { MotionDiv } from '../shared/MotionDiv';


const services = [
  {
    icon: LegalHelpIcon,
    title: 'Legal Help',
    description: 'Our legal team, led by experts and supported by police officers and lawyers, fights animal cruelty cases across India.',
    href: '/what-we-do/legal-help',
  },
  {
    icon: RescueIcon,
    title: 'Rescue & Rehabilitation',
    description: 'We rescue animals from abuse, accidents, and neglect, providing them with urgent medical care and emotional healing.',
    href: '/what-we-do/rescue-rehab',
  },
  {
    icon: AnimalCrueltyIcon,
    title: 'Animal Cruelty Prevention',
    description: 'We raise awareness, educate communities, and take legal action to prevent animal cruelty.',
    href: '/what-we-do/animal-cruelty',
  },
  {
    icon: SpayNeuterIcon,
    title: 'Spay & Neuter Program',
    description: 'To control overpopulation humanely, we run free sterilisation drives for stray cats and dogs.',
    href: '/what-we-do/spay-neuter',
  },
    {
    icon: FeedStrayIcon,
    title: 'Feed The Stray',
    description: 'Our feeding program ensures that street animals receive regular, nutritious meals.',
    href: '/what-we-do/feed-the-stray',
  },
  {
    icon: VaccinationIcon,
    title: 'Vaccination Drive',
    description: 'We conduct annual vaccination drives to protect stray animals from deadly diseases like rabies and parvovirus.',
    href: '/what-we-do/vaccination-drive',
  },
];

export function WhatWeDo() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">What We Do</h2>
          <p className="max-w-3xl mx-auto text-muted-foreground text-lg">
            Our efforts are focused on creating a compassionate world for all animals through direct action, education, and advocacy.
          </p>
        </MotionDiv>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
             <MotionDiv
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
                <ServiceCard
                    index={index + 1}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    href={service.href}
                />
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
