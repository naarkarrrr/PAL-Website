
import { PageHeader } from "@/components/shared/PageHeader";
import { PawPrint } from "lucide-react";

export default function AnimalDetailPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <PageHeader
        title="Adoption Coming Soon"
        subtitle="This section is currently under construction."
      />
      <div className="container mx-auto px-4 py-16 text-center">
        <PawPrint className="mx-auto h-16 w-16 text-primary mb-6" />
        <h2 className="text-3xl font-bold font-headline mb-4">Adoption Platform Launching Soon!</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We are preparing our new adoption gallery to introduce you to all the lovely animals in our care. Thank you for your patience!
        </p>
      </div>
    </div>
  );
}
