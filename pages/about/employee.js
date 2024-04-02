import PageHeader from '@/components/reusable/PageHeader'
import { poppins } from '@/utils/fonts'

export default function employee(employeeList) {
  return (
    <main className='page-about'>
      <PageHeader title={'Our Employees'} subtitle={''} background={'blue'} />
      {/* Employees Table with Name, Designation */}
      <div className='pt-20 pb-32 bg-white'>
        <table className={`w-2/3 mx-auto`}>
          <thead className='text-left bg-themegreen text-white'>
            <tr>
              <th className='w-[30%] py-4 pl-4 md:pl-9 text-sm md:text-lg font-bold'>Sl. No</th>
              <th className='w-[40%] py-4 pl-4 md:pl-9 text-sm md:text-lg font-bold'>Employee Name</th>
              <th className='w-[30%] py-4 pl-4 md:pl-9 text-sm md:text-lg font-bold'>Designation</th>
            </tr>
          </thead>
          <tbody className={`text-left ${poppins.variable} font-poppins text-black`}>
            {
              employeeList?.data.map((item, idx) => (
                <tr key={item?.id}>
                  <td className='py-2 pl-4 md:pl-9'>{idx + 1}</td>
                  <td className='py-2 pl-4 md:pl-9'>{item?.attributes?.name}</td>
                  <td className='py-2 pl-4 md:pl-9'>{item?.attributes?.designation}</td>
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/employee-lists?sort=id:asc&pagination[page]=1&pagination[pageSize]=70`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      // 'Authorization': token
    }
  });
  const employeeList = await res.json();
  return {
    props: employeeList,
    revalidate: 60
  }
}