// Import Swiper React components
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import Image from 'next/image';
import causesOne from '@/data/homeCauses-1.png';
import causesTwo from '@/data/homeCauses-2.png';
import causesThree from '@/data/homeCauses-3.png';
import causesFour from '@/data/homeCauses-4.png';
import { poppins } from '@/utils/fonts';

const data = [
    {
        id: 1,
        image: causesOne,
        heading: 'General Medicine',
        details: `Cras dapibus ullamcorper dictum.
        Vivamus nec erat placerat felis
        scelerisque porttitor in ac turpis. In nec
        imperdiet turpis.`
    },
    {
        id: 2,
        image: causesTwo,
        heading: 'Gynae and Obs',
        details: `Cras dapibus ullamcorper dictum.
        Vivamus nec erat placerat felis
        scelerisque porttitor in ac turpis. In nec
        imperdiet turpis.`
    },
    {
        id: 3,
        image: causesThree,
        heading: 'Eye',
        details: `Cras dapibus ullamcorper dictum.
        Vivamus nec erat placerat felis
        scelerisque porttitor in ac turpis. In nec
        imperdiet turpis.`
    },
    {
        id: 4,
        image: causesFour,
        heading: 'Dental',
        details: `Cras dapibus ullamcorper dictum.
        Vivamus nec erat placerat felis
        scelerisque porttitor in ac turpis. In nec
        imperdiet turpis.`
    },
    {
        id: 5,
        image: causesOne,
        heading: 'Physiotherapy',
        details: `Cras dapibus ullamcorper dictum.
        Vivamus nec erat placerat felis
        scelerisque porttitor in ac turpis. In nec
        imperdiet turpis.`
    },
    {
        id: 6,
        image: causesTwo,
        heading: 'Orthopadics',
        details: `Cras dapibus ullamcorper dictum.
        Vivamus nec erat placerat felis
        scelerisque porttitor in ac turpis. In nec
        imperdiet turpis.`
    },
    {
        id: 7,
        image: causesThree,
        heading: 'Pediatrics',
        details: `Cras dapibus ullamcorper dictum.
        Vivamus nec erat placerat felis
        scelerisque porttitor in ac turpis. In nec
        imperdiet turpis.`
    }
]

function causesSlide({ id, image, heading }) {
    return (
        <SwiperSlide key={id}>
            <div className='w-full'>
                <Image src={image} alt='Image' />
                <h4 className={`text-lg text-themeblue font-bold ${poppins.variable} font-poppins mt-3`}>{heading}</h4>
            </div>
        </SwiperSlide>
    )
}

export default function HomeCauses() {
    return (
        <div className='bg-white mt-5 pt-20 pb-28'>
            <div className='hero-width w-full mx-auto text-center'>
                <span className='bg-themeblue text-white p-2 uppercase mb-4 inline-block text-xs'>Glimpse of what consists of</span>
                <h2 className='uppercase text-[32px] font-black leading-tight mb-14'>Our Phearts Clinic</h2>
                <div>
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true,
                        }}
                        slidesPerView={4}
                        spaceBetween={10}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        className='causes-slider'
                    >
                        {data.map(({ id, image, heading }) => (
                            causesSlide({id, image, heading})
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
