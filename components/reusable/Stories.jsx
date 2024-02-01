// Import Swiper React components
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import Image from 'next/image';
import teamMemberOne from '@/data/about/team-member-1.jpg';
// import teamMemberTwo from '@/data/about/team-mermber-1.jpg';
// import teamMemberThree from '@/data/about/team-mermber-1.jpg';
import { poppins } from '@/utils/fonts';

function sliderContent({ id, quote, client_name, client_organization, client_photo, theme }) {
    return (
        <SwiperSlide key={id}>
            <div className={`py-28 ${theme === 'dark' ? 'stories-slider-bg' : 'bg-white'} `}>
                <div className='slider-texts hero-width w-full mx-auto flex justify-center items-center'>
                    <div className={`slider-texts__content text-center`}>
                        {/* <span className={`${theme === 'dark' ? 'bg-themered' : 'bg-blackshadow'} text-white py-1 px-2 inline-block uppercase font-semibold mb-2 lg:mb-3 ${poppins.variable} font-poppins`}>what people think of us</span> */}
                        <p className={`font-heading ${theme === 'dark' ? 'text-white' : ''} font-bold mt-1 mb-5 lg:mb-9 tracking-wide uppercase`}>what people think of us</p>
                        <Image src={client_photo?.data?.attributes?.url} width={client_photo?.data?.attributes?.width} height={client_photo?.data?.attributes?.height} alt='Image' className='w-[100px] h-[100px] rounded-full mx-auto' />
                        <p className={`${theme === 'dark' ? 'text-white' : ''} font-medium mt-6 mb-2 lg:mb-4 tracking-wide max-w-[70%] mx-auto`}>
                            {quote}
                        </p>
                        <p className='font-smheading text-themered mt-8 font-black'>{client_name}</p>
                        <p className={`${theme === 'dark' ? 'text-white' : ''} `}>{client_organization}</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
    )
}

export default function Stories({ theme, testimonialData }) {
    console.log("Testimonial Data", testimonialData);
    return (
        <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{
                delay: 10000,
                disableOnInteraction: true,
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            navigation
        >
            {/* <SwiperSlide className=''>
                <SliderContent theme={theme} />
            </SwiperSlide>
            <SwiperSlide className=''>
                <SliderContent theme={theme} />
            </SwiperSlide>
            <SwiperSlide className='' >
                <SliderContent theme={theme} />
            </SwiperSlide> */}
            {testimonialData?.map(({ id, quote, client_name, client_organization, client_photo }) => (
                sliderContent({ id, quote, client_name, client_organization, client_photo, theme })
            ))}
        </Swiper>
    )
}
