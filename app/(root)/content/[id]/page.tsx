import React from 'react';
import {getContentDetail} from "@/lib/dataFetcher";
import Image from "next/image";
import ContentDetails from "@/components/ContentDetails";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import CrewCard from "@/components/CrewCard";

const Page = async ({params}: { params: Promise<{ id: number }> }) => {
    const {id} = await params;
    const content = await getContentDetail(id);
    const {title, synopsis, countries, genres, languages, portraitImageUrl, crew} = content;
    return (
        <div className='h-auto'>
            <div className="flex flex-col lg:flex-row gap-4 p-4 items-start">
                {/* IMAGE SECTION */}
                <div className="relative w-full lg:w-1/2 overflow-hidden rounded-md">
                    <div className="relative w-full aspect-[2/3] lg:aspect-[3/4] lg:max-h-[80vh]">
                        <Image
                            src={portraitImageUrl || '/fallbacks/no-poster.svg'}
                            alt={title}
                            fill
                            priority
                            sizes="(min-width: 768px) 350px, (min-width: 640px) 250px, 200px"
                            className="object-cover rounded-md"
                        />
                    </div>
                </div>

                {/* DETAILS SECTION */}
                <div className="flex-1 w-full lg:w-1/2 flex flex-col justify-start">
                    <ContentDetails
                        title={title}
                        synopsis={synopsis}
                        countries={countries}
                        genres={genres}
                        languages={languages}
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
                        {crew?.map((item) => (
                            <CarouselItem
                                key={item.id}
                                className="basis-auto"
                            >
                                <CrewCard
                                    id={item.id}
                                    name={item.name}
                                    photoUrl={item.photoUrl!}
                                    roles={item.roles!}
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