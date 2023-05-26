import Stories from '@/components/reusable/Stories';
import { poppins, poppinsBold } from '@/utils/fonts';
import { IconContext } from 'react-icons';
import { FaHandHoldingHeart, FaHandsHelping, FaLinkedin, FaRegFileAlt } from 'react-icons/fa';
import { GrDocumentText } from 'react-icons/gr';

export default function services() {
  return (
    <main className='page-services'>
      <div className='page-services__header bg-themeblue text-white text-center py-32'>
        <p className='text-sm uppercase text-blackshadow mb-2'>How You could Help</p>
        <h2 className='font-heading text-white uppercase'>What We Do</h2>
      </div>
      <div className="py-28">
        <div className="hero-width w-full mx-auto">
          <h2 className={`font-mdheading uppercase text-center mb-16 ${poppinsBold.variable} font-poppins`}>HOW IT works</h2>
          <div className='flex gap-x-8'>
            <div>

              <IconContext.Provider value={{ color: '#ED1C24', size: 42 }}>
                <FaRegFileAlt />
              </IconContext.Provider>
              <h3 className={`font-smheading uppercase mt-5 ${poppins.variable} font-poppins`}>Register Now</h3>
              <p className='mt-3 text-sm leading-relaxed'>Cum sociis natoque penatibus et magnis dis parturient
                montesmus. Pro vel nibh et elit mollis commodo et nec
                augueiqueThe message of The Faithland</p>
            </div>
            <div>


              <IconContext.Provider value={{ color: '#ED1C24', size: 42 }}>
                <FaHandHoldingHeart />
              </IconContext.Provider>


              <h3 className={`font-smheading uppercase mt-5 ${poppins.variable} font-poppins`}>Choose Project</h3>
              <p className='mt-3 text-sm leading-relaxed'>Cum sociis natoque penatibus et magnis dis parturient
                montesmus. Pro vel nibh et elit mollis commodo et nec
                augueiqueThe message of The Faithland</p>
            </div>
            <div>

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
    </main>
  )
}
