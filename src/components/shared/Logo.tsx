import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';

export function Logo({ className }: { className?: string }) {
  const logoImage = PlaceHolderImages.find(p => p.id === 'logo');

  // This should always find the logo, but as a fallback, we render nothing.
  if (!logoImage) {
    return null;
  }

  return (
    <Link href="/" className={cn("flex items-center", className)}>
       <Image
        src={logoImage.imageUrl}
        alt={logoImage.description}
        data-ai-hint={logoImage.imageHint}
        width={180}
        height={45}
        className="object-contain"
        priority
        />
    </Link>
  );
}
