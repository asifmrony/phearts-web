import Gallery from '@/components/reusable/Gallery'
import React from 'react'

export default function galleries(allAlbums) {
  const descendingSortAlbums = allAlbums?.data?.sort((a, b) => b.id - a.id);;
  return (
    <div>
        <Gallery albumsData={descendingSortAlbums} renderType='grid' />
    </div>
  )
}

export const getStaticProps = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/gallery-albums?populate=*`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        // 'Authorization': token
      }
    });
    const allAlbums = await res.json();
    return {
      props: allAlbums,
      revalidate: 60
    }
  }
  