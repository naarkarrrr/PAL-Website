
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Gavel, Phone, Shield } from "lucide-react";
import Link from "next/link";

const legalServices = [
    {
        icon: Shield,
        title: "Case Filing & Support",
        description: "We assist individuals in filing FIRs and provide support throughout the legal proceedings in cases of animal cruelty."
    },
    {
        icon: Gavel,
        title: "Legal Counsel",
        description: "Our network of pro-bono lawyers offers expert legal advice and representation to ensure that perpetrators are brought to justice."
    },
    {
        icon: Phone,
        title: "24/7 Helpline",
        description: "A dedicated helpline for reporting cruelty cases and receiving immediate guidance on the necessary steps to take."
    }
]

export default function LegalHelpPage() {
    const headerImage = PlaceHolderImages.find(p => p.id === 'story1');
  return (
    <>
      <PageHeader
        title="Legal Help for Animals"
        subtitle="Providing free or low-cost legal guidance and support for animal cruelty cases."
        imageUrl={headerImage?.imageUrl}
        imageHint={headerImage?.imageHint}
        imageAlt={headerImage?.description}
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
             <div className="text-center mb-12 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold font-headline mb-4">Justice for the Voiceless</h2>
                <p className="text-lg text-muted-foreground">Animal cruelty is a crime. Our dedicated legal team, comprising experienced lawyers and advocates, works tirelessly to ensure that the laws protecting animals are upheld and that offenders face legal consequences.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {legalServices.map(service => (
                     <div key={service.title} className="bg-card p-6 rounded-xl text-center border shadow-sm">
                        <div className="inline-block bg-accent/10 text-accent p-4 rounded-full mb-4">
                            <service.icon className="h-10 w-10" />
                        </div>
                        <h3 className="text-xl font-bold font-headline mb-2">{service.title}</h3>
                        <p className="text-muted-foreground text-sm">{service.description}</p>
                    </div>
                ))}
            </div>
            <div className="text-center">
                 <Button asChild size="lg">
                    <Link href="/advocate">Become an Advocate</Link>
                </Button>
            </div>
        </div>
      </section>
    </>
  );
}
