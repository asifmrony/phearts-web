import PageHeader from '@/components/reusable/PageHeader';
import { poppins, poppinsBold } from '@/utils/fonts';
import Link from 'next/link';
import { IconContext } from 'react-icons';
import { FaHandHoldingHeart, FaClinicMedical } from 'react-icons/fa';
import { TbEmergencyBed } from 'react-icons/tb';
import { MdMedicalInformation, MdOutlineBabyChangingStation } from 'react-icons/md';

const singleService = (id, serviceData) => {
  return (<div key={id} className={`flex-1 lg:basis-[30%] basis-[40%] text-center shadow-md service-card rounded-md p-4 mt-8 ${id == 4 || id == 5 ? 'mt-10' : 'lg:mt-0'}`}>
    <IconContext.Provider value={{ color: '#ED1C24', size: 42 }}>
      <FaClinicMedical className='mx-auto' />
    </IconContext.Provider>
    <h3 className={`font-smheading uppercase mt-5 ${poppins.variable} font-poppins`}>{serviceData?.title}</h3>
    <p className='mt-3 text-sm leading-relaxed'>{serviceData?.short_summary}</p>
    <Link href={`services/${id}`} className='inline-block mt-5 uppercase text-xs text-themered font-bold tracking-wide'>Learn More</Link>
  </div>)
}

export default function services(allServices) {
  const sortedServices = allServices?.data?.sort((a, b) => a?.id - b?.id);
  
  return (
    <main className='page-services'>
      <PageHeader subtitle={''} title={'What We Do'} background={'image'} />
      <div className="py-20 lg:pt-28 lg:pb-36">
        <div className="hero-width w-full mx-auto">
          <h2 className={`font-mdheading uppercase text-center mb-16 ${poppinsBold.variable} font-poppins`}>HOW IT works</h2>
          <div className='flex gap-x-8 flex-wrap px-6 sm:px-10 lg:px-0'>
            {sortedServices?.map(service => {
              const serviceData = service.attributes;
              if (service.id == 3 || service.id == 5) {
                return (
                  <>
                    {singleService(service.id, serviceData)}
                    <div className='flex-1 hidden lg:block lg:basis-[10%] text-center'></div>
                  </>
                )
              }
              return (
                singleService(service.id, serviceData)
              )
            })}
          </div>
        </div>
      </div>

    </main>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/services?populate=*`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      // 'Authorization': token
    }
  });
  const allServices = await res.json();
  return {
    props: allServices,
    revalidate: 60
  }
}
