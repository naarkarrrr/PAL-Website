
import { PageHeader } from "@/components/shared/PageHeader";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, BookOpen, Goal, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const aboutLinks = [
    {
        icon: BookOpen,
        title: "Our Story",
        description: "Discover the journey of how PAL Foundation came to be.",
        href: "/our-story",
    },
    {
        icon: Goal,
        title: "Mission & Vision",
        description: "Learn about the driving force behind our commitment.",
        href: "/mission-vision",
    },
    {
        icon: Users,
        title: "Our Team",
        description: "Meet the dedicated individuals who make our work possible.",
        href: "/team",
    }
]

export default function AboutPage() {
    const aboutImage = PlaceHolderImages.find(p => p.id === 'about_header');
  return (
    <>
        <PageHeader
        title="About PAL Foundation"
        subtitle="Learn more about our mission, vision, and the team behind our work for animal welfare."
        />
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                        {aboutImage && <Image src={aboutImage.imageUrl} alt={aboutImage.description} data-ai-hint={aboutImage.imageHint} fill className="object-cover" />}
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold font-headline mb-4">A Voice for the Voiceless</h2>
                        <p className="text-muted-foreground mb-4">
                            The PAL (People for Animals) Foundation is a non-profit organization dedicated to creating a compassionate world for animals. We believe that every animal has the right to live a life free from pain, fear, and suffering.
                        </p>
                        <p className="text-muted-foreground mb-6">
                            Since our inception, we have been at the forefront of animal rescue, rehabilitation, and advocacy in our community. Our work is driven by a passionate team of volunteers, veterinarians, and supporters who share a common goal: to give every animal a second chance at a happy, healthy life.
                        </p>
                    </div>
                </div>

                <div className="mt-20">
                    <h2 className="text-3xl font-bold font-headline text-center mb-12">Explore Who We Are</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {aboutLinks.map((link) => (
                            <Link key={link.title} href={link.href} className="block group">
                                <div className="bg-card p-8 rounded-xl h-full text-center border hover:border-primary/50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="inline-block bg-primary/10 text-primary p-4 rounded-full mb-4">
                                        <link.icon className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-xl font-bold font-headline mb-2">{link.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-4">{link.description}</p>
                                    <span className="text-accent font-semibold flex items-center justify-center gap-2">
                                        Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}
