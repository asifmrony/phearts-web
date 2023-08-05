import { poppins } from '@/utils/fonts'
import React from 'react'

export default function entry() {
    return (
        <div className='pt-32 pb-32 single-service'>
            <div className="hero-width w-full mx-auto">
                <h1 className={`text-3xl font-semibold uppercase ${poppins.variable} font-poppins mb-16 single-service__heading`}>Departments under Phearts Clinic</h1>
                <div className="flex flex-wrap gap-x-2 gap-y-8 text-center">
                    <div className='basis-[24%] rounded-md shadow-sm border border-gray-400'>
                        <div className='single-service__image-box rounded-tl-md rounded-tr-md'>
                            <h4 className='text-lg font-semibold leading-tight text-white single-service__title'>General Medicine</h4>
                        </div>
                        <p className='text-sm mt-2 pt-2 pb-6 px-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, illo.</p>
                    </div>
                    <div className='basis-[24%] rounded-md shadow-sm border border-gray-400'>
                        <div className='single-service__image-box rounded-tl-md rounded-tr-md'>
                            <h4 className='text-lg font-semibold leading-tight text-white single-service__title'>Gynae and Obs</h4>
                        </div>
                        <p className='text-sm mt-2 pt-2 pb-6 px-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, illo.</p>
                    </div>
                    <div className='basis-[24%] rounded-md shadow-sm border border-gray-400'>
                        <div className='single-service__image-box rounded-tl-md rounded-tr-md'>
                            <h4 className='text-lg font-semibold leading-tight text-white single-service__title'>Eye</h4>
                        </div>
                        <p className='text-sm mt-2 pt-2 pb-6 px-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, illo.</p>
                    </div>
                    <div className='basis-[24%] rounded-md shadow-sm border border-gray-400'>
                        <div className='single-service__image-box rounded-tl-md rounded-tr-md'>
                            <h4 className='text-lg font-semibold leading-tight text-white single-service__title'>Dental</h4>
                        </div>
                        <p className='text-sm mt-2 pt-2 pb-6 px-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, illo.</p>
                    </div>
                    <div className='basis-[15%]'></div>
                    <div className='basis-[24%] rounded-md shadow-sm border border-gray-400'>
                        <div className='single-service__image-box rounded-tl-md rounded-tr-md'>
                            <h4 className='text-lg font-semibold leading-tight text-white single-service__title'>Physiotherapy</h4>
                        </div>
                        <p className='text-sm mt-2 pt-2 pb-6 px-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, illo.</p>
                    </div>
                    <div className='basis-[24%] rounded-md shadow-sm border border-gray-400'>
                        <div className='single-service__image-box rounded-tl-md rounded-tr-md'>
                            <h4 className='text-lg font-semibold leading-tight text-white single-service__title'>Pediatrics</h4>
                        </div>
                        <p className='text-sm mt-2 pt-2 pb-6 px-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, illo.</p>
                    </div>
                    <div className='basis-[24%] rounded-md shadow-sm border border-gray-400'>
                        <div className='single-service__image-box rounded-tl-md rounded-tr-md'>
                            <h4 className='text-lg font-semibold leading-tight text-white single-service__title'>Orthopadics</h4>
                        </div>
                        <p className='text-sm mt-2 pt-2 pb-6 px-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, illo.</p>
                    </div>
                    <div className='basis-[17%]'></div>
                </div>
            </div>
        </div>
    )
}
