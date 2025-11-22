
import { ContactForm } from '@/components/forms/ContactForm';
import { PageHeader } from '@/components/shared/PageHeader';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Phone, Mail, Facebook, Instagram, Twitter, Share2 } from 'lucide-react';
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

export default function ContactPage() {
    const headerImage = PlaceHolderImages.find(p => p.id === 'contact_header');
  return (
    <div>
      <PageHeader
        title="Get In Touch"
        subtitle="Have questions or feedback? We'd love to hear from you."
        imageUrl={headerImage?.imageUrl}
        imageAlt={headerImage?.description}
        imageHint={headerImage?.imageHint}
      />
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <div className="mb-12">
             <h2 className="text-2xl font-bold font-headline mb-6 text-center">Contact Information</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-card p-6 rounded-xl border shadow-sm text-center">
                    <div className="inline-block bg-primary/10 text-primary p-3 rounded-full mb-3">
                        <Phone className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-foreground text-lg">Phone Number</h3>
                    <a href="tel:+918424032020" className="text-muted-foreground hover:text-accent transition-colors">+91 8424032020</a>
                </div>
                 <div className="bg-card p-6 rounded-xl border shadow-sm text-center">
                    <div className="inline-block bg-primary/10 text-primary p-3 rounded-full mb-3">
                        <Mail className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-foreground text-lg">Email Address</h3>
                    <a href="mailto:palfoundation.in@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">palfoundation.in@gmail.com</a>
                </div>
                 <div className="bg-card p-6 rounded-xl border shadow-sm text-center">
                    <div className="inline-block bg-primary/10 text-primary p-3 rounded-full mb-3">
                        <Share2 className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-foreground text-lg">Follow Us</h3>
                     <div className="flex gap-3 justify-center mt-1">
                        {socialLinks.map((social) => (
                            <Link key={social['aria-label']} href={social.href} aria-label={social['aria-label']} className="text-muted-foreground hover:text-accent transition-colors">
                                <social.icon className="h-5 w-5" />
                            </Link>
                        ))}
                    </div>
                </div>
             </div>
        </div>
        
        <div>
            <h2 className="text-2xl font-bold text-center mb-4 font-headline">Send Us a Message</h2>
            <p className="text-center text-muted-foreground mb-8">
                Whether it's a question about adoption, volunteering, or just a general inquiry, we're here to help.
            </p>
            <ContactForm />
        </div>
      </div>
    </div>
  );
}
