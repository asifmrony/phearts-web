import { poppinsBold } from '@/utils/fonts'
import Link from 'next/link'
import Countdown from 'react-countdown'
import {FaCalendar, FaLocationArrow} from 'react-icons/fa'

export default function HomeEvents() {
    const events = [
        {
            id: 1,
            timeCount: "June 3, 2023 18:15:00:526",
            duration: 'September 26, 2023 - December 26, 2024',
            location: 'Screet town 21, 2090/x United State',
            title: 'Digital Help for Language Volunteers'
        },
        {
            id: 2,
            timeCount: "June 3, 2023 18:15:00:526",
            duration: 'November 16, 2023 - December 15, 2024',
            location: 'Street town 21, New Jersey, United States',
            title: 'Historic Agreement will Rid Colombia of Landmines'
        },
        {
            id: 3,
            timeCount: "June 6, 2023 18:15:00:526",
            duration: 'June 6, 2023 at 06:15 PM',
            location: 'Street town 21, New Jersey, United States',
            title: 'Preparing to Help Young Central American Refugees'
        }
    ]

    // Random component
    const Completionist = () => <span>You are good to go!</span>;

    // Renderer callback with condition
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        // if (completed) {
        //     // Render a completed state
        //     return <Completionist />;
        // } else {
            // Render a countdown
            return <div className='flex space-x-1 items-center'>
                <p className='bg-themegreen p-2 text-white flex flex-col text-center rounded-md'>
                    <span className='text-xl'>{days}</span>
                    <span className='text-xs'>days</span>
                </p>
                <p className='bg-themegreen p-2 text-white flex flex-col text-center rounded-md'>
                    <span className='text-xl'>{hours}</span>
                    <span className='text-xs'>hours</span>
                </p>
                <p className='bg-themegreen p-2 text-white flex flex-col text-center rounded-md'>
                    <span className='text-xl'>{minutes}</span>
                    <span className='text-xs'>minutes</span>
                </p>
                <p className='bg-themegreen p-2 text-white flex flex-col text-center rounded-md'>
                    <span className='text-xl'>{seconds}</span>
                    <span className='text-xs'>seconds</span>
                </p>
            </div>;
        // }
    };

    return (
        <div className='bg-upcoming-events'>
            <div className="hero-width w-full mx-auto text-center py-20">
                <span className='inline-block text-xs bg-themered text-white uppercase mb-5 p-2'>Story About us</span>
                <h2 className='uppercase font-mdheading text-white'>Upcoming Events</h2>
                <div className='my-16 flex flex-wrap space-y-4 md:space-y-0 space-x-0 lg:space-x-3 px-6 sm:px-10 lg:px-0'>
                    {events.map(({ id, location, duration, title, timeCount }) => (
                        <div className='basis-[45%] lg:basis-[31%] mr-4' key={id}>
                            <div className='text-left spac-y-2'>
                                <Countdown
                                    date={timeCount}
                                    renderer={renderer}
                                />
                                <h3 className={`font-subheading text-white mt-2 ${poppinsBold.variable} font-poppins`}>{title}</h3>
                                <p className='text-sm mt-3 flex space-x-2'> 
                                    <FaLocationArrow className='text-themegreen'/>
                                    <span className='text-[#b5b5b5]'>{location}</span>
                                </p>
                                <p className='text-sm mt-2 flex space-x-2'>
                                    <FaCalendar className='text-themegreen' />
                                    <span className='text-[#b5b5b5]'>{duration}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <Link href="/events" className='px-6 py-3 border text-white border-gray-300 text-xs uppercase font-semibold tracking-wide'>View All Events</Link>
            </div>
        </div>
    )
}
