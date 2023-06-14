import React from 'react'
import Image from 'next/image'
import { AiOutlineShoppingCart,AiOutlineCloseCircle } from 'react-icons/ai';
import Link from 'next/link';
import { useRef } from 'react';

const Navbar = () => {
  const ref = useRef();
  const toggleCart=()=>{
if(ref.current.classList.contains('translate-x-full')){
  ref.current.classList.remove('translate-x-full');
  ref.current.classList.add('translate-x-0');
}
else if(!ref.current.classList.contains('translate-x-full')) {
  ref.current.classList.remove('translate-x-0');
  ref.current.classList.add('translate-x-full');
}
  }

  return (
    <div className='flex  flex-col md:flex-row md:justify-start justify-center items-center shadow-md backdrop-brightness-95 '>
     <div className="logo mx-5">
      <Link href={'/'}><Image src="/logo.jpg" width={80} height={90}/> </Link> 
     </div>
     <div className="nav">
        <ul className='flex items-center space-x-2 font-bold'>
          <Link href={"/tshirts"}><li>Tshirts</li>  </Link>
          <Link href={"/hoodies"}>  <li>Hoodies</li></Link>
          <Link href={"/mugs"}> <li>Mugs</li>  </Link>
          <Link href={"/stickers"}> <li>Stickers</li>  </Link>
          
        </ul>
     </div>
     <div onClick={toggleCart} className="cart absolute right-0 top-4 mx-5">
     <AiOutlineShoppingCart className='text-3xl cursor-pointer'/> 
     </div>

     <div ref={ref}className="slideCart absolute top-0 right-0 bg-yellow-300 p-44 transform transition-transform translate-x-full">
     <h2 className="font-bold absolute top-5 justify-center ">
        Shopping cart
     </h2>
      <span  onClick={toggleCart}  className="cross cursor-pointer absolute top-1 right-1 text-2xl"><AiOutlineCloseCircle/></span>
      <div className="items">
        <ol>
          <li><span>Tshirt-wear the code</span></li> 
        </ol>
      </div>
     </div>
     
    </div>
  )
}

export default Navbar
