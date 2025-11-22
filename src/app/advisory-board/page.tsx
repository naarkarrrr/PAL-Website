import { PageHeader } from "@/components/shared/PageHeader";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { TeamCard } from "@/components/team/TeamCard";

const advisoryBoardMembers = [
    {
        name: "Dr. Anya Sharma",
        role: "Veterinary Medicine Expert",
        imageUrl: "https://picsum.photos/seed/anya/600/600",
        bio: "A leading veterinarian with 20 years of experience in animal health and surgical procedures.",
    },
    {
        name: "Rajesh Kumar",
        role: "Legal Counsel",
        imageUrl: "https://picsum.photos/seed/rajesh/600/600",
        bio: "A seasoned lawyer specializing in animal welfare laws and public interest litigation.",
    },
    {
        name: "Priya Singh",
        role: "Community Outreach Strategist",
        imageUrl: "https://picsum.photos/seed/priya/600/600",
        bio: "An expert in building community programs and driving public engagement for social causes.",
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
