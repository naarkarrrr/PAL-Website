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
import { AnimalSchema, type Animal } from '@/lib/types';
import { addAnimal } from '@/lib/actions';
import { useState } from 'react';
import { Loader2, Sparkles } from 'lucide-react';
import { MotionDiv } from '../shared/MotionDiv';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { suggestAnimalDescription, type SuggestAnimalDescriptionInput } from '@/ai/flows/animal-description-enrichment';

type AnimalFormValues = z.infer<typeof AnimalSchema>;

export function AddAnimalForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const form = useForm<AnimalFormValues>({
    resolver: zodResolver(AnimalSchema),
    defaultValues: {
      name: '',
      species: '',
      breed: '',
      age: '',
      gender: undefined,
      personality: '',
      description: '',
      medicalNeeds: '',
      idealHome: '',
    },
  });

  async function handleGenerateDescription() {
    setIsGenerating(true);
    const formData = form.getValues();
    const inputForAI: SuggestAnimalDescriptionInput = {
        name: formData.name,
        species: formData.species,
        breed: formData.breed,
        age: formData.age,
        gender: formData.gender,
        personality: formData.personality,
        medicalNeeds: formData.medicalNeeds,
        idealHome: formData.idealHome,
    };

    try {
        const { suggestedDescription } = await suggestAnimalDescription(inputForAI);
        form.setValue('description', suggestedDescription);
        toast({
            title: 'Description Generated!',
            description: 'The AI-powered description has been added below.',
        });
    } catch (error) {
        console.error("AI Error:", error);
        toast({
            variant: 'destructive',
            title: 'AI Generation Failed',
            description: 'Could not generate a description. Please try again.',
        });
    } finally {
        setIsGenerating(false);
    }
  }


  async function onSubmit(data: AnimalFormValues) {
    setIsSubmitting(true);
    const result = await addAnimal(data);
    setIsSubmitting(false);

    if (result.success) {
      toast({
        title: 'Profile Created!',
        description: `${data.name} has been added to the adoption list.`,
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
          <div className="grid md:grid-cols-2 gap-8">
             <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl><Input placeholder="e.g., Buddy" {...field} /></FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
             <FormField
                control={form.control}
                name="species"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Species</FormLabel>
                    <FormControl><Input placeholder="e.g., Dog, Cat" {...field} /></FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
             <FormField
                control={form.control}
                name="breed"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Breed</FormLabel>
                    <FormControl><Input placeholder="e.g., Golden Retriever" {...field} /></FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
             <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Age</FormLabel>
                    <FormControl><Input placeholder="e.g., 2 years, Senior" {...field} /></FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
          </div>

          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="personality"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Personality Traits</FormLabel>
                <FormControl>
                  <Textarea placeholder="e.g., Playful, shy, energetic, loves cuddles" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

            <FormField
                control={form.control}
                name="medicalNeeds"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Medical Needs (Optional)</FormLabel>
                    <FormControl><Input placeholder="e.g., Daily medication, special diet" {...field} /></FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            
            <FormField
                control={form.control}
                name="idealHome"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Ideal Home (Optional)</FormLabel>
                    <FormControl><Input placeholder="e.g., Home with a yard, no other pets" {...field} /></FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            
            <div className="space-y-2">
                <Button type="button" variant="outline" onClick={handleGenerateDescription} disabled={isGenerating}>
                    {isGenerating ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                    Generate Description with AI
                </Button>
                <FormDescription>
                    Uses the info above to create an engaging adoption profile description.
                </FormDescription>
            </div>


            <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Profile Description</FormLabel>
                    <FormControl>
                    <Textarea
                        placeholder="A detailed description of the animal..."
                        className="resize-y min-h-[150px]"
                        {...field}
                    />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />

          <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={isSubmitting}>
             {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
             Add Animal to Roster
          </Button>
        </form>
      </Form>
    </MotionDiv>
  );
}
