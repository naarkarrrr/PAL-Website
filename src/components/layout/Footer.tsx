
'use client';

import { Logo } from '@/components/shared/Logo';
import { Facebook, Instagram, Twitter, Youtube, ArrowUp, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

const ThreadsIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 440 511.43" {...props}><path fill="currentColor" fill-rule="nonzero" d="M342.383 237.038a177.282 177.282 0 00-6.707-3.046c-3.948-72.737-43.692-114.379-110.429-114.805-38.505-.255-72.972 15.445-94.454 48.041l36.702 25.178c15.265-23.159 39.221-28.096 56.864-28.096.204 0 .408 0 .61.002 21.974.14 38.555 6.529 49.287 18.987 7.81 9.071 13.034 21.606 15.621 37.425-19.483-3.311-40.553-4.329-63.077-3.038-63.45 3.655-104.24 40.661-101.501 92.08 1.391 26.083 14.385 48.523 36.587 63.181 18.772 12.391 42.95 18.45 68.077 17.079 33.183-1.819 59.215-14.48 77.377-37.63 13.793-17.58 22.516-40.363 26.368-69.069 15.814 9.544 27.535 22.103 34.007 37.2 11.006 25.665 11.648 67.84-22.764 102.223-30.15 30.121-66.392 43.151-121.164 43.554-60.758-.45-106.708-19.935-136.583-57.915-27.976-35.562-42.434-86.93-42.973-152.674.539-65.746 14.997-117.114 42.973-152.676 29.875-37.979 75.824-57.463 136.582-57.914 61.197.455 107.948 20.033 138.967 58.195 15.21 18.713 26.676 42.248 34.236 69.688L440 161.532c-9.163-33.775-23.582-62.881-43.203-87.017C357.031 25.59 298.872.519 223.936 0h-.3C148.851.518 91.344 25.683 52.709 74.795 18.331 118.499.598 179.308.002 255.535l-.002.18.002.18c.596 76.225 18.329 137.037 52.707 180.741 38.635 49.11 96.142 74.277 170.927 74.794h.3c66.486-.462 113.352-17.868 151.96-56.442 50.51-50.463 48.99-113.718 32.342-152.549-11.945-27.847-34.716-50.463-65.855-65.401zM227.587 344.967c-27.808 1.567-56.699-10.916-58.124-37.651-1.056-19.823 14.108-41.942 59.831-44.577a266.87 266.87 0 0115.422-.45c16.609 0 32.145 1.613 46.271 4.701-5.268 65.798-36.172 76.483-63.4 77.977z"/></svg>
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
