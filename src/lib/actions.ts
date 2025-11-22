
'use server';

import { revalidatePath } from 'next/cache';
import { addDoc, collection, serverTimestamp, query, where, getDocs, limit } from 'firebase/firestore';
import { z } from 'zod';
import { db } from '@/firebase';
import { AmbulanceRequestSchema, AnimalSchema, ContactSchema, MembershipSchema, AdvocateSchema, CollaborationSchema, SponsorSchema } from './types';

// Generic function to handle form submission
async function handleFormSubmission(
  collectionName: string,
  schema: z.ZodType<any, any>,
  data: unknown,
  revalidationPath?: string
) {
  try {
    const validatedData = schema.parse(data);

    // Check for duplicates based on email if it exists in the schema
    if (validatedData.email) {
      const q = query(
        collection(db, collectionName),
        where("email", "==", validatedData.email),
        limit(1)
      );
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        return { success: false, message: 'A submission with this email already exists.' };
      }
    }

    await addDoc(collection(db, collectionName), {
      ...validatedData,
      createdAt: serverTimestamp(),
    });

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

export async function submitAmbulanceRequest(data: unknown) {
  return handleFormSubmission('ambulance_requests', AmbulanceRequestSchema, data);
}

export async function submitContactForm(data: unknown) {
  return handleFormSubmission('contact_messages', ContactSchema, data);
}

export async function addAnimal(data: unknown) {
  return handleFormSubmission('adoptable_animals', AnimalSchema, data, '/adopt');
}

export async function submitAdvocateForm(data: unknown) {
  return handleFormSubmission('advocate_applications', AdvocateSchema, data);
}

export async function submitCollaborationForm(data: unknown) {
  return handleFormSubmission('collaboration_proposals', CollaborationSchema, data);
}

export async function submitSponsorForm(data: unknown) {
  return handleFormSubmission('sponsor_inquiries', SponsorSchema, data);
}

export async function submitMembershipForm(data: unknown) {
  return handleFormSubmission('membership_applications', MembershipSchema, data);
}
