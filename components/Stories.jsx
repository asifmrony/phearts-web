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

function SliderContent({theme}) {
    return (
        <div className='slider-texts hero-width w-full mx-auto flex justify-center items-center'>
            <div className={`slider-texts__content text-center`}>
                <span className={`${theme === 'dark' ? 'bg-themered' : 'bg-blackshadow' } text-white py-1 px-2 inline-block uppercase font-semibold mb-2 lg:mb-3 ${poppins.variable} font-poppins`}>Story About Us</span>
                <p className={`font-heading ${theme === 'dark' ? 'text-white' : '' } font-bold mt-1 mb-5 lg:mb-9 tracking-wide uppercase`}>Rescue Stories</p>
                <Image src={teamMemberOne} alt='Image' className='w-[50px] h-[50px] rounded-full mx-auto' />
                <p className={`${theme === 'dark' ? 'text-white' : '' } font-medium mt-6 mb-2 lg:mb-4 tracking-wide max-w-[70%] mx-auto`}>
                    “I learned that men stand to gain from a violence-free environment…and
                    it inspired me to believe in myself as a man who can be a part of the solution
                    to ending violence against women in my community.”
                </p>
                <p className='font-smheading text-themered mt-8 font-black'>Helen Milton</p>
                <p className={`${theme === 'dark' ? 'text-white' : ''} `}>Refugee</p>
            </div>
        </div>
    )
}

export default function Stories({ theme }) {
    return (
        <Swiper
            modules={[Autoplay]}
            autoplay={{
                delay: 2500,
                disableOnInteraction: true,
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide className=''>
                <SliderContent theme={theme} />
            </SwiperSlide>
            <SwiperSlide className=''>
                <SliderContent theme={theme} />
            </SwiperSlide>
            <SwiperSlide className='' >
                <SliderContent theme={theme} />
            </SwiperSlide>
        </Swiper>
    )
}
