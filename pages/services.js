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
          {/* <div className='text-center mb-10'>
            At PHEARTS Clinic, we put <b>patients</b> at the <b>heart</b> of all aspects of health care.
            Established in 2016, PHEARTS Clinic is a member of the <b>Population Health Research and Training Society</b>, which operates six outdoor units, a 10-bed hospital, and a well equipped laboratory.
            Across our hospitals, residential settings, and community-based field programs, our team of expert clinicians, ,therapists, and field workers work together to provide holistic, person-centered care as part of a complete care pathway from home to hospital.
            PHEARTS Clinic believes that patients are always our first priority and caring  Patients will put us in patient’s hearts.
          </div> */}
          <div className='flex gap-x-8 flex-wrap px-6 sm:px-10 lg:px-0'>
            <div className='flex-1 lg:basis-[30%] basis-[40%]'>
              <IconContext.Provider value={{ color: '#ED1C24', size: 42 }}>
                <FaClinicMedical />
              </IconContext.Provider>
              <h3 className={`font-smheading uppercase mt-5 ${poppins.variable} font-poppins`}>Phearts Clinic</h3>
              <p className='mt-3 text-sm leading-relaxed'>PHEARTS Clinic believes that patients are always our first priority and caring  Patients will put us in patient’s hearts.</p>
              <Link href="/about/history" className='inline-block mt-5 uppercase text-xs text-themered font-bold tracking-wide'>Learn More</Link>
            </div>
            <div className='flex-1 lg:basis-[30%] basis-[40%] mt-8 lg:mt-0'>
              <IconContext.Provider value={{ color: '#ED1C24', size: 42 }}>
                <MdOutlineBabyChangingStation />
              </IconContext.Provider>
              <h3 className={`font-smheading uppercase mt-5 ${poppins.variable} font-poppins`}>IPD Services</h3>
              <p className='mt-3 text-sm leading-relaxed'>In-patient center we provide 24 hours wide range of curative care services
                including delivery care, post abortion care, immediate newborn care ...</p>
              <Link href="/about/history" className='inline-block mt-5 uppercase text-xs text-themered font-bold tracking-wide'>Learn More</Link>
            </div>
            <div className='flex-1 lg:basis-[30%] basis-[40%]'>
              <IconContext.Provider value={{ color: '#ED1C24', size: 42 }}>
                <TbEmergencyBed />
              </IconContext.Provider>
              <h3 className={`font-smheading uppercase mt-5 ${poppins.variable} font-poppins`}>Emergency Services</h3>
              <p className='mt-3 text-sm leading-relaxed'>24 hours Emergency services providing for appropriate management of injuries and accident, First Aid,
                stitching of wounds...</p>
              <Link href="/about/history" className='inline-block mt-5 uppercase text-xs text-themered font-bold tracking-wide'>Learn More</Link>
            </div>
            <div className='mt-10 flex-1 lg:basis-[30%] basis-[40%]'>
              <IconContext.Provider value={{ color: '#ED1C24', size: 42 }}>
                <FaHandHoldingHeart />
              </IconContext.Provider>
              <h3 className={`font-smheading uppercase mt-5 ${poppins.variable} font-poppins`}>Diagnostic Services</h3>
              <p className='mt-3 text-sm leading-relaxed'>24 hours diagnostic services providing for appropriate diagnosis of diseases. In the peak hour of the day the services ongoing total of 7 hours</p>
              <Link href="/about/history" className='inline-block mt-5 uppercase text-xs text-themered font-bold tracking-wide'>Learn More</Link>
            </div>
            <div className='mt-10 flex-1 lg:basis-[30%] basis-[40%]'>
              <IconContext.Provider value={{ color: '#ED1C24', size: 42 }}>
                <MdMedicalInformation />
              </IconContext.Provider>
              <h3 className={`font-smheading uppercase mt-5 ${poppins.variable} font-poppins`}>Pharmacy</h3>
              <p className='mt-3 text-sm leading-relaxed'>24 hours pharmacy  will be opened for the patient and community. We procure medicine directly
                from the top manufacturers</p>
              <Link href="/about/history" className='inline-block mt-5 uppercase text-xs text-themered font-bold tracking-wide'>Learn More</Link>
            </div>
            <div className='flex-1 lg:basis-[30%] basis-[40%]'></div>
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
