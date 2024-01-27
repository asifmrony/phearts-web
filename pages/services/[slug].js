import { poppins } from '@/utils/fonts'
import Link from 'next/link';
import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'


export const getStaticPaths = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/services`);
    const services = await res.json();

    const paths = services.data.map((service) => ({
        params: { slug: service.id.toString() },
    }))

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = async ({ params }) => {
    const path = params.slug;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/services/${path}?populate=departments.doctors.name&populate=*`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        }
    });
    const service = await res.json();
    return {
        props: { service }
    }
}

export default function SingleService({ service }) {
    console.log("Single service infos", service);
    const { title, description, departments } = service.data.attributes;
    const [showDeptDetail, setShowDeptDetails] = useState(false);
    const [selectedDeptData, setSelectedDeptData] = useState({});

    const handleDepartmentClick = (deptId) => {
        setShowDeptDetails(true);
        const filterdDepts = departments?.data.filter((item) => item.id == deptId);
        console.log("FilteredDepts", filterdDepts);
        setSelectedDeptData(filterdDepts[0].attributes);
    }

    return (
        <div className='pt-32 pb-32 single-service'>
            <div className="hero-width w-full mx-auto">
                {!showDeptDetail && (
                    <>
                        <p>
                            <Link href="/services" className='text-sm text-themeblue font-semibold leading-wider inline-block mb-6 hover:cursor-pointer'>← back</Link>
                        </p>
                        <h1 className={`text-3xl font-semibold uppercase ${poppins.variable} font-poppins mb-8 single-service__heading`}>{departments.data.length > 0 ? `Departments under ${title}` : title}</h1>
                        <p className={`${poppins.variable} font-poppins mb-16`}>{description}</p>

                        <div className="flex flex-wrap gap-x-2 gap-y-8 text-center">
                            {departments.data.map(item => {
                                return (<div key={item.id} className='basis-[24%] rounded-md shadow-sm border border-gray-400'>
                                    <div className='single-service__image-box rounded-tl-md rounded-tr-md' style={{ backgroundImage: 'url("https://res.cloudinary.com/dx5igpxff/image/upload/v1691234196/thumbnail_bg_upcoming_events_c0debf86d9.jpg")' }}>
                                        <div className='text-lg font-semibold leading-tight text-white single-service__title'>{item.attributes.title}</div>
                                    </div>
                                    <p className='text-sm mt-2 pt-2 pb-4 px-4'>{item.attributes.short_description}</p>
                                    <p
                                        className='underline decoration-1 hover:decoration-4 cursor-pointer text-themeblue text-sm hover:text-md hover:font-semibold mb-6'
                                        onClick={() => handleDepartmentClick(item?.id)}
                                    >Learn more..</p>
                                </div>)
                            })}
                        </div>
                    </>
                )}

                {showDeptDetail && <div>
                    <p><a className='text-sm text-themeblue font-semibold leading-wider inline-block mb-6 hover:cursor-pointer' onClick={() => setShowDeptDetails(false)}>← back</a></p>
                    <h2 className={`text-4xl font-semibold uppercase ${poppins.variable} font-poppins mb-8`}>{selectedDeptData?.title}</h2>
                    <p className={`${poppins.variable} font-poppins mb-10`}>
                        <ReactMarkdown>{selectedDeptData?.long_description}</ReactMarkdown>
                    </p>
                    <h3 className={`text-2xl font-semibold uppercase ${poppins.variable} font-poppins mb-8 single-service__heading`}>{selectedDeptData?.doctors.data?.length > 0 ? 'All Doctors' : ''}</h3>
                    {selectedDeptData?.doctors.data.map((item, _) => (
                        <div className='mb-6' key={_}>
                            <h4 className={`text-xl ${poppins.variable} font-poppins`}>{item.attributes.name}</h4>
                            <h5 className={`text-sm ${poppins.variable} font-poppins`}>{item.attributes.degrees}</h5>
                            <p className='text-sm'>{item.attributes.text_line_one}</p>
                            <p className='text-sm'>{item.attributes.text_line_two}</p>
                            <h5 className={`text-sm ${poppins.variable} font-poppins`}>{item.attributes.affiliations}</h5>
                        </div>
                    ))}
                </div>}
            </div>
        </div>
    )
}
