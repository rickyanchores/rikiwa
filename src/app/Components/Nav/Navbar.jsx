import Link from 'next/link';
import React from 'react'

const Navbar = () => {

  return (
    <div className='Nav bg-white shadow text-gray-700 font-semibold rounded-lg flex justify-between items-center p-4 mb-2  sticky top-2'>
        <Link href="/#Hero"><h1 className='font-bold text-2xl text-red-700'>rikiwa</h1></Link>
        <ul className="navLinks  flex justify-around items-center gap-4">
          <Link href="/#Menu" className='hover:text-red-700'>Menu</Link>
          <Link href="/#Gallery" className='hover:text-red-700'>Gallery</Link>
          <Link href="/#About" className='hover:text-red-700'>About</Link>
          <Link href="/#Faq" className='hover:text-red-700'>Faq</Link>
        </ul>
    </div>
  )
}

export default Navbar;