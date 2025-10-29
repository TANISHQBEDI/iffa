"use client";
import emailjs from '@emailjs/browser';

// Use NEXT_PUBLIC_* so values are available on the client.
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export type EmailParams = {
  fullName: string;
  email: string;
  phoneNumber?: string;
  address?: string;
  companyName?: string;
  message?: string;
};

export async function sendContactEmail(params: EmailParams) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error('EmailJS env vars are missing. Set NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, NEXT_PUBLIC_EMAILJS_PUBLIC_KEY.');
  }
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, params, {
    publicKey: PUBLIC_KEY,
  });
}

