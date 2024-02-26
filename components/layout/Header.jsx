import Image from "next/image";
import pheartsLogo from '@/assets/phearts_logo.png';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaFacebookF, FaInstagram, FaInstagramSquare, FaLinkedinIn, FaPinterestP, FaTwitter } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";
import NavigationDesktop from "./NavigationDesktop";
import navLinksData from '../../data/data.json'
import { poppins } from "@/utils/fonts";

export default function Header() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(null);

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
                    <div className={`flex text-sm space-x-6 ${poppins.variable} font-poppins`}>
                        <p><strong>Location:</strong> New Model Town, Araihazar Sadar, Narayanganj.</p>
                        <p><strong>Phone:</strong> +88 0177-9880862</p>
                        <p><strong>Email:</strong><Link href='mailto:phearts.org@gmail.com'> phearts.org@gmail.com</Link></p>
                    </div>
                    <div className="flex space-x-1">
                        <a
                            href="https://www.facebook.com/phearts.arsenic"
                            className="p-3 bg-themegreen"
                            target="_blank"
                        ><FaFacebookF /></a>
                        <a href="https://www.linkedin.com/in/phearts-clinic-3356952a3/" 
                            className="p-3 bg-themegreen"
                            target="_blank"
                        ><FaLinkedinIn /></a>
                        <a href="https://www.instagram.com/phearts.arsenic" 
                            className="p-3 bg-themegreen"
                            target="_blank"
                        ><FaInstagram /></a>
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
