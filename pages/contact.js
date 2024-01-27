import PageHeader from '@/components/reusable/PageHeader'
import { poppins } from '@/utils/fonts'
import React from 'react'
import ReactMarkdown from 'react-markdown'

export default function contact(contactDetails) {
  console.log("Contact Details", contactDetails?.data.attributes.biodata);
  const { biodata } = contactDetails?.data.attributes;

  return (
    <main className='page-contact'>
      <PageHeader title={'Contact Info'} subtitle={''} background={'transparent'} />
      <div className='pt-20 pb-36 bg-white px-4 sm:px-0'>
        <div className='hero-width w-full mx-auto flex'>
          <div>
            <div className={`${poppins.variable} font-poppins biodata-block`}>
              <ReactMarkdown>{biodata}</ReactMarkdown>
              {/* {biodata} */}
            </div>
          </div>
        </div>
        <div className='hero-width w-full mx-auto mt-10'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233786.46128729745!2d90.42124541569343!3d23.71478433637573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375435b5f80700fb%3A0x156557cd5a014afc!2sAraihazar%20New%20Model%20Town!5e0!3m2!1sen!2sbd!4v1706380416760!5m2!1sen!2sbd"
            width="900"
            height="450"
            style={{ border: '0' }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </main>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/contact-info`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      // 'Authorization': token
    }
  });
  const contactDetails = await res.json();
  return {
    props: contactDetails
  }
}

