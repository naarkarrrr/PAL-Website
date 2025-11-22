
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Heart } from 'lucide-react';
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
import { Logo } from '../shared/Logo';
import { ScrollArea } from '../ui/scroll-area';

const mainNav: {
  title: string;
  href?: string;
  description?: string;
  subLinks?: { title: string; href: string; description: string }[];
}[] = [
  { title: "Home", href: "/" },
  {
    title: "Who We Are",
    subLinks: [
      { title: "Our Story", href: "/our-story", description: "Our journey and commitment to animals." },
      { title: "Mission & Vision", href: "/mission-vision", description: "Our goals and guiding principles." },
      { title: "Our Team", href: "/team", description: "Meet our dedicated team members." },
      { title: "Advisory Board", href: "/advisory-board", description: "Guiding our mission with expertise." },
      { title: "Trustees", href: "/trustees", description: "The governing body of our foundation." },
      { title: "Success Stories", href: "/success-stories", description: "Read our happy adoption tales." },
    ]
  },
  {
    title: "What We Do",
    subLinks: [
      { title: "Rescue & Rehab", href: "/what-we-do/rescue-rehab", description: "Emergency rescue and rehabilitation." },
      { title: "Adoption & Release", href: "/what-we-do/adoption-release", description: "Finding loving forever homes." },
      { title: "Spay & Neuter", href: "/what-we-do/spay-neuter", description: "Controlling overpopulation humanely." },
      { title: "Legal Help", href: "/what-we-do/legal-help", description: "Legal support against animal cruelty." },
      { title: "Feed the Stray", href: "/what-we-do/feed-the-stray", description: "Providing regular, nutritious meals." },
      { title: "Vaccination Drive", href: "/what-we-do/vaccination-drive", description: "Protecting strays from deadly diseases." },
      { title: "Educate & Train", href: "/what-we-do/educate-train", description: "Workshops and awareness programs." },
      { title: "Animal Cruelty", href: "/what-we-do/animal-cruelty", description: "Awareness on laws and reporting." },
    ]
  },
  {
    title: "How to Help",
    subLinks: [
      { title: "Donate", href: "/donate", description: "Support our cause with a donation." },
      { title: "Volunteer", href: "/volunteer", description: "Join our team and make a difference." },
      { title: "Sponsor & Partner", href: "/sponsor-partner", description: "Corporate and individual sponsorship." },
      { title: "Water Bowl Project", href: "/how-to-help/water-bowl-project", description: "Quench the thirst of stray animals." },
      { title: "Feeding Drive", href: "/how-to-help/feeding-drive", description: "Help us feed hungry strays." },
      { title: "Vaccination Drive", href: "/how-to-help/vaccination-drive", description: "Protect animals from diseases." },
      { title: "Collar Belt to Save Life", href: "/how-to-help/color-belt-save-life", description: "Help prevent night-time accidents." },
      { title: "Sterilization", href: "/how-to-help/sterilization", description: "Support humane population control." },
    ],
  },
  {
    title: "Get Involved",
    subLinks: [
      { title: "Become Member & Volunteer", href: "/volunteer", description: "Join our team of dedicated volunteers." },
      { title: "Advocate AWO & Humanright Officer", href: "/advocate", description: "Become an advocate for animal rights." },
      { title: "Sponsor & Partner", href: "/sponsor-partner", description: "Support us through sponsorship." },
      { title: "Collaboration", href: "/collaboration", description: "Work with us on projects." },
    ],
  },
  {
    title: "Media",
    subLinks: [
      { title: "News & Articles", href: "/media", description: "Read our latest news and updates." },
      { title: "Gallery", href: "/gallery", description: "See our work in action." },
    ],
  },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container flex h-20 items-center justify-between">
        
        <Logo />

        {/* DESKTOP NAV */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {mainNav.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.subLinks ? (
                  <>
                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                    active={pathname === item.href}
                  >
                    <Link href={item.href || "#"}>
                      {item.title}
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* DONATE BUTTON */}
        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
            <Link href="/donate">
              <Heart className="mr-2 h-4 w-4" />
              Donate
            </Link>
          </Button>

          {/* MOBILE NAV MENU */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full max-w-sm flex flex-col p-0">
                <div className="p-4">
                  <Logo />
                </div>
                <ScrollArea className="flex-1">
                  <nav className="mt-4 flex flex-col gap-4 px-4 pb-8">
                    {mainNav.map((item) => (
                      item.href ? (
                        <Link key={item.title} href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                          <div className={cn(navigationMenuTriggerStyle(), 'w-full justify-start', pathname === item.href && 'bg-accent/50')}>
                            {item.title}
                          </div>
                        </Link>
                      ) : (
                        <div key={item.title}>
                          <h3 className="font-bold px-4">{item.title}</h3>
                          <div className="flex flex-col gap-2 mt-2">
                            {item.subLinks?.map((sub) => (
                              <Link key={sub.title} href={sub.href} onClick={() => setIsMobileMenuOpen(false)}>
                                <div className={cn(navigationMenuTriggerStyle(), "justify-start font-normal text-muted-foreground w-full")}>
                                  {sub.title}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )
                    ))}
                  </nav>
                </ScrollArea>
              </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function ListItem({ className, title, children, href }: any) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
