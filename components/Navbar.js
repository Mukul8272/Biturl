import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='h-16 bg-purple-500 flex justify-between px-4 items-center text-white w-full overflow-x-auto'>
        <div className='logo font-bold text-2xl whitespace-nowrap' >
            <Link href="/">BitURL</Link>
        </div>
        <ul className='flex gap-4 items-center whitespace-nowrap text-sm md:text-base'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/shorten"><li>Shorten</li></Link>
            <Link href="/Contact_us"><li>Contact us</li></Link>
            <li className='flex gap-3'>
                <Link href="/shorten"><button className='font-bold bg-purple-300 rounded-lg shadow-lg p-3 py-1.5'>Try Now</button></Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
