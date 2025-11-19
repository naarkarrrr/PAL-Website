import Image from 'next/image';
import { MotionDiv } from './MotionDiv';

type PageHeaderProps = {
  title: string;
  subtitle: string;
  imageUrl?: string;
  imageAlt?: string;
  imageHint?: string;
};

export function PageHeader({ title, subtitle, imageUrl, imageAlt, imageHint }: PageHeaderProps) {
  return (
    <section className="relative w-full py-20 md:py-32 flex items-center justify-center text-center text-white bg-primary">
      {imageUrl && (
        <>
          <Image
            src={imageUrl}
            alt={imageAlt || title}
            data-ai-hint={imageHint}
            fill
            className="object-cover -z-10"
            priority
          />
          <div className="absolute inset-0 bg-black/60 -z-10" />
        </>
      )}
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl p-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-shadow-lg">
          {title}
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          {subtitle}
        </p>
      </MotionDiv>
    </section>
  );
}
