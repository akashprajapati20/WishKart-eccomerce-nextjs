import React from 'react'
import Image from 'next/image'
import { AiOutlineShoppingCart,AiOutlineCloseCircle,AiFillPlusCircle,AiFillMinusCircle,AiFillMinusSquare,AiFillPlusSquare,AiOutlineClear,AiFillShopping } from 'react-icons/ai';
import Link from 'next/link';
import { useRef } from 'react';

const Navbar = ({cart,addToCart,removeFromCart,clearCart,setTotal}) => {
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
        <ol className='list-decimal font-semibold' >
          {Object.keys(cart).length==0 && 
          <div>Cart is Empty</div>}
        {Object.keys(cart).map((k)=>{
          return <li className="hover:text-black" key={k}>
          <div className="item flex my-5">
           <div className="w-2/3 font-semibold text-sm">{cart[k].name}</div>
           <div className="w-1/3 flex font-semibold text-center justify-center items-center text-lg">
            <AiFillMinusSquare onClick={()=>{removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].varient)}} className="text-pink-500"/> <span className="mx-2">{cart[k].qty}</span> <AiFillPlusSquare onClick={()=>{addToCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].varient)}} className="text-pink-500"/></div>
          </div> 
        </li>
        })}
        
        </ol>
        <div className="buttons flex my-5">
        <button type="button" className="text-white bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2">
          <AiFillShopping className="text-lg mx-1"/>
          Proceed
        </button>

        <button type="button" onClick={clearCart} className="text-white bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2">
         <AiOutlineClear className="text-lg mx-1"/>
          Clear Cart
        </button>
        </div>
      </div>
     </div>
     
    </div>
  )
}

export default Navbar
