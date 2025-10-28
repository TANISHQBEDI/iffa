import EventCard from "@/app/(root)/events/components/EventCard";
import {YEARS} from "@/lib/constants";

const Events = () => {
    return (
        <div className='my-10'>
            <h1 className='title'>Past Events</h1>
            <div className='grid grid-rows-3 sm:grid-rows-1 sm:grid-cols-3 lg:grid-cols-5 gap-10'>
                {
                    YEARS.map((year, index) => (
                        <EventCard key={index} year={year}/>
                    ))
                }

            </div>

        </div>
    );
};

export default Events;