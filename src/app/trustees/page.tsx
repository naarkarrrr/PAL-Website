
import { PageHeader } from "@/components/shared/PageHeader";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { TeamCard } from "@/components/team/TeamCard";

const trustees = [
    {
        name: "Bhart Setra",
        role: "President",
        imageUrl: "https://picsum.photos/seed/bhart/600/600",
        bio: "Leads the foundation with a vision for a compassionate world for all animals.",
    },
    {
        name: "Sandhya Shetty",
        role: "Secretary",
        imageUrl: "https://picsum.photos/seed/sandhya/600/600",
        bio: "Manages organizational duties and communications, ensuring smooth operations.",
    },
    {
        name: "Rakhi Choudhary",
        role: "Treasurer",
        imageUrl: "https://picsum.photos/seed/rakhi/600/600",
        bio: "Handles the foundation's finances with transparency and dedication.",
    },
    {
        name: "Subramaniam Parameswaran Iyer",
        role: "Trust Member",
        imageUrl: "https://picsum.photos/seed/subramaniam/600/600",
        bio: "A dedicated member of our trust, contributing to our strategic decisions.",
    },
    {
        name: "Deepali Jain",
        role: "Trust Member",
        imageUrl: "https://picsum.photos/seed/deepali/600/600",
        bio: "An essential member of our trust, guiding our outreach and programs.",
    },
    {
        name: "Pooja Lad",
        role: "Trust Member",
        imageUrl: "https://picsum.photos/seed/pooja/600/600",
        bio: "A passionate trust member focused on the welfare of animals.",
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
