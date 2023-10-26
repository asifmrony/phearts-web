import PageHeader from '@/components/reusable/PageHeader'
import { poppinsBold } from '@/utils/fonts'

export default function entry() {
    return (
        <main className='page-event'>
            <PageHeader subtitle={'home / Events / Entry'} title={'Our Events'} background={'blue'} />
            <div className='py-30'>
                <div className="c-width mx-auto w-full">
                    <div className="bg-upcoming-events min-h-[400px] relative">
                        <h1 className={`font-mdheading ${poppinsBold.variable} font-poppins text-white absolute left-12 bottom-12`}>Digital Help for Language Volunteers</h1>
                    </div>
                </div>
            </div>
            <div className='pt-10 pb-20 c-width mx-auto w-full'>
                <div className='pl-14'>
                    <div className="flex justify-between items-center text-sm">
                        <div>
                            <h3 className='uppercase text-lg font-semibold'>Event Details</h3>
                            <p className='mt-3'>Start Date: February 20, 2024</p>
                            <p>End Date: March 14, 2024</p>
                            <p className='mt-3'>Start Time: 05:15</p>
                            <p>End Time: 06:15</p>
                            <p className='mt-3'>Location: Street town 21, New Jersey, United States</p>
                        </div>
                        <div>
                            <h3 className='uppercase text-lg font-semibold'>Organizer</h3>
                            <p className='mt-1'>by: Phearts</p>
                            <p className='mt-1'>Mobile: +09876555345</p>
                            <p className='mt-1'>Email: example@example.com</p>
                            <p className='mt-1'>Website: phearts.com</p>
                            <p className='mt-1'>Address: Secret Service US, East Saint Louis Springfield, MO, United States</p>
                        </div>
                    </div>
                    <p className='mt-10'>Aorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl turpis, tempus nec egestas ac, molestie vel eros. Vestibulum convallis tincidunt tempus. Orci varius natoque penatibus et magnis dis parturient mon tes, nascetur ridiculus mus. Ut dui libero, bibendum vel risus in, tincidunt accumsan felis. Mauris ullamcorp er est posuere hendrerit consectetur. Donec iaculis tincidunt e nim, sit amet maximus justo. Fusce sollicitud in, justo a bibendum mollis, ipsum nisi porta orci, sit amet.</p>
                    <p className='mt-6'>
                        eugiat sem quis dictum. Mauris blandit, mi convallis tincidunt imperdiet, eros mi fermentum lacus, at sodal es nibh urna quis pur us. Aenean eleifend tincidunt eros, in tempus diam facilisis in. Suspendisse congue m etus non mi efficitur, id faucibus nulla facil isis. Donec et efficitur purus. Phasellus et neque ac lacus sagittis bibendum.
                    </p>
                </div>
            </div>
        </main>
    )
}
