
'use server';

import { revalidatePath } from 'next/cache';
import { addDoc, collection } from 'firebase/firestore';
import { z } from 'zod';
import { db } from './firebase';
import { AmbulanceRequestSchema, AnimalSchema, ContactSchema, MembershipSchema, VolunteerSchema } from './types';
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

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


// Function to upload a file to Firebase Storage
// async function uploadFileToStorage(file: File, uid: string) {
//   const storage = getStorage();
//   const storageRef = ref(storage, `volunteers/${uid}/aadhaar/${file.name}`);
//   const snapshot = await uploadBytes(storageRef, file);
//   const downloadURL = await getDownloadURL(snapshot.ref);
//   return downloadURL;
// }


export async function submitMembershipForm(data: unknown) {
  try {
    const validatedData = MembershipSchema.parse(data);
    // const { aadhaarCard, ...formData } = validatedData;
    
    // let fileUrl = '';
    // if (aadhaarCard && aadhaarCard.size > 0) {
    //   // A real UID should be generated or retrieved from auth
    //   const uid = new Date().getTime().toString(); 
    //   fileUrl = await uploadFileToStorage(aadhaarCard, uid);
    // }

    await addDoc(collection(db, 'membershipApplications'), {
      ...validatedData,
      // aadhaarCardUrl: fileUrl,
      createdAt: new Date(),
    });

    return { success: true, message: 'Registration submitted! We will reach out soon.' };

  } catch (error) {
    console.error('Error submitting membership form:', error);
     if (error instanceof z.ZodError) {
      return { success: false, message: 'Validation failed.', errors: error.errors };
    }
    return { success: false, message: 'An unexpected error occurred.' };
  }
}
