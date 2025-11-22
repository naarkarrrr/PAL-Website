import { PageHeader } from "@/components/shared/PageHeader";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { TeamCard } from "@/components/team/TeamCard";

const trustees = [
    {
        name: "Anjali Mehta",
        role: "Chairperson",
        imageUrl: "https://i.postimg.cc/L6h5gXzF/Whats-App-Image-2024-07-25-at-12-05-20-PM.jpg",
        bio: "Oversees the foundation's strategic direction and ensures our mission is always at the forefront.",
    },
    {
        name: "Vikram Reddy",
        role: "Treasurer",
        imageUrl: "https://i.postimg.cc/HLp1NRG0/Whats-App-Image-2024-07-25-at-12-05-20-PM-1.jpg",
        bio: "Manages the foundation's finances with transparency and a commitment to our cause.",
    },
    {
        name: "Sunita Patel",
        role: "Secretary",
        imageUrl: "https://i.postimg.cc/T3q1T55S/Whats-App-Image-2024-07-25-at-12-05-21-PM-1.jpg",
        bio: "Handles our organizational records and communications, keeping our operations smooth.",
    },
];

export default function TrusteesPage() {
  return (
      <div>
        <PageHeader
            title="Board of Trustees"
            subtitle="The dedicated individuals governing our foundation."
        />
        <div className="container mx-auto px-4 py-4">
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'Who We Are', href: '/our-story' },
                    { title: 'Trustees', href: '/trustees' },
                ]}
            />
        </div>

        <section className="container mx-auto px-4 py-16">
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {trustees.map(member => (
                    <TeamCard key={member.name} member={member} />
                ))}
            </div>
        </section>
      </div>
  );
}
