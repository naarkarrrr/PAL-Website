
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Ambulance, Heart, Stethoscope } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function RescueRehabPage() {
  const headerImage = PlaceHolderImages.find(p => p.id === 'ambulance_header');
  const contentImage = PlaceHolderImages.find(p => p.id === 'gallery2');
  return (
    <>
      <PageHeader
        title="Rescue & Rehabilitation"
        subtitle="Our first responders are on the front lines, providing emergency rescue and life-saving care to animals in distress."
        imageUrl={headerImage?.imageUrl}
        imageHint={headerImage?.imageHint}
        imageAlt={headerImage?.description}
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold font-headline mb-4">From Rescue to Recovery</h2>
                    <p className="text-muted-foreground mb-6">
                        Our work begins with a call for help. Whether it's an animal hit by a vehicle, abandoned, or a victim of cruelty, our team is ready to respond. Once rescued, every animal is brought to our facility for immediate care.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-4">
                            <Ambulance className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                            <span><strong>24/7 Ambulance Service:</strong> Our fully-equipped ambulance is always on standby for emergency rescues.</span>
                        </li>
                         <li className="flex items-start gap-4">
                            <Stethoscope className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                            <span><strong>Veterinary Care:</strong> Our in-house medical team provides everything from first-aid to complex surgeries.</span>
                        </li>
                         <li className="flex items-start gap-4">
                            <Heart className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                            <span><strong>Rehabilitation:</strong> We provide a safe and nurturing environment for animals to heal, both physically and emotionally.</span>
                        </li>
                    </ul>
                     <Button asChild size="lg" className="mt-8">
                        <Link href="/ambulance">Request an Ambulance</Link>
                    </Button>
                </div>
                 {contentImage &&
                    <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src={contentImage.imageUrl}
                            alt={contentImage.description}
                            data-ai-hint={contentImage.imageHint}
                            fill
                            className="object-cover"
                        />
                    </div>
                }
            </div>
        </div>
      </section>
    </>
  );
}
