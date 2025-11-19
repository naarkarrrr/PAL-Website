import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PawPrint, Heart, Users, Search } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MotionDiv } from '@/components/shared/MotionDiv';

const featuredAnimals = PlaceHolderImages.filter(p => ['1', '2', '3'].includes(p.id));
const successStory = PlaceHolderImages.find(p => p.id === 'story1');

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-[70vh] md:h-[90vh]">
          <div className="container mx-auto px-4 h-full grid md:grid-cols-2 items-center gap-8">
            <MotionDiv 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
                Find Your <span className="text-accent">Forever</span> Friend
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto md:mx-0 text-muted-foreground">
                We connect loving families with animals in need. Start your adoption journey today and make a difference.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <Button asChild size="lg">
                  <Link href="/adopt">Find a Pet <PawPrint className="ml-2" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/volunteer">Get Involved</Link>
                </Button>
              </div>
            </MotionDiv>
             <MotionDiv 
                className="relative hidden md:block w-full h-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
               <Image
                  src={PlaceHolderImages.find(p => p.id === 'hero')?.imageUrl || ''}
                  alt={PlaceHolderImages.find(p => p.id === 'hero')?.description || ''}
                  data-ai-hint={PlaceHolderImages.find(p => p.id === 'hero')?.imageHint}
                  fill
                  className="object-contain"
                  priority
                />
            </MotionDiv>
          </div>
        </section>

        {/* How You Can Help Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">How You Can Help</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground mb-12">
              Every act of kindness, big or small, contributes to a brighter future for our animals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <MotionDiv whileHover={{ y: -5 }}>
                <Card className="h-full text-center bg-background shadow-lg">
                  <CardHeader className="items-center">
                    <div className="bg-accent/10 p-4 rounded-full">
                      <Heart className="w-8 h-8 text-accent" />
                    </div>
                    <CardTitle className="pt-4">Adopt</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Give a loving home to a deserving animal. Find your new best friend and change a life forever.</p>
                  </CardContent>
                </Card>
              </MotionDiv>
              <MotionDiv whileHover={{ y: -5 }}>
                <Card className="h-full text-center bg-background shadow-lg">
                  <CardHeader className="items-center">
                    <div className="bg-accent/10 p-4 rounded-full">
                      <PawPrint className="w-8 h-8 text-accent" />
                    </div>
                    <CardTitle className="pt-4">Donate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Your contributions help us provide food, shelter, and essential medical care to animals in need.</p>
                  </CardContent>
                </Card>
              </MotionDiv>
              <MotionDiv whileHover={{ y: -5 }}>
                <Card className="h-full text-center bg-background shadow-lg">
                  <CardHeader className="items-center">
                    <div className="bg-accent/10 p-4 rounded-full">
                      <Users className="w-8 h-8 text-accent" />
                    </div>
                    <CardTitle className="pt-4">Volunteer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Join our team of dedicated volunteers and make a hands-on difference in the lives of our animals.</p>
                  </CardContent>
                </Card>
              </MotionDiv>
            </div>
          </div>
        </section>

        {/* Featured Animals Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">Pets Waiting for a Home</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredAnimals.map((animal) => (
                <MotionDiv key={animal.id} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="overflow-hidden group">
                    <div className="relative aspect-square">
                      <Image
                        src={animal.imageUrl}
                        alt={animal.description}
                        data-ai-hint={animal.imageHint}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{animal.description}</CardTitle>
                      <CardDescription>A friendly companion looking for a home.</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button asChild className="w-full">
                        <Link href={`/adopt/${animal.id}`}>Learn More</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </MotionDiv>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline">
                <Link href="/adopt">View All Pets</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Success Story Section */}
        {successStory && (
          <section className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <MotionDiv initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7 }}>
                  <Image
                    src={successStory.imageUrl}
                    alt={successStory.description}
                    data-ai-hint={successStory.imageHint}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-xl aspect-video object-cover"
                  />
                </MotionDiv>
                <MotionDiv initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7 }}>
                  <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">A Happy Tail to Tell</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Read about Charlie's journey from a shy stray to a cherished family member. Success stories like this are made possible by your support.
                  </p>
                  <Button asChild size="lg">
                    <Link href="/success-stories">More Success Stories</Link>
                  </Button>
                </MotionDiv>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
