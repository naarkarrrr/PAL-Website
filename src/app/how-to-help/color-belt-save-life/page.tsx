
import { PageHeader } from "@/components/shared/PageHeader";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";

export default function CollarBeltPage() {
  const headerImage = PlaceHolderImages.find(p => p.id === 'collar_belt_header');
  const contentImage1 = PlaceHolderImages.find(p => p.id === 'collar_belt_content1');

  return (
    <div>
      <PageHeader
        title="Collar Belt to Save a Life"
        subtitle="A simple reflective collar can make the difference between life and death for a stray at night."
        imageUrl={headerImage?.imageUrl}
        imageHint={headerImage?.imageHint}
        imageAlt={headerImage?.description}
      />
      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs
          segments={[
            { title: "Home", href: "/" },
            { title: "How to Help", href: "/how-to-help" },
            { title: "Collar Belt to Save a Life", href: "/how-to-help/color-belt-save-life" },
          ]}
        />
      </div>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
             {contentImage1 &&
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src={contentImage1.imageUrl}
                        alt={contentImage1.description}
                        data-ai-hint={contentImage1.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            }
            <div>
                <h2 className="text-3xl font-bold font-headline mb-4">Making the Unseen, Seen</h2>
                <p className="text-lg text-muted-foreground mb-6">
                One of the leading causes of death for stray animals is road accidents, especially at night. In the dark, drivers often don't see them until it's too late. The "Collar Belt to Save a Life" project is our initiative to tackle this preventable tragedy.
                </p>
                <p className="text-muted-foreground mb-6">
                We distribute and fit stray dogs with reflective collars. These simple belts are made of a material that shines brightly in the glare of headlights, making the animal visible to drivers from a distance and giving them ample time to slow down or steer clear.
                </p>
            </div>
        </div>
      </section>

      <section className="bg-primary/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-headline mb-4">The Lifesaving Gift of Visibility</h2>
             <p className="max-w-3xl mx-auto text-muted-foreground mb-8">
                Your support for this project directly translates into saved lives. A small donation can provide a collar that acts as a beacon of safety for an animal living on the streets.
            </p>
             <div className="bg-card p-8 rounded-lg border shadow-sm max-w-md mx-auto">
                <h3 className="text-2xl font-bold font-headline mb-4">Sponsor a Collar</h3>
                <p className="text-muted-foreground mb-6">With just <strong>₹100</strong>, you can sponsor a reflective collar and protect one precious life from a roadside accident.</p>
                <Button size="lg">Sponsor a Collar Now</Button>
            </div>
          </div>
      </section>
    </div>
  );
}
