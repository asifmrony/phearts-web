import Stories from '@/components/reusable/Stories'
import HomeBlog from '@/components/home/HomeBlog'
import FeaturedServices from '@/components/home/FeaturedServices'
import HomeEvents from '@/components/home/HomeEvents'
import HomeSlider from '@/components/home/HomeSlider'
import Sponsors from '@/components/home/Sponsors'
import Link from 'next/link'
import Gallery from '@/components/reusable/Gallery'
import { poppins } from '@/utils/fonts'
import ReactMarkdown from 'react-markdown'

export default function Home(homepageData) {
  console.log("Homepage Data", homepageData);
  return (
    <main>
      <HomeSlider sliderItems={homepageData?.home?.hero_slider}/>
      <div>
        <div className='flex flex-col md:flex-row text-white hero-width w-full mx-auto relative md:-top-18 lg:-top-36 z-10'>
          <div className='md:basis-[33%] bg-themeblue p-10 pr-16 space-y-5'>
            <h2 className='uppercase font-bold text-[21px]'>PHeaRTs Clinic</h2>
            <p className='text-sm'>{homepageData?.home.clinic_summary}</p>
            <Link href='/services' className='inline-block px-6 py-3 border border-gray-300 text-xs uppercase text-white font-semibold tracking-wide'>Read More</Link>
          </div>
          <div className='md:basis-[33%] bg-themegreen p-10 pr-16 space-y-5'>
            <h2 className='uppercase font-bold text-[21px]'>Research</h2>
            <p className='text-sm'>{homepageData?.home.research_summary}</p>
            <Link href='/research' className='inline-block px-6 py-3 border border-gray-300 text-xs uppercase text-white font-semibold tracking-wide'>Read More</Link>
          </div>
          <div className='md:basis-[33%] bg-themered p-10 pr-16 space-y-5'>
            <h2 className='uppercase font-bold text-[21px] leading-tight'>Training</h2>
            <p className='text-sm'>{homepageData?.home.training_summary}</p>
            <Link href='/training' className='inline-block px-6 py-3 border border-gray-300 text-xs uppercase text-white font-semibold tracking-wide'>Read More</Link>
          </div>
        </div>
      </div>
      <div className='b-shadow p-14 bg-white hero-width mx-auto md:-mt-[1rem] lg:-mt-[7rem] mb-10'>
        <div className='text-center'>
          <span className='bg-themeblue text-white p-2 uppercase mb-4 inline-block text-xs'>Story About Us</span>
          <h2 className={`text-themered uppercase text-[32px] font-black leading-tight`}>PUBLIC HEALTH | RESEARCH & <br />TRAINING.</h2>
          <div className='text-sm'>
            <ReactMarkdown className='w-[90%] md:w-3/4 mx-auto mt-8 mb-6 text-justify flex flex-col space-y-6'>{homepageData?.home.phearts_story_summary}</ReactMarkdown>
            {/* <p className='w-[90%] md:w-3/4 mx-auto mt-8 mb-6 text-justify'>Population Health Research and Training Society (PHeaRTs) is a non-profit, non-government development organization committed to improving the lives of people who are less privileged in Bangladesh through research-based health care services, developing knowledge on environmental pollution, building awareness on current issues, and also continuously providing life skill training as needed.</p>
            <p className='w-[90%] md:w-3/4 mx-auto mt-8 mb-6 text-justify'>PHeaRTs was set up in the Araihazar upozila, Narayanganj district of Bangladesh, in 2010 and registered as a joint stock company under Society Act XX1 of 1860, No. S-12551/2017. After its inception, the Population Health Research and Training Society (PHeaRTs) has been significantly playing a vital role in implementing environmental research, improving rural health care services, and providing life skill training for the development of digital Bangladesh.</p> */}
          </div>
          <Link href="/about/history" className='uppercase text-xs text-themered font-bold tracking-wide'>Learn More...</Link>
        </div>
      </div>
      <FeaturedServices serviceItems={homepageData?.clinicDepartments} />
      {/* <div className={`bg-become-volunteer`}>
        <div className='hero-width w-full mx-auto text-center py-24 space-y-6'>
          <h2 className='uppercase font-mdheading text-white'>BECOME A DONOR</h2>
          <p className='text-blackshadow w-3/4 mx-auto'>Empower change through small contributions; support our vital initiatives that improve lives and create a lasting impact in communities nationwide.</p>
          <Link href='/donation' className='inline-block mt-2 px-6 py-3 border text-white border-gray-300 text-xs uppercase font-semibold tracking-wide'>Make Donation Now</Link>
        </div>
      </div> */}
      <HomeBlog newsItems={homepageData?.news}/>

      <HomeEvents eventsData={homepageData?.events} />
      <div className='py-10 bg-themered'>
        <div className="hero-width w-full mx-auto flex flex-col justify-center text-center lg:text-left items-center lg:flex-row lg:justify-between space-y-4 lg:space-y-0">
          <div>
            <h3 className='font-subheading text-white'>REQUEST FOR APPOINTMENT</h3>
            <p className='text-white text-sm'>Provide us your details to visit a doctor as soon as possible</p>
          </div>
          <Link className='px-6 py-3 border text-white border-gray-300 text-xs uppercase font-semibold tracking-wide' href='/appointment'>Book Appointment Today</Link>
        </div>
      </div>
      <Gallery albumsData={homepageData?.albums} renderType='slide' />
      {/* Stories Component possible props: "light"/"dark" */}
      <Stories theme={"dark"} testimonialData={homepageData?.home?.testimonial} />

      <Sponsors />
    </main>
  )
}

export const getStaticProps = async () => {
  const homeRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/home?populate=hero_slider.image&populate=testimonial.client_photo&populate=collaborations.company_photo`);
  const homeApidata = await homeRes.json();
  console.log("Home Api Data", homeApidata);
  const newsRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/newses?sort=news_date:desc&pagination[start]=0&pagination[limit]=5&populate=*`);
  const newsApidata = await newsRes.json();
  const eventRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/events?filters[start_date][$gte]=${new Date().toISOString()}&sort=start_date&pagination[start]=0&pagination[limit]=3`);
  const eventApidata = await eventRes.json();
  const departmentsRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/services/1?populate=departments.photo`);
  const departmentApidata = await departmentsRes.json();
  const albumsRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/gallery-albums?populate=*`);
  const albumsApidata = await albumsRes.json();
  const homepageData = {
    home: homeApidata?.data?.attributes,
    news: newsApidata?.data,
    events: eventApidata?.data,
    clinicDepartments: {
      serviceId: departmentApidata?.data?.id,
      deptData: departmentApidata?.data?.attributes?.departments?.data
    },
    albums: albumsApidata?.data
  }
  console.log("Home and news data", homepageData);
  return {
    props: homepageData,
    revalidate: 60
  }
}
