import { poppins } from '@/utils/fonts'
import React from 'react'

export default function entry() {
    return (
        <div className='pt-32 pb-32 single-service'>
            <div className="hero-width w-full mx-auto">
                <h1 className={`text-3xl font-semibold uppercase ${poppins.variable} font-poppins mb-16 single-service__heading`}>Pharmacy</h1>
                <p>24 hours pharmacy  will be opened for the patient and community. We procure medicine directly from the top manufacturers approved by the Directorate General of Drug Administration (DGDA). Our certified and highly trained pharmacists can answer any questions regarding the medicines, including dosage, possible side effects.</p>
            </div>
        </div>
    )
}
