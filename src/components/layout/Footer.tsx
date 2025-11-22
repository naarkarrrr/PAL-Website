'use client';

import { Logo } from '@/components/shared/Logo';
import { Facebook, Instagram, Twitter, Youtube, ArrowUp, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  { icon: Facebook, href: '#', 'aria-label': 'Facebook' },
  { icon: Instagram, href: '#', 'aria-label': 'Instagram' },
  { icon: Twitter, href: '#', 'aria-label': 'Twitter' },
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