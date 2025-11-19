import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
       <Image
        src="https://i.postimg.cc/9Fpmp4gG/pal-logo.png"
        alt="PAL Foundation Logo"
        width={200}
        height={50}
        className="object-contain"
        />
    </Link>
  );
}
