import PageHeader from '@/components/reusable/PageHeader'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { poppinsBold } from '@/utils/fonts'

export const getStaticPaths = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/events`);
    const allEvents = await res.json();

    const paths = allEvents.data.map((body) => ({
        params: { slug: body.id.toString() }
    }))

    // paths will be like
    // [
    //   {
    //     params: {slug: '1'}
    //   },
    //   {
    //     params: {slug: '2'}
    //   }
    // ]
    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = async ({ params }) => {
    const path = params.slug;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/events/${path}?populate=*`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        }
    });
    const singleEvent = await res.json();
    return {
        props: singleEvent
    }
}


export default function single(singleEvent) {
    console.log("Single Event", singleEvent);
    const {title, location, organizer, description, photo} = singleEvent.data.attributes;
    const convertedEventStart = new Date(singleEvent.data.attributes.start_date);
    const convertedEventEnd = new Date(singleEvent.data.attributes.end_date);
    const monthNames = [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ];
    // const eventStartYear = convertedEventStart.getFullYear();
    const eventStartMonth = monthNames[convertedEventStart.getMonth()];
    const eventEndMonth = monthNames[convertedEventEnd.getMonth()];
    // const eventStartDay = convertedEventStart.getDate();
    let eventStartHours = convertedEventStart.getHours();
    let eventEndHours = convertedEventEnd.getHours();
    // const eventStartMinutes = convertedEventStart.getMinutes();
    // Determine whether it's AM or PM
    const eventStartAmOrPm = eventStartHours >= 12 ? 'PM' : 'AM';
    const eventEndAmOrPm = eventEndHours >= 12 ? 'PM' : 'AM';
    // Convert hours to 12-hour format
    eventStartHours = eventStartHours % 12 || 12;
    eventEndHours = eventEndHours % 12 || 12;
    const formattedEventStart = `${eventStartMonth} ${convertedEventStart.getDate()}, ${convertedEventStart.getFullYear()} ${eventStartHours}:${convertedEventStart.getMinutes() < 10 ? '0' : ''}${convertedEventStart.getMinutes()} ${eventStartAmOrPm}`;
    const formattedEventEnd = `${eventEndMonth} ${convertedEventEnd.getDate()}, ${convertedEventEnd.getFullYear()} ${eventEndHours}:${convertedEventEnd.getMinutes() < 10 ? '0' : ''}${convertedEventEnd.getMinutes()} ${eventEndAmOrPm}`;

    return (
        <main className='page-event'>
            <PageHeader subtitle={`home / Events / ${title}`} title={'Our Events'} background={'blue'} />
            <div className='py-30'>
                <div className="c-width mx-auto w-full">
                    <div className="bg-upcoming-events min-h-[400px] relative" style={{backgroundImage: `url(${photo.data.attributes.url})`}}>
                        <h1 className={`font-mdheading ${poppinsBold.variable} font-poppins text-white absolute left-12 bottom-12`}>{title}</h1>
                    </div>
                </div>
            </div>
            <div className='pt-10 pb-20 c-width mx-auto w-full'>
                <div className='pl-14'>
                    <div className="flex justify-between items-center text-sm">
                        <div>
                            <h3 className='uppercase text-lg font-semibold'>Event Details</h3>
                            <p className='mt-3'>Start Date: {formattedEventStart}</p>
                            <p>End Date: {formattedEventEnd}</p>
                            <p className='mt-3'>Start Time: {eventStartHours}:{convertedEventStart.getMinutes() < 10 ? '0' : ''}{convertedEventStart.getMinutes()} {eventStartAmOrPm}</p>
                            <p>End Time: {eventEndHours}:{convertedEventEnd.getMinutes() < 10 ? '0' : ''}{convertedEventEnd.getMinutes()}{eventEndAmOrPm}</p>
                            <p className='mt-3'>Location: {location}</p>
                        </div>
                        <div>
                            <h3 className='uppercase text-lg font-semibold'>Organizer</h3>
                            {organizer}
                            {/* <p className='mt-1'>by: Phearts</p>
                            <p className='mt-1'>Mobile: +09876555345</p>
                            <p className='mt-1'>Email: example@example.com</p>
                            <p className='mt-1'>Website: phearts.com</p>
                            <p className='mt-1'>Address: Secret Service US, East Saint Louis Springfield, MO, United States</p> */}
                        </div>
                    </div>
                    <div style={{marginTop: '2rem'}}>
                        <ReactMarkdown>{description}</ReactMarkdown>
                    </div>
                    {/* <p className='mt-10'>Aorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl turpis, tempus nec egestas ac, molestie vel eros. Vestibulum convallis tincidunt tempus. Orci varius natoque penatibus et magnis dis parturient mon tes, nascetur ridiculus mus. Ut dui libero, bibendum vel risus in, tincidunt accumsan felis. Mauris ullamcorp er est posuere hendrerit consectetur. Donec iaculis tincidunt e nim, sit amet maximus justo. Fusce sollicitud in, justo a bibendum mollis, ipsum nisi porta orci, sit amet.</p>
                    <p className='mt-6'>
                        eugiat sem quis dictum. Mauris blandit, mi convallis tincidunt imperdiet, eros mi fermentum lacus, at sodal es nibh urna quis pur us. Aenean eleifend tincidunt eros, in tempus diam facilisis in. Suspendisse congue m etus non mi efficitur, id faucibus nulla facil isis. Donec et efficitur purus. Phasellus et neque ac lacus sagittis bibendum.
                    </p> */}
                </div>
            </div>
        </main>
    )
}


