import Stories from '@/components/reusable/Stories';
import { poppins, poppinsBold } from '@/utils/fonts';
import { IconContext } from 'react-icons';
import { FaHandHoldingHeart, FaHandsHelping, FaLinkedin, FaRegFileAlt } from 'react-icons/fa';

export default function services() {
  return (
    <main className='page-services'>
      <div className='page-services__header bg-themeblue text-white text-center py-32'>
        <p className='text-sm uppercase text-blackshadow mb-2'>How You could Help</p>
        <h2 className='font-heading text-white uppercase'>What We Do</h2>
      </div>
      <div className="py-20 lg:py-28">
        <div className="hero-width w-full mx-auto">
          <h2 className={`font-mdheading uppercase text-center mb-16 ${poppinsBold.variable} font-poppins`}>HOW IT works</h2>
          <div className='flex gap-x-8 flex-wrap px-6 sm:px-10 lg:px-0'>
            <div className='flex-1 lg:basis-[30%] basis-[40%]'>
              <IconContext.Provider value={{ color: '#ED1C24', size: 42 }}>
                <FaRegFileAlt />
              </IconContext.Provider>
              <h3 className={`font-smheading uppercase mt-5 ${poppins.variable} font-poppins`}>Register Now</h3>
              <p className='mt-3 text-sm leading-relaxed'>Cum sociis natoque penatibus et magnis dis parturient
                montesmus. Pro vel nibh et elit mollis commodo et nec
                augueiqueThe message of The Faithland</p>
            </div>
            <div className='flex-1 lg:basis-[30%] basis-[40%]'>
              <IconContext.Provider value={{ color: '#ED1C24', size: 42 }}>
                <FaHandHoldingHeart />
              </IconContext.Provider>
              <h3 className={`font-smheading uppercase mt-5 ${poppins.variable} font-poppins`}>Choose Project</h3>
              <p className='mt-3 text-sm leading-relaxed'>Cum sociis natoque penatibus et magnis dis parturient
                montesmus. Pro vel nibh et elit mollis commodo et nec
                augueiqueThe message of The Faithland</p>
            </div>
            <div className='flex-1 lg:basis-[30%] basis-[40%] mt-8 lg:mt-0'>
              <IconContext.Provider value={{ color: '#ED1C24', size: 42 }}>
                <FaHandsHelping />
              </IconContext.Provider>
              <h3 className={`font-smheading uppercase mt-5 ${poppins.variable} font-poppins`}>Help Refugees</h3>
              <p className='mt-3 text-sm leading-relaxed'>Cum sociis natoque penatibus et magnis dis parturient
                montesmus. Pro vel nibh et elit mollis commodo et nec
                augueiqueThe message of The Faithland</p>
            </div>
          </div>
        </div>
      </div>
      <Stories theme={"dark"} />
      <div className="page-services__vacancies">
        <div className='md:flex'>
          <div className='flex-1 bg-[#d94b38] text-white'>
            <div className='md:max-w-[500px] md:ml-auto py-14 md:py-20 px-10 md:px-20 text-center md:text-right space-y-8'>
              <h2 className='font-mdheading mb-10 md:mb-5 uppercase'>Current Vacancies</h2>
              <div className='md:space-y-8 md:block flex flex-wrap gap-x-6 justify-between items-center'>
                <div className='basis-[45%]'>
                  <h5 className={`font-subheading ${poppinsBold.variable} font-poppins mb-4`}>Communications Officers</h5>
                  <p className='text-sm text-[#d9d9d9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices ipsum non mattis pharetra. Integer laoreet non felis amet.</p>
                </div>
                <div className='basis-[45%]'>
                  <h5 className={`font-subheading ${poppinsBold.variable} font-poppins mb-4`}>HeadQuarters Intern</h5>
                  <p className='text-sm text-[#d9d9d9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices ipsum non mattis pharetra. Integer laoreet non felis amet.</p>
                </div>
                <div className='basis-[45%] mt-8 md:mt-0'>
                  <h5 className={`font-subheading ${poppinsBold.variable} font-poppins mb-4`}>Child Protection Expert</h5>
                  <p className='text-sm text-[#d9d9d9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices ipsum non mattis pharetra. Integer laoreet non felis amet.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-right-side flex-1 hidden md:block'></div>
        </div>
      </div>
    </main>
  )
}
