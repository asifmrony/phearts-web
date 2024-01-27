import PageHeader from '@/components/reusable/PageHeader'
import { poppins } from '@/utils/fonts'

export default function employee(employeeList) {
  return (
    <main className='page-about'>
      <PageHeader title={'Our Employees'} subtitle={'We are Delighted to Share'} background={'blue'} />
      {/* Employees Table with Name, Designation */}
      <div className='pt-20 pb-32 bg-white'>
        <table className={`w-2/3 mx-auto`}>
          <thead className='text-left bg-themegreen text-white'>
            <tr>
              <th className='w-[30%] py-4 pl-9 text-lg font-bold'>Employee Name</th>
              <th className='w-[40%] py-4 pl-9 text-lg font-bold'>Designation</th>
              <th className='w-[30%] py-4 pl-9 text-lg font-bold'>Department</th>
            </tr>
          </thead>
          <tbody className={`text-left ${poppins.variable} font-poppins`}>
            {
              employeeList?.data.map((item) => (
                <tr key={item?.id}>
                  <td className='py-2 pl-9'>{item?.attributes.name}</td>
                  <td className='py-2 pl-9'>{item?.attributes.designation}</td>
                  <td className='py-2 pl-9'>{item?.attributes.department}</td>
                </tr>
              ))
            }
            {/* <tr>
              <td className='py-2 pl-9'>Md. Jahangir Kabir</td>
              <td className='py-2 pl-9'>Customer Service Specialist</td>
              <td className='py-2 pl-9'>Administrative Body</td>
            </tr>
            <tr>
              <td className='py-2 pl-9'>Md. Abdullah Faruque</td>
              <td className='py-2 pl-9'>Professional Healthcare Specialist</td>
              <td className='py-2 pl-9'>Administrative Body</td>
            </tr>
            <tr>
              <td className='py-2 pl-9'>Md. Abdullah Faruque</td>
              <td className='py-2 pl-9'>Professional Healthcare Specialist</td>
              <td className='py-2 pl-9'>Administrative Body</td>
            </tr>
            <tr>
              <td className='py-2 pl-9'>Md. Abdullah Faruque</td>
              <td className='py-2 pl-9'>Professional Healthcare Specialist</td>
              <td className='py-2 pl-9'>Administrative Employee</td>
            </tr>
            <tr>
              <td className='py-2 pl-9'>Md. Abdullah Faruque</td>
              <td className='py-2 pl-9'>Professional Healthcare Specialist</td>
              <td className='py-2 pl-9'>Finance Dept</td>
            </tr>
            <tr>
              <td className='py-2 pl-9'>Md. Abdullah Faruque</td>
              <td className='py-2 pl-9'>Professional Healthcare Specialist</td>
              <td className='py-2 pl-9'>Medicine Dept</td>
            </tr>
            <tr>
              <td className='py-2 pl-9'>Md. Abdullah Faruque</td>
              <td className='py-2 pl-9'>Professional Healthcare Specialist</td>
              <td className='py-2 pl-9'>Eye Dept</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </main>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/employee-lists`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      // 'Authorization': token
    }
  });
  const employeeList = await res.json();
  return {
    props: employeeList
  }
}