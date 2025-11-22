
'use client';

import { Logo } from '@/components/shared/Logo';
import { Facebook, Instagram, Twitter, Youtube, ArrowUp, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

const ThreadsIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M13.297 2.002a1.002 1.002 0 0 0-2.594 0C5.15 2.548.868 7.35.868 12.5c0 4.15 2.76 8.04 7.429 9.897l.115.045C9.28 22.78 10.56 23 12 23s2.72-.22 3.588-.558l.115-.045C20.372 20.54 23.132 16.65 23.132 12.5c0-5.15-4.282-9.952-9.835-10.498zm-1.282 17.492c-3.137 0-5.918-2.02-6.89-5.012h2.232c.844 1.83 2.822 3.109 5.094 3.109.115 0 .23-.004.344-.01a6.626 6.626 0 0 1-3.78-6.077c0-3.665 2.977-6.64 6.64-6.64 3.666 0 6.642 2.975 6.642 6.64a6.64 6.64 0 0 1-6.64 6.64c-.118 0-.236-.006-.355-.016a4.83 4.83 0 0 0 3.32-4.526c0-2.12-1.723-3.842-3.842-3.842-2.12 0-3.842 1.723-3.842 3.842a3.83 3.83 0 0 0 .91 2.505l-2.14-7.55h2.15l1.63 5.76a4.2 4.2 0 0 1-.303-.01c-1.467 0-2.658 1.19-2.658 2.658s1.19 2.658 2.658 2.658a2.65 2.65 0 0 0 2.62-2.33h2.33a5.002 5.002 0 0 1-4.95 4.99z"/>
    </svg>
);


const socialLinks = [
  { icon: ThreadsIcon, href: 'https://www.threads.com/@palfoundation.in', 'aria-label': 'Threads' },
  { icon: Instagram, href: 'https://www.instagram.com/palfoundation.in', 'aria-label': 'Instagram' },
  { icon: Facebook, href: 'https://www.facebook.com/groups/828807104596599', 'aria-label': 'Facebook' },
];

const quickLinks = [
    { title: "About Us", href: "/about" },
    { title: "Services", href: "/what-we-do" },
    { title: "Adoptions", href: "/adopt" },
    { title: "Donation", href: "/donate" },
    { title: "Our Team", href: "/team" },
];

const helpCenterLinks = [
    { title: "Contact Us", href: "/contact" },
    { title: "Terms & Condition", href: "/terms" },
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Tax Exemption for Donations", href: "/donate#tax-info" }, // Example link
    { title: "Refund Policy", href: "/refund-policy" },
]

export function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-primary text-primary-foreground relative">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-4 lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="bg-white p-4 rounded-xl shadow-lg">
                <Logo />
            </div>
            <p className="mt-4 text-sm max-w-xs text-primary-foreground/80">
              To be the voice for the voiceless and create a safe, compassionate world for all living beings.
            </p>
             <div className="mt-6">
                <div className="flex justify-center md:justify-start gap-3">
                {socialLinks.map((social) => (
                    <Link key={social['aria-label']} href={social.href} aria-label={social['aria-label']} className="bg-white/10 text-primary-foreground/80 hover:bg-accent hover:text-accent-foreground rounded-full p-2 transition-colors">
                        <social.icon className="h-5 w-5" />
                    </Link>
                ))}
                </div>
            </div>
          </div>

          <div className="md:col-span-8 lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg text-accent mb-4">
                  Quick Links
              </h3>
              <ul className="space-y-2 text-sm">
                {quickLinks.map(link => (
                    <li key={link.title}><Link href={link.href} className="text-primary-foreground/80 hover:text-white transition-colors">{link.title}</Link></li>
                ))}
              </ul>
            </div>

             {/* Help Center Links */}
            <div>
                <h3 className="font-bold text-lg text-accent mb-4">
                    Help Center
                </h3>
                <ul className="space-y-2 text-sm">
                {helpCenterLinks.map(link => (
                    <li key={link.title}><Link href={link.href} className="text-primary-foreground/80 hover:text-white transition-colors">{link.title}</Link></li>
                ))}
                </ul>
            </div>

            {/* Get In Touch */}
            <div>
                <h3 className="font-bold text-lg text-accent mb-4">
                    Get In Touch
                </h3>
                <ul className="space-y-3 text-sm text-primary-foreground/80">
                    <li className="flex items-center gap-3">
                        <Phone className="h-5 w-5"/>
                        <a href="tel:+918424032020" className="hover:text-white transition-colors">+91 8424032020</a>
                    </li>
                    <li className="flex items-center gap-3">
                        <Mail className="h-5 w-5"/>
                        <a href="mailto:palfoundation.in@gmail.com" className="hover:text-white transition-colors">palfoundation.in@gmail.com</a>
                    </li>
                </ul>
            </div>
          </div>
        </div>

      </div>
       <div className="border-t border-primary-foreground/10 bg-primary">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center text-xs text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} PAL Foundation. All Rights Reserved.</p>
          </div>
        </div>
        <button
          onClick={scrollToTop}
          className="absolute -top-5 right-10 bg-accent text-accent-foreground p-3 rounded-full shadow-lg hover:bg-accent/90 transition-transform hover:-translate-y-1"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
    </footer>
  );
}
