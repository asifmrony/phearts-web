import { poppins } from '@/utils/fonts'
import React from 'react'


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
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/services/${path}?populate=*`, {
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

export default function entry({ service }) {
    const {title, description, departments} = service.data.attributes;

    return (
        <div className='pt-32 pb-32 single-service'>
            <div className="hero-width w-full mx-auto">
                <h1 className={`text-3xl font-semibold uppercase ${poppins.variable} font-poppins mb-8 single-service__heading`}>{departments.data.length > 0 ? `Departments under ${title}` : title}</h1>
                <p className={`${poppins.variable} font-poppins mb-16`}>{description}</p>

                <div className="flex flex-wrap gap-x-2 gap-y-8 text-center">
                    {departments.data.map(item => (
                        <div key={item.id} className='basis-[24%] rounded-md shadow-sm border border-gray-400'>
                            <div className='single-service__image-box rounded-tl-md rounded-tr-md' style={{backgroundImage: 'url("https://res.cloudinary.com/dx5igpxff/image/upload/v1691234196/thumbnail_bg_upcoming_events_c0debf86d9.jpg")'}}>
                                <h4 className='text-lg font-semibold leading-tight text-white single-service__title'>{item.attributes.title}</h4>
                            </div>
                            <p className='text-sm mt-2 pt-2 pb-6 px-4'>{item.attributes.description}</p>
                        </div>
                    ))}
                </div>

                {/* <h1 className={`text-2xl font-semibold ${poppins.variable} font-poppins mb-12 single-service__heading`}>Departments under {title}</h1>
                <div className="flex flex-wrap gap-x-2 gap-y-8 text-center">
                    <div className='basis-[24%] rounded-md shadow-sm border border-gray-400'>
                        <div className='single-service__image-box rounded-tl-md rounded-tr-md'>
                            <h4 className='text-lg font-semibold leading-tight text-white single-service__title'>General Medicine</h4>
                        </div>
                        <p className='text-sm mt-2 pt-2 pb-6 px-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, illo.</p>
                    </div>
                    <div className='basis-[24%] rounded-md shadow-sm border border-gray-400'>
                        <div className='single-service__image-box rounded-tl-md rounded-tr-md'>
                            <h4 className='text-lg font-semibold leading-tight text-white single-service__title'>Gynae and Obs</h4>
                        </div>
                        <p className='text-sm mt-2 pt-2 pb-6 px-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, illo.</p>
                    </div>
                    <div className='basis-[24%] rounded-md shadow-sm border border-gray-400'>
                        <div className='single-service__image-box rounded-tl-md rounded-tr-md'>
                            <h4 className='text-lg font-semibold leading-tight text-white single-service__title'>Eye</h4>
                        </div>
                        <p className='text-sm mt-2 pt-2 pb-6 px-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, illo.</p>
                    </div>
                    <div className='basis-[24%] rounded-md shadow-sm border border-gray-400'>
                        <div className='single-service__image-box rounded-tl-md rounded-tr-md'>
                            <h4 className='text-lg font-semibold leading-tight text-white single-service__title'>Dental</h4>
                        </div>
                        <p className='text-sm mt-2 pt-2 pb-6 px-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, illo.</p>
                    </div>
                    <div className='basis-[15%]'></div>
                    <div className='basis-[24%] rounded-md shadow-sm border border-gray-400'>
                        <div className='single-service__image-box rounded-tl-md rounded-tr-md'>
                            <h4 className='text-lg font-semibold leading-tight text-white single-service__title'>Physiotherapy</h4>
                        </div>
                        <p className='text-sm mt-2 pt-2 pb-6 px-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, illo.</p>
                    </div>
                    <div className='basis-[24%] rounded-md shadow-sm border border-gray-400'>
                        <div className='single-service__image-box rounded-tl-md rounded-tr-md'>
                            <h4 className='text-lg font-semibold leading-tight text-white single-service__title'>Pediatrics</h4>
                        </div>
                        <p className='text-sm mt-2 pt-2 pb-6 px-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, illo.</p>
                    </div>
                    <div className='basis-[24%] rounded-md shadow-sm border border-gray-400'>
                        <div className='single-service__image-box rounded-tl-md rounded-tr-md'>
                            <h4 className='text-lg font-semibold leading-tight text-white single-service__title'>Orthopadics</h4>
                        </div>
                        <p className='text-sm mt-2 pt-2 pb-6 px-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, illo.</p>
                    </div>
                    <div className='basis-[17%]'></div>
                </div> */}
            </div>
        </div>
    )
}
