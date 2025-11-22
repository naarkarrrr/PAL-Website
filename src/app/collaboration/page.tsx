
import { CollaborationForm } from "@/components/forms/CollaborationForm";
import { PageHeader } from "@/components/shared/PageHeader";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function CollaborationPage() {
    const headerImage = PlaceHolderImages.find(p => p.id === 'team_header');
  return (
    <div>
        <PageHeader
        title="Collaborate With Us"
        subtitle="Let's work together to create a greater impact for animal welfare."
        imageUrl={headerImage?.imageUrl}
        imageHint={headerImage?.imageHint}
        imageAlt={headerImage?.description}
        />
        <div className="container mx-auto max-w-3xl px-4 py-16">
            <h2 className="text-2xl font-bold text-center mb-4 font-headline">Collaboration Proposal</h2>
            <p className="text-center text-muted-foreground mb-8">
                We are always open to new ideas and partnerships. If you have a project or initiative in mind, please share the details below.
            </p>
            <CollaborationForm />
      </div>
    </div>
  );
}
