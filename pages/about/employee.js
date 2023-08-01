import PageHeader from '@/components/reusable/PageHeader'

export default function employee() {
  return (
    <main className='page-about'>
      <PageHeader title={'Our Employees'} subtitle={'We are Delighted to Share'} background={'blue'} />
      {/* Employees Table with Name, Designation */}
      <div className='pt-20 pb-32 bg-white'>
        <table className='w-2/3 mx-auto'>
          <thead className='text-left bg-themegreen text-white'>
            <tr>
              <th className='w-1/2 py-4 pl-9 text-lg font-bold'>Employee Name</th>
              <th className='w-1/2 py-4 pl-9 text-lg font-bold'>Designation</th>
            </tr>
          </thead>
          <tbody className='text-left'>
            <tr>
              <td className='py-2 pl-9'>Md. Jahangir Kabir</td>
              <td className='py-2 pl-9'>Customer Service Specialist</td>
            </tr>
            <tr>
              <td className='py-2 pl-9'>Md. Abdullah Faruque</td>
              <td className='py-2 pl-9'>Professional Healthcare Specialist</td>
            </tr>
            <tr>
              <td className='py-2 pl-9'>Md. Abdullah Faruque</td>
              <td className='py-2 pl-9'>Professional Healthcare Specialist</td>
            </tr>
            <tr>
              <td className='py-2 pl-9'>Md. Abdullah Faruque</td>
              <td className='py-2 pl-9'>Professional Healthcare Specialist</td>
            </tr>
            <tr>
              <td className='py-2 pl-9'>Md. Abdullah Faruque</td>
              <td className='py-2 pl-9'>Professional Healthcare Specialist</td>
            </tr>
            <tr>
              <td className='py-2 pl-9'>Md. Abdullah Faruque</td>
              <td className='py-2 pl-9'>Professional Healthcare Specialist</td>
            </tr>
            <tr>
              <td className='py-2 pl-9'>Md. Abdullah Faruque</td>
              <td className='py-2 pl-9'>Professional Healthcare Specialist</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}
