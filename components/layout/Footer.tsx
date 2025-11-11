import Link from "next/link";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="pl-8 border-t bg-muted/40">
      <div className="container grid max-w-7xl grid-cols-1 gap-12 py-16 md:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Ninjabox Logo"
              width={140}
              height={35}
              className="h-auto"
            />
          </Link>
          <p className="text-sm text-muted-foreground">
            Engineering Digital Excellence
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ninjabox. All Rights Reserved.{" "}
            {/* [cite: 173] */}
          </p>
          <div className="flex gap-4">
            <Link href="#" target="_blank">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </Link>
            <Link href="#" target="_blank">
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </Link>
            <Link href="#" target="_blank">
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </Link>
            <Link href="#" target="_blank">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </Link>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold">Navigation</h4>
          <Link
            href="/about"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            About Us
          </Link>{" "}
          {/* [cite: 177] */}
          <Link
            href="/services"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Services
          </Link>{" "}
          {/* [cite: 178] */}
          <Link
            href="/academy"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Academy
          </Link>{" "}
          {/* [cite: 179] */}
          <Link
            href="/blog"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Blog
          </Link>{" "}
          {/* [cite: 182] */}
          <Link
            href="/events"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Events
          </Link>{" "}
          {/* [cite: 181] */}
        </div>

        {/* Column 3: Legal/Other */}
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold">More</h4>
          <Link
            href="/internships"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Internships
          </Link>{" "}
          {/* [cite: 180] */}
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Terms of Service
          </Link>
        </div>

        {/* Column 4: Contact */}
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold">Contact Us</h4>
          <a
            href="mailto:info@ninjabox.pro"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            info@ninjabox.pro
          </a>{" "}
          {/* [cite: 184] */}
          <a
            href="tel:+2348136691922"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            +234 813 669 1922
          </a>{" "}
          {/* [cite: 185] */}
          <p className="text-sm text-muted-foreground">
            No. 1 Federal Secretariat, Inn Field, Opp. ECWA Bishara 1, Tudun
            Wada, Jos. NG {/* [cite: 186] */}
          </p>
        </div>
      </div>
    </footer>
  );
}
