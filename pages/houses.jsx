import Layout from '@/components/Layout'
import Link from 'next/link';

const Houses = () => {
  return (
    <Layout>
      <Link href={'/houses/new'} className='bg-green-600 px-2 rounded-md py-2 text-white hover:bg-secondary ease-in duration-150 hover:font-bold'>Add new house</Link>
    </Layout>
  )
}

export default Houses;