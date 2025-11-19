'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Search, ShoppingBag, Calendar } from 'lucide-react';
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
import { Logo } from '../shared/Logo';


const mainNav: { title: string; href: string; description?: string, subLinks?: { title: string; href: string; description: string }[] }[] = [
    { title: "Home", href: "/" },
    { 
      title: "About", 
      href: "/about",
      subLinks: [
        { title: "Our Story", href: "/our-story", description: "Our journey and commitment to animals." },
        { title: "Mission & Vision", href: "/mission-vision", description: "Our goals and guiding principles." },
        { title: "Our Team", href: "/team", description: "Meet our dedicated team members." },
      ]
    },
    { 
      title: "Shop", 
      href: "/shop",
      subLinks: [
        { title: "All Products", href: "/shop", description: "Browse all our pet supplies." },
        { title: "Food", href: "/shop/food", description: "Nutritious food for your pets." },
        { title: "Toys", href: "/shop/toys", description: "Fun and engaging toys." },
      ]
    },
    { 
      title: "Pages", 
      href: "#",
      subLinks: [
        { title: "Success Stories", href: "/success-stories", description: "Happy adoption tales." },
        { title: "Gallery", href: "/gallery", description: "Photos from our community." },
        { title: "Donate", href: "/donate", description: "Support our cause." },
      ]
    },
    { title: "Contacts", href: "/contact" },
];


export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-2.5 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
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
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink active={pathname === item.href} className={navigationMenuTriggerStyle()}>
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
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
                <div className="relative">
                    <Button variant="ghost" size="icon">
                        <ShoppingBag className="h-5 w-5" />
                    </Button>
                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">0</span>
                </div>
            </div>

           <Button asChild className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
            <Link href="/contact">
                <Calendar className="mr-2 h-4 w-4"/>
                Appointment
            </Link>
          </Button>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
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
