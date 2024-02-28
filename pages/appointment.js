import PageHeader from '@/components/reusable/PageHeader'
import Image from 'next/image'
import { poppins, poppinsBold } from '@/utils/fonts'
import ReactMarkdown from 'react-markdown'

export default function single(contactDetails) {
    console.log("Contact Details", contactDetails?.data.attributes.biodata);
    const { biodata } = contactDetails?.data.attributes;
    return (
        <main className='page-appointment-single'>
            <PageHeader title={'Appointment'} subtitle={''} background={'transparent'} />
            <div className='pt-10 pb-48 bg-white px-4 sm:px-0'>
                <div className='hero-width w-full mx-auto flex justify-center'>
                    {/* <form>
                        <div class="space-y-12">
                            <div class="border-b border-gray-900/10 pb-12">
                                <h2 class="text-base font-semibold leading-7 text-gray-900">Share us your details</h2>
                                <p class="mt-1 text-sm leading-6 text-gray-600">Please fill out the following form we will contect with you soon.</p>

                                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                                    
                                    <div class="sm:col-span-3">
                                        <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
                                        <div class="mt-2">
                                            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>

                                    <div class="sm:col-span-3">
                                        <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                                        <div class="mt-2">
                                            <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>

                                    <div class="sm:col-span-4">
                                        <label for="phone" class="block text-sm font-medium leading-6 text-gray-900">Phone</label>
                                        <div class="mt-2">
                                            <input id="phone" name="phone" type="text" autocomplete="phone" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>

                                    <div class="sm:col-span-4">
                                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                        <div class="mt-2">
                                            <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>

                                    <div class="sm:col-span-3">
                                        <label for="department" class="block text-sm font-medium leading-6 text-gray-900">Department</label>
                                        <div class="mt-2">
                                            <select id="department" name="department" autocomplete="department-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                                <option>General Medicine</option>
                                                <option>Gynae and Obs</option>
                                                <option>Eye</option>
                                                <option>Dental</option>
                                                <option>Physiotherapy</option>
                                                <option>Pediatrics</option>
                                                <option>Orthopadics</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-span-full">
                                        <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Full Address (with street and house)</label>
                                        <div class="mt-2">
                                            <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>

                                    <div class="sm:col-span-2 sm:col-start-1">
                                        <label for="district" class="block text-sm font-medium leading-6 text-gray-900">District</label>
                                        <div class="mt-2">
                                            <input type="text" name="district" id="district" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>

                                    <div class="sm:col-span-2">
                                        <label for="division" class="block text-sm font-medium leading-6 text-gray-900">Division</label>
                                        <div class="mt-2">
                                            <input type="text" name="division" id="division" autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>

                                    <div class="sm:col-span-2">
                                        <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
                                        <div class="mt-2">
                                            <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>

                                    
                                    <div class="col-span-full">
                                        <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Briefly discuss your problem</label>
                                        <div class="mt-2">
                                            <textarea id="about" name="about" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                                        </div>
                                        <p class="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about your health condition</p>
                                    </div>

                                    


                                </div>
                            </div>

                        </div>

                        <div class="mt-6 flex items-center justify-end gap-x-6">
                            <button type="submit" class="rounded-md bg-indigo-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
                        </div>
                    </form> */}
                    <div className='biodata-block text-black'>
                        <p className='text-lg'>For Appointment, Please contact with below details:</p>
                        <div className={`${poppins.variable} font-poppins`}>
                            <ReactMarkdown>{biodata}</ReactMarkdown>
                            {/* {biodata} */}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export const getStaticProps = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/contact-info`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            // 'Authorization': token
        }
    });
    const contactDetails = await res.json();
    return {
        props: contactDetails
    }
}
