import { poppins } from '@/utils/fonts'
import React from 'react'

export default function entry() {
    return (
        <div className='pt-32 pb-32 single-service'>
            <div className="hero-width w-full mx-auto">
                <h1 className={`text-3xl font-semibold uppercase ${poppins.variable} font-poppins mb-16 single-service__heading`}>Ipd Services</h1>
                <p>In-patient center   provide 24 hours wide range of curative care services including delivery care, post abortion care,
                     immediate newborn care, communicable disease management and non-communicable disease management etc. The full time Residential
                      medical officer is responsible for day to day admission, follow up and referral, discharge of the patient.</p>
            </div>
        </div>
    )
}
