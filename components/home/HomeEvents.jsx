import { poppinsBold } from '@/utils/fonts'
import Link from 'next/link'

export default function HomeEvents() {
    const events = [
        {
            id: 1,
            scheduled: 'Sep 26',
            duration: 'September 26, 2023 - December 26, 2024',
            title: 'Digital Help for Language Volunteers'
        },
        {
            id: 2,
            scheduled: 'Nov 16',
            duration: 'November 16, 2023 - December 15, 2024',
            title: 'Historic Agreement will Rid Colombia of Landmines'
        },
        {
            id: 3,
            scheduled: 'Nov 17',
            duration: 'November 17, 2023 - December 17, 2024',
            title: 'Preparing to Help Young Central American Refugees'
        }
    ]
    return (
        <div className='bg-upcoming-events'>
            <div className="hero-width w-full mx-auto text-center py-20">
                <span className='inline-block text-xs bg-themered text-white uppercase mb-5 p-2'>Story About us</span>
                <h2 className='uppercase font-mdheading text-white'>Upcoming Events</h2>
                <div className='my-16 flex gap-x-5'>
                    {events.map(({ id, scheduled, duration, title }) => (
                        <div className='flex space-x-4 items-center basis-1/3' key={id}>
                            <p className='text-blackshadow'>{scheduled}</p>
                            <div className='text-left'>
                                <p className='text-sm text-blackshadow'>{duration}</p>
                                <h3 className={`text-lg font-bold text-white ${poppinsBold.variable} font-poppins`}>{title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                <Link href="/events" className='px-6 py-3 border text-white border-gray-300 text-xs uppercase font-semibold tracking-wide'>View All Events</Link>
            </div>
        </div>
    )
}
