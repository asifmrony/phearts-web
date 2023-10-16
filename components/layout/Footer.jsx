import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaTwitter } from 'react-icons/fa'
import { GrLocation, GrMailOption, GrPhone } from 'react-icons/gr'

export default function Footer() {

    return (
        <div>
            <div className='bg-[#1A252E]'>
                <div className='c-width w-full mx-auto px-5 lg:px-0 py-12 lg:py-20 flex flex-col lg:flex-row gap-y-6 lg:gap-x-10 text-sm'>
                    <div className='flex-1'>
                        <h2 className='font-bold uppercase text-lg text-white'>About Us</h2>
                        <p className='text-blackshadow my-5'>committed to improving the lives of people who are less privileged in Bangladesh</p>
                        <div className='space-y-2'>
                            <p className='flex space-x-3 items-center'>
                                <GrLocation className='footer-icon' />
                                <span className='text-blackshadow'>Araihazar, Narayanganj</span>
                            </p>
                            <p className='flex space-x-3 items-center'>
                                <GrMailOption className='footer-icon' />
                                <span className='text-blackshadow'>example@example.com</span>
                            </p>
                            <p className='flex space-x-3 items-center'>
                                <GrPhone className='footer-icon' />
                                <span className='text-blackshadow'>Call Us: 1-800-123-1234</span>
                            </p>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <h2 className='font-bold uppercase text-lg text-white'>What we do</h2>
                        <nav>
                            <ul className='text-blackshadow space-y-2  mt-5'>
                                <li>
                                    <Link href='/blog/entry' className='underline'>Phearts Clinic</Link>
                                </li>
                                <li>
                                    <Link href='/blog/entry' className='underline'>IPD Services</Link>
                                </li>
                                <li>Emergency Services</li>
                                <li>Diagnostic Services</li>
                                <li>Pharmacy</li>
                            </ul>
                        </nav>
                    </div>

                    <div className='flex-1'>
                        <h2 className='font-bold uppercase text-lg text-white'>Latest News</h2>
                        <nav>
                            <ul className='text-blackshadow space-y-2 text-blue-600 mt-5'>
                                <li>
                                    <Link href='/blog/entry'>Choosing Among Bad Options in Dadaab Refugee</Link>
                                </li>
                                <li>
                                    <Link href='/blog/entry'>Preparing to help American Refugees</Link>
                                </li>
                                <li>
                                    <Link href='/blog/entry'>Burundian Refugees in the DR congo</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className='bg-themeblue'>
                <div className='c-width w-full mx-auto px-5 lg:px-0 py-5 flex flex-col lg:flex-row gap-y-5 justify-between text-sm'>
                    <p className='text-[#8896A0]'>CodeSmith Tech © 2023 / All Rights Reserved</p>
                    <div className="flex space-x-3 text-[#8896A0]">
                        <Link
                            href="https://facebook.com"
                            className=""
                        ><FaFacebookF className='footer-icon' /></Link>

                    </div>
                </div>
            </div>
        </div>
    )
}
