
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
import { SponsorSchema } from '@/lib/types';
import { submitSponsorForm } from '@/lib/actions';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { MotionDiv } from '../shared/MotionDiv';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

type SponsorFormValues = z.infer<typeof SponsorSchema>;

export function SponsorForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<SponsorFormValues>({
    resolver: zodResolver(SponsorSchema),
    defaultValues: {
      companyName: '',
      contactPerson: '',
      jobTitle: '',
      email: '',
      phone: '',
      website: '',
      sponsorshipLevel: undefined,
      message: '',
    },
  });

  async function onSubmit(data: SponsorFormValues) {
    setIsSubmitting(true);
    const result = await submitSponsorForm(data);
    setIsSubmitting(false);

    if (result.success) {
      toast({
        title: 'Inquiry Sent!',
        description: "Thank you for your interest in sponsoring us. Our partnership team will get in touch with you shortly.",
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
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl><Input placeholder="e.g., Pawsitive Corp." {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid md:grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="contactPerson"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Person</FormLabel>
                  <FormControl><Input placeholder="e.g., Alex Ray" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="jobTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Title</FormLabel>
                  <FormControl><Input placeholder="e.g., Marketing Manager" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Work Email</FormLabel>
                  <FormControl><Input placeholder="alex.ray@example.com" type="email" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Work Phone Number</FormLabel>
                  <FormControl><Input placeholder="9876543210" type="tel" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
           <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Website</FormLabel>
                  <FormControl><Input placeholder="https://yourcompany.com" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
           <FormField
            control={form.control}
            name="sponsorshipLevel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Level of Interest</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a sponsorship level" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Platinum">Platinum Partner</SelectItem>
                    <SelectItem value="Gold">Gold Sponsor</SelectItem>
                    <SelectItem value="Silver">Silver Sponsor</SelectItem>
                    <SelectItem value="Friend of PAL">Friend of PAL</SelectItem>
                    <SelectItem value="Other">Other/Custom</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

            <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                    <Textarea
                        placeholder="Tell us a little more about your partnership goals..."
                        className="resize-y min-h-[120px]"
                        {...field}
                    />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />

          <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={isSubmitting}>
             {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
             Send Inquiry
          </Button>
        </form>
      </Form>
    </MotionDiv>
  );
}
