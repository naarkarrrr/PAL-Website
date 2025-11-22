
import { PageHeader } from "@/components/shared/PageHeader";
import { PawPrint } from "lucide-react";

export default function AdoptPage() {
  return (
    <div>
      <PageHeader
        title="Adopt a Pet"
        subtitle="Find your perfect companion. Our adoption section is launching soon!"
      />
      <div className="container mx-auto px-4 py-16 text-center">
        <PawPrint className="mx-auto h-16 w-16 text-primary mb-6" />
        <h2 className="text-3xl font-bold font-headline mb-4">Coming Soon!</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We are working hard to bring our new adoption platform to life. Soon, you'll be able to meet all the wonderful animals waiting for their forever homes. Please check back shortly!
        </p>
      </div>
    </div>
  );
}
