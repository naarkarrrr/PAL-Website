import Link from 'next/link';

type ServiceCardProps = {
  index: number;
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
};

export function ServiceCard({ index, icon: Icon, title, description, href }: ServiceCardProps) {
  return (
    <Link href={href} className="block group">
        <div className="relative h-full bg-background p-8 rounded-xl shadow-sm border border-transparent hover:border-primary/50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="absolute top-4 right-8 text-8xl font-bold font-headline text-background/30 opacity-50 transition-colors duration-300 group-hover:text-primary/10">
                {index.toString().padStart(2, '0')}
            </div>
            <div className="relative z-10">
                <div className="mb-6">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                        <Icon className="w-8 h-8" />
                    </div>
                </div>
                <h3 className="text-2xl font-bold font-headline mb-3">{title}</h3>
                <p className="text-muted-foreground">{description}</p>
            </div>
        </div>
    </Link>
  );
}
