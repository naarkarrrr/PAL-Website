import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MotionDiv } from '@/components/shared/MotionDiv';
import type { Animal } from '@/lib/types';
import { Badge } from '../ui/badge';

type AnimalCardProps = {
  animal: Animal;
};

export function AnimalCard({ animal }: AnimalCardProps) {
  return (
    <MotionDiv whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="relative w-full h-48">
          <Image
            src={animal.imageUrl || "https://picsum.photos/seed/placeholder/400/300"}
            alt={animal.name}
            data-ai-hint={animal.imageHint}
            fill
            className="object-cover"
          />
        </div>
        <CardHeader>
          <CardTitle className="truncate">{animal.name}</CardTitle>
          <CardDescription>{animal.breed}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex gap-2 text-sm">
             <Badge variant="secondary">{animal.age}</Badge>
             <Badge variant="secondary">{animal.gender}</Badge>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href={`/adopt/${animal.id}`}>Learn More</Link>
          </Button>
        </CardFooter>
      </Card>
    </MotionDiv>
  );
}
