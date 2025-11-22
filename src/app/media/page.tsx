
import { PageHeader } from "@/components/shared/PageHeader";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Newspaper, Camera } from "lucide-react";
import Link from "next/link";

const mediaLinks = [
    {
        icon: Newspaper,
        title: "News & Articles",
        description: "Read the latest updates, announcements, and media coverage about our work.",
        href: "/success-stories"
    },
    {
        icon: Camera,
        title: "Our Gallery",
        description: "A glimpse into our daily work, the lives we've touched, and the happy faces we help create.",
        href: "/gallery"
    }
]


export default function MediaPage() {
    const headerImage = PlaceHolderImages.find(p => p.id === 'gallery5');
  return (
    <>
      <PageHeader
        title="Media & Updates"
        subtitle="Stay informed about our latest news, browse through our photo gallery, and see the impact we're making together."
        imageUrl={headerImage?.imageUrl}
        imageHint={headerImage?.imageHint}
        imageAlt={headerImage?.description}
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {mediaLinks.map(link => (
                     <Link key={link.title} href={link.href} className="block group">
                        <div className="bg-card p-8 rounded-xl h-full text-center border hover:border-primary/50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            <div className="inline-block bg-primary/10 text-primary p-4 rounded-full mb-4">
                                <link.icon className="h-10 w-10" />
                            </div>
                            <h3 className="text-2xl font-bold font-headline mb-2">{link.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{link.description}</p>
                            <span className="text-accent font-semibold flex items-center justify-center gap-2">
                                Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
      </section>
    </>
  );
}
