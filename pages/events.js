import PageHeader from '@/components/reusable/PageHeader'
import { poppins } from '@/utils/fonts'

export default function events() {
  return (
    <main className='page-events'>
      <PageHeader
        subtitle={'we are Excited About'}
        title={'Our Events'}
        background={'solid'}
      />
      <div className='flex justify-center items-center min-h-[400px]'>
        <h1 className='font-smheading'>Coming Soon...</h1>
      </div>
    </main>
  )
}
