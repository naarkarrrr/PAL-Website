import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { PawPrint } from 'lucide-react';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
       <PawPrint className="h-8 w-8 text-accent" />
      <span className="text-xl font-bold font-headline">Kindred Paws</span>
    </Link>
  );
}
