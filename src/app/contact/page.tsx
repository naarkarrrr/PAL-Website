
import { ContactForm } from '@/components/forms/ContactForm';
import { PageHeader } from '@/components/shared/PageHeader';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Phone, Mail, Facebook, Instagram, Twitter, Share2 } from 'lucide-react';
import Link from 'next/link';

const ThreadsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M14.51 3.522a1.5 1.5 0 0 0-2.02 0l-5 6A1.5 1.5 0 0 0 9 12h6a1.5 1.5 0 0 0 1.5-2.478l-2-3zm-6.52 7a1.5 1.5 0 0 0-1 2.478l2 3A1.5 1.5 0 0 0 11 17h2a1.5 1.5 0 0 0 1-2.478l-5-6a1.5 1.5 0 0 0-1.99.002z" />
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
