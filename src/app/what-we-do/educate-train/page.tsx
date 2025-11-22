
import { PageHeader } from "@/components/shared/PageHeader";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { School, Users, Building, GraduationCap } from "lucide-react";

const educationPrograms = [
    {
        icon: School,
        title: "School Workshops",
        description: "Engaging interactive sessions for children to instill a sense of empathy and responsibility towards animals from a young age."
    },
    {
        icon: Users,
        title: "Community Awareness Programs",
        description: "We conduct programs in residential communities to educate people about stray animal care, first aid, and conflict mitigation."
    },
    {
        icon: Building,
        title: "Corporate Seminars",
        description: "Partnering with companies to run workshops on animal welfare, encouraging corporate social responsibility and employee engagement."
    },
    {
        icon: GraduationCap,
        title: "Volunteer Training",
        description: "Equipping our volunteers with the necessary skills for safe animal handling, rescue techniques, and first aid."
    }
]


export default function EducateTrainPage() {
    const headerImage = PlaceHolderImages.find(p => p.id === 'gallery5');
  return (
    <>
      <PageHeader
        title="Educate & Train"
        subtitle="Fostering a compassionate society through awareness and education."
        imageUrl={headerImage?.imageUrl}
        imageHint={headerImage?.imageHint}
        imageAlt={headerImage?.description}
      />
       <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold font-headline mb-4">Building a Compassionate Future</h2>
                <p className="text-lg text-muted-foreground">Education is the cornerstone of lasting change. Our outreach programs are designed to sensitize individuals from all walks of life about animal welfare and responsible coexistence.</p>
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {educationPrograms.map(program => (
                    <div key={program.title} className="bg-card p-6 rounded-xl h-full text-center border shadow-sm">
                        <div className="inline-block bg-primary/10 text-primary p-4 rounded-full mb-4">
                            <program.icon className="h-10 w-10" />
                        </div>
                        <h3 className="text-xl font-bold font-headline mb-2">{program.title}</h3>
                        <p className="text-muted-foreground text-sm">{program.description}</p>
                    </div>
                ))}
            </div>
        </div>
       </section>
    </>
  );
}
