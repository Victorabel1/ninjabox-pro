import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { MobileNav } from "./MobileNav";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/academy", label: "Academy" },
  { href: "/internships", label: "Internships" },
  { href: "/events", label: "Events" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  return (
    <header className="pl-4 sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
                  <Image
                    src="/logo.png" // Path from the 'public' folder
                    alt="Ninjabox Logo"
                    width={120} // You can adjust this width
                    height={30} // You can adjust this height
                    className="h-auto" // Maintain aspect ratio
                  />
                </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side: CTA + Theme Toggle */}
        <div className="flex items-center gap-4">
          <Button className="hidden sm:flex bg-blue-600 hover:bg-blue-700">
            Schedule a Discovery Call
          </Button>
          <ThemeToggle />
          {/* Add a Mobile Menu button here later */}
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </nav>
    </header>
  );
}
