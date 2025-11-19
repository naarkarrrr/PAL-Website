
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { CollaborationSchema } from '@/lib/types';
import { submitCollaborationForm } from '@/lib/actions';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { MotionDiv } from '../shared/MotionDiv';

type CollaborationFormValues = z.infer<typeof CollaborationSchema>;

export function CollaborationForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<CollaborationFormValues>({
    resolver: zodResolver(CollaborationSchema),
    defaultValues: {
      name: '',
      contactPerson: '',
      email: '',
      phone: '',
      proposal: '',
      website: '',
    },
  });

  async function onSubmit(data: CollaborationFormValues) {
    setIsSubmitting(true);
    const result = await submitCollaborationForm(data);
    setIsSubmitting(false);

    if (result.success) {
      toast({
        title: 'Proposal Submitted!',
        description: "Thank you for your interest in collaborating. We will review your proposal and be in touch.",
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
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Name / Organization's Name</FormLabel>
                <FormControl><Input placeholder="e.g., Jane Doe or Acme Inc." {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="contactPerson"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Person</FormLabel>
                <FormControl><Input placeholder="e.g., John Smith" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid md:grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl><Input placeholder="you@example.com" type="email" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl><Input placeholder="9876543210" type="tel" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Website or Social Media (Optional)</FormLabel>
                    <FormControl><Input placeholder="https://example.com" {...field} /></FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="proposal"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Collaboration Proposal</FormLabel>
                    <FormControl>
                    <Textarea
                        placeholder="Describe your project or idea for collaboration..."
                        className="resize-y min-h-[150px]"
                        {...field}
                    />
                    </FormControl>
                     <FormDescription>
                        Please include as much detail as possible, such as goals, timeline, and required resources.
                    </FormDescription>
                    <FormMessage />
                </FormItem>
                )}
            />


          <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={isSubmitting}>
             {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
             Submit Proposal
          </Button>
        </form>
      </Form>
    </MotionDiv>
  );
}
