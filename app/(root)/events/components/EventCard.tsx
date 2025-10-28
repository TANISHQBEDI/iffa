import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {EVENT_SECTIONS} from "@/lib/constants";
import {Button} from "@/components/ui/button";
import Link from "next/link";

const EventCard = ({year}: {year:number}) => {
    const isPast = year <= 2023;

    return (
        <Card className={`max-w-[250px] ${isPast ? 'opacity-60 grayscale' : ''}`} aria-disabled={isPast}>
            <CardHeader>
                <CardTitle className='text-center'>{year}</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className='space-y-2'>
                    {EVENT_SECTIONS.map((event, i)=>{
                        const path = `/events/${year}/${event.toLowerCase()}`;
                        if (isPast) {
                            // Render non-clickable, visually disabled text for past years
                            return (
                                <li key={i}>
                                    <span
                                        aria-disabled="true"
                                        className="inline-block w-full text-left cursor-not-allowed opacity-80"
                                    >
                                        {event}
                                    </span>
                                </li>
                            );
                        }

                        // For current/future years render a link wrapped with the Button styles
                        return (
                            <li key={i}>
                                <Button variant='outline' asChild>
                                    <Link aria-label={event} href={path}>{event}</Link>
                                </Button>
                            </li>
                        );
                    })}
                </ul>
            </CardContent>
        </Card>
    );
};

export default EventCard;