import Head from "next/head";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";

// Data for Upcoming Events [cite: 138-150]
const upcomingEvents = [
  {
    title: "Webinar: AI Integration for Small & Medium Enterprises (SMEs)",
    date: "November 12, 2025 | 11:00 AM WAT",
    location: "Virtual",
    icon: <Users className="h-6 w-6 text-blue-600" />,
    description:
      "Is your business ready for the AI revolution? Join our Head of Data Science, Mandieng Bot, for a practical webinar on how SMEs can leverage artificial intelligence to optimize operations, enhance customer experience, and drive revenue. This session will demystify AI and provide a clear roadmap for implementation.",
    ctaText: "Register for Free",
  },
  {
    title: "Ninjabox Dev Meetup: Jos Edition",
    date: "December 5, 2025 | 4:00 PM - 7:00 PM WAT",
    location: "Ninjabox Hub, Jos, Plateau State",
    icon: <MapPin className="h-6 w-6 text-blue-600" />,
    description:
      "We're opening our doors for a special evening of networking, tech talks, and pizza! This meetup is for developers, designers, and tech enthusiasts in the Jos ecosystem. Come and connect with peers, discuss the latest trends in software engineering, and meet the Ninjabox team.",
    ctaText: "RSVP Now",
  },
];

// Placeholder for Past Events [cite: 152]
const pastEvents = [
  {
    title: "Past Event Example 1",
    date: "June 20, 2025",
    description:
      "A brief description of a successful past event, workshop, or webinar.",
  },
  {
    title: "Past Event Example 2",
    date: "March 15, 2025",
    description: "Another summary of a past community engagement or tech talk.",
  },
];

export default function EventsPage() {
  return (
    <>
      <Head>
        <title>Events - Ninjabox Community</title>
        <meta
          name="description"
          content="Join us at our workshops, webinars, and community events to explore the future of technology."
        />
      </Head>

      {/* --- 1. Page Hero Section --- */}
      <section className="py-24 bg-muted/20">
        <div className="container max-w-7xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-foreground">
            Connecting, Learning, and Innovating Together
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-muted-foreground">
            Join us at our workshops, webinars, and community events to explore
            the future of technology, network with industry leaders, and enhance
            your skills.
          </p>
        </div>
      </section>

      {/* --- 2. Upcoming Events Section --- */}
      <section className="py-24">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold tracking-tight text-center mb-16">
            Upcoming Events
          </h2>{" "}
          {/* */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {upcomingEvents.map((event) => (
              <Card key={event.title} className="flex flex-col">
                <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                  <div className="shrink-0">{event.icon}</div>
                  <div className="grow">
                    <CardTitle className="text-2xl">{event.title}</CardTitle>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4" /> {event.date}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-2 h-4 w-4" /> {event.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="grow">
                  <CardDescription className="text-base">
                    {event.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    {event.ctaText}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. Past Events Section --- */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold tracking-tight text-center mb-16">
            Past Events
          </h2>{" "}
          {/* */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {pastEvents.map((event) => (
              <Card key={event.title} className="bg-background">
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>{event.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline">View All Past Events</Button>
          </div>
        </div>
      </section>
    </>
  );
}
