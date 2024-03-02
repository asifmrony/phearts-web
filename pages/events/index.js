import PageHeader from '@/components/reusable/PageHeader'
import { poppins } from '@/utils/fonts'
import eventPhotoOne from '@/data/event/event-photo-1.jpg'
import eventPhotoTwo from '@/data/event/event-photo-2.jpg'
import Image from 'next/image'
import Link from 'next/link'

export default function events(allEvents) {
  const currentTime = Date.now();
  const eventsInMS = allEvents?.data.map((item) => {
    const startTimeMS = Date.parse(item.attributes.start_date);
    const convertedEventStart = new Date(item.attributes.start_date);
    const convertedEventEnd = new Date(item.attributes.end_date);
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
    return { ...item.attributes, id: item.id, eventDate: startTimeMS, start_date: formattedEventStart, end_date: formattedEventEnd }
  });
  console.log("Events in Miliseconds", eventsInMS);
  const upComingEvents = eventsInMS?.filter((item) => item.eventDate > currentTime).sort((a,b) => a.eventDate - b.eventDate);
  console.log("Logging Upcoming Events", upComingEvents);
  const pastEvents = eventsInMS?.filter((item) => item.eventDate < currentTime).sort((a, b) => b.eventDate - a.eventDate);
  console.log("Logging Past Events", pastEvents);

  return (
    <main className='page-events'>
      <div className='py-32'>
        <div className="hero-width mx-auto w-full">
          {/* Upcoming events goes here */}
          <div>
            <h1 className={`text-3xl font-semibold uppercase ${poppins.variable} font-poppins underline mb-12`}>Upcoming Events</h1>
            {/* All listed events wrapper */}
            <div className='divide-y-2 divide-gray-300'>
              {upComingEvents?.map((item) => (
                <div className="flex gap-x-12 py-10" key={item?.id}>
                  {/* <div className='mt-1'>
                    <p className='uppercase text-sm'>TUE</p>
                    <p className='text-lg font-bold'>26</p>
                  </div> */}
                  <div className='flex-3'>
                    <p className='text-blackshadow text-sm'>{item?.start_date} {item?.end_date ? `- ${item?.end_date}` : null}</p>
                    <Link href={`/events/${item?.id}`}>
                      <h3 className={`text-2xl font-bold my-2 ${poppins.variable} font-poppins`}>{item?.title}</h3>
                    </Link>
                    <p className='text-blackshadow text-sm'>{item?.location}</p>
                    <p className='mt-7 mb-3 text-sm text-blackshadow'>{item?.summary}</p>
                    <div className='flex justify-between items-center'>
                      {/* <p>$15</p> */}
                      <Link className='text-sm text-themeblue font-semibold leading-wider inline-block' href={`/events/${item?.id}`}>Learn more &rarr;</Link>
                    </div>
                  </div>
                  <div style={{ minWidth: '420px', maxWidth: '440px', maxHeight: '250px'}}>
                    <Image src={item?.photo?.data?.attributes.url} alt='EventPhoto' width={800} height={350} className='h-full w-full object-cover' />
                  </div>
                </div>
              ))}
              {/* <div className="flex gap-x-12 py-10">
                <div className='mt-1'>
                  <p className='uppercase text-sm'>TUE</p>
                  <p className='text-lg font-bold'>26</p>
                </div>
                <div className='flex-3'>
                  <p className='text-blackshadow text-sm'>September 26, 2023 - December 26, 2024</p>
                  <Link href='/events/entry'>
                    <h3 className={`text-2xl font-bold my-2 ${poppins.variable} font-poppins`}>Digital Help for Language Volunteers</h3>
                  </Link>
                  <p className='text-blackshadow text-sm'>Central Park Brooklyn, NY 10036, New York, AK</p>
                  <p className='mt-7 mb-3 text-sm text-blackshadow'>Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor
                    in ac turpis. In nec imperdiet turpis. Suspendisse quis orci ut orci pulvinar eleifend.
                    Nulla eu mattis ipsum. Integer...</p>
                  <div className='flex justify-between items-center'>
                    <p>$15</p>
                    <Link className='text-sm text-themeblue font-semibold leading-wider inline-block' href="/events/entry">Learn more &rarr;</Link>
                  </div>
                </div>
                <div>
                  <Image src={eventPhotoOne} alt='EventPhoto' width={800} height={350} />
                </div>
              </div>
              <div className="flex gap-x-12 py-10">
                <div className='mt-1'>
                  <p className='uppercase text-sm'>Thu</p>
                  <p className='text-lg font-bold'>26</p>
                </div>
                <div className='flex-3'>
                  <p className='text-blackshadow text-sm'>November 16, 2023 - December 15, 2024</p>
                  <Link href='/events/entry'>
                    <h3 className={`text-2xl font-bold my-2 ${poppins.variable} font-poppins`}>Historic Agreement will Rid Colombia of Landmines</h3>
                  </Link>
                  <p className='text-blackshadow text-sm'>Central Park Brooklyn, NY 10036, New York, AK</p>
                  <p className='mt-7 mb-3 text-sm text-blackshadow'>Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor
                    in ac turpis. In nec imperdiet turpis. Suspendisse quis orci ut orci pulvinar eleifend.
                    Nulla eu mattis ipsum. Integer...</p>
                  <div className='flex justify-between items-center'>
                    <p>$15</p>
                    <Link className='text-sm text-themeblue font-semibold leading-wider inline-block' href="/events/entry">Learn more &rarr;</Link>
                  </div>
                </div>
                <div>
                  <Image src={eventPhotoTwo} alt='EventPhoto' width={800} height={350} />
                </div>
              </div>
              <div className="flex gap-x-12 py-10">
                <div className='mt-1'>
                  <p className='uppercase text-sm'>Thu</p>
                  <p className='text-lg font-bold'>26</p>
                </div>
                <div className='flex-3'>
                  <p className='text-blackshadow text-sm'>November 16, 2023 - December 15, 2024</p>
                  <Link href='/events/entry'>
                    <h3 className={`text-2xl font-bold my-2 ${poppins.variable} font-poppins`}>Preparing to Help Young Central American Refugees</h3>
                  </Link>
                  <p className='text-blackshadow text-sm'>Central Park Brooklyn, NY 10036, New York, AK</p>
                  <p className='mt-7 mb-3 text-sm text-blackshadow'>Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor
                    in ac turpis. In nec imperdiet turpis. Suspendisse quis orci ut orci pulvinar eleifend.
                    Nulla eu mattis ipsum. Integer...</p>
                  <div className='flex justify-between items-center'>
                    <p>$15</p>
                    <Link className='text-sm text-themeblue font-semibold leading-wider inline-block' href="/events/entry">Learn more &rarr;</Link>
                  </div>
                </div>
                <div>
                  <Image src={eventPhotoOne} alt='EventPhoto' width={800} height={350} />
                </div>
              </div> */}
            </div>
          </div>
          {/* Past Events goes here */}
          <div>
            <h1 className={`text-3xl font-semibold uppercase ${poppins.variable} font-poppins underline mb-12 mt-8`}>Past Events</h1>
            {/* All listed events wrapper */}
            <div className='divide-y-2 divide-gray-300'>
              {pastEvents?.map((item) => (
                <div className="flex gap-x-12 py-10" key={item?.id}>
                  {/* <div className='mt-1'>
                    <p className='uppercase text-sm'>TUE</p>
                    <p className='text-lg font-bold'>26</p>
                  </div> */}
                  <div className='flex-3'>
                    <p className='text-blackshadow text-sm'>{item?.start_date} {item?.end_date ? `- ${item?.end_date}` : null}</p>
                    <Link href={`/events/${item?.id}`}>
                      <h3 className={`text-2xl font-bold my-2 ${poppins.variable} font-poppins`}>{item?.title}</h3>
                    </Link>
                    <p className='text-blackshadow text-sm'>{item?.location}</p>
                    <p className='mt-7 mb-3 text-sm text-blackshadow'>{item?.summary}</p>
                    <div className='flex justify-between items-center'>
                      {/* <p>$15</p> */}
                      <Link className='text-sm text-themeblue font-semibold leading-wider inline-block' href={`/events/${item?.id}`}>Learn more &rarr;</Link>
                    </div>
                  </div>
                  <div style={{ minWidth: '420px', maxWidth: '440px', maxHeight: '250px'}}>
                    <Image src={item?.photo?.data.attributes.url} alt='EventPhoto' width={800} height={350} className='w-full h-full object-cover' />
                  </div>
                </div>
              ))}
              {/* <div className="flex gap-x-12 py-10">
                <div className='mt-1'>
                  <p className='uppercase text-sm'>TUE</p>
                  <p className='text-lg font-bold'>26</p>
                </div>
                <div className='flex-3'>
                  <p className='text-blackshadow text-sm'>September 26, 2023 - December 26, 2024</p>
                  <Link href='/events/entry'>
                    <h3 className={`text-2xl font-bold my-2 ${poppins.variable} font-poppins`}>Digital Help for Language Volunteers</h3>
                  </Link>
                  <p className='text-blackshadow text-sm'>Central Park Brooklyn, NY 10036, New York, AK</p>
                  <p className='mt-7 mb-3 text-sm text-blackshadow'>Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor
                    in ac turpis. In nec imperdiet turpis. Suspendisse quis orci ut orci pulvinar eleifend.
                    Nulla eu mattis ipsum. Integer...</p>
                  <div className='flex justify-between items-center'>
                    <p>$15</p>
                    <Link className='text-sm text-themeblue font-semibold leading-wider inline-block' href="/events/entry">Learn more &rarr;</Link>
                  </div>
                </div>
                <div>
                  <Image src={eventPhotoOne} alt='EventPhoto' width={800} height={350} />
                </div>
              </div>
              <div className="flex gap-x-12 py-10">
                <div className='mt-1'>
                  <p className='uppercase text-sm'>Thu</p>
                  <p className='text-lg font-bold'>26</p>
                </div>
                <div className='flex-3'>
                  <p className='text-blackshadow text-sm'>November 16, 2023 - December 15, 2024</p>
                  <Link href='/events/entry'>
                    <h3 className={`text-2xl font-bold my-2 ${poppins.variable} font-poppins`}>Historic Agreement will Rid Colombia of Landmines</h3>
                  </Link>
                  <p className='text-blackshadow text-sm'>Central Park Brooklyn, NY 10036, New York, AK</p>
                  <p className='mt-7 mb-3 text-sm text-blackshadow'>Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor
                    in ac turpis. In nec imperdiet turpis. Suspendisse quis orci ut orci pulvinar eleifend.
                    Nulla eu mattis ipsum. Integer...</p>
                  <div className='flex justify-between items-center'>
                    <p>$15</p>
                    <Link className='text-sm text-themeblue font-semibold leading-wider inline-block' href="/events/entry">Learn more &rarr;</Link>
                  </div>
                </div>
                <div>
                  <Image src={eventPhotoTwo} alt='EventPhoto' width={800} height={350} />
                </div>
              </div>
              <div className="flex gap-x-12 py-10">
                <div className='mt-1'>
                  <p className='uppercase text-sm'>Thu</p>
                  <p className='text-lg font-bold'>26</p>
                </div>
                <div className='flex-3'>
                  <p className='text-blackshadow text-sm'>November 16, 2023 - December 15, 2024</p>
                  <Link href='/events/entry'>
                    <h3 className={`text-2xl font-bold my-2 ${poppins.variable} font-poppins`}>Preparing to Help Young Central American Refugees</h3>
                  </Link>
                  <p className='text-blackshadow text-sm'>Central Park Brooklyn, NY 10036, New York, AK</p>
                  <p className='mt-7 mb-3 text-sm text-blackshadow'>Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor
                    in ac turpis. In nec imperdiet turpis. Suspendisse quis orci ut orci pulvinar eleifend.
                    Nulla eu mattis ipsum. Integer...</p>
                  <div className='flex justify-between items-center'>
                    <p>$15</p>
                    <Link className='text-sm text-themeblue font-semibold leading-wider inline-block' href="/events/entry">Learn more &rarr;</Link>
                  </div>
                </div>
                <div>
                  <Image src={eventPhotoOne} alt='EventPhoto' width={800} height={350} />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/events?populate=*`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      // 'Authorization': token
    }
  });
  const allEvents = await res.json();
  return {
    props: allEvents,
    revalidate: 60
  }
}
