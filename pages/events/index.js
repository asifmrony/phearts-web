import PageHeader from '@/components/reusable/PageHeader'
import { poppins } from '@/utils/fonts'
import eventPhotoOne from '@/data/event/event-photo-1.jpg'
import eventPhotoTwo from '@/data/event/event-photo-2.jpg'
import Image from 'next/image'
import Link from 'next/link'

export default function events() {
  return (
    <main className='page-events'>
      <div className='py-32'>
        <div className="hero-width mx-auto w-full">
          <div>
            <h1 className={`text-3xl font-semibold uppercase ${poppins.variable} font-poppins underline mb-12`}>Upcoming Events</h1>
            {/* All listed events wrapper */}
            <div className='divide-y-2 divide-gray-300'>
              <div className="flex gap-x-12 py-10">
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
              </div>
            </div>
          </div>
          <div>
            <h1 className={`text-3xl font-semibold uppercase ${poppins.variable} font-poppins underline mb-12 mt-8`}>Past Events</h1>
            {/* All listed events wrapper */}
            <div className='divide-y-2 divide-gray-300'>
              <div className="flex gap-x-12 py-10">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
