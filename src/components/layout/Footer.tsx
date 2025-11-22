'use client';

import { Logo } from '@/components/shared/Logo';
import { Facebook, Instagram, Twitter, Youtube, ArrowUp, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

const ThreadsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M11.05 13.14c-2.34-1.04-3.8-2.04-3.8-3.34 0-1.14.98-1.95 2.54-1.95 1.48 0 2.29.62 3.2 1.54l1.39-1.29C13.2 7.02 11.75 6.5 10 6.5c-2.92 0-4.66 1.69-4.66 3.8 0 2.21 2.02 3.65 4.54 4.75 2.65 1.17 3.96 2.13 3.96 3.48 0 1.25-1.02 2.12-2.73 2.12-1.74 0-2.88-.8-3.88-1.93l-1.47 1.26c1.23 1.34 2.95 2.17 4.97 2.17 3.1 0 5.12-1.69 5.12-4.04 0-2.5-2.28-3.92-4.78-5.03Z" />
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
