
import { ContactForm } from '@/components/forms/ContactForm';
import { PageHeader } from '@/components/shared/PageHeader';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
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
        <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-card p-8 rounded-xl border shadow-sm">
                 <h2 className="text-2xl font-bold font-headline mb-6">Contact Information</h2>
                 <ul className="space-y-4 text-muted-foreground">
                     <li className="flex items-start gap-4">
                        <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <p className="font-semibold text-foreground">Phone Number</p>
                            <a href="tel:+918424032020" className="hover:text-accent transition-colors">+91 8424032020</a>
                        </div>
                     </li>
                     <li className="flex items-start gap-4">
                        <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <p className="font-semibold text-foreground">Email Address</p>
                            <a href="mailto:palfoundation.in@gmail.com" className="hover:text-accent transition-colors">palfoundation.in@gmail.com</a>
                        </div>
                     </li>
                 </ul>
                 <div className="mt-8 pt-6 border-t">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Follow Us</h3>
                    <div className="flex gap-4">
                        {socialLinks.map((social) => (
                            <Link key={social['aria-label']} href={social.href} aria-label={social['aria-label']} className="bg-primary/10 text-primary hover:bg-accent hover:text-accent-foreground rounded-full p-3 transition-colors">
                                <social.icon className="h-5 w-5" />
                            </Link>
                        ))}
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
    </div>
  );
}
