import { PageHeader } from "@/components/shared/PageHeader";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

const timelineEvents = [
    { year: 2020, event: "Founded with a vision to be a voice for the voiceless." },
    { year: 2021, event: "Launched our 24/7 ambulance service, rescuing over 100 animals in the first year." },
    { year: 2022, event: "Expanded our volunteer program, doubling our team of dedicated animal lovers." },
    { year: 2023, event: "Reached a milestone of 1,000 successful adoptions and rehabilitations." },
];

export default function OurStoryPage() {
    const headerImage = PlaceHolderImages.find(p => p.id === 'about_header');
    const founderImage = PlaceHolderImages.find(p => p.id === 'founder');
    return (
        <div>
             <PageHeader
                title="Our Story"
                subtitle="From a humble beginning to a beacon of hope for animals in need."
                imageUrl={headerImage?.imageUrl}
                imageHint={headerImage?.imageHint}
                imageAlt={headerImage?.description}
            />
             <div className="container mx-auto px-4 py-4">
                <Breadcrumbs
                    segments={[
                        { title: 'Home', href: '/' },
                        { title: 'Who We Are', href: '/our-story' },
                        { title: 'Our Story', href: '/our-story' },
                    ]}
                />
            </div>

            <section className="container mx-auto px-4 py-16">
                 <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative aspect-square">
                        <Image
                            src={founderImage?.imageUrl || ''}
                            alt={founderImage?.description || ''}
                            data-ai-hint={founderImage?.imageHint}
                            fill
                            className="rounded-lg shadow-xl object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold font-headline mb-4">A Message from Our Founder</h2>
                        <div className="text-muted-foreground space-y-4">
                            <p>PAL Welfare Foundation began with a simple yet powerful vision—to be the voice for the voiceless and create a safe, compassionate world for all living beings. Founded in 2020, the foundation has since grown into a trusted and registered entity, dedicated to the welfare and protection of animals and birds across India.</p>
                            <p>The heart and soul behind this movement is our visionary founder, Sr. PI. Sudhir Kudalker Sir—a respected officer and a compassionate soul who transformed his love for animals into a life-changing mission. His deep-rooted belief in justice, empathy, and responsibility towards all beings became the driving force behind PAL. Under his leadership, PAL has not only saved lives but also ignited a spark of awareness and compassion within communities.</p>
                        </div>
                        <p className="font-bold font-headline text-lg mt-6">- Sr. PI. Sudhir Kudalker Sir</p>
                        <p className="text-muted-foreground">Founder, PAL Foundation</p>
                    </div>
                </div>
                <div className="mt-16 text-muted-foreground space-y-4 max-w-4xl mx-auto">
                    <p>Since its inception, PAL has rescued and rehabilitated thousands of animals and birds, ranging from street dogs and cats to injured wildlife and distressed birds. Our foundation has also actively provided legal assistance, ensured justice for cruelty cases, and advocated for the legal and fundamental rights of animals and birds in India.</p>
                    <p>What sets PAL apart is our focus on education, awareness, and systemic change. We believe in creating a society that not only helps animals in distress but also understands and protects their rights.</p>
                    <p>From hands-on rescues to community drives, legal action to awareness campaigns, PAL continues to grow—driven by the values instilled by our founder and powered by a team of passionate volunteers, supporters, and well-wishers.</p>
                    <p>Together, we are building a future where compassion leads the way, and every life—no matter how small—is treated with dignity, love, and respect.</p>
                </div>
            </section>

             <section className="bg-primary/10 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold font-headline text-center mb-12">Our Journey Through the Years</h2>
                    <div className="relative">
                        <div className="absolute left-1/2 h-full w-0.5 bg-primary/30 transform -translate-x-1/2"></div>
                        {timelineEvents.map((item, index) => (
                            <div key={index} className="relative mb-8 flex justify-center items-center">
                                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                                    <h3 className="text-xl font-bold font-headline">{item.year}</h3>
                                    <p className="text-muted-foreground">{item.event}</p>
                                </div>
                                <div className="w-1/12 flex-shrink-0">
                                    <div className="h-6 w-6 bg-accent rounded-full mx-auto flex items-center justify-center">
                                        <CheckCircle className="h-4 w-4 text-accent-foreground" />
                                    </div>
                                </div>
                                <div className={`w-5/12 ${index % 2 !== 0 ? 'text-right' : ''}`}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
