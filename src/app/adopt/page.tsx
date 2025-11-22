
'use client';
import { PageHeader } from "@/components/shared/PageHeader";
import { AnimalCard } from "@/components/adoption/AnimalCard";
import { useCollectionData } from "@/hooks/use-firestore";
import type { Animal } from "@/lib/types";
import { Skeleton } from "@/components/ui/skeleton";
import { PawPrint } from "lucide-react";

export default function AdoptPage() {
  const { data: animals, isLoading, error } = useCollectionData('adoptable_animals');

  return (
    <div>
      <PageHeader
        title="Adopt a Pet"
        subtitle="Find your perfect companion. These wonderful animals are waiting for a loving home."
      />
      <div className="container mx-auto px-4 py-16">
        {isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-48 w-full" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        )}
        
        {!isLoading && (!animals || animals.length === 0) && (
             <div className="text-center bg-card border border-dashed rounded-xl p-8 max-w-lg mx-auto">
                <PawPrint className="mx-auto h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold font-headline mb-2">No Animals Available Right Now</h3>
                <p className="text-muted-foreground">
                    It looks like all our current rescues have found their forever homes! Please check back soon, as we're always rescuing and rehabilitating new animals in need.
                </p>
            </div>
        )}

        {!isLoading && animals && animals.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {(animals as Animal[]).map((animal) => (
              <AnimalCard key={animal.id} animal={animal} />
            ))}
          </div>
        )}

        {error && <p className="text-center text-red-500">Error loading animals: {error.message}</p>}
      </div>
    </div>
  );
}
