import React from 'react'
import teamMemberOne from '@/data/about/team-member-1.jpg'
import teamMemberTwo from '@/data/about/team-member-2.jpg'
import teamMemberThree from '@/data/about/team-member-3.jpg'
import Image from 'next/image'
import { poppins, poppinsBold } from '@/utils/fonts';

export default function administrative_body() {
    return (
        <main className='page-about'>
            <div className='page-about__header text-center py-32 bg-themeblue'>
                <p className='text-sm uppercase text-blackshadow mb-2'>About / Administration</p>
                <h2 className='font-heading text-white uppercase'>Administrative body</h2>
            </div>
            {/* Our Board of Directors */}
            <div className='pt-24 pb-14 bg-white'>
                <div className='hero-width w-full mx-auto text-center'>
                    <p className='inline-block text-xs bg-themegreen text-white uppercase mb-5 p-2'>Behind our All Success</p>
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