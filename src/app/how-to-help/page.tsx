
import { PageHeader } from "@/components/shared/PageHeader";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Heart, Users, PawPrint, Droplet, Utensils, Shield, HandHelping, Stethoscope } from "lucide-react";
import Link from "next/link";

const helpOptions = [
    {
        icon: Heart,
        title: "Donate",
        description: "Your financial support funds our rescue missions, medical treatments, and daily operations.",
        href: "/donate"
    },
    {
        icon: Users,
        title: "Volunteer",
        description: "Give your time and skills to make a direct impact on the ground.",
        href: "/volunteer"
    },
    // {
    //     icon: PawPrint,
    //     title: "Adopt a Pet",
    //     description: "Open your heart and home to an animal in need of a second chance.",
    //     href: "/adopt"
    // },
    {
        icon: Droplet,
        title: "Water Bowl Project",
        description: "Help us provide clean drinking water to stray animals, especially during hot months.",
        href: "/how-to-help/water-bowl-project"
    },
    {
        icon: Utensils,
        title: "Feeding Drive",
        description: "Support our efforts to ensure no stray animal goes hungry.",
        href: "/how-to-help/feeding-drive"
    },
    {
        icon: Shield,
        title: "Vaccination Drive",
        description: "Contribute to our mass vaccination camps to prevent deadly diseases.",
        href: "/how-to-help/vaccination-drive"
    },
     {
        icon: HandHelping,
        title: "Collar a Stray",
        description: "Sponsor a reflective collar to prevent night-time road accidents.",
        href: "/how-to-help/color-belt-save-life"
    },
    {
        icon: Stethoscope,
        title: "Sterilization Program",
        description: "Help us humanely manage the stray population through our ABC program.",
        href: "/how-to-help/sterilization"
    }
]


export default function HowToHelpPage() {
    const headerImage = PlaceHolderImages.find(p => p.id === 'volunteer_header');
  return (
    <>
        <PageHeader
        title="How You Can Help"
        subtitle="Every act of kindness, big or small, contributes to a brighter future for our animals. Find out how you can make a difference."
        imageUrl={headerImage?.imageUrl}
        imageHint={headerImage?.imageHint}
        imageAlt={headerImage?.description}
        />
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {helpOptions.map(option => (
                        <Link key={option.title} href={option.href} className="block group">
                            <div className="bg-card p-6 rounded-xl h-full text-center border hover:border-primary/50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                <div className="inline-block bg-accent/10 text-accent p-4 rounded-full mb-4">
                                    <option.icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-lg font-bold font-headline mb-2">{option.title}</h3>
                                <p className="text-muted-foreground text-sm">{option.description}</p>
                            </div>
                        </Link>
                    ))}
                 </div>
            </div>
        </section>
    </>
  );
}
