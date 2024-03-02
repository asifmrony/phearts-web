import * as React from "react";
import PageHeader from '@/components/reusable/PageHeader'
import Image from 'next/image'
import { poppins, poppinsBold } from '@/utils/fonts'
import glImage1 from '@/data/gallery/gallery-image-1.jpg'
import glImage2 from '@/data/gallery/gallery-image-2.jpg'
import glImage3 from '@/data/gallery/gallery-image-3.jpg'

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import NextJsImage from '@/components/NextJsImage';

export const getStaticPaths = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/gallery-albums`);
    const albums = await res.json();

    const paths = albums?.data?.map((album) => ({
        params: { slug: album.id.toString() },
    }))

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = async ({ params }) => {
    const path = params.slug;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/gallery-albums/${path}?populate=*`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        }
    });
    const album = await res.json();
    return {
        props: { album }
    }
}

export default function Single({ album }) {
    console.log("Album Info", album);
    // const { title, images } = album?.data?.attributes;
    const images = album?.data?.attributes?.images;

    const [index, setIndex] = React.useState(-1);
    const slides = images?.data?.map((item) => ({ src: item?.attributes?.url, width: item?.attributes?.width, height: item?.attributes?.height }))

    return (
        <main className='page-gallery-single'>
            <PageHeader title={`${album?.data?.attributes?.title}`} subtitle={''} background={'transparent'} />
            <div className='pb-48 bg-white'>
                <div className='hero-width w-full mx-auto text-center flex flex-col space-y-4'>
                    <p className={`${poppins.variable} font-poppins hidden`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore harum at sequi sunt soluta ducimus esse libero dolorum beatae similique vitae consequatur, porro saepe! Consectetur ab vel iusto! Ut, in.</p>
                    <div className='gallery'>
                        {images?.data?.map((item, index) => (
                            <Image src={item?.attributes?.url} onClick={() => setIndex(index)} className='gallery__img cursor-pointer' width={item?.attributes?.width} height={item?.attributes?.height} alt='Gallery Image' key={item?.id} />
                        ))}
                    </div>
                    {/* <Image src={glImage1} alt='Gallery Image' />
                    <Image src={glImage2} alt='Gallery Image' />
                    <Image src={glImage3} alt='Gallery Image' /> */}
                    
                    <Lightbox
                        index={index}
                        open={index >= 0}
                        close={() => setIndex(-1)}
                        slides={slides}
                        render={{ slide: NextJsImage, thumbnail: NextJsImage }}
                        plugins={[Thumbnails]}
                    />
                </div>
            </div>
        </main>
    )
}
