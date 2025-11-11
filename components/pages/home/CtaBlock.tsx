import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CtaBlock() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container max-w-7xl text-center">
      
        <h2 className="text-4xl font-bold tracking-tight">
          Ready to build what&apos;s next?
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          Let&apos;s discuss how our technology expertise can help you achieve 
          your business objectives.
        </p>
        <Button 
          size="lg" 
          variant="secondary" // 'secondary' variant usually looks good on a primary background
          className="mt-8 text-lg"
          asChild // Use asChild to make the button a link
        >
          <a href="mailto:info@ninjabox.pro">
            Get a Free Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </section>
  );
}