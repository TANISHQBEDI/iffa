import React from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

type ContentDetailsProps = {
    title: string;
    synopsis: string | undefined | null;
    countries: string[] | undefined | null;
    genres: string[] | undefined | null;
    languages: string[] | undefined | null;
}

const ContentDetails = (
    props: ContentDetailsProps
) => {
    const {title, synopsis, countries, genres, languages} = props;
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>
                    <CardContent>
                        <CardDescription>
                            <strong>Countries:</strong> {countries && countries.length > 0 ? countries.join(', ') : 'N/A'}
                        </CardDescription>
                        <CardDescription>
                            <strong>Genres:</strong> {genres && genres.length > 0 ? genres.join(', ') : 'N/A'}
                        </CardDescription>
                        <CardDescription>
                            <strong>Languages:</strong> {languages && languages.length > 0 ? languages.join(', ') : 'N/A'}
                        </CardDescription>
                    </CardContent>
                    <Accordion
                        type={"single"}
                        collapsible
                        defaultValue="synopsis"
                    >
                        <AccordionItem value="synopsis">
                            <AccordionTrigger>
                                <span className='line-clamp-1'>Synopsis</span>
                            </AccordionTrigger>
                            <AccordionContent className='text-justify leading-tight '>
                                <span className=''>
                                    {synopsis}
                                </span>
                            </AccordionContent>
                        </AccordionItem>

                    </Accordion>
                </CardDescription>
            </CardContent>
        </Card>
    );
};

export default ContentDetails;