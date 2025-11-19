import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PawPrint, Heart, Users, Ambulance } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MotionDiv } from '@/components/shared/MotionDiv';

// Mock data - in a real app, this would come from a database
const featuredAnimals = PlaceHolderImages.filter(p => ['1', '2', '3'].includes(p.id));
const successStory = PlaceHolderImages.find(p => p.id === 'story1');

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
          <Image
            src={PlaceHolderImages.find(p => p.id === 'hero')?.imageUrl || ''}
            alt={PlaceHolderImages.find(p => p.id === 'hero')?.description || ''}
            data-ai-hint={PlaceHolderImages.find(p => p.id === 'hero')?.imageHint}
            fill
            className="object-cover -z-10"
            priority
          />
          <div className="absolute inset-0 bg-black/50 -z-10" />
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl p-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight text-shadow-lg">
              Welcome to Kindred Paws
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
              A sanctuary for animals in need. Your journey to make a difference starts here.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/adopt">Adopt a Friend</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/donate">Donate Now</Link>
              </Button>
            </div>
          </MotionDiv>
        </section>

        {/* How You Can Help Section */}
        <section className="py-16 md:py-24 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary-foreground mb-4">How You Can Help</h2>
            <p className="max-w-2xl mx-auto text-primary-foreground/80 mb-12">
              Every act of kindness, big or small, contributes to a brighter future for our animals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <MotionDiv whileHover={{ y: -5 }}>
                <Card className="h-full text-left bg-background">
                  <CardHeader>
                    <Heart className="w-10 h-10 mb-4 text-accent" />
                    <CardTitle>Adopt</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Give a loving home to a deserving animal. Find your new best friend.</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="link" className="p-0 text-accent">
                      <Link href="/adopt">See Adoptable Pets</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </MotionDiv>
              <MotionDiv whileHover={{ y: -5 }}>
                <Card className="h-full text-left bg-background">
                  <CardHeader>
                    <PawPrint className="w-10 h-10 mb-4 text-accent" />
                    <CardTitle>Donate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Your contributions help us provide food, shelter, and medical care.</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="link" className="p-0 text-accent">
                      <Link href="/donate">Support Our Cause</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </MotionDiv>
              <MotionDiv whileHover={{ y: -5 }}>
                <Card className="h-full text-left bg-background">
                  <CardHeader>
                    <Users className="w-10 h-10 mb-4 text-accent" />
                    <CardTitle>Volunteer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Join our team of dedicated volunteers and make a hands-on difference.</p>
                  </CardContent>
                   <CardFooter>
                    <Button asChild variant="link" className="p-0 text-accent">
                      <Link href="/volunteer">Join Our Team</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </MotionDiv>
              <MotionDiv whileHover={{ y: -5 }}>
                <Card className="h-full text-left bg-background">
                  <CardHeader>
                    <Ambulance className="w-10 h-10 mb-4 text-accent" />
                    <CardTitle>Rescue</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Found an animal in distress? Request our ambulance service.</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="link" className="p-0 text-accent">
                      <Link href="/ambulance">Request Help</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </MotionDiv>
            </div>
          </div>
        </section>

        {/* Featured Animals Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">Meet Some of Our Friends</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredAnimals.map((animal) => (
                <MotionDiv key={animal.id} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="overflow-hidden">
                    <Image
                      src={animal.imageUrl}
                      alt={animal.description}
                      data-ai-hint={animal.imageHint}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <CardHeader>
                      <CardTitle>{animal.description}</CardTitle>
                      <CardDescription>A friendly companion looking for a home.</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href={`/adopt/${animal.id}`}>Learn More</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </MotionDiv>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg" variant="secondary">
                <Link href="/adopt">View All Pets</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Success Story Section */}
        {successStory && (
          <section className="py-16 md:py-24 bg-primary">
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
                  <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary-foreground mb-4">A Happy Tail</h2>
                  <p className="text-lg text-primary-foreground/80 mb-6">
                    Read about Charlie's journey from a shy stray to a cherished family member. Success stories like this are made possible by your support.
                  </p>
                  <Button asChild size="lg" variant="secondary">
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
