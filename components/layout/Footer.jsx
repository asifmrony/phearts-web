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
                        {/* <h2 className='font-bold uppercase text-lg text-white'>Find Us</h2> */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.79721063551!2d90.65441277362585!3d23.79023458724919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37543538ab43cf59%3A0xd95b1f25762596ed!2z4Kaq4Kaq4KeB4Kay4KeH4Ka24KaoIOCmueCnh-CmsuCmpSDgprDgpr_gprjgpr7gprDgp43gppog4KaP4Kao4KeN4KahIOCmn-CnjeCmsOCnh-CmqOCmv-CmgiDgprjgp4vgprjgpr7gpofgpp_gpr8gUG9wdWxhdGlvbiBIZWFsdGggUmVzZWFyY2ggYW5kIFRyYWluaW5nIFNvY2lldHk!5e0!3m2!1sen!2sbd!4v1708337963524!5m2!1sen!2sbd"
                            width="353"
                            height="204"
                            style={{ border: '0' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            <div className='bg-themeblue'>
                <div className='c-width w-full mx-auto px-5 lg:px-0 py-5 flex flex-col lg:flex-row gap-y-5 justify-between text-sm'>
                    <Link href='https://codesmithtech.com' target='_blank' className='text-[#8896A0]'>Developed by CodeSmith Tech © 2024 / All Rights Reserved</Link>
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
