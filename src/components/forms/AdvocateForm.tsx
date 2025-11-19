
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
import { AdvocateSchema } from '@/lib/types';
import { submitAdvocateForm } from '@/lib/actions';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { MotionDiv } from '../shared/MotionDiv';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Checkbox } from '../ui/checkbox';

type AdvocateFormValues = z.infer<typeof AdvocateSchema>;

const interestAreas = [
    { id: 'animal-welfare', label: 'Animal Welfare Law' },
    { id: 'human-rights', label: 'Human Rights' },
    { id: 'pil', label: 'Public Interest Litigation' },
];

export function AdvocateForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<AdvocateFormValues>({
    resolver: zodResolver(AdvocateSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      isLawyer: undefined,
      barCouncilNumber: '',
      areasOfInterest: [],
      statement: '',
      agreement: false,
    },
  });

  const watchIsLawyer = form.watch('isLawyer');

  async function onSubmit(data: AdvocateFormValues) {
    setIsSubmitting(true);
    const result = await submitAdvocateForm(data);
    setIsSubmitting(false);

    if (result.success) {
      toast({
        title: 'Application Submitted!',
        description: "Thank you for your interest. We will be in touch soon.",
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
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
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
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location (City/District)</FormLabel>
                <FormControl><Input placeholder="e.g., Mumbai" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="isLawyer"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Are you a lawyer?</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl><SelectTrigger><SelectValue placeholder="Select an option" /></SelectTrigger></FormControl>
                  <SelectContent>
                    <SelectItem value="Yes">Yes</SelectItem>
                    <SelectItem value="No">No</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {watchIsLawyer === 'Yes' && (
            <FormField
              control={form.control}
              name="barCouncilNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bar Council Registration Number</FormLabel>
                  <FormControl><Input placeholder="e.g., MAH/1234/2024" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

            <FormField
                control={form.control}
                name="areasOfInterest"
                render={() => (
                <FormItem>
                    <div className="mb-4">
                        <FormLabel>Areas of Interest</FormLabel>
                        <FormDescription>
                            Select the areas you are interested in contributing to.
                        </FormDescription>
                    </div>
                    {interestAreas.map((item) => (
                    <FormField
                        key={item.id}
                        control={form.control}
                        name="areasOfInterest"
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
                    <FormMessage />
                </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="statement"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Statement of Purpose</FormLabel>
                    <FormControl>
                    <Textarea
                        placeholder="Briefly tell us why you want to become an advocate for PAL Foundation..."
                        className="resize-y min-h-[150px]"
                        {...field}
                    />
                    </FormControl>
                     <FormDescription>
                        Explain your motivation and any relevant experience you have.
                    </FormDescription>
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
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                    <FormLabel className="font-normal">
                       I agree to uphold the mission and values of PAL Foundation and to provide assistance in accordance with applicable laws and ethical guidelines.
                    </FormLabel>
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
