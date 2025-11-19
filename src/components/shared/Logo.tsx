import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 text-lg font-bold", className)}>
        <Image src="/logo.svg" alt="PAL Foundation" width={40} height={40} />
      <div className='flex flex-col'>
        <span className='text-sm font-bold text-primary leading-tight'>PURE ANIMAL LOVERS™</span>
        <span className='text-xs font-semibold text-muted-foreground leading-tight'>PAL WELFARE FOUNDATION</span>
      </div>
    </Link>
  );
}
