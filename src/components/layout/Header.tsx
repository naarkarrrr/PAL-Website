'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Heart, PawPrint } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import React from 'react';


const whoWeAreComponents: { title: string; href: string; description: string }[] = [
  {
    title: "About PAL",
    href: "/about",
    description:
      "Learn more about our mission, vision, and the team behind PAL.",
  },
  {
    title: "Our Team",
    href: "/team",
    description:
      "Meet the dedicated individuals who make our work possible.",
  },
  {
    title: "Success Stories",
    href: "/success-stories",
    description: "Read heartwarming stories of animals who found their forever homes.",
  },
]

const whatWeDoComponents: { title: string; href: string; description: string }[] = [
    {
        title: "Ambulance",
        href: "/ambulance",
        description: "24/7 ambulance outreach for animals in distress.",
    },
    {
        title: "Legal Help",
        href: "/what-we-do/legal-help",
        description: "Free/low-cost legal guidance for animal cruelty cases.",
    },
    {
        title: "Animal Cruelty",
        href: "/what-we-do/animal-cruelty",
        description: "Awareness on laws and how to report cruelty.",
    },
    {
        title: "Spay & Neuter",
        href: "/what-we-do/spay-neuter",
        description: "Community dog management through the ABC program.",
    },
    {
        title: "Feed the Stray",
        href: "/what-we-do/feed-the-stray",
        description: "Daily and weekly feeding drives for stray animals.",
    },
    {
        title: "Vaccination Drive",
        href: "/what-we-do/vaccination-drive",
        description: "Anti-rabies and health vaccination programs.",
    },
    {
        title: "Adoption & Release",
        href: "/what-we-do/adoption-release",
        description: "Find loving homes for rescued animals.",
    },
    {
        title: "Educate & Train",
        href: "/what-we-do/educate-train",
        description: "Workshops and awareness programs for all ages.",
    },
]

const getInvolvedComponents: { title: string; href: string; description: string }[] = [
    {
        title: "Become Member & Volunteer",
        href: "/volunteer",
        description: "Join our team and make a hands-on difference in the lives of animals.",
    },
    {
        title: "Advocate AWO & Humanright Officer",
        href: "/advocate",
        description: "Become an advocate for animal welfare and rights in your community.",
    },
    {
        title: "Adoption",
        href: "/adopt",
        description: "Give a loving home to a deserving animal. Find your new best friend.",
    },
    {
        title: "Sponsor & Partner",
        href: "/sponsor-partner",
        description: "Support our cause through sponsorship or corporate partnership.",
    },
    {
        title: "Collaboration",
        href: "/collaboration",
        description: "Work with us on projects and initiatives to further animal welfare.",
    }
]


function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <PawPrint className="h-6 w-6 text-accent" />
      <span className="text-xl font-bold font-headline">Kindred Paws</span>
    </Link>
  );
}


export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container flex h-20 items-center justify-between">
        <Logo />

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), pathname === '/' ? 'text-primary' : 'text-foreground')}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
             <NavigationMenuItem>
              <NavigationMenuTrigger>Who We are</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {whoWeAreComponents.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
             <NavigationMenuItem>
              <NavigationMenuTrigger>What We Do</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {whatWeDoComponents.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
             <NavigationMenuItem>
                <Link href="/media" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), pathname === '/media' ? 'text-primary' : 'text-foreground')}>
                    Media
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
             <NavigationMenuItem>
                <Link href="/how-to-help" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), pathname === '/how-to-help' ? 'text-primary' : 'text-foreground')}>
                    How to Help
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Get Involved</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {getInvolvedComponents.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
           <Button asChild className="hidden md:flex bg-accent hover:bg-accent/90 text-accent-foreground rounded-full">
            <Link href="/donate">
                <Heart className="mr-2 h-4 w-4" />
                Donate
            </Link>
          </Button>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full max-w-sm bg-background p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                   <Logo />
                   <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                     <X className="h-6 w-6" />
                   </Button>
                </div>
                <nav className="flex-grow p-4">
                  <ul className="space-y-4">
                    <li><Link href="/" className="block text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
                    <li><h3 className="text-lg font-medium">Who We Are</h3></li>
                    {whoWeAreComponents.map(c => <li key={c.href}><Link href={c.href} className="block text-md font-medium text-muted-foreground pl-4" onClick={() => setIsMobileMenuOpen(false)}>{c.title}</Link></li>)}
                    <li><h3 className="text-lg font-medium">What We Do</h3></li>
                     {whatWeDoComponents.map(c => <li key={c.href}><Link href={c.href} className="block text-md font-medium text-muted-foreground pl-4" onClick={() => setIsMobileMenuOpen(false)}>{c.title}</Link></li>)}
                    <li><Link href="/media" className="block text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Media</Link></li>
                    <li><Link href="/how-to-help" className="block text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>How to Help</Link></li>
                     <li><h3 className="text-lg font-medium">Get Involved</h3></li>
                    {getInvolvedComponents.map(c => <li key={c.href}><Link href={c.href} className="block text-md font-medium text-muted-foreground pl-4" onClick={() => setIsMobileMenuOpen(false)}>{c.title}</Link></li>)}

                  </ul>
                </nav>
                <div className="p-4 border-t mt-auto">
                   <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full">
                     <Link href="/donate" onClick={() => setIsMobileMenuOpen(false)}>
                        <Heart className="mr-2 h-4 w-4" />
                        Donate
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href!}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
