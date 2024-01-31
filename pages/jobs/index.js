import { poppins, poppinsBold } from '@/utils/fonts'
import Link from 'next/link'
import React from 'react';

export default function jobs(alljobs) {
    console.log("ALA jobs", alljobs);
    return (
        <main>
            <div className="page-services__vacancies">
                <div className='md:flex'>
                    <div className='flex-1 bg-[#d94b38] text-white'>
                        <div className='md:max-w-[500px] md:ml-auto py-14 md:py-28 px-10 md:px-20 text-center md:text-right space-y-8'>
                            <h2 className='font-mdheading mb-10 md:mb-14 uppercase'>Current Vacancies</h2>
                            <div className='md:space-y-8 md:block flex flex-wrap gap-x-6 justify-between items-center'>
                                {alljobs?.data?.map((item) => {
                                    const { job_title, job_summary } = item?.attributes;

                                    return (
                                        <React.Fragment key={item.id}>
                                            <div className='basis-[45%]'>
                                                <h5 className={`font-subheading ${poppinsBold.variable} font-poppins mb-4`}>{job_title}</h5>
                                                <p className={`text-sm text-[#d9d9d9] ${poppins.variable} font-poppins`}>{job_summary}</p>
                                                <Link href={`/jobs/${item.id}`} className='inline-block mt-5 uppercase text-xs text-[#e5e5e5] font-bold tracking-wide'>Learn More</Link>
                                            </div>
                                            <hr />
                                        </React.Fragment>
                                    )
                                })}
                                {/* <div className='basis-[45%]'>
                                    <h5 className={`font-subheading ${poppinsBold.variable} font-poppins mb-4`}>Communications Officers</h5>
                                    <p className={`text-sm text-[#d9d9d9] ${poppins.variable} font-poppins`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices ipsum non mattis pharetra. Integer laoreet non felis amet.</p>
                                    <Link href="/jobs/entry" className='inline-block mt-5 uppercase text-xs text-[#e5e5e5] font-bold tracking-wide'>Learn More</Link>
                                </div>
                                <hr />
                                <div className='basis-[45%]'>
                                    <h5 className={`font-subheading ${poppinsBold.variable} font-poppins mb-4`}>HeadQuarters Intern</h5>
                                    <p className={`text-sm text-[#d9d9d9] ${poppins.variable} font-poppins`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices ipsum non mattis pharetra. Integer laoreet non felis amet.</p>
                                    <Link href="/jobs/entry" className='inline-block mt-5 uppercase text-xs text-[#e5e5e5] font-bold tracking-wide'>Learn More</Link>
                                </div>
                                <hr />
                                <div className='basis-[45%] mt-8 md:mt-0'>
                                    <h5 className={`font-subheading ${poppinsBold.variable} font-poppins mb-4`}>Child Protection Expert</h5>
                                    <p className={`text-sm text-[#d9d9d9] ${poppins.variable} font-poppins`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices ipsum non mattis pharetra. Integer laoreet non felis amet.</p>
                                    <Link href="/jobs/entry" className='inline-block mt-5 uppercase text-xs text-[#e5e5e5] font-bold tracking-wide'>Learn More</Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className='bg-right-side flex-1 hidden md:block'></div>
                </div>
            </div>
        </main>
    )
}

export const getStaticProps = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/jobs`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            // 'Authorization': token
        }
    });
    const alljobs = await res.json();
    return {
        props: alljobs
    }
}