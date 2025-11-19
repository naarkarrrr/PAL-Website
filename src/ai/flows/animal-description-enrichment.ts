'use server';
/**
 * @fileOverview An AI tool that suggests descriptive text for new animal profiles based on the existing data.
 *
 * - suggestAnimalDescription - A function that handles the animal description enrichment process.
 * - SuggestAnimalDescriptionInput - The input type for the suggestAnimalDescription function.
 * - SuggestAnimalDescriptionOutput - The return type for the suggestAnimalDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestAnimalDescriptionInputSchema = z.object({
  name: z.string().describe('The name of the animal.'),
  species: z.string().describe('The species of the animal (e.g., dog, cat, rabbit).'),
  breed: z.string().describe('The breed of the animal, if known.'),
  age: z.string().describe('The age of the animal (e.g., young, adult, senior).'),
  gender: z.string().describe('The gender of the animal (male or female).'),
  personality: z.string().describe('A brief description of the animal\s personality.'),
  medicalNeeds: z.string().optional().describe('Any medical needs or conditions the animal has.'),
  idealHome: z.string().optional().describe('The ideal home environment for the animal.'),
});
export type SuggestAnimalDescriptionInput = z.infer<typeof SuggestAnimalDescriptionInputSchema>;

const SuggestAnimalDescriptionOutputSchema = z.object({
  suggestedDescription: z.string().describe('A suggested descriptive text for the animal profile.'),
});
export type SuggestAnimalDescriptionOutput = z.infer<typeof SuggestAnimalDescriptionOutputSchema>;

export async function suggestAnimalDescription(input: SuggestAnimalDescriptionInput): Promise<SuggestAnimalDescriptionOutput> {
  return suggestAnimalDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestAnimalDescriptionPrompt',
  input: {schema: SuggestAnimalDescriptionInputSchema},
  output: {schema: SuggestAnimalDescriptionOutputSchema},
  prompt: `You are a content writer for an animal adoption website.
  Your goal is to write an engaging and enticing description for a new animal profile, based on the available data.
  Use the following information to create a compelling description that will encourage potential adopters to inquire about the animal.

  Name: {{{name}}}
  Species: {{{species}}}
  Breed: {{{breed}}}
  Age: {{{age}}}
  Gender: {{{gender}}}
  Personality: {{{personality}}}
  Medical Needs: {{{medicalNeeds}}}
  Ideal Home: {{{idealHome}}}

  Write a description that is approximately 100-150 words long. Focus on highlighting the animal's best qualities and making them sound appealing to adopters.
`,
});

const suggestAnimalDescriptionFlow = ai.defineFlow(
  {
    name: 'suggestAnimalDescriptionFlow',
    inputSchema: SuggestAnimalDescriptionInputSchema,
    outputSchema: SuggestAnimalDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
