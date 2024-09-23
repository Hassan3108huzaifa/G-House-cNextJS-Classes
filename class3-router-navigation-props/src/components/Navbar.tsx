import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <ul className='mb-10 flex mt-2  gap-10 justify-center'>
        <li className='hover:text-gray-600'><Link href={'/'}>Home</Link></li>
        <li className='hover:text-gray-600'><Link href={'/about'}>About</Link></li>
        <li className='hover:text-gray-600'><Link href={'/contact'}>Contact</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
