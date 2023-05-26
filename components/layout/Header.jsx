import Image from "next/image";
import pheartsLogo from '@/assets/phearts_logo.png';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaTwitter } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [mobileMenu, setMobileMenu] = useState(false);

    return (
        <div className="lg:bg-themeblue w-full">
            <div className="w-full c-width mx-auto relative lg:pb-[4.5rem]">
                <div className="hidden lg:flex justify-between items-center px-4 text-white">
                    <div className="flex text-sm space-x-6">
                        <p><strong>Location:</strong> Street Name, UK, London</p>
                        <p><strong>Phone:</strong> 123- 456-7890</p>
                        <p><strong>Email:</strong> admin@youdomain.com</p>
                    </div>
                    <div className="flex space-x-1">
                        <a
                            href="facebook.com"
                            className="p-3 bg-themegreen"
                        ><FaFacebookF /></a>
                        <a href="linkedin.com" className="p-3 bg-themegreen"><FaLinkedinIn /></a>
                        <a href="pinterest.com" className="p-3 bg-themegreen"><FaPinterestP /></a>
                        <a href="twitter.com" className="p-3 bg-themegreen"><FaTwitter /></a>
                    </div>
                </div>

                <div className="w-full flex justify-between items-center bg-white px-5 py-4 lg:absolute z-10 lg:-bottom-14">
                    <Image src={pheartsLogo} alt="Logo" />
                    {/* Mobile Menu toggle */}
                    <button
                        className="lg:hidden"
                        onClick={() => setMobileMenu(!mobileMenu)}
                    >
                        <RxHamburgerMenu />
                    </button>
                    {/* Desktop Menu */}
                    <nav className="hidden lg:block">
                        <ul className="flex space-x-4 items-center text-lg">
                            <li className="px-2 py-1">
                                <Link href="/">
                                    Home
                                </Link>
                            </li>
                            <li className="px-2 py-1">
                                <Link href="/about">
                                    About
                                </Link>
                            </li>
                            <li className="px-2 py-1">
                                <Link href="/services">
                                    Services
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* Mobile Menu */}
                {mobileMenu && <div className="animate-slideIn flex flex-col w-full c-width mx-auto bg-white mt-2 space-y-1">
                    <ul className="last: pb-2 first:pt-2">
                        <li className="px-4 py-1">
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li className="px-4 py-1">
                            <Link href="/about">
                                About
                            </Link>
                        </li>
                        <li className="px-4 py-1">
                            <Link href="/services">
                                Services
                            </Link>
                        </li>
                    </ul>
                </div>}
            </div>
        </div>
    )
}
