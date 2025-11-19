import { PageHeader } from "@/components/shared/PageHeader";
import { AnimalCard } from "@/components/adoption/AnimalCard";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { Animal } from "@/lib/types";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

// In a real app, you might add error handling and loading states.
async function getAnimals(): Promise<Animal[]> {
  // This is a placeholder for fetching real data from Firestore.
  // We'll use the placeholder images and mock some data.
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
  
  // Example of fetching from Firestore (commented out for scaffolding)
  /*
  try {
    const animalsCol = collection(db, 'animals');
    const animalSnapshot = await getDocs(animalsCol);
    const animalList = animalSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Animal));
    return animalList;
  } catch (error) {
    console.error("Error fetching animals: ", error);
    return mockAnimals; // Fallback to mock data on error
  }
  */

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
