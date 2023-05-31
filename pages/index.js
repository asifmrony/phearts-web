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
          <div className='bg-themeblue p-10 pr-16 space-y-5'>
            <h2 className='uppercase font-bold text-[21px]'>Donate Now!</h2>
            <p className='text-sm'>Cum sociis natoque penatibus et magnis dis
              parturient montesmus. Pro vel nibh et elit mollis
              commodo et nec augue tristique sed</p>
            <button className='px-6 py-3 border border-gray-300 text-xs uppercase text-white font-semibold tracking-wide'>Read More</button>
          </div>
          <div className='bg-themegreen p-10 pr-16 space-y-5'>
            <h2 className='uppercase font-bold text-[21px]'>Join Us Now</h2>
            <p className='text-sm'>Cum sociis natoque penatibus et magnis dis
              parturient montesmus. Pro vel nibh et elit mollis
              commodo et nec augue tristique sed</p>
            <button className='px-6 py-3 border border-gray-300 text-xs uppercase text-white font-semibold tracking-wide'>Read More</button>
          </div>
          <div className='bg-themered p-10 pr-16 space-y-5'>
            <h2 className='uppercase font-bold text-[21px]'>Donate Now!</h2>
            <p className='text-sm'>Cum sociis natoque penatibus et magnis dis
              parturient montesmus. Pro vel nibh et elit mollis
              commodo et nec augue tristique sed</p>
            <button className='px-6 py-3 border border-gray-300 text-xs uppercase text-white font-semibold tracking-wide'>Read More</button>
          </div>
        </div>
      </div>
      <div className='b-shadow p-14 bg-white hero-width mx-auto md:-mt-[1rem] lg:-mt-[7rem] mb-10'>
        <div className='text-center'>
          <span className='bg-themeblue text-white p-2 uppercase mb-4 inline-block text-xs'>Story About Us</span>
          <h2 className={`text-themered uppercase text-[32px] font-black leading-tight`}>PUBLIC HEALTH. RESEARCH. <br />TRAINING.</h2>
          <p className='w-[90%] md:w-3/4 mx-auto mt-8 mb-6'>Population Health Research and Training Society (PHeaRTs) is a non-profit, non-government development organization committed to improving the lives of people who are less privileged in Bangladesh through research-based health care services, developing knowledge on environmental pollution, building awareness on current issues, and also continuously providing life skill training as needed.</p>
          <p className='w-[90%] md:w-3/4 mx-auto mt-8 mb-6'>PHeaRTs was set up in the Araihazar upozila, Narayanganj district of Bangladesh, in 2010 and registered as a joint stock company under Society Act XX1 of 1860, No. S-12551/2017. After its inception, the Population Health Research and Training Society (PHeaRTs) has been significantly playing a vital role in implementing environmental research, improving rural health care services, and providing life skill training for the development of digital Bangladesh.</p>
          <Link href="/about" className='uppercase text-xs text-themered font-bold tracking-wide'>Learn More...</Link>
        </div>
      </div>
      <HomeCauses />
      <div className={`bg-become-volunteer`}>
        <div className='hero-width w-full mx-auto text-center py-24 space-y-6'>
          <span className='inline-block text-xs bg-themered text-white uppercase mb-5 p-2'>BECOME A VOLUNTEER</span>
          <h2 className='uppercase font-mdheading text-white'>NO ONE HAS EVER BECOME POOR BY GIVING</h2>
          <p className='text-blackshadow w-3/4 mx-auto'>The message of The Faithland is that Christ saves sinners. In light of
            that, we steward a message that radically changes lives.</p>
          <button className='px-6 py-3 border text-white border-gray-300 text-xs uppercase font-semibold tracking-wide'>Get Involved Now</button>
        </div>
      </div>
      <HomeBlog />
      <HomeEvents />
      <div className='py-10 bg-themered'>
        <div className="hero-width w-full mx-auto flex flex-col justify-center text-center lg:text-left items-center lg:flex-row lg:justify-between space-y-4">
          <div>
            <h3 className='font-subheading text-white'>SUBSCRIBE TO NEWSLETTER</h3>
            <p className='text-white text-sm'>Sign up with your email address to receive news and updates</p>
          </div>
          <div>
            <form className='flex items-center'>
              <input
                type="text"
                className='px-6 h-[45px] focus:border-none focus:ouline-none bg-transparent text-white placeholder:text-gray-200 placeholder:text-sm border-r-0 border-gray-300 border-2'
                name="newsletter"
                id="newsletter"
                placeholder='Your Email Address*'
              />
              <button className='px-6 py-3 h-[45px] border bg-white text-themered border-white text-xs uppercase font-semibold tracking-wide'>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <Gallery />
      {/* Stories Component possible props: "light"/"dark" */}
      <Stories theme={"dark"} />
      <div className='py-8 bg-themegreen'>
        <div className="hero-width mx-auto w-full">
          <div className='flex flex-col lg:flex-row justify-center lg:justify-between items-center space-y-2 text-center lg:space-y-0'>
            <h3 className='font-subheading text-white'>YOUR DONATIONS SUPPORT OUR CRITICAL WORK</h3>
            <button className='px-6 py-3 border text-white border-gray-300 text-xs uppercase font-semibold tracking-wide'>Make Donation Today</button>
          </div>
        </div>
      </div>
      <Sponsors />
    </main>
  )
}
