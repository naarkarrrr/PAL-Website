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
import { VolunteerSchema } from '@/lib/types';
import { submitVolunteerForm } from '@/lib/actions';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { MotionDiv } from '../shared/MotionDiv';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Checkbox } from '../ui/checkbox';

type VolunteerFormValues = z.infer<typeof VolunteerSchema>;

const availabilityItems = [
  { id: 'weekdays', label: 'Weekdays' },
  { id: 'weekends', label: 'Weekends' },
  { id: 'both', label: 'Both' },
];

export function VolunteerForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<VolunteerFormValues>({
    resolver: zodResolver(VolunteerSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      location: '',
      preferredRole: undefined,
      availability: [],
      bio: '',
      agreement: false,
    },
  });

  async function onSubmit(data: VolunteerFormValues) {
    setIsSubmitting(true);
    const result = await submitVolunteerForm(data);
    setIsSubmitting(false);

    if (result.success) {
      toast({
        title: 'Thank you for joining!',
        description: "We'll reach out soon.",
      });
      form.reset();
    } else {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
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
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} aria-label="Full Name" />
                </FormControl>
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
                  <FormControl>
                    <Input placeholder="you@example.com" {...field} type="email" aria-label="Email" />
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
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="(123) 456-7890" {...field} type="tel" aria-label="Phone Number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location (City/District)</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Mumbai" {...field} aria-label="Location" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="preferredRole"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Role</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger aria-label="Preferred Role">
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Rescue">Rescue</SelectItem>
                    <SelectItem value="Adoption">Adoption</SelectItem>
                    <SelectItem value="Feeding">Feeding</SelectItem>
                    <SelectItem value="Ambulance">Ambulance</SelectItem>
                    <SelectItem value="Admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="availability"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel>Availability</FormLabel>
                </div>
                <div className="flex flex-wrap gap-4">
                  {availabilityItems.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="availability"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...(field.value || []), item.id])
                                    : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== item.id
                                      )
                                    )
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Brief Bio</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a little about yourself and why you want to volunteer..."
                    className="resize-y min-h-[120px]"
                    {...field}
                    aria-label="Brief Bio"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="agreement"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    aria-label="Agree to terms and conditions"
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    I agree to the terms and conditions.
                  </FormLabel>
                  <FormDescription>
                    You agree to our Volunteer Agreement and Privacy Policy.
                  </FormDescription>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={isSubmitting}>
             {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
             Submit Application
          </Button>
        </form>
      </Form>
    </MotionDiv>
  );
}
