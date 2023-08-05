// Import Swiper React components
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import Image from 'next/image';
import homeBlogOne from '@/data/homeblog-1.png';
import homeBlogTwo from '@/data/homeblog-2.png';
import homeBlogThree from '@/data/homeblog-3.png';
import { poppins, poppinsBold } from '@/utils/fonts';
import Link from 'next/link';

const data = [
    {
        id: 1,
        image: homeBlogOne,
        title: "Choosing Among Bad Options in Dadaab Refugee Camp",
        date: 'November 20, 2015',
        details: `Cras dapibus ullamcorper dictum.
        Vivamus nec erat placerat felis
        scelerisque porttitor in ac turpis. In nec
        imperdiet turpis.`
    },
    {
        id: 2,
        image: homeBlogTwo,
        title: 'Desperate for Shelter and Clean Water',
        date: 'November 20, 2015',
        details: `Cras dapibus ullamcorper dictum.
        Vivamus nec erat placerat felis
        scelerisque porttitor in ac turpis. In nec
        imperdiet turpis.`
    },
    {
        id: 3,
        image: homeBlogThree,
        title: 'Preparing to help American Refugees',
        date: 'November 20, 2015',
        details: `Cras dapibus ullamcorper dictum.
        Vivamus nec erat placerat felis
        scelerisque porttitor in ac turpis. In nec
        imperdiet turpis.`
    },
    {
        id: 4,
        image: homeBlogOne,
        title: 'Burundian Refugees in the DR congo',
        date: 'November 23, 2015',
        details: `Cras dapibus ullamcorper dictum.
        Vivamus nec erat placerat felis
        scelerisque porttitor in ac turpis. In nec
        imperdiet turpis.`
    },
    {
        id: 5,
        image: homeBlogTwo,
        title: 'Refugees and Migrants in Serbia',
        date: 'November 23, 2015',
        details: `Cras dapibus ullamcorper dictum.
        Vivamus nec erat placerat felis
        scelerisque porttitor in ac turpis. In nec
        imperdiet turpis.`
    }
]

function causesSlide({ id, image, date, title, details }) {
    return (
        <SwiperSlide key={id} className='h-[300px]'>
            <div className='relative bg-[#F8F9F9]'>
                <Image src={image} alt='Image' />
                <div className='p-3 bg-white w-[95%] mx-auto relative -mt-5'>
                    <p className='text-blackshadow mt-1 text-xs'>{date}</p>
                    <h4 className={`text-lg text-themeblue leading-snug font-extrabold ${poppinsBold.variable} font-poppins mt-2`}>{title}</h4>
                    <p className='text-blackshadow text-sm mt-2 mb-2'>{details}</p>
                    <Link href={`/blog/entry`} className='text-sm font-semibold text-themegreen'>Read More</Link>
                </div>
            </div>
        </SwiperSlide>
    )
}

export default function HomeBlog({blogData}) {
    console.log(blogData)
    return (
        <div className='pt-24 pb-32'>
            <div className='hero-width w-full mx-auto text-center'>
                <span className='bg-themeblue text-white p-2 uppercase mb-4 inline-block text-xs'>Be First to read</span>
                <h2 className='uppercase text-[32px] font-black leading-tight mb-14'>Latest News</h2>
                <div>
                    <Swiper
                        modules={[Navigation]}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true,
                        }}
                        // pagination={{
                        //     clickable: true
                        // }}
                        navigation
                        slidesPerView={3}
                        spaceBetween={10}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        className='blog-slider'
                    >
                        {/* {data.map(({ id, image, heading, details }) => (<CausesSlide key={id} image={image} heading={heading} details={details} />))} */}
                        {data.map(({ id, image, date, title, details }) => (
                            causesSlide({ id, image, date, title, details })
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export const getStaticProps = async () => {
    const token = `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/notices?populate=*`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': token
      }
    });
    const blogData = await res.json();
    return {
      props: {blogData}
    }
  }
