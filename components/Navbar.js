import React,{useState} from 'react'
import Image from 'next/image'
import { AiOutlineShoppingCart,AiOutlineCloseCircle,AiFillPlusCircle,AiFillMinusCircle,AiFillMinusSquare,AiFillPlusSquare,AiOutlineClear,AiFillShopping } from 'react-icons/ai';
import {MdAccountCircle} from 'react-icons/md';
import Link from 'next/link';
import { useRef } from 'react';
import NavLogo from "../public/logo.jpg"


const Navbar = ({logout,cart,addToCart,removeFromCart,clearCart,total,user}) => {
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
const [dropdown,setDropdown]=useState(false);

  return (
    <div className='flex  flex-col md:flex-row md:justify-start justify-center items-center shadow-md backdrop-brightness-95 sticky top-0 z-10 bg-slate-200 '>
     <div className="logo mr-auto md:mx-5">
        <Link href={"/"}>
          <Image src={NavLogo} width={180} height={25} alt="" />
        </Link>
      </div>
     <div className="nav">
        <ul className='flex items-center space-x-2 font-bold'>
          <Link href={"/tshirts"}><li>Tshirts</li>  </Link>
          <Link href={"/hoodies"}>  <li>Hoodies</li></Link>
          <Link href={"/mugs"}> <li>Mugs</li>  </Link>
          <Link href={"/stickers"}> <li>Stickers</li>  </Link>
          
        </ul>
     </div>
     
     <div  className="cart flex absolute right-0 top-4 mx-5">
      <a onMouseOver={()=>{setDropdown(true)}} onMouseLeave={()=>{setDropdown(false)}}>
      {user.value && <MdAccountCircle onMouseOver={()=>{setDropdown(true)}} onMouseLeave={()=>{setDropdown(false)}} className='text-3xl cursor-pointer'/> }
      {dropdown && 
      <div className='absolute right-7 rounded-md bg-purple-300 top-7 w-36'>
        <ul className='flex flex-col gap-y-2 px-5'>
          <li className='hover:text-white cursor-pointer w-full '>My Account</li>
          <li className='hover:text-white cursor-pointer w-full'>Orders</li>
          <li className='hover:text-white cursor-pointer w-full'>Contact Us</li>
          <li onClick={logout} className='hover:text-white cursor-pointer w-full'>Log out</li>
          
        </ul>
      </div>
     }
      </a>
      
     {!user.value && <Link href={'/login'}> <button className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full'>Login</button> </Link>}
     <AiOutlineShoppingCart onClick={toggleCart} className='text-3xl cursor-pointer'/> 
     </div>
     

     <div ref={ref}className={`slideCart absolute top-0 overflow-y-scroll right-0 bg-blue-100 pb-[50%] pl-8 mt-10   transform transition-transform ${Object.keys(cart).length==0?'translate-x-full':'translate-x-0'}`}>
     <h2 className="font-bold absolute top-0 justify-center my-5">
        Shopping cart
     </h2>
      <span  onClick={toggleCart}  className="cross cursor-pointer absolute top-1 right-1 text-2xl"><AiOutlineCloseCircle/></span>
      <div className="items">
        <ol className='list-decimal font-semibold' >
          {Object.keys(cart).length==0 && 
          <div className='my-10'>Cart is Empty</div>}
        {Object.keys(cart).map((k)=>{
          return <li className="hover:text-black" key={k}>
          <div className="item flex my-5">
           <div className="w-2/3 font-semibold text-sm my-10">{cart[k].name}</div>
           <div className="w-1/3 flex font-semibold text-center justify-center items-center text-lg">
            <AiFillMinusSquare onClick={()=>{removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].varient)}} className="text-pink-500"/> <span className="mx-2">{cart[k].qty}</span> <AiFillPlusSquare onClick={()=>{addToCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].varient)}} className="text-pink-500"/></div>
          </div> 
        </li>
        })}
        
        </ol>
        <div className="buttons flex my-5">
       <Link href={'/checkout'}><button type="button" className="text-white bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2">
          <AiFillShopping className="text-lg mx-1"/>
          Proceed
        </button></Link> 

        <button type="button" onClick={clearCart} className="text-white bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2">
         <AiOutlineClear className="text-lg mx-1"/>
          Clear Cart
        </button>
        </div>
      </div>
     <span>Subtotal: {total}</span>
     </div>
    </div>
  )
}

export default Navbar
