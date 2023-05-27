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
                        <p className='text-blackshadow my-5'>Cum sociis natoque penatibus et magnis
                            dis parturient ntesmus. Proin vel nibh et
                            elit mollis commodo et nec augue</p>
                        <div className='space-y-2'>
                            <p className='flex space-x-3 items-center'>
                                <GrLocation className='footer-icon' />
                                <span className='text-blackshadow'>Brooklyn, NY 10036, United States</span>
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
                            <ul className='text-blackshadow space-y-2 divide-y divide-blackshadow mt-5'>
                                <li>Education</li>
                                <li>Health</li>
                                <li>Social Services</li>
                                <li>Microfinance</li>
                                <li>Emergency Response</li>
                            </ul>
                        </nav>
                    </div>
                    <div className='flex-1'>
                        <h2 className='font-bold uppercase text-lg text-white'>NEWSROOM</h2>
                        <nav>
                            <ul className='text-blackshadow space-y-2 divide-y divide-blackshadow mt-5'>
                                <li>Education</li>
                                <li>Health</li>
                                <li>Social Services</li>
                                <li>Microfinance</li>
                                <li>Emergency Response</li>
                            </ul>
                        </nav>
                    </div>
                    <div className='flex-1'>
                        <h2 className='font-bold uppercase text-lg text-white'>Notice Board</h2>
                        <nav>
                            <ul className='text-blackshadow space-y-2  mt-5'>
                                <li>Everything happening arround us very cumbersome</li>
                                <li>Everything happening arround us very cumbersome</li>
                                <li>Everything happening arround us very cumbersome</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className='bg-themeblue'>
                <div className='c-width w-full mx-auto px-5 lg:px-0 py-5 flex flex-col lg:flex-row gap-y-5 justify-between text-sm'>
                    <p className='text-[#8896A0]'>Privacy Policy / This is a sample website - cmsmasters © 2022 / All Rights Reserved</p>
                    <div className="flex space-x-3 text-[#8896A0]">
                        <Link
                            href="https://facebook.com"
                            className=""
                        ><FaFacebookF className='footer-icon' /></Link>
                        <Link href="https://linkedin.com" className=""><FaLinkedinIn /></Link>
                        <Link href="https://pinterest.com" className=""><FaPinterestP /></Link>
                        <Link href="https://twitter.com" className=""><FaTwitter /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
