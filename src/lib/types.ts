
import { z } from 'zod';
import type { LucideIcon } from 'lucide-react';


// Animal Schema
export const AnimalSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(2, "Name must be at least 2 characters."),
  species: z.string().min(3, "Species is required."),
  breed: z.string().min(3, "Breed is required."),
  age: z.string().min(1, "Age is required."),
  gender: z.enum(["Male", "Female"]).optional(),
  personality: z.string().min(10, "Personality description is too short."),
  description: z.string().min(20, "Please provide a detailed description."),
  medicalNeeds: z.string().optional(),
  idealHome: z.string().optional(),
  imageUrl: z.string().url("Invalid image URL.").optional(),
  imageHint: z.string().optional(),
});
export type Animal = z.infer<typeof AnimalSchema>;

export const VolunteerSchema = z.object({
  fullName: z.string().min(2, 'Full name is required.'),
  email: z.string().email('Invalid email address.'),
  phoneNumber: z.string().min(10, 'A valid 10-digit phone number is required.'),
  areaPincode: z.string().optional(),
  whatsappGroup: z.enum(['Group 1', 'Group 2', 'Not a Member']),
  communityAnimalsCount: z.string().optional(),
  whatsappNumber: z.string().optional(),
  aadhaarNumber: z.string().optional(),
  partOfNGO: z.enum(['Yes', 'No']),
  ngoName: z.string().optional(),
  hasNGOMembershipCard: z.enum(['Yes', 'No']),
  ngoCardName: z.string().optional(),
  membershipReason: z.string().min(10, 'Please provide a reason for membership.'),
  selectedDate: z.date(),
  selectedTime: z.string().min(1, 'Please select a time'),
  agreement: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the terms and conditions.',
  }),
});
export type Volunteer = z.infer<typeof VolunteerSchema>;

// Advocate Schema
export const AdvocateSchema = z.object({
  fullName: z.string().min(2, "Full name is required."),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  location: z.string().min(3, "Please specify your location."),
  isLawyer: z.enum(["Yes", "No"]),
  barCouncilNumber: z.string().optional(),
  areasOfInterest: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one area of interest.",
  }),
  statement: z.string().min(20, "Your statement is too short.").max(1000, "Your statement is too long."),
  agreement: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions.",
  }),
});
export type Advocate = z.infer<typeof AdvocateSchema>;


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

// Collaboration Schema
export const CollaborationSchema = z.object({
  name: z.string().min(2, "Name or Organization Name is required."),
  contactPerson: z.string().min(2, "Contact person's name is required."),
  email: z.string().email("A valid email is required."),
  phone: z.string().min(10, "A valid phone number is required."),
  proposal: z.string().min(20, "Please provide a detailed proposal.").max(2000, "Proposal is too long."),
  website: z.string().url("Please enter a valid URL.").optional().or(z.literal('')),
});
export type Collaboration = z.infer<typeof CollaborationSchema>;


// Sponsor/Partner Schema
export const SponsorSchema = z.object({
  companyName: z.string().min(2, "Company name is required."),
  contactPerson: z.string().min(2, "Contact person's name is required."),
  jobTitle: z.string().min(2, "Job title is required."),
  email: z.string().email("A valid work email is required."),
  phone: z.string().min(10, "A valid phone number is required."),
  website: z.string().url("Please enter a valid company website URL."),
  sponsorshipLevel: z.enum(['Platinum', 'Gold', 'Silver', 'Friend of PAL', 'Other']),
  message: z.string().min(10, "Your message is too short.").max(1000, "Your message is too long."),
});
export type Sponsor = z.infer<typeof SponsorSchema>;

// Login Schema
export const LoginSchema = z.object({
  email: z.string().email('Please enter a valid email address.'),
  password: z.string().min(6, 'Password must be at least 6 characters long.'),
});
export type LoginCredentials = z.infer<typeof LoginSchema>;


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

    
