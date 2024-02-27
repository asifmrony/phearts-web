import { poppins } from '@/utils/fonts'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'


export const getStaticPaths = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/services`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        }
    });
    const services = await res.json();

    const paths = services?.data?.map((service) => ({
        params: { slug: service.id.toString() },
    }))

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = async ({ params }) => {
    const path = params.slug;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/services/${path}?populate=photo&populate=departments.doctors.name&populate=departments.photo`, {
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
    const router = useRouter();
    console.log("Single service infos", service);
    // const { title, description, departments } = service?.data?.attributes;
    const departments = service?.data?.attributes?.departments
    const [showDeptDetail, setShowDeptDetails] = useState(false);
    const [selectedDeptData, setSelectedDeptData] = useState({});

    const handleDepartmentClick = (deptId) => {
        setShowDeptDetails(true);
        const filterdDepts = departments?.data?.filter((item) => item.id == deptId);
        console.log("FilteredDepts", filterdDepts);
        setSelectedDeptData(filterdDepts[0].attributes);
        router.push({
            pathname: `/services/${router.query.slug}`,
            query: {dept: filterdDepts[0].attributes.title}
        })
    }

    useEffect(() => {
        console.log("Router query", router.query);
        if (router.query.cid && router.query.dept) {
            setShowDeptDetails(true);
            const filterdDepts = departments?.data?.filter((item) => item.id == router.query.cid);
            console.log("FilteredDepts", filterdDepts);
            setSelectedDeptData(filterdDepts[0].attributes);
            router.replace({
                pathname: `/services/${router.query.slug}`,
                query: {dept: filterdDepts[0].attributes.title},
            })
        } 
        const handlePopState = () => {
            if(router.query.dept && router.query.dept.length > 0) {
                console.log("Entered to change pop state value")
                setShowDeptDetails(false);
                setSelectedDeptData({});
            }
        } 
        window.addEventListener('popstate', handlePopState);
        return () => {
            window.removeEventListener('popstate', handlePopState);
        }
    }, [router.query.dept])


    console.log("Department Image", selectedDeptData?.photo);

    return (
        <div className='pt-32 pb-32 single-service'>
            <div className="hero-width w-full mx-auto">
                {!showDeptDetail && (
                    <>
                        <p>
                            <Link href="/services" className='text-sm text-themeblue font-semibold leading-wider inline-block mb-6 hover:cursor-pointer'>← back</Link>
                        </p>
                        <div className='single-service__bg-image mb-6'  style={{ backgroundImage: `url(${service?.data?.attributes?.photo?.data?.attributes?.url})` }}></div>
                        <h1 className={`text-3xl font-semibold uppercase ${poppins.variable} font-poppins mb-8 single-service__heading`}>{departments?.data?.length > 0 ? `Departments under ${service?.data?.attributes?.title}` : service?.data?.attributes?.title}</h1>
                        <p className={`${poppins.variable} font-poppins mb-16`}>{service?.data?.attributes?.description}</p>

                        <div className="flex flex-wrap gap-x-2 gap-y-8 text-center">
                            {departments?.data?.map(item => {
                                return (<div key={item?.id} className='basis-[24%] rounded-md shadow-sm border border-gray-400'>
                                    <div className='single-service__image-box rounded-tl-md rounded-tr-md' style={{ backgroundImage: `url(${item?.attributes?.photo?.data?.attributes?.url})` }}>
                                        <div className='text-lg font-semibold leading-tight text-white single-service__title'>{item?.attributes?.title}</div>
                                    </div>
                                    <p className='text-sm mt-2 pt-2 pb-4 px-4'>{item?.attributes?.short_description}</p>
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
                    <p><Link href={`/services/${router.query.slug}`} className='text-sm text-themeblue font-semibold leading-wider inline-block mb-6 hover:cursor-pointer' onClick={() => { setShowDeptDetails(false)}}>← back</Link></p>
                    <div className='single-service__bg-image mb-6'  style={{ backgroundImage: `url(${selectedDeptData?.photo?.data?.attributes?.url})` }}></div>
                    <h2 className={`text-4xl font-semibold uppercase ${poppins.variable} font-poppins mb-8`}>{selectedDeptData?.title}</h2>
                    <div className={`${poppins.variable} font-poppins mb-10`}>
                        <ReactMarkdown>{selectedDeptData?.long_description}</ReactMarkdown>
                    </div>
                    <h3 className={`text-2xl font-semibold uppercase ${poppins.variable} font-poppins mb-8 single-service__heading`}>{selectedDeptData?.doctors?.data?.length > 0 ? 'All Doctors' : ''}</h3>
                    {selectedDeptData?.doctors?.data?.map((item, _) => (
                        <div className='mb-6' key={_}>
                            <h4 className={`text-xl ${poppins.variable} font-poppins`}>{item?.attributes?.name}</h4>
                            <h5 className={`text-sm ${poppins.variable} font-poppins`}>{item?.attributes?.degrees}</h5>
                            <p className='text-sm'>{item?.attributes?.text_line_one}</p>
                            <p className='text-sm'>{item?.attributes?.text_line_two}</p>
                            <h5 className={`text-sm ${poppins.variable} font-poppins`}>{item?.attributes?.affiliations}</h5>
                        </div>
                    ))}
                </div>}
            </div>
        </div>
    )
}
