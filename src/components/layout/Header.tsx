'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, PawPrint, X, Heart } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/shared/Logo';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/adopt', label: 'Adopt' },
  { href: '/success-stories', label: 'Success Stories' },
  { href: '/volunteer', label: 'Volunteer' },
  { href: '/ambulance', label: 'Ambulance' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'relative transition-colors hover:text-accent',
                pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href)) 
                    ? 'text-foreground' 
                    : 'text-muted-foreground'
              )}
            >
              {link.label}
              {(pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))) && (
                 <motion.div
                    className="absolute bottom-[-6px] left-0 right-0 h-0.5 bg-accent rounded-full"
                    layoutId="underline"
                 />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden md:flex bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/donate">
              <Heart className="mr-2 h-4 w-4" /> Donate
            </Link>
          </Button>

          {/* Mobile Navigation */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full max-w-sm bg-background p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                   <Logo />
                </div>
                <nav className="flex-grow p-4">
                  <ul className="space-y-4">
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className={cn(
                            'block text-lg font-medium transition-colors hover:text-accent',
                             pathname === link.href ? 'text-accent' : 'text-foreground'
                          )}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="p-4 border-t mt-auto">
                  <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/donate" onClick={() => setIsMobileMenuOpen(false)}>
                      <Heart className="mr-2 h-4 w-4" /> Donate
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
