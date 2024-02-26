import PageHeader from '@/components/reusable/PageHeader'
import { poppins, poppinsBold } from '@/utils/fonts';

export const getStaticPaths = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/governance-bodies`);
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/governance-bodies/${path}?populate=*`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        }
    });
    const gBody = await res.json();
    return {
        props: { gBody }
    }
}

export default function single({ gBody }) {
    console.log("governance body details", gBody);

    return (
        <main className='page-about-single'>
            {/* <PageHeader title={gBody?.data?.attributes?.name} subtitle={''} background={'transparent'} /> */}
            <div className='text-center py-32 governance-body__header' style={{ backgroundImage: `url(${gBody?.data?.attributes?.photo?.data?.attributes?.url})` }}>
            </div>
            <div className='pb-48 pt-8'>
                <div className='hero-width w-full mx-auto text-center'>
                    <h2 className='font-heading uppercase mb-4'>{gBody?.data?.attributes?.name}</h2>
                    <p className={`${poppins.variable} font-poppins`}>{gBody?.data?.attributes?.bio}</p>
                </div>
            </div>
        </main>
    )
}
