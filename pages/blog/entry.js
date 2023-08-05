import PageHeader from '@/components/reusable/PageHeader'
import { poppins, poppinsBold } from '@/utils/fonts'
import Image from 'next/image'
import blogImage from '@/data/blog-large-image.jpg'

export default function entry() {
    return (
        <main>
            <div className={`text-center py-40 bg-blog-single relative`}>
                <p className={`text-[28px] text-white Capitalize mb-2 ${poppinsBold.variable} font-poppins`}>Uganda Embraces South Sudanese Refugees, For Now</p>
                <p className={`absolute left-[30%] bottom-5 text-[#e5e5e5] text-sm ${poppins.variable} font-poppins`}>Home / News / Uganda Embraces South Sudanese Refugees, For Now</p>
            </div>
            <div className='hero-width w-full mx-auto'>
                <div className='py-6 text-blackshadow text-sm'>
                    <p>June 6, 2023</p>
                    <p>by <span className='text-blue-500'>admin</span> in <span className='text-blue-500'>News, Support</span></p>
                </div>
                <div className='text-sm text-justify text-[#4c4848]'>
                    <Image src={blogImage} alt='Blog Image'/>
                    <p className='mb-5 mt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum massa vel enim feugiat gravida. 
                        Phasellus velit risus, euismod a lacus et, mattis condimentum augue. Vivamus fermentum ex quis imperdiet sodales. 
                        Sed aliquam nibh tellus, a rutrum turpis pellentesque ac. Nulla nibh libero, tincidunt cursus gravida ut, sodales ut magna.
                         Sed sodales libero sapien, et rutrum mi placerat eget. Nulla vestibulum lacus vel eros eleifend molestie.
                    </p>
                    <p className='mb-5'>Sed rutrum, libero non pretium tristique, arcu mi sollicitudin ex, quis venenatis orci tellus vel dolor. Donec gravida, dolor ut auctor facilisis, enim dolor pellentesque lectus, nec vehicula nibh risus ac leo. Mauris volutpat aliquam tellus nec rhoncus. Aliquam et nibh pulvinar, sodales nibh et, pretium urna. Vivamus quam augue, maximus in consequat imperdiet, iaculis non nibh. Aliquam erat volutpat. Curabitur venenatis massa sed lacus tristique, non auctor nisl sodales. Sed ultricies lacus ut libero faucibus fringilla. Ut nisi tellus, posuere vel mattis nec, convallis a metus. Nullam elementum molestie felis nec lobortis. Cras at justo eu elit semper tempor sed quis orci. In risus magna, malesuada vel elementum ut, finibus et nunc.</p>
                    <p className='mb-24'>Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor in ac turpis. In nec imperdiet turpis. Suspendisse quis orci ut orci pulvinar eleifend. Nulla eu mattis ipsum. Integer eget sagittis nulla. Praesent consectetur lacus et maximus eleifend. Integer non lacus dui. Mauris tortor diam, laoreet quis commodo vitae, sodales vel augue.</p>
                </div>
            </div>
        </main>
    )
}
