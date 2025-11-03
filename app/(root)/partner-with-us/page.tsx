"use client";

import Image from "next/image";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import Tiers from "@/app/(root)/partner-with-us/components/tiers";
import EmailJsForm, {FieldConfig} from '@/components/forms/EmailJsForm'

const partnerFields: FieldConfig[] = [
    {name: 'sender_name', label: 'Your Name', type: 'text', required: true},
    {name: 'sender_email', label: 'Your Email', type: 'email', required: true},
    {name: 'company_name', label: 'Company Name', type: 'text', required: true},
    {name: 'company_url', label: 'Company URL', type: 'text', placeholder: 'https://example.com'},
    {name: 'phone', label: 'Phone', type: 'tel'},
    {
        name: 'interested_tier',
        label: 'Interested Tier',
        type: 'select',
        required: true,
        options: [
            {label: 'PRESENTING PARTNER', value: 'PRESENTING PARTNER'},
            {label: 'CULTURAL PARTNER', value: 'CULTURAL PARTNER'},
            {label: 'SUPPORTING PARTNER', value: 'SUPPORTING PARTNER'},
        ],
        colSpan: 2,
    },
    {name: 'message', label: 'Message', type: 'textarea', placeholder: 'Tell us more...', colSpan: 2},
]

// export const metadata: Metadata = {
//   title: "Partner With Us",
//   description:
//     "Join us in celebrating cinematic excellence. Learn how you can partner with the IFFA Awards and make a difference.",
// }


const PartnerWithUs = () => {
    return (
        <div className="space-y-5">
            <AspectRatio ratio={16 / 9} className="w-full rounded-lg overflow-hidden border border-accent">
                <Image
                    src="/assets/hero.jpg"
                    alt="Partner With Us"
                    fill
                    className="object-cover"
                />
            </AspectRatio>
            <div className="">
                <h1 className="title text-center text-yellow-500">Partners & Supporters</h1>
                <p className="test-center text-justify text-gray-500">
                    The Annual Excellence Awards is more than a celebration—it is a global platform that
                    positions Australia as a leader in cinema, culture, and creativity. Our partners are central to this
                    vision.
                    Their support drives an internationally recognized event that delivers measurable ROI, maximizes
                    brand visibility,
                    and strengthens Australia’s reputation as a hub for world-class events and innovation.
                    Together, we create a legacy that benefits industries, communities, and the nation’s global profile.
                </p>
            </div>
            <div>
                <Tiers/>
            </div>
            <div className="py-8">
                <EmailJsForm
                    title="Partner with us"
                    description={<>Submit your interest and our partnerships team will get back to you soon.</>}
                    fields={partnerFields}
                    columns={2}
                    submitLabel="Submit"
                    templateId={process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_PARTNER as string}
                />
            </div>

        </div>
    )
}

export default PartnerWithUs