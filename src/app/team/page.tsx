'use client';

import { useState } from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { TeamCard } from "@/components/team/TeamCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type TeamMember = {
    name: string;
    role: string;
    imageUrl: string;
    bio: string;
    category: 'Admin' | 'Field' | 'Medical';
};

const allTeamMembers: TeamMember[] = [
    {
        name: "Samar Shiya",
        role: "Founder & Lead Rescuer",
        imageUrl: "https://picsum.photos/seed/samar/600/600",
        bio: "With over a decade of experience in animal welfare, Samar leads our rescue operations with unwavering dedication.",
        category: "Admin",
    },
    {
        name: "Jane Doe",
        role: "Adoption Coordinator",
        imageUrl: "https://picsum.photos/seed/jane/600/600",
        bio: "Jane connects our rescues with loving forever homes, ensuring a perfect match for every animal.",
        category: "Admin",
    },
    {
        name: "Dr. Emily Carter",
        role: "Lead Veterinarian",
        imageUrl: "https://picsum.photos/seed/emily/600/600",
        bio: "Dr. Carter oversees all medical operations, providing expert care to our most critical cases.",
        category: "Medical",
    },
    {
        name: "Raj Patel",
        role: "Senior Rescue Officer",
        imageUrl: "https://picsum.photos/seed/raj/600/600",
        bio: "Raj is our man on the ground, leading complex rescue missions with courage and compassion.",
        category: "Field",
    },
    {
        name: "Aisha Khan",
        role: "Veterinary Technician",
        imageUrl: "https://picsum.photos/seed/aisha/600/600",
        bio: "Aisha assists in surgeries and provides daily medical care to our rehabilitating animals.",
        category: "Medical",
    },
    {
        name: "John Smith",
        role: "Volunteer Manager",
        imageUrl: "https://picsum.photos/seed/john/600/600",
        bio: "John coordinates our incredible team of volunteers, the backbone of our organization.",
        category: "Admin",
    },
];

type Filter = 'All' | 'Admin' | 'Field' | 'Medical';

export default function TeamPage() {
    const [filter, setFilter] = useState<Filter>('All');

    const filteredMembers = filter === 'All'
        ? allTeamMembers
        : allTeamMembers.filter(member => member.category === filter);

    const headerImage = PlaceHolderImages.find(p => p.id === 'team_header');

    const filters: Filter[] = ['All', 'Admin', 'Field', 'Medical'];

    return (
        <div>
            <PageHeader
                title="Our Team"
                subtitle="Meet the dedicated individuals who make our work possible."
                imageUrl={headerImage?.imageUrl}
                imageHint={headerImage?.imageHint}
                imageAlt={headerImage?.description}
            />
            <div className="container mx-auto px-4 py-4">
                <Breadcrumbs
                    segments={[
                        { title: 'Home', href: '/' },
                        { title: 'Who We Are', href: '/our-story' },
                        { title: 'Our Team', href: '/team' },
                    ]}
                />
            </div>

            <section className="container mx-auto px-4 py-16">
                <div className="flex justify-center mb-12">
                    <div className="bg-card p-2 rounded-full border flex gap-2">
                        {filters.map(f => (
                            <Button
                                key={f}
                                variant="ghost"
                                onClick={() => setFilter(f)}
                                className={cn(
                                    "rounded-full px-6",
                                    filter === f && "bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary"
                                )}
                            >
                                {f}
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {filteredMembers.map(member => (
                        <TeamCard key={member.name} member={member} />
                    ))}
                </div>
            </section>
        </div>
    );
}
