'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "./MotionDiv";
import { PawPrint, Heart } from "lucide-react";

export function CallToAction() {
  return (
    <section className="bg-primary/10 py-16">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 text-center"
      >
        <PawPrint className="h-10 w-10 text-primary mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
          Ready to Make a Difference?
        </h2>
        <p className="max-w-2xl mx-auto text-muted-foreground mb-8">
          Join PAL Foundation today. Your contribution, whether through adoption, volunteering, or donation, can change a life forever.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" disabled>
            <Link href="/adopt">
              <PawPrint className="mr-2 h-5 w-5" />
              Adopt a Pet (Coming Soon)
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/donate">
              <Heart className="mr-2 h-5 w-5" />
              Support Our Cause
            </Link>
          </Button>
        </div>
      </MotionDiv>
    </section>
  );
}
