import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CheckCircle2 } from 'lucide-react';

// Data from the doc [cite: 22-25]
const valueProps = [
  {
    title: 'Deep Domain Expertise',
    description: 'Our team consists of industry veterans with proven experience in delivering complex projects across various sectors.',
  },
  {
    title: 'Agile Methodology',
    description: 'We employ an agile and transparent process, ensuring you are involved at every stage, from ideation to deployment.',
  },
  {
    title: 'Focus on ROI',
    description: 'Every solution we build is designed with a clear focus on delivering measurable business value and a strong return on investment.',
  },
  {
    title: 'Dedicated Support',
    description: 'Our commitment to your success extends beyond launch with dedicated maintenance and support to ensure seamless operation.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container grid max-w-7xl mx-auto grid-cols-1 px-2 md:px-0 gap-16 md:grid-cols-2">
        
        {/* Left Column: Text Content [cite: 19-21] */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground">
            Your Strategic Technology Partner
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            At Ninjabox, we are more than just developers; we are architects of 
            digital success. Our partnership approach ensures we are deeply 
            invested in your goals, delivering solutions that are not only 
            technologically advanced but also commercially viable.
          </p>
        </div>

        {/* Right Column: Accordion [cite: 22-25] */}
        <div>
          <Accordion type="single" collapsible defaultValue="item-0">
            {valueProps.map((prop, index) => (
              <AccordionItem key={prop.title} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold">
                  {prop.title}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {prop.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
}