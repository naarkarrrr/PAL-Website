
import { PageHeader } from "@/components/shared/PageHeader";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";

export default function FeedTheStrayPage() {
  const headerImage = PlaceHolderImages.find(p => p.id === 'feeding_drive_header');
  const contentImage2 = PlaceHolderImages.find(p => p.id === 'feed_stray_content2');
  const contentImage3 = PlaceHolderImages.find(p => p.id === 'feed_stray_content3');

  return (
    <div>
      <PageHeader
        title="Feed the Stray"
        subtitle="Join us in our daily mission to ensure no stray animal goes hungry."
        imageUrl={headerImage?.imageUrl}
        imageHint={headerImage?.imageHint}
        imageAlt={headerImage?.description}
      />
      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs
          segments={[
            { title: "Home", href: "/" },
            { title: "What We Do", href: "/what-we-do" },
            { title: "Feed the Stray", href: "/what-we-do/feed-the-stray" },
          ]}
        />
      </div>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-headline mb-4">Nourishing Lives, One Meal at a Time</h2>
            <p className="text-lg text-muted-foreground mb-8">
            Every day, countless stray animals struggle to find their next meal. Hunger and malnutrition are constant threats, leaving them weak and vulnerable to disease. The PAL Foundation’s Feeding Drive is our commitment to providing regular, nutritious food to the street animals who need it most.
            </p>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto my-12">
            {contentImage2 &&
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src={contentImage2.imageUrl}
                        alt={contentImage2.description}
                        data-ai-hint={contentImage2.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            }
            {contentImage3 &&
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src={contentImage3.imageUrl}
                        alt={contentImage3.description}
                        data-ai-hint={contentImage3.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            }
        </div>


        <div className="max-w-4xl mx-auto">
             <h3 className="text-2xl font-bold font-headline mb-4">Our Approach</h3>
             <p className="text-muted-foreground mb-6">
                Our dedicated team of volunteers conducts daily and weekly feeding drives in various parts of the city. We don't just provide food; we provide the right kind of food—balanced meals that meet the dietary needs of dogs and cats, ensuring they receive the energy and nutrients required to stay healthy.
             </p>
             <p className="text-muted-foreground mb-6">
                During our drives, we also take the opportunity to monitor the health of the animals in the community, identifying any who may need medical attention.
             </p>

            <div className="bg-card p-8 rounded-lg border shadow-sm mt-8">
                <h3 className="text-2xl font-bold font-headline mb-4">How Your Support Helps</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong>₹500</strong> can feed a stray for a week.</li>
                    <li><strong>₹2,000</strong> can provide a nutritious meal for a pack of 10 dogs.</li>
                    <li><strong>₹5,000</strong> can support our feeding drive in one locality for an entire week.</li>
                </ul>
                <Button size="lg" className="mt-6">Donate to Our Feeding Drive</Button>
            </div>
        </div>
      </section>
    </div>
  );
}
