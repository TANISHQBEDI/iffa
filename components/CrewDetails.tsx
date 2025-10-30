import React from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

const CrewDetails = (props: CrewDetailDto) => {
    const {id, name, biography, contents, imageUrl} = props;
    return (
        <Card>
            <CardHeader>
                <CardTitle>{name}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>
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
                                    {biography}
                                </span>
                            </AccordionContent>
                        </AccordionItem>

                    </Accordion>
                </CardDescription>
            </CardContent>
        </Card>
    );
};

export default CrewDetails;