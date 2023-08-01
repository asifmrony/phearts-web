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
        heading: 'Livelihoods',
        category: 'Safety'
    },
    {
        id: 2,
        image: causesTwo,
        heading: 'Public Health',
        category: 'Health'
    },
    {
        id: 3,
        image: causesThree,
        heading: 'Safeguarding',
        category: 'Hygiene'
    },
    {
        id: 4,
        image: causesFour,
        heading: 'Educate a Child',
        category: 'Education'
    },
    {
        id: 5,
        image: causesOne,
        heading: 'Protection',
        category: 'Migration, Safety'
    }
]

function causesSlide({ id, image, heading, category }) {
    return (
        <SwiperSlide key={id}>
            <div className='bg-white px-5 py-8'>
                <Image src={image} alt='Image' className='w-[150px] h-[150px] mx-auto rounded-full' />
                <p className={`${poppins.variable} font-poppins text-sm mt-5`}>
                    <span className='text-blackshadow'>in</span>
                    <span className='text-black ml-1 font-medium'>{category}</span>
                </p>
                <p className='text-themeblue text-xl font-bold mt-3'>{heading}</p>
            </div>
        </SwiperSlide>
    )
}

export default function Gallery() {
    return (
        <div className='pt-20 pb-28'>
            <div className='hero-width w-full mx-auto text-center'>
                <span className='bg-themeblue text-white p-2 uppercase mb-4 inline-block text-xs'>Let us show you</span>
                <h2 className='uppercase text-[32px] font-black leading-tight mb-20'>Our Gallery & Albums</h2>
                <div>
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true,
                        }}
                        slidesPerView={3}
                        spaceBetween={20}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        
                    >
                        {/* {data.map(({ id, image, heading, details }) => (<CausesSlide key={id} image={image} heading={heading} details={details} />))} */}
                        {data.map(({ id, image, heading, category }) => (
                            causesSlide({id, image, heading, category})
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
