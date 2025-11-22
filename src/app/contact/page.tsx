
import { ContactForm } from '@/components/forms/ContactForm';
import { PageHeader } from '@/components/shared/PageHeader';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Phone, Mail, Facebook, Instagram, Twitter, Share2 } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  { icon: Facebook, href: '#', 'aria-label': 'Facebook' },
  { icon: Instagram, href: '#', 'aria-label': 'Instagram' },
  { icon: Twitter, href: '#', 'aria-label': 'Twitter' },
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
