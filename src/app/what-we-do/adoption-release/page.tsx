
import { PageHeader } from "@/components/shared/PageHeader";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Check, PawPrint, Search } from "lucide-react";

export default function AdoptionReleasePage() {
  const headerImage = PlaceHolderImages.find(p => p.id === 'story2');
  return (
    <>
      <PageHeader
        title="Adoption & Release"
        subtitle="Finding loving forever homes for rescued animals and safely releasing rehabilitated wildlife."
        imageUrl={headerImage?.imageUrl}
        imageHint={headerImage?.imageHint}
        imageAlt={headerImage?.description}
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold font-headline mb-4">The Final Step: A New Beginning</h2>
                <p className="text-lg text-muted-foreground">Our ultimate goal for every rescued domestic animal is to find them a safe, loving, and permanent home. For wildlife, it's a successful release back into their natural habitat.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
                <div className="bg-card p-8 rounded-lg border">
                    <div className="flex items-center gap-4 mb-4">
                        <PawPrint className="h-8 w-8 text-primary" />
                        <h3 className="text-2xl font-bold font-headline">Our Adoption Process</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">We take great care to ensure that each adoption is a perfect match. Our process includes:</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <Search className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                            <span><strong>Screening:</strong> A detailed application to understand the potential adopter's lifestyle and experience.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                            <span><strong>Counseling:</strong> Providing information on responsible pet ownership and the specific needs of the animal.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                            <span><strong>Follow-Up:</strong> Post-adoption checks to ensure the animal is settling in well and to offer support.</span>
                        </li>
                    </ul>
                </div>
                 <div className="bg-card p-8 rounded-lg border">
                     <div className="flex items-center gap-4 mb-4">
                        <PawPrint className="h-8 w-8 text-primary" />
                        <h3 className="text-2xl font-bold font-headline">Release Program</h3>
                    </div>
                    <p className="text-muted-foreground">For non-domesticated animals, our focus is on rehabilitation and release. We work with wildlife experts to:</p>
                     <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                            <span>Ensure the animal is fully recovered and can survive in the wild.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                            <span>Identify safe and appropriate habitats for their release.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                            <span>Conduct releases away from human-populated areas to ensure their safety.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
