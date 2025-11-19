import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Animal } from '@/lib/types';
import { PawPrint, Heart } from 'lucide-react';
import Link from 'next/link';
import { MotionDiv } from '@/components/shared/MotionDiv';

async function getAnimalById(id: string): Promise<Animal | null> {
  // Mock fetching logic
  const animalData = PlaceHolderImages.find(p => p.id === id);
  if (!animalData) {
    return null;
  }
  return {
    id: animalData.id,
    name: animalData.description,
    species: animalData.imageHint.includes('cat') ? 'Cat' : 'Dog',
    breed: animalData.imageHint.includes('golden') ? 'Golden Retriever' : 
           animalData.imageHint.includes('tabby') ? 'Tabby' :
           animalData.imageHint.includes('shepherd') ? 'German Shepherd' : 'Mixed Breed',
    age: 'Adult',
    gender: 'Female',
    personality: 'Curious, affectionate, and loves to play. Great with children and other pets. A perfect family companion waiting for a loving home.',
    description: 'Luna is a beautiful cat with a charming personality. She enjoys curling up on laps, chasing laser pointers, and watching birds from the window. She is fully litter-trained and up-to-date on all her vaccinations. Her sweet nature and gentle purrs will surely melt your heart.',
    medicalNeeds: 'None',
    idealHome: 'A calm household with plenty of sunny spots for napping. Would do well with or without other pets.',
    imageUrl: animalData.imageUrl,
    imageHint: animalData.imageHint
  };
}

export default async function AnimalDetailPage({ params }: { params: { id: string } }) {
  const animal = await getAnimalById(params.id);

  if (!animal) {
    return <div className="text-center py-20">Animal not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <MotionDiv 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <MotionDiv 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative aspect-square md:aspect-auto"
          >
            <Image
              src={animal.imageUrl!}
              alt={animal.name}
              data-ai-hint={animal.imageHint}
              fill
              className="rounded-lg shadow-xl object-cover"
            />
          </MotionDiv>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-2">{animal.name}</h1>
            <p className="text-xl text-muted-foreground mb-6">{animal.breed}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="default" className="text-sm py-1 px-3">{animal.species}</Badge>
              <Badge variant="secondary" className="text-sm py-1 px-3">{animal.age}</Badge>
              <Badge variant="secondary" className="text-sm py-1 px-3">{animal.gender}</Badge>
            </div>

            <div className="space-y-6 text-lg">
              <div>
                <h3 className="font-bold text-xl mb-2 font-headline">Personality</h3>
                <p>{animal.personality}</p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 font-headline">About {animal.name}</h3>
                <p>{animal.description}</p>
              </div>
              {animal.medicalNeeds && (
                <div>
                  <h3 className="font-bold text-xl mb-2 font-headline">Medical Needs</h3>
                  <p>{animal.medicalNeeds}</p>
                </div>
              )}
               {animal.idealHome && (
                <div>
                  <h3 className="font-bold text-xl mb-2 font-headline">Ideal Home</h3>
                  <p>{animal.idealHome}</p>
                </div>
              )}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Heart className="mr-2 h-5 w-5" /> Adopt {animal.name}
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/donate">
                  <PawPrint className="mr-2 h-5 w-5" /> Sponsor {animal.name}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </MotionDiv>
    </div>
  );
}
