import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { PawPrint } from 'lucide-react';

export function Logo({ className }: { className?: string }) {
  const logoImage = PlaceHolderImages.find(p => p.id === 'logo');

  if (!logoImage) {
    // Fallback if logo is not found, though it should be.
    return (
        <Link href="/" className={cn("flex items-center gap-2", className)}>
            <div className="bg-white p-1.5 rounded-full">
                <PawPrint className="h-6 w-6 text-primary" />
            </div>
            <div>
                <span className="text-xl font-bold font-headline text-white">PetPal</span>
                <p className="text-xs text-secondary-foreground/80 -mt-1">Pet Care Center</p>
            </div>
        </Link>
    );
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
        />
    </Link>
  );
}
