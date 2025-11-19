import { PageHeader } from "@/components/shared/PageHeader";
import { AnimalCard } from "@/components/adoption/AnimalCard";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { Animal } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


async function getAnimals(): Promise<Animal[]> {
  const mockAnimals: Animal[] = PlaceHolderImages
    .filter(p => ['1', '2', '3', '4', '5', '6'].includes(p.id))
    .map(p => ({
      id: p.id,
      name: p.description,
      species: p.imageHint.includes('cat') ? 'Cat' : 'Dog',
      breed: p.imageHint.includes('golden') ? 'Golden Retriever' : 
             p.imageHint.includes('tabby') ? 'Tabby' :
             p.imageHint.includes('shepherd') ? 'German Shepherd' : 'Mixed Breed',
      age: 'Adult',
      gender: Math.random() > 0.5 ? 'Male' : 'Female',
      personality: 'Friendly and playful',
      description: `This is a wonderful animal looking for a forever home.`,
      imageUrl: p.imageUrl,
      imageHint: p.imageHint
    }));
  
  return mockAnimals;
}


export default async function AdoptPage() {
  const animals = await getAnimals();

  return (
    <div>
      <PageHeader
        title="Find Your New Best Friend"
        subtitle="Browse our loving animals who are waiting for a forever home."
      />
      <div className="container mx-auto px-4 py-16">
        <div className="bg-card shadow-lg rounded-xl p-6 mb-12 sticky top-24 z-10 border">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 items-end">
            <div className="sm:col-span-2 md:col-span-4 lg:col-span-2">
              <label htmlFor="search" className="block text-sm font-medium text-foreground mb-2">Search by keyword</label>
              <div className="relative">
                 <Input id="search" placeholder="e.g. Golden Retriever, playful..." className="pl-10" />
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
            </div>
             <div>
              <label htmlFor="type" className="block text-sm font-medium text-foreground mb-2">Animal Type</label>
                <Select>
                  <SelectTrigger id="type" className="bg-background">
                    <SelectValue placeholder="Any Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dog">Dog</SelectItem>
                    <SelectItem value="cat">Cat</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
            </div>
             <div>
               <label htmlFor="age" className="block text-sm font-medium text-foreground mb-2">Age</label>
                 <Select>
                  <SelectTrigger id="age" className="bg-background">
                    <SelectValue placeholder="Any Age" />
                  </Trigger>
                  <SelectContent>
                    <SelectItem value="puppy">Puppy/Kitten</SelectItem>
                    <SelectItem value="young">Young</SelectItem>
                    <SelectItem value="adult">Adult</SelectItem>
                     <SelectItem value="senior">Senior</SelectItem>
                  </SelectContent>
                </Select>
            </div>
            <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-base">
              <Search className="mr-2 h-4 w-4"/>
              Find a Pet
            </Button>
          </div>
        </div>

        {animals.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {animals.map((animal) => (
              <AnimalCard key={animal.id} animal={animal} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-lg text-muted-foreground">No animals are currently available for adoption. Please check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}
