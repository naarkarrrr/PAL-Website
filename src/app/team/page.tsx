import { PageHeader } from "@/components/shared/PageHeader";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { TeamCard } from "@/components/team/TeamCard";

const teamMembers = [
    {
        name: "Samar Shiya",
        role: "Founder & Lead Rescuer",
        imageUrl: PlaceHolderImages.find(p => p.id === 'founder')?.imageUrl || '',
        bio: "With over a decade of experience in animal welfare, Samar leads our rescue operations with unwavering dedication.",
    },
    {
        name: "Jane Doe",
        role: "Adoption Coordinator",
        imageUrl: "https://picsum.photos/seed/team2/200/200",
        bio: "Jane connects our rescues with loving forever homes, ensuring a perfect match for every animal.",
    },
    {
        name: "John Smith",
        role: "Volunteer Manager",
        imageUrl: "https://picsum.photos/seed/team3/200/200",
        bio: "John coordinates our incredible team of volunteers, the backbone of our organization.",
    },
];

export default function TeamPage() {
    const headerImage = PlaceHolderImages.find(p => p.id === 'team_header');
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
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {teamMembers.map(member => (
                    <TeamCard key={member.name} member={member} />
                ))}
            </div>
        </section>
      </div>
  );
}
