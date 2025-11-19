
import { MembershipForm } from '@/components/forms/MembershipForm';
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
        <h2 className="text-2xl font-bold text-center mb-4 font-headline">PAL Membership Application</h2>
        <p className="text-center text-muted-foreground mb-8">
          Fill out the form below to apply for a PAL Foundation membership card.
        </p>
        <MembershipForm />
      </div>
    </div>
  );
}
