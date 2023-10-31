import React from 'react'
import teamMemberOne from '@/data/about/team-member-1.jpg'
import teamMemberTwo from '@/data/about/team-member-2.jpg'
import teamMemberThree from '@/data/about/team-member-3.jpg'
import Image from 'next/image'
import { poppins, poppinsBold } from '@/utils/fonts';
import PageHeader from '@/components/reusable/PageHeader'

export default function administrative_body() {
    return (
        <main className='page-about'>
            <PageHeader title={'Administrative body'} subtitle={'About / Administration'} background={'blue'} />
            
            {/* Our Board of Directors */}
            <div className='pt-24 pb-14 bg-white'>
                <div className='hero-width w-full mx-auto text-center'>
                    <p className={`inline-block text-xs bg-themegreen text-white uppercase mb-5 p-2 ${poppins.variable} font-poppins`}>Behind our All Success</p>
                    <h2 className='font-mdheading text-center uppercase mb-24'>Board of Directors</h2>
                    <div className='flex justify-between flex-wrap gap-x-5 gap-y-10'>
                        <div className='text-center basis-[30%] md:basis-[23%] lg:basis-[18%]'>
                            <Image src={teamMemberOne} alt='Image' className='mx-auto h-[125px] w-[125px] rounded-full' />
                            <h3 className='font-subheading text-themered font-bold mt-4'>Dr. Alauddin Ahmed</h3>
                            <p className='text-sm text-blackshadow mt-3 mb-6'>Etiam eu molestie eros, commodo hendrerit sapien. Maecenas
                                tempus leo ac nisi iaculis porta.</p>
                        </div>
                        <div className='text-center basis-[30%] md:basis-[23%] lg:basis-[18%]'>
                            <Image src={teamMemberTwo} alt="Image" className='mx-auto h-[125px] w-[125px] rounded-full' />
                            <h3 className='font-subheading text-themered font-bold mt-4'>A KM Rabiul Islam</h3>
                            <p className='text-sm text-blackshadow mt-3 mb-6'>Etiam eu molestie eros, commodo hendrerit sapien. Maecenas
                                tempus leo ac nisi iaculis porta.</p>
                        </div>
                        <div className='text-center basis-[30%] md:basis-[23%] lg:basis-[18%]'>
                            <Image src={teamMemberOne} alt='Image' className='mx-auto h-[125px] w-[125px] rounded-full' />
                            <h3 className='font-subheading text-themered font-bold mt-4'>Md. Bodiul Alam</h3>
                            <p className='text-sm text-blackshadow mt-3 mb-6'>Etiam eu molestie eros, commodo hendrerit sapien. Maecenas
                                tempus leo ac nisi iaculis porta.</p>
                        </div>
                        <div className='text-center basis-[30%] md:basis-[23%] lg:basis-[18%]'>
                            <Image src={teamMemberTwo} alt="Image" className='mx-auto h-[125px] w-[125px] rounded-full' />
                            <h3 className='font-subheading text-themered font-bold mt-4'>H E M Mahbubul Eunus</h3>
                            <p className='text-sm text-blackshadow mt-3 mb-6'>Etiam eu molestie eros, commodo hendrerit sapien. Maecenas
                                tempus leo ac nisi iaculis porta.</p>
                        </div>
                        
                    </div>
                </div>
            </div>

            {/* Deputy Director */}
            <div className='pt-24 pb-14 bg-white'>
                <div className='hero-width w-full mx-auto text-center'>
                    <h2 className='font-mdheading text-center uppercase mb-16'>Deputy Director</h2>
                    <div className='flex flex-wrap gap-x-5 gap-y-10'>
                        <div className='text-center basis-[30%] md:basis-[23%] lg:basis-[18%]'>
                            
                        </div>
                        <div className='text-center basis-[30%] md:basis-[23%] lg:basis-[18%]'>
                            
                        </div>
                        <div className='text-center basis-[30%] md:basis-[23%] lg:basis-[18%]'>
                            <Image src={teamMemberOne} alt='Image' className='mx-auto h-[125px] w-[125px] rounded-full' />
                            <h3 className='font-subheading text-themered font-bold mt-4'>Md. Bodiul Alam</h3>
                            <p className='text-sm text-blackshadow mt-3 mb-6'>Etiam eu molestie eros, commodo hendrerit sapien. Maecenas
                                tempus leo ac nisi iaculis porta.</p>
                        </div>
                        <div className='text-center basis-[30%] md:basis-[23%] lg:basis-[18%]'>
                            
                        </div>
                        
                    </div>
                </div>
            </div>

            {/* Deputy Director */}
            <div className='pt-24 pb-14 bg-white'>
                <div className='hero-width w-full mx-auto text-center'>
                    <h2 className='font-mdheading text-center uppercase mb-16'>Manager</h2>
                    <div className='flex flex-wrap gap-x-5 gap-y-10'>
                        <div className='text-center basis-[30%] md:basis-[23%] lg:basis-[18%]'>
                            
                        </div>
                        <div className='text-center basis-[30%] md:basis-[23%] lg:basis-[18%]'>
                            
                        </div>
                        <div className='text-center basis-[30%] md:basis-[23%] lg:basis-[18%]'>
                            <Image src={teamMemberOne} alt='Image' className='mx-auto h-[125px] w-[125px] rounded-full' />
                            <h3 className='font-subheading text-themered font-bold mt-4'>Md. Bodiul Alam</h3>
                            <p className='text-sm text-blackshadow mt-3 mb-6'>Etiam eu molestie eros, commodo hendrerit sapien. Maecenas
                                tempus leo ac nisi iaculis porta.</p>
                        </div>
                        <div className='text-center basis-[30%] md:basis-[23%] lg:basis-[18%]'>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </main>
    )
}
