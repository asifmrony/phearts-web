// Import Swiper React components
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import Image from 'next/image';
import charityOne from '@/data/charity-slider-image-1.jpg';
import charityTwo from '@/data/slider-image2.jpg';
import charityThree from '@/data/slider-image3.jpg';
import { inter, poppins } from '@/utils/fonts';
import Link from 'next/link';

const data = [
    {
        id: 1,
        image: charityOne,
        subheading: 'WE STAND TOGETHER #WITHREFUGEES',
        heading: '629,000 PEOPLE HAVE PLEDGED THEIR SUPPORT',
        buttonText: 'Make Donation',
        buttonLink: '/donation',
        textVisible: true
    },
    {
        id: 2,
        image: charityTwo,
        subheading: 'WE STAND TOGETHER #WITHREFUGEES',
        heading: '629,000 PEOPLE HAVE PLEDGED THEIR SUPPORT',
        buttonText: 'Make Donation',
        buttonLink: '/donation',
        textVisible: false
    },
    {
        id: 3,
        image: charityThree,
        subheading: '',
        heading: '',
        buttonText: '',
        buttonLink: '',
        textVisible: false
    }
];

function sliderContent({ id, image, subheading, heading, buttonText, buttonLink, textVisible }) {
    let title = heading?.split('HAVE');
    
    return (
        <SwiperSlide key={id} className='hero-slide'>
            <Image 
                src={image?.data.attributes.url} alt='Image' 
                width={1920} 
                height={839}
                style={{objectFit: 'cover'}}
                priority={true} 
            />
            {textVisible && <div className='slider-texts hero-width w-full mx-auto flex items-center'>
                <div className={`slider-texts__content`}>
                    <p className={`font-subheading text-white font-medium mb-1 lg:mb-2 tracking-wide ${poppins.variable} font-poppins`}>{subheading}</p>
                    <p className={`font-heading text-white font-bold mt-1 mb-5 lg:mb-9 shadow-sm tracking-wide`}>{title[0]} <br /> {title[1]}</p>
                    <div className='flex gap-x-2 lg:gap-x-3'>
                        <Link
                            className='text-xs py-4 px-8 border border-gray-300 uppercase text-white font-semibold tracking-wide'
                            href={buttonLink}
                        >
                            {buttonText}
                        </Link>
                    </div>
                </div>
            </div>
            }

        </SwiperSlide>
    )
}


export default function HomeSlider({ sliderItems }) {
    return (
        <Swiper
            modules={[Navigation]}
            autoplay={true}
            navigation
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {/* <SwiperSlide className='hero-slide'>
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
            </SwiperSlide> */}
            {sliderItems?.map(({ id, image, subheading, heading, buttonText, buttonLink, textVisible }) => (
                sliderContent({ id, image, subheading, heading, buttonText, buttonLink, textVisible })
            ))}
        </Swiper>
    )
}
