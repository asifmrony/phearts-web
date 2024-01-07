import PageHeader from '@/components/reusable/PageHeader'
import { poppins } from '@/utils/fonts'
import homeBlogOne from '@/data/homeblog-1.png';
import homeBlogTwo from '@/data/homeblog-2.png';
import homeBlogThree from '@/data/homeblog-3.png';
import Image from 'next/image'
import Link from 'next/link'

export default function events(allNews) {
  console.log("Unformatted News", allNews);
  const allFormattedNews = allNews?.data.map((item) => {
    const newsDate = new Date(item?.attributes.news_date);
    const monthNames = [
      "January", "February", "March",
      "April", "May", "June",
      "July", "August", "September",
      "October", "November", "December"
    ];
    const month = monthNames[newsDate.getMonth()];
    const day = newsDate.getDate();
    const year = newsDate.getFullYear();
    const formattedDate = `${month} ${day}, ${year}`
    return { ...item.attributes, id: item.id, news_date: formattedDate }
  })
  console.log("All formatted Newses", allFormattedNews);

  return (
    <main className='page-newses'>
      <div className='py-32'>
        <div className="hero-width mx-auto w-full">
          <div>
            <h1 className={`text-3xl font-semibold uppercase ${poppins.variable} font-poppins underline mb-12`}>News</h1>
            {/* All listed events wrapper */}
            <div className='divide-y-2 divide-gray-300'>
              {allFormattedNews?.map((item) => (
                <div className="flex gap-x-12 py-10" key={item?.id}>
                  <div className='flex-3'>
                    <p className='text-blackshadow text-sm'>{item?.news_date}</p>
                    <Link href={`/news/${item?.id}`}>
                      <h3 className={`text-2xl font-bold my-2 ${poppins.variable} font-poppins`}>{item?.title}</h3>
                    </Link>
                    <p className='mt-7 mb-3 text-sm text-blackshadow'>{item?.summary}</p>
                    <Link className='text-sm text-themeblue font-semibold leading-wider inline-block mb-6' href={`/news/${item?.id}`}>Learn more &rarr;</Link>
                  </div>
                  <div>
                    <Image src={item?.preview_img.data.attributes.url} alt='EventPhoto' width={800} height={350} />
                  </div>
                </div>
              ))}
              {/* <div className="flex gap-x-12 py-10">
                <div className='flex-3'>
                  <p className='text-blackshadow text-sm'>September 26, 2023</p>
                  <Link href='/news/entry'>
                    <h3 className={`text-2xl font-bold my-2 ${poppins.variable} font-poppins`}>Choosing Among Bad Options in Dadaab Refugee Camp</h3>
                  </Link>
                  <p className='mt-7 mb-3 text-sm text-blackshadow'>Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor
                    in ac turpis. In nec imperdiet turpis. Suspendisse quis orci ut orci pulvinar eleifend.
                    Nulla eu mattis ipsum. Integer...</p>
                  <Link className='text-sm text-themeblue font-semibold leading-wider inline-block mb-6' href="/">Learn more &rarr;</Link>
                </div>
                <div>
                  <Image src={homeBlogOne} alt='EventPhoto' width={800} height={350} />
                </div>
              </div>
              <div className="flex gap-x-12 py-10">
                <div className='flex-3'>
                  <p className='text-blackshadow text-sm'>November 16, 2023 - December 15, 2024</p>
                  <Link href='/news/entry'>
                    <h3 className={`text-2xl font-bold my-2 ${poppins.variable} font-poppins`}>Desperate for Shelter and Clean</h3>
                  </Link>
                  <p className='text-blackshadow text-sm'>Central Park Brooklyn, NY 10036, New York, AK</p>
                  <p className='mt-7 mb-3 text-sm text-blackshadow'>Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor
                    in ac turpis. In nec imperdiet turpis. Suspendisse quis orci ut orci pulvinar eleifend.
                    Nulla eu mattis ipsum. Integer...</p>
                  <Link className='text-sm text-themeblue font-semibold leading-wider inline-block mb-6' href="/">Learn more &rarr;</Link>
                </div>
                <div>
                  <Image src={homeBlogTwo} alt='EventPhoto' width={800} height={350} />
                </div>
              </div>
              <div className="flex gap-x-12 py-10">
                <div className='flex-3'>
                  <p className='text-blackshadow text-sm'>November 16, 2023</p>
                  <Link href='/news/entry'>
                    <h3 className={`text-2xl font-bold my-2 ${poppins.variable} font-poppins`}>Preparing to help American Refugees</h3>
                  </Link>
                  <p className='text-blackshadow text-sm'>Central Park Brooklyn, NY 10036, New York, AK</p>
                  <p className='mt-7 mb-3 text-sm text-blackshadow'>Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor
                    in ac turpis. In nec imperdiet turpis. Suspendisse quis orci ut orci pulvinar eleifend.
                    Nulla eu mattis ipsum. Integer...</p>
                  <Link className='text-sm text-themeblue font-semibold leading-wider inline-block mb-6' href="/">Learn more &rarr;</Link>
                </div>
                <div>
                  <Image src={homeBlogThree} alt='EventPhoto' width={800} height={350} />
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/newses?populate=*`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      // 'Authorization': token
    }
  });
  const allNews = await res.json();
  return {
    props: allNews
  }
}
