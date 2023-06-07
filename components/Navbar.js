import React from 'react'
import Image from 'next/image'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='flex  flex-col md:flex-row md:justify-start justify-center items-center'>
     <div className="logo mx-5">
      <Image src="/logo.jpg" width={80} height={90}/>
     </div>
     <div className="nav">
        <ul className='flex items-center space-x-2 font-bold'>
          <Link href={"/"}><a><li>Tsirts</li>  </a> </Link>
          <Link href={"/"}> <a>  <li>Hoodies</li></a></Link>
          <Link href={"/"}> <a><li>Mugs</li>  </a></Link>
          <Link href={"/"}> <a><li>Stickers</li>  </a></Link>
          
        </ul>
     </div>
     <div className="cart absolute right-0 top-4 mx-5">
     <AiOutlineShoppingCart className='text-3xl'/> 
     </div>
    </div>
  )
}

export default Navbar
