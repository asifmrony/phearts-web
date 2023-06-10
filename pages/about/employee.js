import PageHeader from '@/components/reusable/PageHeader'

export default function employee() {
  return (
    <main className='page-about'>
      <PageHeader title={'Our Employees'} subtitle={'We are Delighted to Share'} background={'blue'} />
      {/* All Employees */}
      <div className='pt-20 pb-32 bg-white'>
        <div className="hero-width w-full mx-auto">
            <div className="flex flex-wrap gap-x-6 gap-y-8 text-center justify-between">
                <div className='basis-[17%] rounded-md shadow-sm border p-4 border-gray-200'>
                    <h4 className='text-lg font-semibold leading-tight'>Md. Jahangir Kabir</h4>
                    <p className='text-sm mt-2'>Customer Service Specialist</p>
                </div>
                <div className='basis-[17%] rounded-md shadow-sm border p-4 border-gray-200'>
                    <h4 className='text-lg font-semibold leading-tight'>Md. Abdullah Faruque</h4>
                    <p className='text-sm mt-2'>Professional Healthcare Specialist</p>
                </div>
                <div className='basis-[17%] rounded-md shadow-sm border p-4 border-gray-200'>
                    <h4 className='text-lg font-semibold leading-tight'>Md. Jahangir Kabir</h4>
                    <p className='text-sm mt-2'>Customer Service Specialist</p>
                </div>
                <div className='basis-[17%] rounded-md shadow-sm border p-4 border-gray-200'>
                    <h4 className='text-lg font-semibold leading-tight'>Md. Abdullah Faruque</h4>
                    <p className='text-sm mt-2'>Professional Healthcare Specialist</p>
                </div>
                <div className='basis-[17%] rounded-md shadow-sm border p-4 border-gray-200'>
                    <h4 className='text-lg font-semibold leading-tight'>Md. Jahangir Kabir</h4>
                    <p className='text-sm mt-2'>Customer Service Specialist</p>
                </div>
            </div>
        </div>
      </div>
    </main>
  )
}
