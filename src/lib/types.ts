import { z } from 'zod';
import type { LucideIcon } from 'lucide-react';


// Animal Schema
export const AnimalSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(2, "Name must be at least 2 characters."),
  species: z.string().min(3, "Species is required."),
  breed: z.string().min(3, "Breed is required."),
  age: z.string().min(1, "Age is required."),
  gender: z.enum(["Male", "Female"]),
  personality: z.string().min(10, "Personality description is too short."),
  description: z.string().min(20, "Please provide a detailed description."),
  medicalNeeds: z.string().optional(),
  idealHome: z.string().optional(),
  imageUrl: z.string().url("Invalid image URL.").optional(),
  imageHint: z.string().optional(),
});
export type Animal = z.infer<typeof AnimalSchema>;

// Volunteer Schema
export const VolunteerSchema = z.object({
  name: z.string().min(2, "Name is required."),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  availability: z.string().min(3, "Please specify your availability."),
  skills: z.string().optional(),
});
export type Volunteer = z.infer<typeof VolunteerSchema>;

// Contact Schema
export const ContactSchema = z.object({
  name: z.string().min(2, "Name is required."),
  email: z.string().email("Invalid email address."),
  subject: z.string().min(5, "Subject is too short."),
  message: z.string().min(10, "Message is too short."),
});
export type Contact = z.infer<typeof ContactSchema>;

// Ambulance Request Schema
export const AmbulanceRequestSchema = z.object({
  reporterName: z.string().min(2, "Your name is required."),
  phone: z.string().min(10, "A valid phone number is required."),
  location: z.string().min(10, "Please provide a detailed location."),
  animalCondition: z.string().min(10, "Please describe the animal's condition."),
});
export type AmbulanceRequest = z.infer<typeof AmbulanceRequestSchema>;

// Donation Schema
export const DonationSchema = z.object({
    amount: z.number().min(1, "Donation amount must be at least ₹1."),
});
export type Donation = z.infer<typeof DonationSchema>;

// Success Story Type
export interface SuccessStory {
  id: string;
  slug?: string;
  title: string;
  story: string;
  imageUrl: string;
  imageHint: string;
  author?: string;
  date?: Date;
  tags?: string[];
}

// Mission Type
export interface Mission {
    title: string;
    description: string;
    points: string[];
}

// Vision Type
export interface Vision {
    title: string;
    description: string;
    cards: {
        icon: LucideIcon;
        title: string;
        text: string;
    }[];
}

// Story Type
export interface Story {
    title: string;
    founderMessage: string;
    timeline: {
        year: number;
        event: string;
    }[];
}

    
