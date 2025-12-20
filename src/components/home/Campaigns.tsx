'use client';

import { Hourglass } from 'lucide-react';

export function Campaigns() {
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12 text-center">
            <div className="inline-block bg-accent/10 text-accent p-4 rounded-full mb-4">
              <Hourglass className="h-10 w-10" />
            </div>
            <h2 className="text-3xl font-bold font-headline mb-4">Urgent Campaigns Coming Soon</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We are getting ready to launch our new fundraising campaigns. Please check back shortly to see how you can directly support animals in critical need.
            </p>
        </div>
      </div>
    </section>
  );
}
