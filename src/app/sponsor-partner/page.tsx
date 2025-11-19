
import { SponsorForm } from "@/components/forms/SponsorForm";
import { PageHeader } from "@/components/shared/PageHeader";

export default function SponsorPartnerPage() {
  return (
    <div>
        <PageHeader
        title="Sponsor & Partner"
        subtitle="Align your brand with a cause that matters. Join us as a corporate sponsor or partner."
        />
        <div className="container mx-auto max-w-3xl px-4 py-16">
            <h2 className="text-2xl font-bold text-center mb-4 font-headline">Partnership Inquiry Form</h2>
            <p className="text-center text-muted-foreground mb-8">
                Tell us a bit about your organization and how you'd like to get involved. We'll get back to you to discuss the possibilities.
            </p>
            <SponsorForm />
        </div>
    </div>
  );
}
