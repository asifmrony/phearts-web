import { poppins } from '@/utils/fonts'
import React from 'react'

export default function entry() {
    return (
        <div className='pt-32 pb-32 single-service'>
            <div className="hero-width w-full mx-auto">
                <h1 className={`text-3xl font-semibold uppercase ${poppins.variable} font-poppins mb-16 single-service__heading`}>Diagnostic Services</h1>
                <p>24 hours diagnostic services providing for appropriate diagnosis of diseases. In the peak hour of the day the services ongoing total of 7 hours, out of which 4 hours in the morning and 2 hours in the afternoon ( 1 hour break) for 7 days in a week. In the off peak time the services will be continue on different procedure.</p>
            </div>
        </div>
    )
}
