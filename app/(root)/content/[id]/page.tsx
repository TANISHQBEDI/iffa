import React from 'react';
import {getContentDetail} from "@/lib/dataFetcher";

const Page = async ({params}:{params: Promise<{id: number}>}) => {
    const {id} =  await params;
    const content = await getContentDetail(id);
    return (
        <div>
            {content.title}
        </div>
    );
};

export default Page;