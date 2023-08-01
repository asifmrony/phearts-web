import Stories from '@/components/reusable/Stories'
import HomeBlog from '@/components/home/HomeBlog'
import HomeCauses from '@/components/home/HomeCauses'
import HomeEvents from '@/components/home/HomeEvents'
import HomeSlider from '@/components/home/HomeSlider'
import Sponsors from '@/components/home/Sponsors'
import Link from 'next/link'
import Gallery from '@/components/reusable/Gallery'
import { poppins } from '@/utils/fonts'

export default function Home() {
  return (
    <main>
      <HomeSlider />
      <div>
        <div className='flex flex-col md:flex-row text-white hero-width w-full mx-auto relative md:-top-18 lg:-top-36 z-10'>
          <div className='md:basis-[33%] bg-themeblue p-10 pr-16 space-y-5'>
            <h2 className='uppercase font-bold text-[21px]'>PHeaRTs Clinic</h2>
            <p className='text-sm'>At PHEARTS Clinic, we believes that patients are always our first priority therefore we put patients at the heart of all aspects of health care.</p>
            <Link href='/services' className='inline-block px-6 py-3 border border-gray-300 text-xs uppercase text-white font-semibold tracking-wide'>Read More</Link>
          </div>
          <div className='md:basis-[33%] bg-themegreen p-10 pr-16 space-y-5'>
            <h2 className='uppercase font-bold text-[21px]'>Research</h2>
            <p className='text-sm'>Our motto is to develop knowledge behind every causes and provide research based health care services</p>
            <Link href='/services' className='inline-block px-6 py-3 border border-gray-300 text-xs uppercase text-white font-semibold tracking-wide'>Read More</Link>
          </div>
          <div className='md:basis-[33%] bg-themered p-10 pr-16 space-y-5'>
            <h2 className='uppercase font-bold text-[21px] leading-tight'>Training</h2>
            <p className='text-sm'>We build awareness on current issues and continuously providing life skill training for the development of Digital Bangladesh.</p>
            <Link href='/services' className='inline-block px-6 py-3 border border-gray-300 text-xs uppercase text-white font-semibold tracking-wide'>Read More</Link>
          </div>
        </div>
      </div>
      <div className='b-shadow p-14 bg-white hero-width mx-auto md:-mt-[1rem] lg:-mt-[7rem] mb-10'>
        <div className='text-center'>
          <span className='bg-themeblue text-white p-2 uppercase mb-4 inline-block text-xs'>Story About Us</span>
          <h2 className={`text-themered uppercase text-[32px] font-black leading-tight`}>PUBLIC HEALTH | RESEARCH & <br />TRAINING.</h2>
          <div className='text-sm'>
            <p className='w-[90%] md:w-3/4 mx-auto mt-8 mb-6 text-justify'>Population Health Research and Training Society (PHeaRTs) is a non-profit, non-government development organization committed to improving the lives of people who are less privileged in Bangladesh through research-based health care services, developing knowledge on environmental pollution, building awareness on current issues, and also continuously providing life skill training as needed.</p>
            <p className='w-[90%] md:w-3/4 mx-auto mt-8 mb-6 text-justify'>PHeaRTs was set up in the Araihazar upozila, Narayanganj district of Bangladesh, in 2010 and registered as a joint stock company under Society Act XX1 of 1860, No. S-12551/2017. After its inception, the Population Health Research and Training Society (PHeaRTs) has been significantly playing a vital role in implementing environmental research, improving rural health care services, and providing life skill training for the development of digital Bangladesh.</p>
          </div>
          <Link href="/about/history" className='uppercase text-xs text-themered font-bold tracking-wide'>Learn More...</Link>
        </div>
      </div>
      <HomeCauses />
      <div className={`bg-become-volunteer`}>
        <div className='hero-width w-full mx-auto text-center py-24 space-y-6'>
          <span className='inline-block text-xs bg-themered text-white uppercase mb-5 p-2'>BECOME A DONOR</span>
          <h2 className='uppercase font-mdheading text-white'>NO ONE HAS EVER BECOME POOR BY GIVING</h2>
          <p className='text-blackshadow w-3/4 mx-auto'>Empower change through small contributions; support our vital initiatives that improve lives and create a lasting impact in communities nationwide.</p>
          <button className='px-6 py-3 border text-white border-gray-300 text-xs uppercase font-semibold tracking-wide'>Make Donation Now</button>
        </div>
      </div>
      <HomeBlog />

      <HomeEvents />
      <div className='py-10 bg-themered'>
        <div className="hero-width w-full mx-auto flex flex-col justify-center text-center lg:text-left items-center lg:flex-row lg:justify-between space-y-4 lg:space-y-0">
          <div>
            <h3 className='font-subheading text-white'>REQUEST FOR APPOINTMENT</h3>
            <p className='text-white text-sm'>Provide us your details to visit a doctor as soon as possible</p>
          </div>
          <button className='px-6 py-3 border text-white border-gray-300 text-xs uppercase font-semibold tracking-wide'>Book Appointment Today</button>
        </div>
      </div>
      <Gallery />
      {/* Stories Component possible props: "light"/"dark" */}
      <Stories theme={"dark"} />

      <Sponsors />
    </main>
  )
}
