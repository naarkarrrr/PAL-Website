import { VolunteerForm } from '@/components/forms/VolunteerForm';
import { PageHeader } from '@/components/shared/PageHeader';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function VolunteerPage() {
    const headerImage = PlaceHolderImages.find(p => p.id === 'volunteer_header');
  return (
    <div>
      <PageHeader
        title="BECOME A MEMBER & VOLUNTEER"
        subtitle="Be the change you want to see. Join our team to make a difference in the lives of animals."
        imageUrl={headerImage?.imageUrl}
        imageAlt={headerImage?.description}
        imageHint={headerImage?.imageHint}
      />
      <div className="container mx-auto max-w-2xl px-4 py-16">
        <h2 className="text-2xl font-bold text-center mb-4 font-headline">Volunteer Application Form</h2>
        <p className="text-center text-muted-foreground mb-8">
          We're excited to have you on board! Please fill out the form below, and we'll be in touch soon.
        </p>
        <VolunteerForm />
      </div>
    </div>
  );
}
