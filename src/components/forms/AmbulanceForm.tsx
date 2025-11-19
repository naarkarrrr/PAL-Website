'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { AmbulanceRequestSchema } from '@/lib/types';
import { submitAmbulanceRequest } from '@/lib/actions';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { MotionDiv } from '../shared/MotionDiv';

type AmbulanceFormValues = z.infer<typeof AmbulanceRequestSchema>;

export function AmbulanceForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<AmbulanceFormValues>({
    resolver: zodResolver(AmbulanceRequestSchema),
    defaultValues: {
      reporterName: '',
      phone: '',
      location: '',
      animalCondition: '',
    },
  });

  async function onSubmit(data: AmbulanceFormValues) {
    setIsSubmitting(true);
    const result = await submitAmbulanceRequest(data);
    setIsSubmitting(false);

    if (result.success) {
      toast({
        title: 'Request Received!',
        description: 'Our team has been dispatched. Thank you for helping.',
      });
      form.reset();
    } else {
      toast({
        variant: 'destructive',
        title: 'Submission Failed',
        description: result.message || 'There was a problem with your request.',
      });
    }
  }

  return (
    <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="reporterName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Name</FormLabel>
                <FormControl>
                  <Input placeholder="Jane Smith" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="(123) 456-7890" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location of Animal</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Please be as specific as possible, including landmarks."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="animalCondition"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description of Animal and Condition</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="e.g., 'Small brown dog, appears to have an injured leg, near the old oak tree in the park.'"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={isSubmitting}>
             {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Request Ambulance
          </Button>
        </form>
      </Form>
    </MotionDiv>
  );
}
