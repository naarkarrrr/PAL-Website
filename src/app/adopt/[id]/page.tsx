
'use client';
import { useDoc } from '@/hooks/use-firestore';
import type { Animal } from '@/lib/types';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';
import { PawPrint, ShieldCheck, Heart, Home, BadgeInfo } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function AnimalDetailPage({ params }: { params: { id: string } }) {
  const { data: animal, isLoading, error } = useDoc<Animal>(`adoptable_animals/${params.id}`);

  if (isLoading) {
    return <AnimalDetailSkeleton />;
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">Error: {error.message}</div>;
  }
  
  if (!animal) {
    return <div className="text-center py-20">Animal not found.</div>;
  }

  return (
    <div>
        <div className="relative w-full h-[50vh] bg-primary/10">
            {animal.imageUrl &&
                <Image
                    src={animal.imageUrl}
                    alt={animal.name}
                    data-ai-hint={animal.imageHint}
                    fill
                    className="object-cover"
                    priority
                />
            }
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="container mx-auto px-4 -mt-32 relative z-10">
            <div className="bg-card p-8 md:p-12 rounded-2xl shadow-lg">
                <div className="md:flex justify-between items-start">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-2">{animal.name}</h1>
                        <p className="text-lg text-muted-foreground mb-4">{animal.breed}</p>
                        <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary">{animal.species}</Badge>
                            <Badge variant="secondary">{animal.age}</Badge>
                            <Badge variant="secondary">{animal.gender}</Badge>
                        </div>
                    </div>
                    <Button size="lg" className="mt-4 md:mt-0">Inquire About Adoption</Button>
                </div>

                <div className="border-t my-8" />
                
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-bold font-headline mb-4">About {animal.name}</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>{animal.description}</p>
                            
                            <div className="bg-primary/5 p-4 rounded-lg">
                                <h3 className="font-semibold text-lg flex items-center gap-2 mb-2 text-primary"><PawPrint className="h-5 w-5"/> Personality</h3>
                                <p>{animal.personality}</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        {animal.medicalNeeds && (
                             <div className="bg-card border p-4 rounded-lg">
                                <h3 className="font-semibold text-lg flex items-center gap-2 mb-2 text-accent"><ShieldCheck className="h-5 w-5"/> Medical Needs</h3>
                                <p className="text-sm text-muted-foreground">{animal.medicalNeeds}</p>
                            </div>
                        )}
                       {animal.idealHome && (
                            <div className="bg-card border p-4 rounded-lg">
                                <h3 className="font-semibold text-lg flex items-center gap-2 mb-2 text-accent"><Home className="h-5 w-5"/> Ideal Home</h3>
                                <p className="text-sm text-muted-foreground">{animal.idealHome}</p>
                            </div>
                       )}
                         <div className="bg-card border p-4 rounded-lg">
                            <h3 className="font-semibold text-lg flex items-center gap-2 mb-2 text-accent"><BadgeInfo className="h-5 w-5"/> Adoption Status</h3>
                            <p className="text-sm text-muted-foreground">Available for Adoption</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

function AnimalDetailSkeleton() {
    return (
        <div>
            <Skeleton className="h-[50vh] w-full" />
            <div className="container mx-auto px-4 -mt-32 relative z-10">
                <div className="bg-card p-8 md:p-12 rounded-2xl shadow-lg">
                    <div className="md:flex justify-between items-start">
                        <div>
                            <Skeleton className="h-12 w-64 mb-2" />
                            <Skeleton className="h-6 w-40 mb-4" />
                            <div className="flex gap-2">
                                <Skeleton className="h-6 w-16" />
                                <Skeleton className="h-6 w-16" />
                                <Skeleton className="h-6 w-16" />
                            </div>
                        </div>
                        <Skeleton className="h-14 w-48 mt-4 md:mt-0" />
                    </div>
                     <div className="border-t my-8" />
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-2 space-y-4">
                            <Skeleton className="h-8 w-48 mb-4" />
                            <Skeleton className="h-5 w-full" />
                            <Skeleton className="h-5 w-full" />
                            <Skeleton className="h-5 w-3/4" />
                             <div className="bg-primary/5 p-4 rounded-lg space-y-2">
                                <Skeleton className="h-6 w-32" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-5/6" />
                             </div>
                        </div>
                        <div className="space-y-6">
                            <Skeleton className="h-24 w-full" />
                            <Skeleton className="h-24 w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

