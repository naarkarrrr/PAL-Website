import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PawPrint, Heart, Users } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MotionDiv } from '@/components/shared/MotionDiv';
import { Badge } from '@/components/ui/badge';

const featuredAnimals = PlaceHolderImages.filter(p => ['1', '2', '3']);
const successStory = PlaceHolderImages.find(p => p.id === 'story1');

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-primary/30">
          <div className="container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 items-center gap-12">
            <MotionDiv 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              <Badge variant="secondary" className="mb-4">Rescue • Rehabilitate • Rehome</Badge>
              <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
                Giving Every Animal A Second Chance
              </h1>
              <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto md:mx-0 text-muted-foreground">
                We are dedicated to rescuing and sheltering animals in need. Join us in our mission to provide them with love, care, and a forever home.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/adopt">Adopt a Friend</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/volunteer">Join as a Volunteer</Link>
                </Button>
              </div>
            </MotionDiv>
             <MotionDiv 
                className="relative hidden md:flex w-full h-96"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
               <Image
                  src={PlaceHolderImages.find(p => p.id === 'hero')?.imageUrl || ''}
                  alt={PlaceHolderImages.find(p => p.id === 'hero')?.description || ''}
                  data-ai-hint={PlaceHolderImages.find(p => p.id === 'hero')?.imageHint}
                  fill
                  className="object-cover rounded-xl shadow-2xl"
                  priority
                />
            </MotionDiv>
          </div>
        </section>

        {/* How You Can Help Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">How You Can Help</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground mb-12 text-lg">
              Every act of kindness, big or small, contributes to a brighter future for our animals. Your support can change lives.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <MotionDiv whileHover={{ y: -8 }} transition={{type: 'spring', stiffness: 300}}>
                <Card className="h-full text-center bg-card shadow-lg rounded-xl border-t-4 border-accent">
                  <CardHeader className="items-center">
                    <div className="bg-accent/10 p-4 rounded-full">
                      <Heart className="w-8 h-8 text-accent" />
                    </div>
                    <CardTitle className="pt-4 font-headline text-2xl">Adopt</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Give a loving home to a deserving animal. Find your new best friend and change a life forever.</p>
                  </CardContent>
                   <CardFooter>
                      <Button asChild variant="link" className="w-full text-accent">
                        <Link href="/adopt">Find a Pet</Link>
                      </Button>
                  </CardFooter>
                </Card>
              </MotionDiv>
              <MotionDiv whileHover={{ y: -8 }} transition={{type: 'spring', stiffness: 300}}>
                <Card className="h-full text-center bg-card shadow-lg rounded-xl border-t-4 border-accent">
                  <CardHeader className="items-center">
                    <div className="bg-accent/10 p-4 rounded-full">
                      <PawPrint className="w-8 h-8 text-accent" />
                    </div>
                    <CardTitle className="pt-4 font-headline text-2xl">Donate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Your contributions help us provide food, shelter, and essential medical care to animals in need.</p>
                  </CardContent>
                  <CardFooter>
                      <Button asChild variant="link" className="w-full text-accent">
                        <Link href="/donate">Support Our Cause</Link>
                      </Button>
                  </CardFooter>
                </Card>
              </MotionDiv>
              <MotionDiv whileHover={{ y: -8 }} transition={{type: 'spring', stiffness: 300}}>
                <Card className="h-full text-center bg-card shadow-lg rounded-xl border-t-4 border-accent">
                  <CardHeader className="items-center">
                    <div className="bg-accent/10 p-4 rounded-full">
                      <Users className="w-8 h-8 text-accent" />
                    </div>
                    <CardTitle className="pt-4 font-headline text-2xl">Volunteer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Join our team of dedicated volunteers and make a hands-on difference in the lives of our animals.</p>
                  </CardContent>
                   <CardFooter>
                      <Button asChild variant="link" className="w-full text-accent">
                        <Link href="/volunteer">Get Involved</Link>
                      </Button>
                  </CardFooter>
                </Card>
              </MotionDiv>
            </div>
          </div>
        </section>

        {/* Featured Animals Section */}
        <section className="py-16 md:py-24 bg-primary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">Pets Waiting for a Home</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredAnimals.map((animal) => (
                <MotionDiv key={animal.id} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="overflow-hidden group rounded-xl shadow-lg">
                    <div className="relative aspect-square">
                      <Image
                        src={animal.imageUrl}
                        alt={animal.description}
                        data-ai-hint={animal.imageHint}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                       <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                          <CardTitle className="text-white font-headline text-2xl">{animal.description}</CardTitle>
                        </div>
                    </div>
                    <CardContent className="p-4">
                       <p className="text-muted-foreground text-sm">A friendly companion looking for a home.</p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
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
          <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <MotionDiv initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7 }}>
                  <Image
                    src={successStory.imageUrl}
                    alt={successStory.description}
                    data-ai-hint={successStory.imageHint}
                    width={600}
                    height={400}
                    className="rounded-xl shadow-xl aspect-[4/3] object-cover"
                  />
                </MotionDiv>
                <MotionDiv initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7 }}>
                   <Badge variant="default" className="mb-2 bg-accent text-accent-foreground">Happy Tails</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">A Happy Tail to Tell</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Read about Charlie's journey from a shy stray to a cherished family member. Success stories like this are made possible by your support.
                  </p>
                  <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
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
