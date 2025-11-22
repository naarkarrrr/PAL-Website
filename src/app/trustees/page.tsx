import { PageHeader } from "@/components/shared/PageHeader";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { TeamCard } from "@/components/team/TeamCard";

const trustees = [
    {
        name: "Anjali Mehta",
        role: "Chairperson",
        imageUrl: "https://picsum.photos/seed/anjali/600/600",
        bio: "Oversees the foundation's strategic direction and ensures our mission is always at the forefront.",
    },
    {
        name: "Vikram Reddy",
        role: "Treasurer",
        imageUrl: "https://picsum.photos/seed/vikram/600/600",
        bio: "Manages the foundation's finances with transparency and a commitment to our cause.",
    },
    {
        name: "Sunita Patel",
        role: "Secretary",
        imageUrl: "https://picsum.photos/seed/sunita/600/600",
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
