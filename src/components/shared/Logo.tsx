import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { PawPrint } from 'lucide-react';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
       <PawPrint className="h-8 w-8 text-primary" />
       <div>
            <span className="text-xl font-bold font-headline text-secondary">PAL Foundation</span>
            <p className="text-xs text-muted-foreground -mt-1">Welfare Foundation</p>
       </div>
    </Link>
  );
}
