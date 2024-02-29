import React from 'react'
import ReactMarkdown from 'react-markdown'
import { poppins, poppinsBold } from '@/utils/fonts'
import Image from 'next/image'

export const getStaticPaths = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/newses`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        }
    });
    const allNews = await res.json();

    const paths = allNews?.data?.map((body) => ({
        params: { slug: body.id.toString() }
    }))

    // paths will be like
    // [
    //   {
    //     params: {slug: '1'}
    //   },
    //   {
    //     params: {slug: '2'}
    //   }
    // ]
    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = async ({ params }) => {
    const path = params.slug;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/newses/${path}?populate=*`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        }
    });
    const singleNews = await res.json();
    return {
        props: singleNews
    }
}


export default function single(singleNews) {
    console.log("Single Event", singleNews);
    // const { title, news_date, description, preview_img } = singleNews?.data?.attributes;
    const newsDate = new Date(singleNews?.data?.attributes?.news_date);
    const monthNames = [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ];
    const month = monthNames[newsDate.getMonth()];
    const day = newsDate.getDate();
    const year = newsDate.getFullYear();
    const formattedDate = `${month} ${day}, ${year}`

    return (
        <main className='page-news'>
            <div className={`text-center py-40 bg-blog-single relative`} style={{ backgroundImage: `url(${singleNews?.data?.attributes?.preview_img?.data?.attributes?.url})`}}>
                {/* <p className={`text-[#e5e5e5] text-sm ${poppins.variable} font-poppins`}>Home / News / {singleNews?.data?.attributes?.title}</p> */}
            </div>
            <div className='hero-width w-full mx-auto'>
                <p className={`text-[28px] text-black Capitalize mt-8 mb-2 ${poppinsBold.variable} font-poppins`}>{singleNews?.data?.attributes?.title}</p>
                <div className='pb-6 text-blackshadow text-sm'>
                    <p>{formattedDate}</p>
                    {/* <p>by <span className='text-blue-500'>admin</span> in <span className='text-blue-500'>News, Support</span></p> */}
                </div>
                <div className='text-sm text-justify text-[#4c4848] page-news__description'>
                    {/* <Image src={preview_img?.data.attributes.url} alt='Blog Image' width={400} height={175} /> */}
                    <ReactMarkdown>{singleNews?.data?.attributes?.description}</ReactMarkdown>
                    {/* <p className='mb-5 mt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum massa vel enim feugiat gravida.
                        Phasellus velit risus, euismod a lacus et, mattis condimentum augue. Vivamus fermentum ex quis imperdiet sodales.
                        Sed aliquam nibh tellus, a rutrum turpis pellentesque ac. Nulla nibh libero, tincidunt cursus gravida ut, sodales ut magna.
                        Sed sodales libero sapien, et rutrum mi placerat eget. Nulla vestibulum lacus vel eros eleifend molestie.
                    </p>
                    <p className='mb-5'>Sed rutrum, libero non pretium tristique, arcu mi sollicitudin ex, quis venenatis orci tellus vel dolor. Donec gravida, dolor ut auctor facilisis, enim dolor pellentesque lectus, nec vehicula nibh risus ac leo. Mauris volutpat aliquam tellus nec rhoncus. Aliquam et nibh pulvinar, sodales nibh et, pretium urna. Vivamus quam augue, maximus in consequat imperdiet, iaculis non nibh. Aliquam erat volutpat. Curabitur venenatis massa sed lacus tristique, non auctor nisl sodales. Sed ultricies lacus ut libero faucibus fringilla. Ut nisi tellus, posuere vel mattis nec, convallis a metus. Nullam elementum molestie felis nec lobortis. Cras at justo eu elit semper tempor sed quis orci. In risus magna, malesuada vel elementum ut, finibus et nunc.</p>
                    <p className='mb-24'>Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor in ac turpis. In nec imperdiet turpis. Suspendisse quis orci ut orci pulvinar eleifend. Nulla eu mattis ipsum. Integer eget sagittis nulla. Praesent consectetur lacus et maximus eleifend. Integer non lacus dui. Mauris tortor diam, laoreet quis commodo vitae, sodales vel augue.</p> */}
                </div>
            </div>
        </main>
    )
}


