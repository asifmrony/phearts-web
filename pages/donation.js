import { poppins } from '@/utils/fonts'
import React from 'react'

export default function donation() {
  return (
    <div className='min-h-[100vh] bg-white flex justify-center items-center'>
        <h1 className={`text-center ${poppins.variable} font-poppins`}>
          There are a number of ways <br></br> you may land a helping hand to improve one’s healthy life.
        </h1>
    </div>
  )
}
