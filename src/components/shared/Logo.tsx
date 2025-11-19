import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { PawPrint } from 'lucide-react';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-8 w-8">
            <path fill="#D87093" d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,109.66-88,88a8,8,0,0,1-11.32,0l-44-44a8,8,0,1,1,11.32-11.32L92,200.69l82.34-82.35a8,8,0,0,1,11.32,11.32Z" />
            <path fill="#E6E6FA" d="m212.24,80.24l-112,112a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,176.69,200.92,69a8,8,0,1,1,11.32,11.32Z" />
        </svg>
      <span className="text-xl font-bold font-headline">Kindred Paws</span>
    </Link>
  );
}
