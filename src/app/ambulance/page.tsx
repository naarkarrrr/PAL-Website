import { AmbulanceForm } from '@/components/forms/AmbulanceForm';
import { PageHeader } from '@/components/shared/PageHeader';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AmbulancePage() {
    const headerImage = PlaceHolderImages.find(p => p.id === 'ambulance_header');
  return (
    <div>
      <PageHeader
        title="Emergency Animal Rescue"
        subtitle="If you've found an animal in distress, please provide the details below. Our team is on standby."
        imageUrl={headerImage?.imageUrl}
        imageAlt={headerImage?.description}
        imageHint={headerImage?.imageHint}
      />
      <div className="container mx-auto max-w-2xl px-4 py-16">
        <h2 className="text-2xl font-bold text-center mb-4 font-headline">Ambulance Request Form</h2>
        <p className="text-center text-muted-foreground mb-8">
            Your quick response can save a life. Please provide as much detail as possible.
        </p>
        <AmbulanceForm />
      </div>
    </div>
  );
}
