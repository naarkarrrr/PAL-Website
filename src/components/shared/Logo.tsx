import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';

export function Logo({ className }: { className?: string }) {
  const logoImage = PlaceHolderImages.find(p => p.id === 'logo');
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
       <Image
        src={logoImage?.imageUrl || ''}
        alt={logoImage?.description || 'PAL Foundation Logo'}
        width={200}
        height={50}
        className="object-contain"
        />
    </Link>
  );
}
