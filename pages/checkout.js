import React from 'react'
import { AiOutlineShoppingCart,AiOutlineCloseCircle,AiFillPlusCircle,AiFillMinusCircle,AiFillMinusSquare,AiFillPlusSquare,AiOutlineClear,AiFillShopping } from 'react-icons/ai';
import Link from 'next/link';


const Checkout = ({cart,addToCart,removeFromCart,subTotal,total}) => {
  
  return (
    <div className="container  ">
       <h1 className=' font-bold text-xl my-5 text-center'>CheckOut Page</h1>
       <h2 className=' font-bold mx-8'>Delivery details:</h2>
       <div className="deldetails flex mx-2">

       <div className=" mb-4  w-1/2 mx-2">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
       <div className=" mb-4 mx-5 w-1/2">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
       </div>
       <div className=" mb-4 mx-5 w-1/2">
        <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
       
        <textarea name="address" id="address" cols="30" rows="3" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <h2 className=' font-bold mx-8'>Other details:</h2>
      <div className="deldetails flex mx-2">

       <div className=" mb-4  w-1/2 mx-2">
        <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
        <input type="text" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
       <div className=" mb-4 mx-5 w-1/2">
        <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
        <input type="text" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
       </div>
       <div className="deldetails flex mx-2">

<div className=" mb-4  w-1/2 mx-2">
 <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
 <input type="text" id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
</div>
<div className=" mb-4 mx-5 w-1/2">
 <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pincode</label>
 <input type="text" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
</div>
</div>
       
<h2 className=' font-bold mx-8'>Cart items:</h2>
   <div className="cartitems">
   <div className="slideCart  bg-blue-100  ">
     <h2 className="font-bold absolute top-0 justify-center my-5">
        Shopping cart
     </h2>
      
      <div className="items">
        <ol className='list-decimal font-semibold' >
          {Object.keys(cart).length==0 && 
          <div className='my-10'>Cart is Empty</div>}
        {Object.keys(cart).map((k)=>{
          return <li className="hover:text-black" key={k}>
          <div className="item flex my-5">
           <div className="mx-3  font-semibold text-sm my-10">{cart[k].name}</div>
           <div className="mx-3 flex font-semibold text-center justify-center items-center text-lg">
            <AiFillMinusSquare onClick={()=>{removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].varient)}} className="text-pink-500"/> <span className="mx-2">{cart[k].qty}</span> <AiFillPlusSquare onClick={()=>{addToCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].varient)}} className="text-pink-500"/></div>
          </div> 
        </li>
        })}
        
        </ol>

        
        </div>
      </div>
        <span className="total">Subtotal: ₹{total}</span>
        <div className="buttons flex my-5">
       <Link href={'/order'}><button type="button" className="text-white bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2">
          <AiFillShopping className="text-lg mx-1"/>
          Paynow
        </button></Link> 
     </div>
   </div>

    </div>
    
  )
}

export default Checkout
