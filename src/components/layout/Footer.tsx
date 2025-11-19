import { Logo } from '@/components/shared/Logo';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  { icon: Facebook, href: '#', 'aria-label': 'Facebook' },
  { icon: Instagram, href: '#', 'aria-label': 'Instagram' },
  { icon: Twitter, href: '#', 'aria-label': 'Twitter' },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo and About */}
          <div className="flex flex-col items-center md:items-start">
            <Logo className="text-primary-foreground" />
            <p className="mt-4 text-sm text-primary-foreground/70 max-w-xs">
              Kindred Paws is dedicated to rescuing, rehabilitating, and rehoming animals in need.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold font-headline mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/adopt" className="text-primary-foreground/70 hover:text-primary-foreground">Adopt</Link></li>
              <li><Link href="/volunteer" className="text-primary-foreground/70 hover:text-primary-foreground">Volunteer</Link></li>
              <li><Link href="/donate" className="text-primary-foreground/70 hover:text-primary-foreground">Donate</Link></li>
              <li><Link href="/contact" className="text-primary-foreground/70 hover:text-primary-foreground">Contact Us</Link></li>
            </ul>
          </div>

          {/* Social and Contact */}
          <div>
            <h3 className="font-bold font-headline mb-4">Connect With Us</h3>
            <div className="flex justify-center md:justify-start gap-4 mb-4">
              {socialLinks.map((social) => (
                <a key={social['aria-label']} href={social.href} aria-label={social['aria-label']} className="text-primary-foreground/70 hover:text-primary-foreground">
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
            <p className="text-sm text-primary-foreground/70">123 Animal Lane, Pet City</p>
            <p className="text-sm text-primary-foreground/70">contact@kindredpaws.org</p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-xs text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Kindred Paws. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
