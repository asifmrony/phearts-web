import Image from "next/image";
import pheartsLogo from '@/assets/phearts_logo.png';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaTwitter } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";
import NavigationDesktop from "./NavigationDesktop";
import navLinksData from '../../data/data.json'
import { poppins } from "@/utils/fonts";

export default function Header() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(null);
    console.log(scrollPosition);

    useEffect(() => {
        const handlePosition = () => {
            setScrollPosition(window.scrollY);
        }
        handlePosition();

        window.addEventListener("scroll", handlePosition);
        return () => {
            window.removeEventListener("scroll", handlePosition);
        }
    }, [])

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

                <div className={`w-full flex justify-between items-center bg-white px-5 py-4 ${scrollPosition >= 180 ? 'lg:fixed top-0 left-15 shadow-lg max-w-[1140px] z-20' : 'lg:absolute z-10 lg:-bottom-14'} `}>
                    <Image src={pheartsLogo} alt="Logo" />
                    {/* Mobile Menu toggle */}
                    <button
                        className="md:hidden absolute right-16"
                        onClick={() => setMobileMenu(!mobileMenu)}
                    >
                        <RxHamburgerMenu />
                    </button>
                    <div className={`${mobileMenu ? 'hidden' : 'block'} md:block`}>
                        <NavigationDesktop navLinksData={navLinksData} />
                    </div>
                </div>
            </div>
        </div>
    )
}
