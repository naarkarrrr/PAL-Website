'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Search, Heart } from 'lucide-react';
import { useState, forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react';
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
import { Logo } from '../shared/Logo';

const mainNav: { title: string; href?: string; description?: string, subLinks?: { title: string; href: string; description: string }[] }[] = [
    { title: "Home", href: "/" },
    { 
      title: "About Us",
      subLinks: [
        { title: "Our Story", href: "/our-story", description: "Our journey and commitment to animals." },
        { title: "Mission & Vision", href: "/mission-vision", description: "Our goals and guiding principles." },
        { title: "Core Values", href: "/core-values", description: "The values that drive our work." },
        { title: "Advisory Board Members", href: "/advisory-board", description: "Guiding our mission with expertise." },
        { title: "Trustees", href: "/trustees", description: "The governing body of our foundation." },
        { title: "Our Team", href: "/team", description: "Meet our dedicated team members." },
      ]
    },
    { 
      title: "What We Do",
      subLinks: [
        { title: "Legal Help", href: "/legal-help", description: "Legal support against animal cruelty." },
        { title: "Rescue & Rehab", href: "/rescue-rehab", description: "Emergency rescue and rehabilitation." },
        { title: "Animal Cruelty", href: "/animal-cruelty", description: "Awareness on laws and reporting." },
        { title: "Spray & Neuter", href: "/spray-neuter", description: "Controlling overpopulation humanely." },
        { title: "Feed the Stray", href: "/feed-the-stray", description: "Providing regular, nutritious meals." },
        { title: "Vaccination Drive", href: "/vaccination-drive", description: "Protecting strays from deadly diseases." },
        { title: "Adoption & Release", href: "/adoption-and-release", description: "Finding loving forever homes." },
        { title: "Educate & Train", href: "/educate-and-train", description: "Workshops and awareness programs." },
        { title: "Ambulance", href: "/ambulance", description: "24/7 emergency response." },
      ]
    },
    { title: "Gallery", href: "/gallary" },
    {
      title: "Projects",
      subLinks: [
        { title: "Water Bowl Project", href: "/water-bowl-project", description: "Hydration initiatives for strays." },
        { title: "Feeding Drive", href: "/feeding-drive", description: "Sponsor a monthly or one-time feeding drive." },
        { title: "Color Belt – Save the Life", href: "/color-belt-save-the-life", description: "Making strays more visible at night." },
        { title: "Vaccination Drive (CSR)", href: "/vaccination-drive-2", description: "Corporate vaccination initiatives." },
      ]
    },
    { title: "Sponsor/Partnership", href: "/sponsor-partnership" },
    { title: "Sterilization", href: "/sterilization" },
    { title: "Donate", href: "/donate" },
];


export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container flex h-20 items-center justify-between">
        <Logo />

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {mainNav.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.subLinks ? (
                  <>
                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {item.subLinks.map((component) => (
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
                  </>
                ) : (
                  <NavigationMenuLink asChild active={pathname === item.href}>
                    <Link href={item.href || '#'} className={navigationMenuTriggerStyle()}>
                      {item.title}
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
                <Button variant="ghost" size="icon">
                    <Search className="h-5 w-5" />
                </Button>
            </div>

           <Button asChild className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
            <Link href="/donate">
                <Heart className="mr-2 h-4 w-4"/>
                Donate
            </Link>
          </Button>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                 <div className="p-4">
                    <Logo />
                    <nav className="mt-8 flex flex-col gap-4">
                        {mainNav.map((item) => (
                            item.href ? (
                                <Link key={item.title} href={item.href} className={cn(navigationMenuTriggerStyle(), "justify-start")}>{item.title}</Link>
                            ) : (
                                <div key={item.title}>
                                    <h3 className="font-bold px-4">{item.title}</h3>
                                    <div className="flex flex-col gap-2 mt-2">
                                        {item.subLinks?.map((sub) =>(
                                            <Link key={sub.title} href={sub.href} className={cn(navigationMenuTriggerStyle(), "justify-start font-normal text-muted-foreground")}>{sub.title}</Link>
                                        ))}
                                    </div>
                                </div>
                            )
                        ))}
                    </nav>
                 </div>
            </SheetContent>
        </Sheet>
        </div>
      </div>
    </header>
  );
}

const ListItem = forwardRef<
  ElementRef<"a">,
  ComponentPropsWithoutRef<"a">
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
