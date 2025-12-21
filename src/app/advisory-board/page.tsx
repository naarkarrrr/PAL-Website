
import { PageHeader } from "@/components/shared/PageHeader";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { TeamCard } from "@/components/team/TeamCard";

const advisoryBoardMembers = [
    {
        name: "Advocate Vijendra Jabra",
        role: "Board Advisory Member",
        imageUrl: "https://picsum.photos/seed/vijendra/600/600",
        bio: "Provides expert advice to guide our foundation's mission and initiatives.",
    },
    {
        name: "Adv Dr. Manjula Biswas",
        role: "Board Legal Adviser",
        imageUrl: "https://picsum.photos/seed/manjula/600/600",
        bio: "A seasoned lawyer specializing in animal welfare laws and legal advocacy.",
    },
    {
        name: "Sr. PI Sudhir Kudalkar",
        role: "Legal Adviser",
        imageUrl: "https://picsum.photos/seed/sudhir/600/600",
        bio: "Guides our legal strategies with extensive experience in law enforcement.",
    },
];

export default function AdvisoryBoardPage() {
  return (
      <div>
        <PageHeader
            title="Advisory Board"
            subtitle="Guiding our mission with wisdom and expertise."
        />
        <div className="container mx-auto px-4 py-4">
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'Who We Are', href: '/our-story' },
                    { title: 'Advisory Board', href: '/advisory-board' },
                ]}
            />
        </div>

        <section className="container mx-auto px-4 py-16">
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {advisoryBoardMembers.map(member => (
                    <TeamCard key={member.name} member={member} />
                ))}
            </div>
        </section>
      </div>
  );
}
