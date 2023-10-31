import PageHeader from '@/components/reusable/PageHeader'
import Image from 'next/image'
import { poppins, poppinsBold } from '@/utils/fonts'
import glImage1 from '@/data/gallery/gallery-image-1.jpg'
import glImage2 from '@/data/gallery/gallery-image-2.jpg'
import glImage3 from '@/data/gallery/gallery-image-3.jpg'

export default function single() {
    return (
        <main className='page-gallery-single'>
            <PageHeader title={'Our Gallery'} subtitle={''} background={'transparent'} />
            <div className='pb-48 bg-white'>
                <div className='hero-width w-full mx-auto text-center flex flex-col space-y-4'>
                    <p className={`${poppins.variable} font-poppins hidden`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore harum at sequi sunt soluta ducimus esse libero dolorum beatae similique vitae consequatur, porro saepe! Consectetur ab vel iusto! Ut, in.</p>
                    <Image src={glImage1} alt='Gallery Image' />
                    <Image src={glImage2} alt='Gallery Image' />
                    <Image src={glImage3} alt='Gallery Image' />
                </div>
            </div>
        </main>
    )
}
