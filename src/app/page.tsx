import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MotionDiv } from '@/components/shared/MotionDiv';
import { StatsCounter } from '@/components/shared/StatsCounter';
import { FeaturedAnimals } from '@/components/home/FeaturedAnimals';
import { SuccessStories } from '@/components/home/SuccessStories';
import { HeroCarousel } from '@/components/home/HeroCarousel';
import { QuickActions } from '@/components/home/QuickActions';
import { GetInvolved } from '@/components/home/GetInvolved';

const partnerLogos = [
  { name: 'Partner 1', logo: 'https://via.placeholder.com/150x60?text=Partner+1' },
  { name: 'Partner 2', logo: 'https://via.placeholder.com/150x60?text=Partner+2' },
  { name: 'Partner 3', logo: 'https://via.placeholder.com/150x60?text=Partner+3' },
  { name: 'Partner 4', logo: 'https://via.placeholder.com/150x60?text=Partner+4' },
  { name: 'Partner 5', logo: 'https://via.placeholder.com/150x60?text=Partner+5' },
];

export default function Home() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about_header');
  const videoImage = PlaceHolderImages.find(p => p.id === 'gallery5');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1">
        
        <HeroCarousel />
        
        <QuickActions />

        {/* About Us Section */}
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <MotionDiv initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">A Voice for the Voiceless</h2>
                        <p className="text-muted-foreground mb-6">
                            Kindred Paws is a non-profit organization dedicated to creating a compassionate world for animals. We believe every animal has the right to live a life free from pain, fear, and suffering. Our work is driven by a passionate team of volunteers, vets, and supporters.
                        </p>
                        <Link href="/about" className="text-accent font-bold hover:underline">
                            Learn More About Our Mission
                        </Link>
                    </MotionDiv>
                    <MotionDiv initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                                {aboutImage && <Image src={aboutImage.imageUrl} alt="Rescued dog" fill className="object-cover" />}
                            </div>
                            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg mt-8">
                                <Image src="https://picsum.photos/seed/collage2/400/400" alt="Rescued cat" fill className="object-cover" />
                            </div>
                             <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg -mt-8">
                                <Image src="https://picsum.photos/seed/collage3/400/400" alt="Happy volunteer" fill className="object-cover" />
                            </div>
                             <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                                <Image src="https://picsum.photos/seed/collage4/400/400" alt="Adopted puppy" fill className="object-cover" />
                            </div>
                        </div>
                    </MotionDiv>
                </div>
            </div>
        </section>

        <StatsCounter />
        
        {/* Video Montage Section */}
        <section className="py-16 md:py-24 bg-card">
            <div className="container mx-auto px-4 text-center">
                 <h2 className="text-3xl md:text-4xl font-bold mb-4">See Our Work in Action</h2>
                <p className="max-w-2xl mx-auto text-muted-foreground mb-8">
                    Every rescue, every recovery, every adoption is a story of hope. This is a glimpse into the lives we touch every single day.
                </p>
                <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
                    {videoImage && <Image src={videoImage.imageUrl} alt="Rescue montage" fill className="object-cover" />}
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <button className="bg-white/30 backdrop-blur-sm text-white rounded-full h-20 w-20 flex items-center justify-center hover:bg-white/50 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        
        <FeaturedAnimals />
        
        <SuccessStories />

        <GetInvolved />

        {/* Partner Logos */}
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-2xl font-bold text-muted-foreground mb-8">Our Trusted Partners</h2>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
                    {partnerLogos.map(partner => (
                        <Image key={partner.name} src={partner.logo} alt={partner.name} width={120} height={50} className="object-contain opacity-60 hover:opacity-100 transition-opacity" />
                    ))}
                </div>
            </div>
        </section>
      </main>
    </div>
  );
}
