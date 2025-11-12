import Head from 'next/head';
import { CheckCircle } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// Data for Core Values [cite: 39-43]
const coreValues = [
  {
    title: 'Innovation',
    description: 'We relentlessly pursue new ideas and technologies to deliver forward-thinking solutions.',
  },
  {
    title: 'Integrity',
    description: 'We operate with transparency and honesty, building trust with our clients and partners.',
  },
  {
    title: 'Excellence',
    description: 'We are committed to the highest standards of quality in everything we do.',
  },
  {
    title: 'Collaboration',
    description: 'We believe the best results come from working together with our clients as one team.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us - The Ninjabox Story</title>
        <meta
          name="description"
          content="Learn about Ninjabox's mission, vision, and our commitment to innovation, integrity, and impact."
        />
      </Head>
      <section className="py-24 bg-muted/20">
        <div className="container max-w-7xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-foreground">
            The Ninjabox Story:
          </h1>
          <h2 className="mt-2 text-5xl font-bold tracking-tight text-blue-600">
            Innovation, Integrity, and Impact.
          </h2> 
        </div>
      </section>

      {/* --- 2. Mission & Vision Section --- */}
      <section className="py-24">
        <div className="container grid max-w-7xl mx-auto grid-cols-1 gap-16 md:grid-cols-2">
          {/* Mission */}
          <div>
            <h3 className="text-3xl font-bold text-foreground">Our Mission</h3>
            <p className="mt-4 text-lg text-muted-foreground">
              To empower organizations with transformative technology solutions, 
              fostering a culture of innovation and enabling them to achieve 
              sustainable growth and market leadership. {/* [cite: 32] */}
            </p>
          </div>
          {/* Vision */}
          <div>
            <h3 className="text-3xl font-bold text-foreground">Our Vision</h3>
            <p className="mt-4 text-lg text-muted-foreground">
              To be Africa&apos;s most trusted technology partner, renowned for 
              our engineering excellence, strategic insights, and unwavering 
              commitment to client success. {/* [cite: 33] */}
            </p>
          </div>
        </div>
      </section>

      {/* --- 3. Our Journey Section --- */}
      <section className="py-24 bg-muted/20">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight text-center">
            Our Journey
          </h2> {/* [cite: 34] */}
          <div className="prose prose-lg dark:prose-invert mx-auto mt-8 text-muted-foreground">
            <p>
              Founded on the principle that technology should be a powerful 
              enabler of ambitions, Ninjabox has evolved into a center for 
              digital innovation. {/* [cite: 35] */}
            </p>
            <p>
              We are a collective of strategists, designers, and engineers 
              who are passionate about solving complex problems. {/* [cite: 36] */} 
              We believe in building long-term partnerships, grounding our 
              work in deep market understanding and a collaborative spirit. {/* [cite: 37] */}
            </p>
            <p>
              Our commitment is to demystify technology and deliver solutions 
              that are not just cutting-edge but also practical and impactful. {/* [cite: 38] */}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tight">
              Our Core Values
            </h2> 
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value) => (
              <Card key={value.title} className="bg-muted/40">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}