import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaTwitter } from 'react-icons/fa'
import { GrLocation, GrMailOption, GrPhone } from 'react-icons/gr'

export default function Footer() {

    return (
        <div>
            <div className='bg-[#1A252E]'>
                <div className='c-width w-full mx-auto px-5 lg:px-0 py-12 lg:py-20 flex flex-col lg:flex-row gap-y-6 lg:gap-x-10 text-sm'>
                    <div className='flex-1'>
                        <h2 className='font-bold uppercase text-lg text-white'>About Us</h2>
                        <p className='text-blackshadow my-5'>Committed to improving the lives of people who are less privileged in Bangladesh</p>
                        <div className='space-y-2'>
                            <p className='flex space-x-3 items-center'>
                                <GrLocation className='footer-icon' />
                                <span className='text-blackshadow'>New Model Town, Araihazar Sadar, Araihazar, Narayanganj.</span>
                            </p>
                            <p className='flex space-x-3 items-center'>
                                <GrMailOption className='footer-icon' />
                                <span className='text-blackshadow'>phearts.org@gmail.com</span>
                            </p>
                            <p className='flex space-x-3 items-center'>
                                <GrPhone className='footer-icon' />
                                <span className='text-blackshadow'>+88 0177-9880862</span>
                            </p>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <h2 className='font-bold uppercase text-lg text-white'>What we do</h2>
                        <nav>
                            <ul className='text-blackshadow space-y-2  mt-5'>
                                <li>
                                    <Link href='/services/phearts-clinic' className='underline'>Phearts Clinic</Link>
                                </li>
                                <li>
                                    <Link href='/services/ipd-services' className='underline'>IPD Services</Link>
                                </li>
                                <li>
                                    <Link href='/services/emergency-services' className='underline'>Emergency Services</Link>
                                </li>
                                <li>
                                    <Link href='/services/diagnostic-services' className='underline'>Diagnostic Services</Link>
                                </li>
                                <li>
                                    <Link href='/services/pharmacy' className='underline'>Pharmacy</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className='flex-1'>
                        <h2 className='font-bold uppercase text-lg text-white'>Latest News</h2>
                        <nav>
                            <ul className='text-blackshadow space-y-2 text-blue-600 mt-5'>
                                <li>
                                    <Link href='/news'>Choosing Among Bad Options in Dadaab Refugee</Link>
                                </li>
                                <li>
                                    <Link href='/news'>Preparing to help American Refugees</Link>
                                </li>
                                <li>
                                    <Link href='/news'>Burundian Refugees in the DR congo</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className='bg-themeblue'>
                <div className='c-width w-full mx-auto px-5 lg:px-0 py-5 flex flex-col lg:flex-row gap-y-5 justify-between text-sm'>
                    <Link href='https://codesmithtech.com' target='_blank' className='text-[#8896A0]'>CodeSmith Tech © 2023 / All Rights Reserved</Link>
                    <div className="flex space-x-3 text-[#8896A0]">
                        <Link
                            href="https://www.facebook.com/phearts.arsenic"
                            className="transition ease-in-out delay-150 duration-300 hover:scale-150 hover:-translate-y-1"
                            target="_blank"
                        ><FaFacebookF className='footer-icon' /></Link>
                        <Link href="https://www.linkedin.com/in/phearts-clinic-3356952a3/" 
                            className="transition ease-in-out delay-150 duration-300 hover:scale-150 hover:-translate-y-1"
                            target="_blank"
                        ><FaLinkedinIn /></Link>
                        <Link href="https://www.instagram.com/phearts.arsenic" 
                            className="transition ease-in-out delay-150 duration-300 hover:scale-150 hover:-translate-y-1"
                            target="_blank"
                        ><FaInstagram /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
