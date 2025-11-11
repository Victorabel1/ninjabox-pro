import React from 'react';

// Placeholder for client logos 
const clients = [
  'CLIENT-LOGO-1',
  'CLIENT-LOGO-2',
  'CLIENT-LOGO-3',
  'CLIENT-LOGO-4',
  'CLIENT-LOGO-5',
  'CLIENT-LOGO-6',
];

export function TrustedBy() {
  return (
    <section className="py-12 bg-muted/40">
      <div className="container max-w-7xl">
        <h3 className="mb-8 text-center text-sm font-semibold uppercase text-muted-foreground tracking-wider">
          Trusted By Leading Enterprises
        </h3>
        
        {/* We render the list twice for a seamless loop.
          'overflow-hidden' + 'flex' + 'animate-marquee' creates the effect.
        */}
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-marquee">
            {/* Render list twice */}
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="flex-shrink-0 px-12">
                <span className="text-2xl font-semibold text-muted-foreground/60">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}