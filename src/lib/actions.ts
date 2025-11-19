'use server';

import { revalidatePath } from 'next/cache';
import { addDoc, collection } from 'firebase/firestore';
import { z } from 'zod';
import { db } from './firebase';
import { AmbulanceRequestSchema, AnimalSchema, ContactSchema, VolunteerSchema } from './types';

// Generic function to handle form submission
async function handleFormSubmission(
  collectionName: string,
  schema: z.ZodType<any, any>,
  data: unknown,
  revalidationPath?: string
) {
  try {
    const validatedData = schema.parse(data);
    await addDoc(collection(db, collectionName), validatedData);

    if (revalidationPath) {
      revalidatePath(revalidationPath);
    }
    return { success: true, message: 'Submission successful!' };
  } catch (error) {
    console.error(`Error saving to ${collectionName}:`, error);
    if (error instanceof z.ZodError) {
      return { success: false, message: 'Validation failed.', errors: error.errors };
    }
    return { success: false, message: 'An unexpected error occurred.' };
  }
}

export async function submitVolunteerForm(data: unknown) {
  return handleFormSubmission('volunteers', VolunteerSchema, data);
}

export async function submitAmbulanceRequest(data: unknown) {
  return handleFormSubmission('ambulanceRequests', AmbulanceRequestSchema, data);
}

export async function submitContactForm(data: unknown) {
  return handleFormSubmission('contacts', ContactSchema, data);
}

export async function addAnimal(data: unknown) {
  return handleFormSubmission('animals', AnimalSchema, data, '/adopt');
}
