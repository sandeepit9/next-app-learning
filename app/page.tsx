import Image from 'next/image'
import Link from 'next/link'
import ProductCart from './components/ProductCart'

export default function Home() {
  return (
    <div className='text-left px-5 py-5 mt-9'>
      <Link href='/users' >Users</Link>

      <ProductCart  />
      
    </div>
      )
}
