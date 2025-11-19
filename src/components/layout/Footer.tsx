'use client';

import { Logo } from '@/components/shared/Logo';
import { Facebook, Instagram, Twitter, Youtube, ArrowUp } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  { icon: Facebook, href: '#', 'aria-label': 'Facebook' },
  { icon: Instagram, href: '#', 'aria-label': 'Instagram' },
  { icon: Twitter, href: '#', 'aria-label': 'Twitter' },
  { icon: Youtube, href: '#', 'aria-label': 'Youtube' },
];

const quickLinks = [
    { title: "Animal Rescue", href: "/what-we-do/rescue-rehab" },
    { title: "Humane Education", href: "/what-we-do/educate-train" },
    { title: "New & Blog", href: "/success-stories" },
];

const supportLinks = [
    { title: "About Us", href: "/about" },
    { title: "Contact Us", href: "/contact" },
    { title: "FAQ", href: "/faq" },
]

export function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-secondary text-secondary-foreground relative">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-secondary" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          {/* Logo and About */}
          <div className="flex flex-col items-center md:items-start md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm max-w-xs text-secondary-foreground/80">
              We are a non-profit organization dedicated to rescuing, rehabilitating, and rehoming animals in need.
            </p>
             <div className="mt-6">
                <h4 className="font-semibold mb-2 text-white">Follow Us On:</h4>
                <div className="flex justify-center md:justify-start gap-4">
                {socialLinks.map((social) => (
                    <Link key={social['aria-label']} href={social.href} aria-label={social['aria-label']} className="hover:text-accent">
                    <social.icon className="h-6 w-6" />
                    </Link>
                ))}
                </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold font-headline text-white mb-4 relative inline-block">
                Quick Links
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-accent"></span>
            </h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map(link => (
                  <li key={link.title}><Link href={link.href} className="hover:text-accent text-secondary-foreground/80">{link.title}</Link></li>
              ))}
            </ul>
          </div>

           {/* Support Links */}
          <div>
            <h3 className="font-bold font-headline text-white mb-4 relative inline-block">
                Support
                 <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-accent"></span>
            </h3>
            <ul className="space-y-2 text-sm">
               {supportLinks.map(link => (
                  <li key={link.title}><Link href={link.href} className="hover:text-accent text-secondary-foreground/80">{link.title}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold font-headline text-white mb-4 relative inline-block">
                Contact
                 <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-accent"></span>
            </h3>
             <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li>555 A, East Manster Street, Ready</li>
                <li>Halley Neon, UK 4512</li>
                <li>+00 123 45678 44</li>
                <li>contact@pal.foundation</li>
            </ul>
          </div>
        </div>

      </div>
       <div className="border-t border-primary/20 bg-secondary">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center text-xs">
            <p>&copy; {new Date().getFullYear()} PAL Foundation. All Rights Reserved.</p>
            <div className="flex gap-4">
                <Link href="#" className="hover:text-accent">Support</Link>
                <Link href="#" className="hover:text-accent">Terms & Conditions</Link>
                <Link href="#" className="hover:text-accent">Privacy Policy</Link>
                <Link href="#" className="hover:text-accent">Career</Link>
            </div>
          </div>
        </div>
        <button
          onClick={scrollToTop}
          className="absolute -top-5 right-10 bg-accent text-accent-foreground p-3 rounded-md hover:bg-accent/90 transition-transform hover:-translate-y-1"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
    </footer>
  );
}
