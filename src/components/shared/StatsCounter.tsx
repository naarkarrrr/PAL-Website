'use client';

import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { animate } from 'framer-motion';

type CounterProps = {
  from: number;
  to: number;
  duration?: number;
};

function Counter({ from, to, duration = 2 }: CounterProps) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const node = nodeRef.current;
      const controls = animate(from, to, {
        duration,
        onUpdate(value) {
          node.textContent = Math.round(value).toLocaleString();
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, isInView]);

  return <span ref={nodeRef}>{from}</span>;
}

const stats = [
  { value: 1200, label: 'Animals Rescued' },
  { value: 850, label: 'Adoptions' },
  { value: 300, label: 'Volunteers' },
  { value: 95, unit: '%', label: 'Success Rate' },
];

export function StatsCounter() {
  return (
    <section className="bg-primary text-primary-foreground py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <p className="text-4xl md:text-5xl font-bold font-headline tracking-tighter">
                <Counter from={0} to={stat.value} />
                {stat.unit}
              </p>
              <p className="text-sm md:text-base text-primary-foreground/80 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
