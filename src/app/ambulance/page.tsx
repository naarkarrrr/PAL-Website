'use client';
import { AmbulanceForm } from '@/components/forms/AmbulanceForm';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import Image from 'next/image';

export default function AmbulancePage() {
    const ambulanceImage = PlaceHolderImages.find(p => p.id === 'ambulance_illustration');
    
    const locations = [
        "Colaba", "Malabar Hills", "Mahalaxmi", "Dadar",
        "Lower Parel", "Haji Ali", "Andheri", "BKC Bandra Kurla Complex"
    ];

  return (
    <div className="container mx-auto px-4 py-16">
        <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold font-headline mb-6">Ahimsa Sangh Free Animal Ambulance Service</h1>
                    <p className="text-muted-foreground mb-4">Now Serviceable at the following 8 locations:</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 mb-6">
                        {locations.map(loc => (
                            <p key={loc} className="font-medium">{loc}</p>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Badge variant="secondary" className="text-base py-1 px-4">South Mumbai Area</Badge>
                        <Badge variant="secondary" className="text-base py-1 px-4">10:AM - 6:00 PM</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-8">Note* - Nearby areas will also be covered if Required. Sunday Off</p>
                    <Button asChild size="lg">
                        <a href="tel:+919979844451">
                            <Phone className="mr-2 h-5 w-5" />
                            Call us Now at +91 9979844451
                        </a>
                    </Button>
                </div>
                <div className="relative aspect-square max-w-md mx-auto">
                    {ambulanceImage && (
                        <Image
                            src={ambulanceImage.imageUrl}
                            alt={ambulanceImage.description}
                            data-ai-hint={ambulanceImage.imageHint}
                            fill
                            className="object-contain"
                        />
                    )}
                </div>
            </div>
        </section>

        <section className="bg-card p-8 rounded-xl border">
            <div className="container mx-auto max-w-2xl px-4 py-8">
                <h2 className="text-3xl font-bold text-center mb-4 font-headline">Area Not Listed? Request Help Here</h2>
                <p className="text-center text-muted-foreground mb-8">
                    If you've found an animal in distress outside our service areas, please provide the details below.
                </p>
                <AmbulanceForm />
            </div>
        </section>
    </div>
  );
}
