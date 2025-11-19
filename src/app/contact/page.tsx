import { ContactForm } from '@/components/forms/ContactForm';
import { PageHeader } from '@/components/shared/PageHeader';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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
      <div className="container mx-auto max-w-2xl px-4 py-16">
        <h2 className="text-2xl font-bold text-center mb-4 font-headline">Send Us a Message</h2>
        <p className="text-center text-muted-foreground mb-8">
            Whether it's a question about adoption, volunteering, or just a general inquiry, we're here to help.
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
