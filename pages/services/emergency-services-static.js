import { poppins } from '@/utils/fonts'
import React from 'react'

export default function entry() {
    return (
        <div className='pt-32 pb-32 single-service'>
            <div className="hero-width w-full mx-auto">
                <h1 className={`text-3xl font-semibold uppercase ${poppins.variable} font-poppins mb-16 single-service__heading`}>Emergency Services</h1>
                <p>24 hours Emergency services providing for appropriate   management of injuries and accident, First Aid, stitching of wounds, incision and drainage of abscess and other emergency conditions lead by Emergency Medical Officer.</p>
            </div>
        </div>
    )
}
