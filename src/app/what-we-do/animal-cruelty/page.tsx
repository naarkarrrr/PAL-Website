
import { PageHeader } from "@/components/shared/PageHeader";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { AlertTriangle, BookOpen, Shield } from "lucide-react";

export default function AnimalCrueltyPage() {
    const headerImage = PlaceHolderImages.find(p => p.id === 'story1');
  return (
    <>
      <PageHeader
        title="Fighting Animal Cruelty"
        subtitle="We are committed to being a voice for the voiceless and taking a stand against animal abuse through legal action and awareness."
        imageUrl={headerImage?.imageUrl}
        imageHint={headerImage?.imageHint}
        imageAlt={headerImage?.description}
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold font-headline mb-4">Knowledge is Power</h2>
                <p className="text-lg text-muted-foreground">Understanding the laws that protect animals is the first step in fighting cruelty. We work to educate the public and enforce these laws to ensure justice for animals.</p>
            </div>
            <div className="space-y-8">
                <div className="bg-card p-6 rounded-lg border flex items-start gap-6">
                    <Shield className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="text-xl font-bold font-headline">Prevention of Cruelty to Animals (PCA) Act, 1960</h3>
                        <p className="text-muted-foreground text-sm">This is the primary legislation in India for animal welfare. It criminalizes various forms of cruelty, such as beating, torturing, or unreasonably administering any injurious substance to an animal.</p>
                    </div>
                </div>
                <div className="bg-card p-6 rounded-lg border flex items-start gap-6">
                    <BookOpen className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="text-xl font-bold font-headline">Indian Penal Code (IPC) Sections 428 & 429</h3>
                        <p className="text-muted-foreground text-sm">These sections criminalize the act of "mischief" by killing, poisoning, maiming, or rendering useless any animal. These are stronger laws that carry more significant penalties than the PCA Act.</p>
                    </div>
                </div>
                 <div className="bg-card p-6 rounded-lg border flex items-start gap-6">
                    <AlertTriangle className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="text-xl font-bold font-headline">Animal Welfare Board of India (AWBI) Guidelines</h3>
                        <p className="text-muted-foreground text-sm">The AWBI issues guidelines and rules on various aspects of animal welfare, including the keeping of pets, the functioning of animal shelters, and the conduct of animal performances.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
