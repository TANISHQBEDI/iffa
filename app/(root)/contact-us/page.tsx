"use client"

import React, {FormEvent, useState} from "react"
import {
    Field, FieldDescription, FieldGroup, FieldLabel,
    FieldLegend, FieldSet
} from "@/components/ui/field";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import { sendContactEmail } from "@/lib/email";


const ContactUs = () => {
    const [fullName, setFullName] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [company, setCompany] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState<null | { type: 'success' | 'error'; text: string }>(null)

    const resetForm = () => {
        setFullName("")
        setPhone("")
        setAddress("")
        setCompany("")
        setEmail("")
        setMessage("")
    }

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        // basic client-side validation
        if (!fullName || !email) {
            setStatus({type: 'error', text: 'Please provide at least your name and email.'})
            return
        }

        try {
            setLoading(true)
            setStatus(null)
            await sendContactEmail({
                fullName,
                email,
                phoneNumber: phone,
                address,
                companyName: company,
                message,
            })
            setStatus({ type: 'success', text: 'Message sent.' })
            resetForm()
        } catch (error: unknown) {
            const msg = error instanceof Error ? error.message : 'Failed to send message. Please try again.'
            setStatus({ type: 'error', text: msg })
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='w-full max-w-md space-y-6 container mx-auto'>
            <form onSubmit={onSubmit}>
                <FieldGroup>
                    <FieldSet>
                        <FieldLegend>
                            <h1 className='title'>Contact Us</h1>
                        </FieldLegend>

                        <FieldDescription>
              <span className='text-xs'>
                Got a question? We would love to hear from you!
                Send us a message and we will respond as soon as possible.
              </span>
                        </FieldDescription>

                        <FieldGroup>
                            <div className='grid grid-cols-2 gap-1'>
                                <Field>
                                    <FieldLabel>Full Name</FieldLabel>
                                    <Input
                                        type='text'
                                        placeholder='John Doe'
                                        required
                                        value={fullName}
                                        onChange={(e) => setFullName((e.target as HTMLInputElement).value)}
                                    />
                                </Field>
                                <Field>
                                    <FieldLabel>Phone Number</FieldLabel>
                                    <Input
                                        type='text'
                                        placeholder='+61 01 23456789'
                                        required
                                        value={phone}
                                        onChange={(e) => setPhone((e.target as HTMLInputElement).value)}
                                    />
                                </Field>

                            </div>
                            <div className='grid grid-cols-2 gap-1'>
                                <Field>
                                    <FieldLabel>Address</FieldLabel>
                                    <Input
                                        type='text'
                                        placeholder='Please enter your address'
                                        required
                                        value={address}
                                        onChange={(e) => setAddress((e.target as HTMLInputElement).value)}
                                    />
                                </Field>
                                <Field>
                                    <FieldLabel>Company Name</FieldLabel>
                                    <Input
                                        type='text'
                                        placeholder='Please enter your company name'
                                        required
                                        value={company}
                                        onChange={(e) => setCompany((e.target as HTMLInputElement).value)}
                                    />
                                </Field>

                            </div>

                            <Field>
                                <FieldLabel>Email</FieldLabel>
                                <Input
                                    type='email'
                                    placeholder='john.doe@xyz.com'
                                    required
                                    value={email}
                                    onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
                                />
                            </Field>
                            <Field>
                                <FieldLabel>Message</FieldLabel>
                                <Textarea
                                    placeholder='Write your message here...'
                                    className='resize-none'
                                    required
                                    value={message}
                                    onChange={(e) => setMessage((e.target as HTMLTextAreaElement).value)}
                                />
                            </Field>
                        </FieldGroup>
                    </FieldSet>

                    <Field>
                        <Button type='submit' disabled={loading}>
                            {loading ? 'Sending...' : 'Submit'}
                        </Button>
                    </Field>

                    {status && (
                        <div
                            className={`mt-2 text-sm ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                            {status.text}
                        </div>
                    )}

                </FieldGroup>
            </form>
        </div>

    )
}

export default ContactUs