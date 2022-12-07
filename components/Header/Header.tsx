import Link from 'next/link';
import React from 'react';


function Header() {
  return (
    <header className=' lg:p-8 mb-12 flex items-center justify-between'>
        <div className='flex items-center space-x-4'>
            <div>
                <img src='/bloceducare.png' alt='bloceducare-logo'/>
            </div>
            <p className='font-montserrat font-bold text-[#ffff] text-xl md:text-small lg:text-small'>Bloceducare</p>
        </div>
        <nav className='hidden md:block lg:block'>
            <ul className='flex space-x-8'>
            <li><Link href="" className='x-small text-[#fff] opacity-70 hover:text-[#5454D4]'>Home</Link></li>
            <li><Link href="#services" className='x-small text-[#fff] opacity-70 hover:text-[#5454D4]'>Services</Link></li>
            <li><Link href="#projects" className='x-small text-[#fff] opacity-70 hover:text-[#5454D4]'>Our Project</Link></li>
            <li><Link href="#about" className='x-small text-[#fff] opacity-70 hover:text-[#5454D4]'>About us</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header