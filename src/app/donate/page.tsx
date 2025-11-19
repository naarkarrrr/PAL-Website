import { DonationForm } from '@/components/forms/DonationForm';
import { PageHeader } from '@/components/shared/PageHeader';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Heart, Gift, ShieldCheck } from 'lucide-react';

export default function DonatePage() {
  const headerImage = PlaceHolderImages.find(p => p.id === 'donate_header');

  return (
    <div>
      <PageHeader
        title="Support Our Mission"
        subtitle="Your generosity fuels our work and gives animals a second chance at life."
        imageUrl={headerImage?.imageUrl}
        imageAlt={headerImage?.description}
        imageHint={headerImage?.imageHint}
      />
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
                 <h2 className="text-3xl font-bold font-headline mb-6">Make a Donation</h2>
                <DonationForm />
            </div>
            <div className="bg-primary p-8 rounded-lg">
                <h3 className="text-2xl font-bold font-headline text-primary-foreground mb-4">Why Your Donation Matters</h3>
                <p className="text-primary-foreground/80 mb-6">
                    Every contribution, no matter the size, helps us provide essential care. Your donation can fund:
                </p>
                <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                        <Heart className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                        <span className="text-primary-foreground">
                            <strong>Medical Care:</strong> Vaccinations, treatments, and emergency surgeries for sick or injured animals.
                        </span>
                    </li>
                    <li className="flex items-start gap-4">
                        <Gift className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                        <span className="text-primary-foreground">
                            <strong>Food and Shelter:</strong> Nutritious meals and a safe, comfortable place for animals to rest and recover.
                        </span>
                    </li>
                     <li className="flex items-start gap-4">
                        <ShieldCheck className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                        <span className="text-primary-foreground">
                            <strong>Rescue Operations:</strong> Fueling our ambulance to reach animals in distress and bring them to safety.
                        </span>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
}
