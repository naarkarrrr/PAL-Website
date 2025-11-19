import { AddAnimalForm } from '@/components/forms/AddAnimalForm';
import { PageHeader } from '@/components/shared/PageHeader';

export default function AddAnimalPage() {
  return (
    <div>
      <PageHeader
        title="Add New Animal Profile"
        subtitle="Create a new profile for an animal in our care. Use the AI tool to enrich the description."
      />
      <div className="container mx-auto max-w-3xl px-4 py-16">
         <h2 className="text-2xl font-bold text-center mb-4 font-headline">Animal Information</h2>
        <p className="text-center text-muted-foreground mb-8">
          Fill in the details below. The more information you provide, the better.
        </p>
        <AddAnimalForm />
      </div>
    </div>
  );
}
