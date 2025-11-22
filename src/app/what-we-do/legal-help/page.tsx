'use client';
import { PageHeader } from "@/components/shared/PageHeader";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { SeniorPoliceIcon } from "@/components/icons/SeniorPoliceIcon";
import { LawyerIcon } from "@/components/icons/LawyerIcon";
import { WelfareOfficerIcon } from "@/components/icons/WelfareOfficerIcon";
import { LegalCoordinatorIcon } from "@/components/icons/LegalCoordinatorIcon";
import { MotionDiv } from "@/components/shared/MotionDiv";

const legalTeamStats = [
    {
        icon: SeniorPoliceIcon,
        count: 1,
        title: "Senior Police Inspector",
        description: "With expertise in law enforcement, the Senior Police Inspector leads our legal efforts, ensuring that justice is served for the victims of animal cruelty.",
    },
    {
        icon: LawyerIcon,
        count: 25,
        title: "Skilled Lawyers",
        description: "Our team of lawyers fights tirelessly in courtrooms, ensuring that those who harm animals are held accountable. They advocate for the rights of animals and pursue justice with dedication.",
    },
    {
        icon: WelfareOfficerIcon,
        count: 9,
        title: "Animal Welfare Officers",
        description: "These officers work directly with communities and animal shelters, responding to cases of cruelty and helping animals in need. They ensure animals receive the care and protection they deserve.",
    },
    {
        icon: LegalCoordinatorIcon,
        count: 10,
        title: "Legal Coordinators",
        description: "Our coordinators manage the legal process, ensuring cases are properly followed up and resources are allocated effectively.",
    }
]

export default function LegalHelpPage() {
    const headerImage = PlaceHolderImages.find(p => p.id === 'legal_help_header');
  return (
    <>
      <PageHeader
        title="Legal Help for Animals"
        subtitle="Providing free or low-cost legal guidance and support for animal cruelty cases."
        imageUrl={headerImage?.imageUrl}
        imageHint={headerImage?.imageHint}
        imageAlt={headerImage?.description}
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
             <div className="text-center mb-12 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold font-headline mb-4">Justice for the Voiceless</h2>
                <p className="text-lg text-muted-foreground">Our dedicated legal team, comprising experienced police officers, lawyers, and advocates, works tirelessly to ensure that the laws protecting animals are upheld and that offenders face legal consequences.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {legalTeamStats.map((item, index) => (
                <MotionDiv
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative h-full bg-card p-8 rounded-2xl shadow-sm border hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                    <div className="absolute top-8 right-8 text-7xl font-bold font-headline text-muted-foreground/10">
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                    <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                            <item.icon className="w-12 h-12" />
                        </div>
                      </div>
                      <div className="text-center sm:text-left">
                        <h3 className="text-2xl font-bold font-headline mb-2">{item.count} {item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </MotionDiv>
              ))}
            </div>
        </div>
      </section>
    </>
  );
}
