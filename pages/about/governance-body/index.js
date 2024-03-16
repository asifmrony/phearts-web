import Image from 'next/image';
import Link from 'next/link';
import teamMemberOne from '@/data/about/team-member-1.jpg'
import teamMemberTwo from '@/data/about/team-member-2.jpg'
import teamMemberThree from '@/data/about/team-member-3.jpg'
import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaTwitter } from 'react-icons/fa'
import { poppins, poppinsBold } from '@/utils/fonts';
import PageHeader from '@/components/reusable/PageHeader';

export default function governance_body(governanceBodies) {
    const gravatar = "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon&f=y";
    return (
        <main className='page-about'>
            <PageHeader title={'About Us'} subtitle={'We are Delighted to Share'} background={'blue'} />

            {/* Our Board */}
            <div className='pt-12 md:pt-24 pb-14 bg-white'>
                <div className='hero-width w-full mx-auto text-center'>
                    <span className={`inline-block text-xs bg-themegreen text-white uppercase mb-5 p-2 ${poppins.variable} font-poppins`}>Masterminds behind everything</span>
                    <h2 className='font-heading text-center uppercase mb-12 md:mb-24'>Governance Body</h2>
                    {/* TOp Row */}
                    {
                        governanceBodies?.data.map(item => {
                            const { name, designation, association, degrees, bio, photo } = item.attributes
                            if (association == 'chairman') {
                                return (
                                    <div key={item.id} className='flex flex-wrap gap-x-5 gap-y-10'>
                                        <div className='text-center basis-[100%] md:basis-[15%] lg:basis-[31%]'></div>
                                        <div className='text-center basis-[100%] md:basis-[60%] lg:basis-[31%] px-4 md:px-0'>
                                            <Image src={photo.data.attributes.url} alt='Image' width={200} height={200} className='mx-auto h-[200px] w-[200px] rounded-full' />
                                            <p className='text-sm text-blackshadow mt-6'>{designation}</p>
                                            <h3 className='font-subheading text-themered font-bold'>{name}</h3>
                                            <p className='mt-1 font-bold text-sm'>{degrees}</p>
                                            <p className='text-sm text-blackshadow leading-wider mt-5 mb-6'>{bio.substring(0, 200)}</p>
                                            <Link className='text-sm text-themeblue font-semibold leading-wider inline-block mb-6' href={`/about/governance-body/${item.id}`}>Learn more &rarr;</Link>
                                            {/* <div className="flex justify-center space-x-3 text-[#8896A0]">
                                                    <Link
                                                        href="https://facebook.com"
                                                        className=""
                                                    ><FaFacebookF className='footer-icon' /></Link>
                                                    <Link href="https://linkedin.com" className=""><FaLinkedinIn /></Link>
                                                    <Link href="https://pinterest.com" className=""><FaPinterestP /></Link>
                                                    <Link href="https://twitter.com" className=""><FaTwitter /></Link>
                                                </div> */}
                                        </div>
                                        <div className='text-center basis-[100%] md:basis-[15%] lg:basis-[31%]'></div>
                                    </div>
                                )
                            }
                        })
                    }
                    {/* Second Row */}
                    {
                        governanceBodies?.data.map(item => {
                            const { name, designation, association, degrees, bio, photo } = item.attributes
                            if (association == 'vice-chairman') {
                                return (
                                    <div key={item.id} className='md:mt-10 lg:mt-20 flex flex-wrap gap-x-5 gap-y-10'>
                                        <div className='text-center basis-[100%] md:basis-[15%] lg:basis-[31%]'></div>
                                        <div className='text-center basis-[100%] md:basis-[60%] lg:basis-[31%] px-4 md:px-0'>
                                            <Image src={photo.data.attributes.url} alt='Image' width={200} height={200} className='mx-auto h-[200px] w-[200px] rounded-full' />
                                            <p className='text-sm text-blackshadow mt-6'>{designation}</p>
                                            <h3 className='font-subheading text-themered font-bold'>{name}</h3>
                                            <p className='mt-1 font-bold text-sm'>{degrees}</p>
                                            <p className='text-sm text-blackshadow leading-wider mt-5 mb-6'>{bio.substring(0, 200)}</p>
                                            <Link className='text-sm text-themeblue font-semibold leading-wider inline-block mb-6' href={`/about/governance-body/${item.id}`}>Learn more &rarr;</Link>
                                        </div>
                                        <div className='text-center basis-[100%] md:basis-[15%] lg:basis-[31%]'></div>
                                    </div>
                                )
                            }
                        })
                    }
                    {/* Third row */}
                    <div className='md:mt-10 lg:mt-20 flex flex-wrap md:justify-center lg:justify-normal gap-x-5 gap-y-10'>
                        {
                            governanceBodies?.data.map(item => {
                                const { name, designation, association, degrees, bio, photo } = item.attributes
                                if (association == 'member' || association == 'executive-member') {
                                    return (
                                        <div key={item.id} className='text-center basis-[100%] md:basis-[60%] lg:basis-[31%] px-4 md:px-0'>
                                            <Image src={photo.data.attributes.url} alt='Image' width={200} height={200} className='mx-auto h-[200px] w-[200px] rounded-full' />
                                            <p className='text-sm text-blackshadow mt-6'>{designation}</p>
                                            <h3 className='font-subheading text-themered font-bold'>{name}</h3>
                                            <p className='mt-1 font-bold text-sm'>{degrees}</p>
                                            <p className='text-sm text-blackshadow leading-wider mt-5 mb-6'>{bio.substring(0, 140)}</p>
                                            <Link className='text-sm text-themeblue font-semibold leading-wider inline-block mb-6' href={`/about/governance-body/${item.id}`}>Learn more &rarr;</Link>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                    {/* Fourth Row */}
                    {
                        governanceBodies?.data.map(item => {
                            const { name, designation, association, degrees, bio, photo } = item.attributes
                            if (association == 'treasurer') {
                                return (
                                    <div key={item.id} className='md:mt-10 lg:mt-20 flex flex-wrap gap-x-5 gap-y-10'>
                                        <div className='text-center basis-[100%] md:basis-[15%] lg:basis-[31%]'></div>
                                        <div className='text-center basis-[100%] md:basis-[60%] lg:basis-[31%] px-4 md:px-0'>
                                            <Image src={photo.data.attributes.url} alt='Image' width={200} height={200} className='mx-auto h-[200px] w-[200px] rounded-full' />
                                            <p className='text-sm text-blackshadow mt-6'>{designation}</p>
                                            <h3 className='font-subheading text-themered font-bold'>{name}</h3>
                                            <p className='mt-1 font-bold text-sm'>{degrees}</p>
                                            <p className='text-sm text-blackshadow leading-wider mt-5 mb-6'>{bio.substring(0, 140)}</p>
                                            <Link className='text-sm text-themeblue font-semibold leading-wider inline-block mb-6' href={`/about/governance-body/${item.id}`}>Learn more &rarr;</Link>
                                            {/* <div className="flex justify-center space-x-3 text-[#8896A0]">
                                                <Link
                                                    href="https://facebook.com"
                                                    className=""
                                                ><FaFacebookF className='footer-icon' /></Link>
                                                <Link href="https://linkedin.com" className=""><FaLinkedinIn /></Link>
                                                <Link href="https://pinterest.com" className=""><FaPinterestP /></Link>
                                                <Link href="https://twitter.com" className=""><FaTwitter /></Link>
                                            </div> */}
                                        </div>
                                        <div className='text-center basis-[100%] md:basis-[15%] lg:basis-[31%]'></div>
                                    </div>
                                )
                            }
                        })
                    }

                    {/* Fifth Row */}
                    {
                        governanceBodies?.data.map(item => {
                            const { name, designation, association, degrees, bio, photo } = item.attributes
                            if (association == 'general-secretary') { 
                                return (
                                    <div key={item.id} className='md:mt-10 lg:mt-20 flex flex-wrap gap-x-5 gap-y-10'>
                                        <div className='text-center basis-[100%] md:basis-[15%] lg:basis-[31%]'></div>
                                        <div className='text-center basis-[100%] md:basis-[60%] lg:basis-[31%] px-4 md:px-0'>
                                            <Image src={photo.data.attributes.url} alt='Image' width={200} height={200} className='mx-auto h-[200px] w-[200px] rounded-full' />
                                            <p className='text-sm text-blackshadow mt-6'>{designation}</p>
                                            <h3 className='font-subheading text-themered font-bold'>{name}</h3>
                                            <p className='mt-1 font-bold text-sm'>{degrees}</p>
                                            <p className='text-sm text-blackshadow leading-wider mt-5 mb-6'>{bio.substring(0, 140)}</p>
                                            <Link className='text-sm text-themeblue font-semibold leading-wider inline-block mb-6' href={`/about/governance-body/${item.id}`}>Learn more &rarr;</Link>
                                            {/* <div className="flex justify-center space-x-3 text-[#8896A0]">
                                                <Link
                                                    href="https://facebook.com"
                                                    className=""
                                                ><FaFacebookF className='footer-icon' /></Link>
                                                <Link href="https://linkedin.com" className=""><FaLinkedinIn /></Link>
                                                <Link href="https://pinterest.com" className=""><FaPinterestP /></Link>
                                                <Link href="https://twitter.com" className=""><FaTwitter /></Link>
                                            </div> */}
                                        </div>
                                        <div className='text-center basis-[100%] md:basis-[15%] lg:basis-[31%]'></div>
                                    </div>
                                )
                            }
                        })
                    }
                    {/* <div className='text-center basis-[48%] lg:basis-[31%]'></div>
                        <div className='text-center basis-[48%] lg:basis-[31%]'>
                            <Image src={teamMemberTwo} alt="Image" className='mx-auto h-[200px] w-[200px] rounded-full' />
                            <p className='text-sm text-blackshadow mt-6'>Treasurer</p>
                            <h3 className='font-subheading text-themered font-bold'>A. K. M. Rabiul Hasan</h3>
                            <p className='mt-1 font-bold text-sm'>MSS, MPH</p>
                            <p className='text-sm text-blackshadow mt-5 mb-6'>Etiam eu molestie eros, commodo hendrerit sapien. Maecenas
                                tempus leo ac nisi iaculis porta. Sed sapien tortor, aliquet a velit ut,
                                lacinia molestie velit.</p>
                            <Link className='text-sm text-themeblue font-semibold leading-wider inline-block mb-6' href="/about/governance-body/single">Learn more &rarr;</Link>

                        </div>
                        <div className='text-center basis-[48%] lg:basis-[31%]'></div> */}
                    {/* <div className='mt-20 flex flex-wrap gap-x-5 gap-y-10'>
                        <div className='text-center basis-[48%] lg:basis-[31%]'>
                            <Image src={teamMemberThree} alt='Image' className='mx-auto h-[200px] w-[200px] rounded-full' />
                            <p className='text-sm text-blackshadow mt-6'>Executive Member</p>
                            <h3 className='font-subheading text-themered font-bold'>Syeda Sobnom Dana</h3>
                            <p className='mt-1 font-bold text-sm'>MBBS</p>
                            <p className='text-sm text-blackshadow leading-wider mt-5 mb-6'>Etiam eu molestie eros, commodo hendrerit sapien. Maecenas
                                tempus leo ac nisi iaculis porta.</p>
                        </div>
                        <div className='text-center basis-[48%] lg:basis-[31%]'>
                            <Image src={teamMemberThree} alt="Image" className='mx-auto h-[200px] w-[200px] rounded-full' />
                            <p className='text-sm text-blackshadow mt-6'>Executive Member</p>
                            <h3 className='font-subheading text-themered font-bold'>Ms. Rabeya Athar</h3>
                            <p className='mt-1 font-bold text-sm'>MBBS, DGO</p>
                            <p className='text-sm text-blackshadow mt-5 mb-6'>Etiam eu molestie eros, commodo hendrerit sapien. Maecenas
                                tempus leo ac nisi iaculis porta.</p>
                        </div>
                        <div className='text-center basis-[48%] lg:basis-[31%]'>
                            <Image src={teamMemberThree} alt='Image' className='mx-auto h-[200px] w-[200px] rounded-full' />
                            <p className='text-sm text-blackshadow mt-6'>Executive Member</p>
                            <h3 className='font-subheading text-themered font-bold'>Ms. Sahanaz Sarmin</h3>
                            <p className='mt-1 font-bold text-sm'>MA</p>
                            <p className='text-sm text-blackshadow mt-5 mb-6'>Etiam eu molestie eros, commodo hendrerit sapien. Maecenas
                                tempus leo ac nisi iaculis porta.</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </main>
    )
}

export const getStaticProps = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/governance-bodies?populate=*`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            // 'Authorization': token
        }
    });
    const governanceBodies = await res.json();
    return {
        props: governanceBodies,
        revalidate: 60
    }
}