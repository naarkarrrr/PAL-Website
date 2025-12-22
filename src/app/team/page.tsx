
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
    category: 'Leadership' | 'Advisory' | 'Trustee';
    socials?: {
        linkedin?: string;
        facebook?: string;
        instagram?: string;
    };
};

const allTeamMembers: TeamMember[] = [
    {
        name: "Sr. PI Sudhir Kudalkar",
        role: "Legal Adviser",
        imageUrl: "https://picsum.photos/seed/sudhir/600/600",
        bio: "Guides our legal strategies with extensive experience in law enforcement.",
        category: "Advisory",
        socials: {
            linkedin: "https://www.linkedin.com/in/sudhir-kudalkar-26041b2b4",
            facebook: "https://www.facebook.com/sudhir.kudalkar",
            instagram: "https://www.instagram.com/sudhirkudalkar?igsh=a2ZkeGs0bjJndWdq",
        },
    },
    {
        name: "Bhart Setra",
        role: "President",
        imageUrl: "https://i.postimg.cc/zfY8C7fy/pfp2.jpg",
        bio: "Leads the foundation with a vision for a compassionate world for all animals.",
        category: "Leadership",
        socials: {
            instagram: "https://www.instagram.com/bharat_satra_?igsh=MTdtanZzdGZ1OGtubQ==",
            facebook: "https://www.facebook.com/share/1BoMfeuHij/?mibextid=wwXIfr",
        },
    },
    {
        name: "Sandhya Shetty",
        role: "Secretary",
        imageUrl: "https://picsum.photos/seed/sandhya/600/600",
        bio: "Manages organizational duties and communications, ensuring smooth operations.",
        category: "Leadership",
        socials: {},
    },
    {
        name: "Rakhi Choudhary",
        role: "Treasurer",
        imageUrl: "https://picsum.photos/seed/rakhi/600/600",
        bio: "Handles the foundation's finances with transparency and dedication.",
        category: "Leadership",
        socials: {},
    },
    {
        name: "Subramaniam Parameswaran Iyer",
        role: "Trust Member",
        imageUrl: "https://picsum.photos/seed/subramaniam/600/600",
        bio: "A dedicated member of our trust, contributing to our strategic decisions.",
        category: "Trustee",
        socials: {},
    },
    {
        name: "Deepali Jain",
        role: "Trust Member",
        imageUrl: "https://picsum.photos/seed/deepali/600/600",
        bio: "An essential member of our trust, guiding our outreach and programs.",
        category: "Trustee",
        socials: {},
    },
    {
        name: "Pooja Lad",
        role: "Trust Member",
        imageUrl: "https://picsum.photos/seed/pooja/600/600",
        bio: "A passionate trust member focused on the welfare of animals.",
        category: "Trustee",
        socials: {
            instagram: "https://www.instagram.com/poobella27?igsh=M3NsNHdyanp0ajEw",
        },
    },
    {
        name: "Advocate Vijendra Jabra",
        role: "Board Advisory Member",
        imageUrl: "https://i.postimg.cc/g2ZGLQm5/pfp6.jpg",
        bio: "Provides expert advice to guide our foundation's mission and initiatives.",
        category: "Advisory",
        socials: {
            linkedin: "https://www.linkedin.com/in/vijendra-jabra-99b18913",
            facebook: "https://www.facebook.com/vijendraj",
            instagram: "https://www.instagram.com/vijendraj?igsh=N2RwZjlkNDJsZDI5",
        },
    },
    {
        name: "Adv Dr. Manjula Biswas",
        role: "Board Legal Adviser",
        imageUrl: "https://picsum.photos/seed/manjula/600/600",
        bio: "A seasoned lawyer specializing in animal welfare laws and legal advocacy.",
        category: "Advisory",
        socials: {
            instagram: "https://www.instagram.com/advmanjula?igsh=a28xZ2FzaHd1MmQz",
            facebook: "https://www.facebook.com/share/1Bzrh3Zp1G/?mibextid=wwXIfr",
        },
    },
];

type Filter = 'All' | 'Leadership' | 'Advisory' | 'Trustee';

export default function TeamPage() {
    const [filter, setFilter] = useState<Filter>('All');

    const filteredMembers = filter === 'All'
        ? allTeamMembers
        : allTeamMembers.filter(member => member.category === filter);

    const headerImage = PlaceHolderImages.find(p => p.id === 'team_header');

    const filters: Filter[] = ['All', 'Leadership', 'Advisory', 'Trustee'];

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
                    <div className="bg-card p-2 rounded-full border flex flex-wrap gap-2 justify-center">
                        {filters.map(f => (
                            <Button
                                key={f}
                                variant="ghost"
                                onClick={() => setFilter(f)}
                                className={cn(
                                    "rounded-full px-4 sm:px-6",
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
