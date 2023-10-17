import PageHeader from '@/components/reusable/PageHeader';
import Stories from '@/components/reusable/Stories';
import { poppins, poppinsBold } from '@/utils/fonts';
import Link from 'next/link';
import { IconContext } from 'react-icons';
import { FaHandHoldingHeart, FaClinicMedical, FaHandsHelping, FaLinkedin, FaRegFileAlt } from 'react-icons/fa';
import { TbEmergencyBed } from 'react-icons/tb';
import { MdMedicalInformation, MdOutlineBabyChangingStation } from 'react-icons/md';

export default function services() {
  return (
    <main className='page-services'>
      <PageHeader subtitle={'How You could Help'} title={'What We Do'} background={'image'} />
      <div className="py-20 lg:pt-28 lg:pb-36">
        <div className="hero-width w-full mx-auto">
          <h2 className={`font-mdheading uppercase text-center mb-16 ${poppinsBold.variable} font-poppins`}>HOW IT works</h2>
          <div className='flex gap-x-8 flex-wrap px-6 sm:px-10 lg:px-0'>
            <div className='flex-1 lg:basis-[30%] basis-[40%] text-center shadow-md service-card rounded-md p-4'>
              <IconContext.Provider value={{ color: '#ED1C24', size: 42 }}>
                <FaClinicMedical className='mx-auto' />
              </IconContext.Provider>
              <h3 className={`font-smheading uppercase mt-5 ${poppins.variable} font-poppins`}>Phearts Clinic</h3>
              <p className='mt-3 text-sm leading-relaxed'>PHEARTS Clinic believes that patients are always our first priority and caring  Patients will put us in patient’s hearts.</p>
              <Link href="services/phearts-clinic" className='inline-block mt-5 uppercase text-xs text-themered font-bold tracking-wide'>Learn More</Link>
            </div>
            <div className='flex-1 lg:basis-[30%] basis-[40%] text-center mt-8 lg:mt-0 shadow-md service-card rounded-md p-4'>
              <IconContext.Provider value={{ color: '#ED1C24', size: 42 }}>
                <MdOutlineBabyChangingStation className='mx-auto' />
              </IconContext.Provider>
              <h3 className={`font-smheading uppercase mt-5 ${poppins.variable} font-poppins`}>IPD Services</h3>
              <p className='mt-3 text-sm leading-relaxed'>In-patient center we provide 24 hours wide range of curative care services
                including delivery care, post abortion care, immediate newborn care ...</p>
              <Link href="services/ipd-services" className='inline-block mt-5 uppercase text-xs text-themered font-bold tracking-wide'>Learn More</Link>
            </div>
            <div className='flex-1 lg:basis-[30%] basis-[40%] text-center shadow-md service-card rounded-md p-4'>
              <IconContext.Provider value={{ color: '#ED1C24', size: 42 }}>
                <TbEmergencyBed className='mx-auto' />
              </IconContext.Provider>
              <h3 className={`font-smheading uppercase mt-5 ${poppins.variable} font-poppins`}>Emergency Services</h3>
              <p className='mt-3 text-sm leading-relaxed'>24 hours Emergency services providing for appropriate management of injuries and accident, First Aid,
                stitching of wounds...</p>
              <Link href="/services/emergency-services" className='inline-block mt-5 uppercase text-xs text-themered font-bold tracking-wide'>Learn More</Link>
            </div>
            <div className='flex-1 lg:basis-[10%] basis-[40%] text-center'></div>
            <div className='mt-10 flex-1 lg:basis-[25%] basis-[40%] text-center shadow-md service-card rounded-md p-4'>
              <IconContext.Provider value={{ color: '#ED1C24', size: 42 }}>
                <FaHandHoldingHeart className='mx-auto'/>
              </IconContext.Provider>
              <h3 className={`font-smheading uppercase mt-5 ${poppins.variable} font-poppins`}>Diagnostic Services</h3>
              <p className='mt-3 text-sm leading-relaxed'>24 hours diagnostic services providing for appropriate diagnosis of diseases. In the peak hour of the day the services ongoing total of 7 hours</p>
              <Link href="/services/diagnostic-services" className='inline-block mt-5 uppercase text-xs text-themered font-bold tracking-wide'>Learn More</Link>
            </div>
            <div className='mt-10 flex-1 lg:basis-[25%] basis-[40%] text-center shadow-md service-card rounded-md p-4'>
              <IconContext.Provider value={{ color: '#ED1C24', size: 42 }}>
                <MdMedicalInformation className='mx-auto' />
              </IconContext.Provider>
              <h3 className={`font-smheading uppercase mt-5 ${poppins.variable} font-poppins`}>Pharmacy</h3>
              <p className='mt-3 text-sm leading-relaxed'>24 hours pharmacy  will be opened for the patient and community. We procure medicine directly
                from the top manufacturers</p>
              <Link href="/services/pharmacy" className='inline-block mt-5 uppercase text-xs text-themered font-bold tracking-wide'>Learn More</Link>
            </div>
            <div className='flex-1 lg:basis-[10%] basis-[40%] text-center'></div>
          </div>
        </div>
      </div>
     
    </main>
  )
}
