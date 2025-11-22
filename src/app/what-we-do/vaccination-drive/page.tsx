
import { PageHeader } from "@/components/shared/PageHeader";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

export default function VaccinationDrivePage() {
  const headerImage = PlaceHolderImages.find(p => p.id === 'vaccination_header');
  const contentImage1 = PlaceHolderImages.find(p => p.id === 'vaccination_content1');

  return (
    <div>
      <PageHeader
        title="Vaccination Drive"
        subtitle="Protecting community animals from deadly diseases through mass vaccination."
        imageUrl={headerImage?.imageUrl}
        imageHint={headerImage?.imageHint}
        imageAlt={headerImage?.description}
      />
      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs
          segments={[
            { title: "Home", href: "/" },
            { title: "What We Do", href: "/what-we-do" },
            { title: "Vaccination Drive", href: "/what-we-do/vaccination-drive" },
          ]}
        />
      </div>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold font-headline mb-4">A Shield Against Disease</h2>
                <p className="text-lg text-muted-foreground mb-6">
                Rabies, parvovirus, and distemper are just a few of the deadly diseases that pose a constant threat to stray animals. These diseases are not only fatal to them but can also pose a risk to public health. Our Vaccination Drives are a crucial preventative measure to create a healthier and safer environment for both animals and humans.
                </p>
                <p className="text-muted-foreground mb-6">
                We organize annual mass vaccination camps, collaborating with veterinary professionals and volunteers to administer anti-rabies and other essential combination vaccines.
                </p>
                <Button size="lg">Support a Vaccination</Button>
            </div>
            {contentImage1 &&
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src={contentImage1.imageUrl}
                        alt={contentImage1.description}
                        data-ai-hint={contentImage1.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            }
        </div>
      </section>

      <section className="bg-card py-16">
        <div className="container mx-auto px-4 text-center">
            <ShieldCheck className="h-12 w-12 text-primary mx-auto mb-4"/>
            <h2 className="text-3xl font-bold font-headline mb-4">The Impact of One Vaccine</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground mb-8">
            Each vaccine administered is a life saved and a step towards a rabies-free community. By contributing to our vaccination drives, you are directly helping to:
            </p>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-background p-6 rounded-lg border">
                    <h3 className="text-xl font-bold font-headline mb-2">Prevent Suffering</h3>
                    <p className="text-muted-foreground">Protect animals from painful and fatal illnesses.</p>
                </div>
                <div className="bg-background p-6 rounded-lg border">
                    <h3 className="text-xl font-bold font-headline mb-2">Ensure Public Safety</h3>
                    <p className="text-muted-foreground">Reduce the risk of rabies transmission to humans.</p>
                </div>
                <div className="bg-background p-6 rounded-lg border">
                    <h3 className="text-xl font-bold font-headline mb-2">Promote Coexistence</h3>
                    <p className="text-muted-foreground">Foster a community where humans and animals can live together harmoniously.</p>
                </div>
            </div>
             <Button variant="outline" size="lg" className="mt-12">Sponsor a Drive</Button>
        </div>
      </section>
    </div>
  );
}
