import PageHeader from '@/components/reusable/PageHeader'
import React from 'react'

export default function single() {
  return (
    <main className='page-jobs-single'>
      <PageHeader title={'Communications Officer'} subtitle={'Jobs / opening jobs'} background={'transparent'} />
      <div className='pb-48 bg-white'>
        <div className='hero-width w-full mx-auto text-center'>
          <div>
            <h2 className='text-2xl font-bold mb-4 text-left'>Principal Accountabilities</h2>
            <ul className='list-disc text-left'>
              <li>Develop and implement effective communications activities for external customers and stakeholders.</li>
              <li>Write and optimise content for the website, digital newsletters, print publications and social networking sites.</li>
              <li>Ensure consistency in terms of voice, branding, messaging and frequency of posting via digital channels.</li>
              <li>Handle media enquiries and create effective news releases to gain positive press coverage</li>
              <li>Develop and deliver well-executed and effective campaigns</li>
              <li>To develop working relationships with key internal and external stakeholders and partners.</li>
            </ul>
          </div>
          <div className='mt-8'>
            <h2 className='text-2xl font-bold mb-4 text-left'>Skills, Knowledge and Experience</h2>
            <ul className='list-disc text-left'>
              <li>Experience of handling complex communications campaigns.</li>
              <li>Wide breadth of multi-channel communications</li>
              <li>Experience of producing a range of marketing materials</li>
              <li>Relevant degree of equivalent experience</li>
              <li>A capable organiser, used to meeting deadlines</li>
              <li>Excellent communications skills, both written and verbal</li>
              <li>Ability to work as part of a team</li>
              <li>Knowledge and a good understanding of Microsoft Office</li>
            </ul>
          </div>
          <div className='mt-12'>
            <p>If reading this excites you, Send your CV to info@phearts.com</p>
            <p>Please write subject line as “Communications Officer” and send your updated CV with a portfolio and a cover letter.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
