import Head from 'next/head';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Check } from 'lucide-react';
import Link from 'next/link';

// Data from the doc [cite: 48-68]
const serviceCategories = [
  {
    title: 'Strategic IT & Business Consulting',
    href: '/services/consulting',
    subServices: [
      'Technology Audits & Roadmapping',
      'Digital Transformation Strategy',
      'Agile & DevOps Consulting',
      'IT Governance & Risk Management',
      'Agentic AI development',
    ],
  },
  {
    title: 'Custom Software Development',
    href: '/services/development',
    subServices: [
      'Enterprise Web Application Development',
      'Cross-Platform Mobile App Development',
      'API & Systems Integration',
      'Cloud-Native Application Development (AWS, Azure)',
    ],
  },
  {
    title: 'Data Science & Analytics',
    href: '/services/data-science',
    subServices: [
      'Business Intelligence & Reporting Dashboards',
      'Predictive Analytics & Machine Learning Models',
      'Big Data Processing & Engineering',
      'Data Warehousing & ETL Solutions',
    ],
  },
  {
    title: 'UI/UX Design',
    href: '/services/ui-ux',
    subServices: [
      'User Research & Persona Development',
      'Wireframing & Prototyping',
      'User-Centric Interface Design',
      'Usability Testing & Optimization',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Our Services - Ninjabox</title>
        <meta
          name="description"
          content="Explore our suite of technology services, from IT consulting and custom software development to data science and UI/UX design."
        />
      </Head>

      {/* --- 1. Page Hero Section --- */}
      <section className="py-24 bg-muted/20">
        <div className="container max-w-7xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-foreground">
            Our Suite of Technology Services
          </h1> {/* */}
          <p className="mt-6 max-w-3xl mx-auto text-xl text-muted-foreground">
            Integrated solutions to power every aspect of your digital strategy.
          </p> {/* */}
        </div>
      </section>

      {/* --- 2. Services Grid Section --- */}
      <section className="py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {serviceCategories.map((category) => (
              <Link key={category.title} href={category.href} passHref>
                <Card className="flex h-full flex-col transition-all duration-300 hover:shadow-xl hover:border-blue-600/60">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex grow flex-col justify-between">
                    <ul className="mb-8 space-y-3">
                      {category.subServices.map((service) => (
                        <li key={service} className="flex items-center">
                          <Check className="mr-3 h-5 w-5 flex-shrink-0 text-blue-600" />
                          <span className="text-muted-foreground">
                            {service}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="font-semibold text-blue-600">
                      Learn more &rarr;
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}