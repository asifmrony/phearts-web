import Image from "next/image"
import sponsorOne from '@/data/collaborations/columbia-university-logo-noback.png'
import sponsorTwo from '@/data/collaborations/university_of_chicago_logo.jpg'
import sponsorThree from '@/data/collaborations/Bangabandhu_Sheikh_Mujib_Medical_University_logo.png'
import sponsorFour from '@/data/collaborations/icddrb_logo_transparent.png'
import sponsorFive from '@/data/collaborations/Sam_Houston_State_University_logo.png'

export default function Sponsors() {
    return (
        <div className='py-20'>
            <div className="hero-width w-full mx-auto text-center">
                <span className='inline-block text-xs bg-themeblue text-white uppercase mb-5 p-2'>OUR COLLABORATIVE PARTNERS</span>
                <div className="grid5-5 mt-10">
                  <Image src={sponsorOne} alt="Sponsor Image"  />
                  <Image src={sponsorTwo} alt="Sponsor Image"  /> 
                  <Image src={sponsorThree} alt="Sponsor Image"  />
                  <Image src={sponsorFour} alt="Sponsor Image"  />
                  <Image src={sponsorFive} alt="Sponsor Image"  />
                </div>
            </div>
        </div>
    )
}
