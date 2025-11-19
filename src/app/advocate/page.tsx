
import { AdvocateForm } from '@/components/forms/AdvocateForm';
import { PageHeader } from "@/components/shared/PageHeader";

export default function AdvocatePage() {
  return (
    <div>
        <PageHeader
        title="Become an Advocate"
        subtitle="Join our network of legal professionals and human rights officers to fight for animal welfare."
        />
        <div className="container mx-auto max-w-3xl px-4 py-16">
            <h2 className="text-2xl font-bold text-center mb-4 font-headline">Advocate & Officer Application</h2>
            <p className="text-center text-muted-foreground mb-8">
                If you are a legal professional or a human rights advocate passionate about animal welfare, we invite you to join our cause.
            </p>
            <AdvocateForm />
      </div>
    </div>
  );
}
