import { PageHeader } from "@/components/shared/PageHeader";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

const timelineEvents = [
    { year: 2018, event: "Founded with a mission to provide a voice for the voiceless." },
    { year: 2019, event: "Launched our 24/7 ambulance service, rescuing over 100 animals in the first year." },
    { year: 2020, event: "Expanded our volunteer program, doubling our team of dedicated animal lovers." },
    { year: 2021, event: "Opened our first rehabilitation center, providing specialized care for injured animals." },
    { year: 2022, event: "Reached a milestone of 1,000 successful adoptions, finding forever homes for our rescues." },
    { year: 2023, event: "Launched the 'Feed the Stray' initiative, providing daily meals to over 500 animals." },
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
                        <p className="text-lg text-muted-foreground mb-6">
                            “Our journey began with a simple act of kindness—a commitment to not look away. Every animal deserves a chance at life, love, and a place to call home. PAL Foundation is the embodiment of that belief, and every rescue, every adoption, every volunteer who joins us is a testament to the power of compassion. We are not just an organization; we are a community united by a shared love for animals.”
                        </p>
                        <p className="font-bold font-headline text-lg">- Samar Shiya</p>
                        <p className="text-muted-foreground">Founder, PAL Foundation</p>
                    </div>
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
