import React from 'react';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import Image from 'next/image';

// Re-using the same nav links
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/academy', label: 'Academy' },
  { href: '/internships', label: 'Internships' },
  { href: '/events', label: 'Events' },
  { href: '/blog', label: 'Blog' },
];

export function MobileNav() {
  return (
    <Sheet>
      {/* The trigger button (Menu icon) */}
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>

      {/* The content that slides out */}
      <SheetContent side="left">
        <div className="container flex flex-col h-full">
          <div className="mb-8">
                      <Link href="/">
                        <Image
                          src="/logo.png"
                          alt="Ninjabox Logo"
                          width={140}
                          height={35}
                          className="h-auto"
                        />
                      </Link>
                    </div>
          
          {/* Navigation Links */}
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              // SheetClose wraps the link to close the menu on click
              <SheetClose asChild key={link.href}>
                <Link
                  href={link.href}
                  className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </SheetClose>
            ))}
          </nav>

          {/* CTA Button at the bottom */}
          <div className="mt-auto pt-6">
            <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="#">Schedule a Discovery Call</Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}