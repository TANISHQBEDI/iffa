"use client"

import React from "react"
import EmailJsForm, { FieldConfig } from '@/components/forms/EmailJsForm'
import { sendContactEmail } from "@/lib/email";

const fields: FieldConfig[] = [
  { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'John Doe', required: true },
  { name: 'phoneNumber', label: 'Phone Number', type: 'tel', placeholder: '+61 01 23456789' },
  { name: 'address', label: 'Address', type: 'text', placeholder: 'Please enter your address' },
  { name: 'companyName', label: 'Company Name', type: 'text', placeholder: 'Please enter your company name' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'john.doe@xyz.com', required: true, colSpan: 2 },
  { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Write your message here...', colSpan: 2 },
]

const ContactUs = () => {
  return (
    <EmailJsForm
      title="Contact Us"
      description={
        <>Got a question? We would love to hear from you! Send us a message and we will respond as soon as possible.</>
      }
      fields={fields}
      columns={2}
      submitLabel="Submit"
      templateId={process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT as string}
      onSubmitAction={async (values) => {
        await sendContactEmail({
          fullName: values.fullName,
          email: values.email,
          phoneNumber: values.phoneNumber,
          address: values.address,
          companyName: values.companyName,
          message: values.message,
        })
      }}
    />
  )
}

export default ContactUs