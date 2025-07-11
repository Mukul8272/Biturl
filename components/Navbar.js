import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='h-15 bg-purple-500 flex justify-between px-4 items-center text-white '>
        <div className='logo font-bold text-2xl' >
            <Link href="/">BitURL</Link>
        </div>
        <ul className='flex justify-center gap-5 items-center'>
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
