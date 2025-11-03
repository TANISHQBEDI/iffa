"use client";
import emailjs from '@emailjs/browser';

// Use NEXT_PUBLIC_* so values are available on the client.
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const DEFAULT_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export type EmailParams = {
  fullName: string;
  email: string;
  phoneNumber?: string;
  address?: string;
  companyName?: string;
  message?: string;
};

export type SendEmailOptions = {
  templateId: string;
  serviceId?: string;
  publicKey?: string;
};

export async function sendEmail(params: Record<string, any>, opts: SendEmailOptions) {
  const serviceId = opts.serviceId ?? SERVICE_ID;
  const templateId = opts.templateId;
  const publicKey = opts.publicKey ?? PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error('EmailJS configuration missing. Ensure serviceId, templateId, and publicKey are provided (or set NEXT_PUBLIC_EMAILJS_* env vars).');
  }

  return emailjs.send(serviceId, templateId, params, { publicKey });
}

// Backwards-compatible helper for current contact form using default template ID
export async function sendContactEmail(params: EmailParams) {
  if (!SERVICE_ID || !DEFAULT_TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error('EmailJS env vars are missing. Set NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, NEXT_PUBLIC_EMAILJS_PUBLIC_KEY.');
  }
  return emailjs.send(SERVICE_ID, DEFAULT_TEMPLATE_ID, params, {
    publicKey: PUBLIC_KEY,
  });
}
