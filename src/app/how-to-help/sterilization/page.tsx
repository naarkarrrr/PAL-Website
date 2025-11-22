
import { PageHeader } from "@/components/shared/PageHeader";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Heart, PawPrint } from "lucide-react";
import Link from "next/link";

export default function SterilizationPage() {
  const headerImage = PlaceHolderImages.find(p => p.id === 'sterilization_header');
  const contentImage1 = PlaceHolderImages.find(p => p.id === 'sterilization_content1');

  return (
    <div>
      <PageHeader
        title="Sterilization (Animal Birth Control)"
        subtitle="A humane and effective solution to manage stray animal populations."
        imageUrl={headerImage?.imageUrl}
        imageHint={headerImage?.imageHint}
        imageAlt={headerImage?.description}
      />
      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs
          segments={[
            { title: "Home", href: "/" },
            { title: "How to Help", href: "/how-to-help" },
            { title: "Sterilization", href: "/how-to-help/sterilization" },
          ]}
        />
      </div>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-headline mb-4">A Compassionate Approach to Population Control</h2>
            <p className="text-lg text-muted-foreground mb-8">
            The overpopulation of stray animals leads to widespread suffering, including starvation, disease, and cruelty. Sterilization, also known as spaying and neutering, is the most humane and scientifically proven method to control the street animal population.
            </p>
        </div>

        {contentImage1 &&
            <div className="relative aspect-video max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg my-12">
                <Image
                    src={contentImage1.imageUrl}
                    alt={contentImage1.description}
                    data-ai-hint={contentImage1.imageHint}
                    fill
                    className="object-cover"
                />
            </div>
        }

        <div className="max-w-4xl mx-auto">
             <h3 className="text-2xl font-bold font-headline mb-4">Our Animal Birth Control (ABC) Program</h3>
             <p className="text-muted-foreground mb-6">
                The PAL Foundation runs a robust Animal Birth Control (ABC) program. We conduct regular sterilization drives where stray dogs and cats are humanely caught, transported to a veterinary facility, spayed or neutered by qualified vets, and given post-operative care. After they have fully recovered, they are released back into their original territories.
             </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-card p-6 rounded-lg border">
                    <Heart className="h-8 w-8 text-primary mb-3"/>
                    <h4 className="text-xl font-bold font-headline mb-2">Benefits for Animals</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                        <li>Reduces the number of unwanted puppies and kittens born onto the streets.</li>
                        <li>Improves the health of sterilized animals and reduces the risk of certain cancers.</li>
                        <li>Decreases aggression and territorial fighting.</li>
                    </ul>
                </div>
                 <div className="bg-card p-6 rounded-lg border">
                    <PawPrint className="h-8 w-8 text-primary mb-3"/>
                    <h4 className="text-xl font-bold font-headline mb-2">Benefits for the Community</h4>
                     <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                        <li>Leads to a healthier, smaller, and more stable stray population.</li>
                        <li>Reduces nuisance behaviors like howling and marking.</li>
                        <li>Fosters a more compassionate and harmonious coexistence.</li>
                    </ul>
                </div>
            </div>

             <div className="text-center mt-12">
                <p className="text-lg font-semibold mb-2">Help us continue this vital work.</p>
                 <Button size="lg" asChild>
                    <Link href="/donate">Sponsor a Sterilization Surgery</Link>
                </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
