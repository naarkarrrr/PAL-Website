import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MotionDiv } from '../shared/MotionDiv';
import { PawPrint } from 'lucide-react';

const features = [
  {
    title: 'Experienced Team',
    description: 'Our team of vets and volunteers has years of experience in animal rescue and care.',
  },
  {
    title: 'Transparent Adoptions',
    description: 'Our adoption process is clear and focuses on finding the best homes for our animals.',
  },
  {
    title: 'Modern Rehabilitation',
    description: 'We use positive reinforcement and modern techniques to help animals recover.',
  },
  {
    title: 'Dedicated Care',
    description: 'Every animal receives personalized care, nutrition, and a safe, daily routine.',
  },
];

export function WhyChooseUs() {
  const image = PlaceHolderImages.find((p) => p.id === 'why_choose_us');

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <MotionDiv
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-square w-full max-w-lg mx-auto">
                <div className="absolute w-[80%] h-[80%] top-0 left-0 bg-accent/30 rounded-full animate-wobble-slow" />
                <div className="absolute w-[70%] h-[70%] bottom-0 right-0 bg-primary/20 rounded-full animate-wobble-slow animation-delay-200" />
                <Image
                    src={image?.imageUrl || ''}
                    alt={image?.description || ''}
                    data-ai-hint={image?.imageHint}
                    fill
                    className="object-contain p-8 z-10"
                />
            </div>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 text-primary mb-2">
                <h3 className="font-bold uppercase tracking-wider">Why We Are The Best</h3>
                <PawPrint className="h-5 w-5"/>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">A Haven for Every Animal in Need</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We understand that your furry friend is a treasured member of your family and deserves the best care and attention possible.
            </p>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-primary/10 text-primary rounded-full p-1 mt-1">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
