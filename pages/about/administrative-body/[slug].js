import PageHeader from '@/components/reusable/PageHeader'
import { poppins, poppinsBold } from '@/utils/fonts';

export const getStaticPaths = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/administrative-bodies`);
    const allGovernanceBodies = await res.json();

    const paths = allGovernanceBodies?.data?.map((body) => ({
        params: { slug: body.id.toString() }
    }))

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = async ({ params }) => {
    const path = params.slug;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/administrative-bodies/${path}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        }
    });
    const adminBody = await res.json();
    return {
        props: { adminBody }
    }
}

export default function single({ adminBody }) {

    return (
        <main className='page-about-single'>
            <PageHeader title={adminBody?.data?.attributes?.name} subtitle={'About / Administrative body'} background={'transparent'} />
            <div className='pb-48 bg-white text-black'>
                <div className='hero-width w-full mx-auto text-center'>
                    <p className={`${poppins.variable} font-poppins`}>{adminBody?.data?.attributes?.bio}</p>
                </div>
            </div>
        </main>
    )
}
