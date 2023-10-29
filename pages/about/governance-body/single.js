import PageHeader from '@/components/reusable/PageHeader'
import { poppins, poppinsBold } from '@/utils/fonts';

export default function single() {
    return (
        <main className='page-about-single'>
            <PageHeader title={'Md. Zahangir Alam'} subtitle={'About / Governance body'} background={'transparent'} />
            <div className='pb-48 bg-white'>
                <div className='hero-width w-full mx-auto text-center'>
                    <p className={`${poppins.variable} font-poppins`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore harum at sequi sunt soluta ducimus esse libero dolorum beatae similique vitae consequatur, porro saepe! Consectetur ab vel iusto! Ut, in.</p>
                </div>
            </div>
        </main>
    )
}
