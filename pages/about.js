import Image from 'next/image'
import aboutOne from '@/data/about/about-1.jpg'
import aboutTwo from '@/data/about/about-2.jpg'
import teamMemberOne from '@/data/about/team-member-1.jpg'
import teamMemberTwo from '@/data/about/team-member-2.jpg'
import teamMemberThree from '@/data/about/team-member-3.jpg'
import Link from 'next/link'
import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaTwitter } from 'react-icons/fa'

export default function about() {
  return (
    <main className='page-about'>
      <div className='page-about__header text-center py-32 bg-themeblue'>
        <p className='text-sm uppercase text-blackshadow mb-2'>We are Delighted To Share</p>
        <h2 className='font-heading text-white uppercase'>About Us</h2>
      </div>
      <div className='p-20 pb-30 bg-white'>
        <div className='hero-width mx-auto w-full'>
          <div className='flex space-x-5'>
            <div className='bg-white py-14 px-8 flex-1 border-[#aaa] border-4 text-center'>
              <h2 className='font-mdheading uppercase '>Our Vision</h2>
              <p className='mt-4'>Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <button className='mt-6 px-6 py-3 border border-gray-300 text-xs uppercase font-semibold tracking-wide hover:bg-black hover:text-white transition-all'>Get Involved</button>
            </div>
            <div className='flex-1'>
              <Image src={aboutOne} className='h-full object-cover' />
            </div>
          </div>
          <div className="flex space-x-5 mt-5">
            <div className='flex-1'>
              <Image src={aboutTwo} className='h-full object-cover' />
            </div>
            <div className='bg-white py-14 px-8 flex-1 border-[#aaa] border-4 text-center'>
              <h2 className='font-mdheading uppercase '>Where we work</h2>
              <p className='mt-4'>Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <button className='mt-6 px-6 py-3 border border-gray-300 text-xs uppercase font-semibold tracking-wide hover:bg-black hover:text-white transition-all'>Get Involved</button>
            </div>
          </div>
        </div>
      </div>
      <div className='page-about__story py-24'>
        <div className='hero-width w-full mx-auto border-4 border-white py-20 text-center text-white'>
          <span className='inline-block text-xs bg-themered text-white uppercase mb-5 p-2'>Story About Us</span>
          <h2 className='font-mdheading uppercase'>REFUGEE VOICES'S STORY</h2>
          <p className='mt-3 max-w-[60%] mx-auto text-lg'>Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <button className='mt-8 px-6 py-3 border text-white border-gray-300 text-xs uppercase font-semibold tracking-wide'>Read More</button>
        </div>
      </div>
      <div className='pt-24 pb-14 bg-white'>
        <div className='hero-width w-full mx-auto'>
          <h2 className='font-heading text-center uppercase mb-24'>Our Board</h2>
          <div className='flex gap-x-5'>
            <div className='text-center'>
              <Image src={teamMemberOne} className='mx-auto h-[200px] w-[200px] rounded-full' />
              <p className='text-blackshadow mt-6'>Founder</p>
              <h3 className='font-subheading text-themered font-bold'>Alexander Bohn</h3>
              <p className='text-blackshadow mt-6 mb-6'>Etiam eu molestie eros, commodo hendrerit sapien. Maecenas
                tempus leo ac nisi iaculis porta. Sed sapien tortor, aliquet a velit ut,
                lacinia molestie velit. Maecenas ornare consequat massa ullamcorper dapibus</p>
              <div className="flex justify-center space-x-3 text-[#8896A0]">
                <Link
                  href="https://facebook.com"
                  className=""
                ><FaFacebookF className='footer-icon' /></Link>
                <Link href="https://linkedin.com" className=""><FaLinkedinIn /></Link>
                <Link href="https://pinterest.com" className=""><FaPinterestP /></Link>
                <Link href="https://twitter.com" className=""><FaTwitter /></Link>
              </div>
            </div>
            <div className='text-center'>
              <Image src={teamMemberTwo} className='mx-auto h-[200px] w-[200px] rounded-full' />
              <p className='text-blackshadow mt-6'>Co-Founder</p>
              <h3 className='font-subheading text-themered font-bold'>Max Turner</h3>
              <p className='text-blackshadow mt-6 mb-6'>Etiam eu molestie eros, commodo hendrerit sapien. Maecenas
                tempus leo ac nisi iaculis porta. Sed sapien tortor, aliquet a velit ut,
                lacinia molestie velit. Maecenas ornare consequat massa ullamcorper dapibus</p>
              <div className="flex justify-center space-x-3 text-[#8896A0]">
                <Link
                  href="https://facebook.com"
                  className=""
                ><FaFacebookF className='footer-icon' /></Link>
                <Link href="https://linkedin.com" className=""><FaLinkedinIn /></Link>
                <Link href="https://pinterest.com" className=""><FaPinterestP /></Link>
                <Link href="https://twitter.com" className=""><FaTwitter /></Link>
              </div>
            </div>
            <div className='text-center'>
              <Image src={teamMemberThree} className='mx-auto h-[200px] w-[200px] rounded-full' />
              <p className='text-blackshadow mt-6'>VP of Engineering</p>
              <h3 className='font-subheading text-themered font-bold'>Julia Jameson</h3>
              <p className='text-blackshadow mt-6 mb-6'>Etiam eu molestie eros, commodo hendrerit sapien. Maecenas
                tempus leo ac nisi iaculis porta. Sed sapien tortor, aliquet a velit ut,
                lacinia molestie velit. Maecenas ornare consequat massa ullamcorper dapibus</p>
              <div className="flex justify-center space-x-3 text-[#8896A0]">
                <Link
                  href="https://facebook.com"
                  className=""
                ><FaFacebookF className='footer-icon' /></Link>
                <Link href="https://linkedin.com" className=""><FaLinkedinIn /></Link>
                <Link href="https://pinterest.com" className=""><FaPinterestP /></Link>
                <Link href="https://twitter.com" className=""><FaTwitter /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
