import Stories from '@/components/Stories'
import HomeBlog from '@/components/home/HomeBlog'
import HomeCauses from '@/components/home/HomeCauses'
import HomeEvents from '@/components/home/HomeEvents'
import HomeSlider from '@/components/home/HomeSlider'
import Sponsors from '@/components/home/Sponsors'
import Link from 'next/link'

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
          <h2 className='text-themered uppercase text-[32px] font-black leading-tight'>EVERYONE. EVERYWHERE. EQUAL <br />VALUE.</h2>
          <p className='w-[90%] md:w-3/4 mx-auto mt-8 mb-6'>Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis
            commodo et nec augueique Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
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
      <div className='py-28 bg-white'>
        <Stories theme={"light"} />
      </div>
      <Sponsors />
    </main>
  )
}
