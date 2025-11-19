
import { PageHeader } from "@/components/shared/PageHeader";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function WaterBowlProjectPage() {
  const headerImage = PlaceHolderImages.find(p => p.id === 'water_bowl_header');
  const contentImage1 = PlaceHolderImages.find(p => p.id === 'water_bowl_content1');
  const contentImage2 = PlaceHolderImages.find(p => p.id === 'water_bowl_content2');

  return (
    <div>
      <PageHeader
        title="Water Bowl Project"
        subtitle="A simple act of kindness to save countless stray animals from dehydration."
        imageUrl={headerImage?.imageUrl}
        imageHint={headerImage?.imageHint}
        imageAlt={headerImage?.description}
      />
      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs
          segments={[
            { title: "Home", href: "/" },
            { title: "How to Help", href: "/how-to-help" },
            { title: "Water Bowl Project", href: "/how-to-help/water-bowl-project" },
          ]}
        />
      </div>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold font-headline mb-4">Quench the Thirst of a Stray</h2>
                <p className="text-lg text-muted-foreground mb-6">
                During the scorching summer months, stray animals face a severe risk of dehydration, often leading to suffering and death. Our Water Bowl Project is a simple yet life-saving initiative aimed at providing a consistent source of fresh water for these vulnerable animals.
                </p>
                <p className="text-muted-foreground mb-6">
                By placing water bowls in strategic locations throughout the community, we can ensure that every stray has access to the water they need to survive the heat.
                </p>
                <Button size="lg">Donate to the Project</Button>
            </div>
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
        </div>
      </section>

      <section className="bg-primary/10 py-16">
        <div className="container mx-auto px-4">
             <div className="grid md:grid-cols-2 gap-12 items-center">
                {contentImage2 &&
                    <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src={contentImage2.imageUrl}
                            alt={contentImage2.description}
                            data-ai-hint={contentImage2.imageHint}
                            fill
                            className="object-cover"
                        />
                    </div>
                }
                <div>
                    <h2 className="text-3xl font-bold font-headline mb-4">How You Can Participate</h2>
                    <p className="text-lg text-muted-foreground mb-6">
                    Joining the Water Bowl Project is easy and makes a huge impact. Here’s how you can get involved:
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-4">
                            <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                            <span><strong>Keep a Bowl Outside:</strong> Place a bowl of clean water outside your home, office, or shop.</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                            <span><strong>Refill Regularly:</strong> Ensure the bowl is cleaned and refilled with fresh water daily.</span>
                        </li>
                         <li className="flex items-start gap-4">
                            <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                            <span><strong>Spread the Word:</strong> Encourage your friends, family, and neighbors to join the project.</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                            <span><strong>Donate:</strong> Your contributions help us purchase and distribute more durable water bowls across the city.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
