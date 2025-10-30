import React from 'react';
import {getCrewDetail} from "@/lib/dataFetcher";
import Image from "next/image";
import ContentDetails from "@/components/ContentDetails";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import CrewCard from "@/components/CrewCard";
import CrewDetails from "@/components/CrewDetails";
import DisplayCard from "@/components/DisplayCard";
import {AspectRatio} from "@/components/ui/aspect-ratio";

const Page = async ({params}: { params: Promise<{ id: number }> }) => {
    const {id} = await params;
    const crew = await getCrewDetail(id);
    const {name, biography, contents, imageUrl} = crew;
    return (
        <div className='h-auto'>
            <div className="flex flex-col lg:flex-row gap-4 p-4 items-start">
                {/* IMAGE SECTION */}
                <div className="relative w-full lg:w-1/2 rounded-md">
                    {/*<div className="relative w-full aspect-[2/3] lg:aspect-[2/3] lg:max-h-[80vh]">*/}
                    <AspectRatio className="relative w-full h-full" ratio={2 / 3}>
                        <Image
                            src={imageUrl || '/fallbacks/no-poster.svg'}
                            alt={name}
                            fill
                            priority
                            sizes="(min-width: 48rem) 21.875rem, (min-width: 40rem) 15.625rem, 12.5rem"

                            className="object-cover rounded-md"
                        />
                    </AspectRatio>

                    {/*</div>*/}
                </div>

                {/* DETAILS SECTION */}
                <div className="flex-1 w-full lg:w-1/2 flex flex-col justify-start">
                    <CrewDetails
                        id={id}
                        name={name}
                        biography={biography}
                        imageUrl={imageUrl}
                        contents={contents}
                    />
                </div>
            </div>

            <div className="mt-4">
                <Carousel
                    className="h-auto"
                    opts={{
                        align: 'start', skipSnaps: true, dragFree: true
                    }}
                >
                    <CarouselContent className="flex items-start gap-4">
                        {contents?.map((item) => (
                            <CarouselItem
                                key={item.id}
                                className="basis-auto"
                            >
                                <DisplayCard
                                    id={item.id}
                                    title={item.title}
                                    imageUrl={item.imageUrl!}
                                    size="md"
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                </Carousel>
            </div>


        </div>
    );
};

export default Page;