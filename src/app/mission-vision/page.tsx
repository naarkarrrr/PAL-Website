import { PageHeader } from "@/components/shared/PageHeader";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Target, Eye, Heart, Shield, CheckCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import type { Mission, Vision } from "@/lib/types";

const missionData: Mission = {
    title: "Our Mission",
    description: "To rescue, rehabilitate, and rehome animals in need while advocating for their rights and welfare through community engagement, education, and direct action. We strive to create a compassionate world where every animal is treated with dignity and respect.",
    points: [
        "To provide immediate medical attention and shelter to animals in distress.",
        "To run robust adoption and release programs to find loving forever homes.",
        "To conduct sterilization and vaccination drives to manage stray populations humanely.",
        "To educate communities about animal welfare and responsible pet ownership.",
        "To offer legal support against animal cruelty and advocate for stronger laws."
    ]
}

const visionData: Vision = {
    title: "Our Vision",
    description: "We envision a future where every community coexists harmoniously with its animals, where cruelty is non-existent, and where every stray has a safe place to call home. Our goal is a society that values all life and actively participates in protecting it.",
    cards: [
        {
            icon: Heart,
            title: "Zero Cruelty",
            text: "A city where no animal suffers from abuse or neglect."
        },
        {
            icon: Shield,
            title: "100% Vaccination",
            text: "Complete rabies vaccination coverage for community animals."
        },
    ]
}


export default function MissionVisionPage() {
    const headerImage = PlaceHolderImages.find(p => p.id === 'mission_header');
    return (
        <div>
            <PageHeader
                title="Our Mission & Vision"
                subtitle="The driving force behind our commitment to animal welfare."
                imageUrl={headerImage?.imageUrl}
                imageHint={headerImage?.imageHint}
                imageAlt={headerImage?.description}
            />
            <div className="container mx-auto px-4 py-4">
                <Breadcrumbs
                    segments={[
                        { title: 'Home', href: '/' },
                        { title: 'Who We Are', href: '/our-story' },
                        { title: 'Mission & Vision', href: '/mission-vision' },
                    ]}
                />
            </div>
            <section className="container mx-auto px-4 py-16">
                 <div className="grid md:grid-cols-2 gap-16 items-start">
                    {/* Mission Section */}
                    <div className="bg-card p-8 rounded-lg shadow-lg border">
                        <div className="flex items-center gap-4 mb-6">
                            <Target className="h-10 w-10 text-accent" />
                            <h2 className="text-3xl font-bold font-headline">{missionData.title}</h2>
                        </div>
                        <p className="text-muted-foreground mb-6">{missionData.description}</p>
                        <ul className="space-y-3">
                            {missionData.points.map((point, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Vision Section */}
                    <div className="space-y-8">
                        <div className="bg-card p-8 rounded-lg shadow-lg border">
                             <div className="flex items-center gap-4 mb-6">
                                <Eye className="h-10 w-10 text-accent" />
                                <h2 className="text-3xl font-bold font-headline">{visionData.title}</h2>
                            </div>
                            <p className="text-muted-foreground">{visionData.description}</p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {visionData.cards.map((card) => (
                                 <div key={card.title} className="bg-primary/10 p-6 rounded-lg text-center">
                                    <card.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                                    <h3 className="text-xl font-bold font-headline mb-2">{card.title}</h3>
                                    <p className="text-muted-foreground">{card.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
