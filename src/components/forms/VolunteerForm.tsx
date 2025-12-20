
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
import { CalendarIcon, Loader2 } from 'lucide-react';
import { MotionDiv } from '../shared/MotionDiv';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Checkbox } from '../ui/checkbox';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Calendar } from '../ui/calendar';

type VolunteerFormValues = z.infer<typeof VolunteerSchema>;

export function VolunteerForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<VolunteerFormValues>({
    resolver: zodResolver(VolunteerSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      areaPincode: '',
      whatsappGroup: 'Not a Member',
      communityAnimalsCount: '0',
      whatsappNumber: '',
      aadhaarNumber: '',
      partOfNGO: 'No',
      ngoName: '',
      hasNGOMembershipCard: 'No',
      ngoCardName: '',
      membershipReason: '',
      selectedDate: new Date(),
      selectedTime: '',
      agreement: false,
    },
  });

  const watchPartOfNGO = form.watch('partOfNGO');
  const watchHasNGOCard = form.watch('hasNGOMembershipCard');

  async function onSubmit(data: VolunteerFormValues) {
    setIsSubmitting(true);
    const result = await submitVolunteerForm(data);
    setIsSubmitting(false);

    if (result.success) {
      toast({
        title: 'Registration submitted!',
        description: "We will reach out soon.",
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
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl><Input placeholder="you@example.com" {...field} type="email" /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid md:grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <div className="flex items-center">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-background text-sm text-muted-foreground">+91</span>
                    <FormControl>
                      <Input placeholder="9876543210" {...field} type="tel" className="rounded-l-none" />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
                control={form.control}
                name="areaPincode"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Area Pincode</FormLabel>
                    <FormControl><Input placeholder="e.g., 400001" {...field} /></FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
          </div>

           <FormField
            control={form.control}
            name="whatsappGroup"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Member of PAL WhatsApp Group?</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl>
                  <SelectContent>
                    <SelectItem value="Group 1">Group 1</SelectItem>
                    <SelectItem value="Group 2">Group 2</SelectItem>
                    <SelectItem value="Not a Member">Not a Member</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

           <FormField
                control={form.control}
                name="communityAnimalsCount"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Number of Community Animals you care for</FormLabel>
                    <FormControl><Input type="number" placeholder="0" {...field} /></FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            
            <div className="grid md:grid-cols-2 gap-8">
                <FormField
                    control={form.control}
                    name="whatsappNumber"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>WhatsApp Number</FormLabel>
                        <FormControl><Input placeholder="e.g., 9876543210" {...field} /></FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                 <FormField
                    control={form.control}
                    name="aadhaarNumber"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Aadhaar Number</FormLabel>
                        <FormControl><Input placeholder="xxxx-xxxx-xxxx" {...field} /></FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
            </div>
            
            <FormField
                control={form.control}
                name="partOfNGO"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Are you part of any Animal/NGO Welfare?</FormLabel>
                     <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl>
                        <SelectContent>
                            <SelectItem value="Yes">Yes</SelectItem>
                            <SelectItem value="No">No</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormMessage />
                </FormItem>
                )}
            />

            {watchPartOfNGO === 'Yes' && (
                 <FormField
                    control={form.control}
                    name="ngoName"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>If Yes, name of NGO</FormLabel>
                        <FormControl><Input placeholder="Name of your NGO" {...field} /></FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
            )}

            <FormField
                control={form.control}
                name="hasNGOMembershipCard"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Are you holding any NGO Membership Card?</FormLabel>
                     <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl>
                        <SelectContent>
                            <SelectItem value="Yes">Yes</SelectItem>
                            <SelectItem value="No">No</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormMessage />
                </FormItem>
                )}
            />
            {watchHasNGOCard === 'Yes' && (
                 <FormField
                    control={form.control}
                    name="ngoCardName"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>If Yes, name of NGO card</FormLabel>
                        <FormControl><Input placeholder="Name of NGO on the card" {...field} /></FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
            )}
             <FormField
                control={form.control}
                name="membershipReason"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Why do you want a PAL Membership Card?</FormLabel>
                    <FormControl>
                    <Textarea placeholder="Tell us why you'd like to become a member..." className="resize-y" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />

            <div className="grid md:grid-cols-2 gap-8">
                 <FormField
                    control={form.control}
                    name="selectedDate"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                        <FormLabel>Select Date</FormLabel>
                        <Popover>
                            <PopoverTrigger asChild>
                            <FormControl>
                                <Button
                                variant={"outline"}
                                className={cn(
                                    "w-full pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                )}
                                >
                                {field.value ? (
                                    format(field.value, "PPP")
                                ) : (
                                    <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                            </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                date > new Date() || date < new Date("1900-01-01")
                                }
                                initialFocus
                            />
                            </PopoverContent>
                        </Popover>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="selectedTime"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Enter Time</FormLabel>
                        <FormControl><Input type="time" {...field} /></FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
            </div>
            
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
                        By filling out this form, I acknowledge that I have read, understood, and agree to all the T&Cs and confirm that all submitted information is correct.
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
