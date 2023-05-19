// Import Swiper React components
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import Image from 'next/image';
import charityOne from '@/data/charity-slider-image-1.jpg';
import charityTwo from '@/data/charity-slider-image-2.jpg';
import charityThree from '@/data/charity-slider-image-3.jpg';
import { inter, poppins } from '@/utils/fonts';

function SliderContent() {
    return (
        <div className='slider-texts hero-width w-full mx-auto flex items-center'>
            <div className={`slider-texts__content`}>
                <span className={`bg-themered text-white py-1 px-2 inline-block uppercase font-semibold mb-5 lg:mb-7 ${poppins.variable} font-poppins`}>How you could help</span>
                <p className={`font-subheading text-white font-medium mb-1 lg:mb-2 tracking-wide`}>WE STAND TOGETHER #WITHREFUGEES</p>
                <p className={`font-heading text-white font-bold mt-1 mb-5 lg:mb-9 shadow-sm tracking-wide`}>629,000 PEOPLE HAVE <br /> PLEDGED THEIR SUPPORT</p>
                <div className='flex gap-x-2 lg:gap-x-3'>
                    <button className=' border border-gray-300 uppercase text-white font-semibold tracking-wide'>Make Donation</button>
                    <button className=' border border-gray-300 uppercase text-white font-semibold tracking-wide'>View Causes</button>
                </div>
            </div>
        </div>
    )
}

export default function HomeSlider() {
    return (
        <Swiper
            modules={[Navigation]}
            autoplay={true}
            navigation
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide className='hero-slide'>
                <Image src={charityOne} alt='Image' />
                <SliderContent />
            </SwiperSlide>
            <SwiperSlide className='hero-slide'>
                <Image src={charityTwo} alt='Image' />
                <SliderContent />
            </SwiperSlide>
            <SwiperSlide className='hero-slide'>
                <Image src={charityThree} alt='Image' />
                <SliderContent />
            </SwiperSlide>
        </Swiper>
    )
}
