import Image from 'next/image'
import aboutOne from '@/data/about/about-1.jpg'
import aboutTwo from '@/data/about/about-2.jpg'
import { poppins, poppinsBold } from '@/utils/fonts';
import Link from 'next/link'
import PageHeader from '@/components/reusable/PageHeader';

export default function about() {
  return (
    <main className='page-about'>
      <PageHeader title={'About Us'} subtitle={'We are Delighted to Share'} background={'blue'} />
      {/* Our Brief History */}
      <div className='pt-24 pb-14 bg-white'>
        <div className="hero-width w-full mx-auto text-center">
          <p className='inline-block text-xs bg-themegreen text-white uppercase mb-5 p-2'>Let Us tell you</p>
          <h2 className='font-heading text-center uppercase mb-14'>A Brief History of Us</h2>
          <div className='space-y-6'>
            <p>PHeaRTs was set up in the Araihazar upozila, Narayanganj district of Bangladesh, in 2010 and registered as a joint stock company under Society Act XX1 of 1860, No. S-12551/2017. After its inception, the Population Health Research and Training Society (PHeaRTs) has been significantly playing a vital role in implementing environmental research, improving rural health care services, and providing life skill training for the development of digital Bangladesh.
            </p>
            <p>
              Araihazar upazilla of Narayanganj district is a bit different from other upazillas in the country, having its own distinguished geo-environmental characteristics like higher arsenic concentrations in water, air pollution from different types of industry, and various natural calamities. Therefore, the people of this region essentially suffer from both types of environmental pollution. Again, being situated on the bank of the river Meghna, there are some remote areas and islands that are far away from the upazilla parishad. People in this area can find it hard to communicate with touches of government development.
            </p>
            <p>
              Despite this challenge, to reduce the burden of diseases and focus on risk factors, Society has started a comprehensive health care program, including a health care clinic and mobile medical team, to provide primary and secondary health care services to the community through a registered non-government organization, Uchicago Research Bangladesh (URB). These clinics often offer services such as general and specialized consultation, hospital admission, all sorts of investigations, and preventive care like health education, health camps, online health care services, etc. This organization also implemented various government and non-government programs, including awareness and training of key community members and community health workers on NCDs, dengue, chikungunya, COVID-19, vaccination awareness, etc.
            </p>
          </div>
        </div>
      </div>
      {/* Vision and work */}
      <div className='p-8 lg:p-20 pb-20 lg:pb-30 bg-white'>
        <div className='hero-width mx-auto w-full'>
          <div className='flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5'>
            <div className='bg-white py-14 px-8 flex-1 border-[#aaa] border-4 text-center'>
              <h2 className='font-mdheading uppercase '>Our Mission</h2>
              <p className={`mt-4 ${poppins.variable} font-poppins text-sm`}>To enjoy the highest attainable status of health, well-being and quality of life at every age, free   of preventable NCDs, avoidable disability and premature death for all people of Araihazar Upazilla and beyond </p>
            </div>
            <div className='flex-1'>
              <Image src={aboutOne} alt='Image' className='h-full object-cover' />
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row space-y-5 space-y-reverse md:space-y-0 md:space-x-5 mt-5">
            <div className='flex-1'>
              <Image src={aboutTwo} alt='Image' className='h-full object-cover' />
            </div>
            <div className='bg-white py-14 px-8 flex-1 border-[#aaa] border-4 text-center'>
              <h2 className='font-mdheading uppercase '>Our Vision</h2>
              <p className='mt-4 text-sm'>
                To reduce preventable morbidity, avoidable disability, premature mortality and establish a healthy society in Araihazar and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Objective */}
      <div className='page-about__story py-24 px-10 lg:px-0'>
        <div className='hero-width w-full mx-auto border-4 border-white py-20 text-white'>
          <div className='max-w-[60%] mx-auto'>
            <h2 className='font-mdheading uppercase'>Objectives</h2>
            <ul className='mt-6 text-sm text-left space-y-2 list-disc'>
              <li>To work in the public and community health sectors with the aim of contributing to the development of this sector.</li>
              <li>To establish, run, and operate health clinics of all types for community health promotion and services, and for that purpose, to obtain the permissions and approvals of all relevant authorities.</li>
              <li>
                To support, disseminate, and translate research and creative activity to advance knowledge and health nationwide and to inform, educate, and empower people about health issues.
              </li>
              <li>
                To improve the health of rural people through community-based participatory initiatives and to train community health professionals to enhance medical knowledge for quality health care.
              </li>
              <li>
                To monitor health status to identify community health problems and mobilize community partnerships to diagnose, investigate, and solve those problems.
              </li>
              <li>
                To evaluate the effectiveness, efficiency, accessibility, and quality of personal and population-based health services.
              </li>
              <li>
                To train a wide cadre of public health professionals, researchers, and community stakeholders on all topics relevant to the improvement of health.
              </li>
              <li>
                To support all types of research for that purpose by liaising, collaborating, and working with other educational and research institutions, universities, organizations, trusts, donors, and governments.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
