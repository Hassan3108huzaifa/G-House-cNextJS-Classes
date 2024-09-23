'use client'
import { useRouter } from 'next/navigation'

import React from 'react'

const Footer = () => {

    const route = useRouter()

  return (
    <footer className='flex justify-center text-center sticky mt-20'>
      <p>&copy; HassanRJ. all right reserved</p>
      <div className='flex ml-10 gap-10'>

      
      <button onClick={()=> route.push('/')}>Home</button>
      <button onClick={()=> route.push('/about')}>About</button>
      <button onClick={()=> route.push('/contact')}>Contact</button>
      </div></footer>
  )
}

export default Footer
