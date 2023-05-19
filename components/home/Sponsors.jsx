import Image from "next/image"
import sponsorOne from '@/data/sponsor-1.png'
import sponsorTwo from '@/data/sponsor-2.png'
import sponsorThree from '@/data/sponsor-3.png'
import sponsorFour from '@/data/sponsor-4.png'
import sponsorFive from '@/data/sponsor-5.png'

export default function Sponsors() {
    return (
        <div className='py-20'>
            <div className="hero-width w-full mx-auto text-center">
                <span className='inline-block text-xs bg-themeblue text-white uppercase mb-5 p-2'>FRIENDS & SPONSORS</span>
                <div className="flex space-x-4 mt-10">
                  <Image src={sponsorOne} />
                  <Image src={sponsorTwo} /> 
                  <Image src={sponsorThree} />
                  <Image src={sponsorFour} />
                  <Image src={sponsorFive} />
                </div>
            </div>
        </div>
    )
}
