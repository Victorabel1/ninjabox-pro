import React from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

// Data from the doc [cite: 13-17]
const services = [
  {
    title: 'Strategic IT & Business Consulting',
    description: 'Aligning your technology roadmap with your long-term business goals for maximum impact and ROI.',
  },
  {
    title: 'Custom Software Development',
    description: 'Building bespoke web and mobile applications that deliver exceptional user experiences and robust performance.',
  },
  {
    title: 'Data Science & Analytics',
    description: 'Transforming raw data into predictive insights and actionable intelligence to fuel strategic decision-making.',
  },
  {
    title: 'Digital Transformation',
    description: 'Modernizing your legacy systems and processes to build a more agile, efficient, and resilient organization.',
  },
  {
    title: 'Corporate Training & Skilling',
    description: 'Empowering your workforce with the critical tech skills needed to thrive in the digital economy.',
  },
];

export function ServicesOverview() {
  return (
    <section className="py-24">
      <div className="container max-w-7xl mx-auto px-2 md:px-1">
        {/* Section Header [cite: 11-12] */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-foreground">
            Our Core Competencies
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We provide end-to-end technology services designed to solve your
            most complex challenges.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -5 }} // Framer Motion hover effect
              className="h-full"
            >
              <Card className="flex h-full flex-col overflow-hidden rounded-lg border-border/60 transition-all hover:border-blue-600/40 hover:shadow-lg">
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-grow flex-col justify-between">
                  <CardDescription className="mb-6">
                    {service.description}
                  </CardDescription>
                  <div className="flex items-center font-medium text-blue-600">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}