import Head from "next/head";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function UiUxPage() {
  return (
    <>
      <Head>
        <title>UI/UX Design - Ninjabox</title>
        <meta
          name="description"
          content="User-centric design for digital products."
        />
      </Head>

      {/* --- 1. Page Hero Section --- */}
      <section className="py-24 bg-muted/20">
        <div className="container max-w-7xl">
          <Link
            href="/services"
            className="inline-flex items-center text-sm text-blue-600 hover:underline mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Services
          </Link>
          <h1 className="text-5xl font-bold tracking-tight text-foreground">
            UI/UX Design
          </h1>{" "}
          {/* */}
          <p className="mt-6 max-w-3xl text-xl text-muted-foreground">
            Crafting intuitive, engaging, and user-centric digital experiences
            that delight users and achieve business goals.
          </p>
        </div>
      </section>

      {/* --- 2. Placeholder Content --- */}
      <section className="py-24">
        <div className="container max-w-7xl">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">
                Content Coming Soon
              </h2>
              <p className="text-muted-foreground">
                This page is under construction. We are preparing detailed
                information about our design services, including:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground">
                <li>User Research & Persona Development </li>
                <li>Wireframing & Prototyping </li>
                <li>User-Centric Interface Design </li>
                <li>Usability Testing & Optimization</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
