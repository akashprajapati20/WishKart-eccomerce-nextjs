
import Navbar from '@/components/Navbar'
import '../styles/globals.css'
import Footer from '@/components/Footer'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {
  const [cart,setCart]= useState({});
  const [total,setTotal]= useState(0);

  useEffect(()=>{
    try {if(localStorage.getItem("cart")){
      console.log("no error")
      setCart(JSON.parse(localStorage.getItem("cart")))
      saveCart(JSON.parse(localStorage.getItem("cart")));
      }
    
    } catch (error) {
      console.error("error");
      localStorage.clear();
    }
    
  },[])

  const saveCart=(myCart)=>{
     localStorage.setItem("cart",JSON.stringify(myCart));
     let subt=0;
     let keys =Object.keys(cart);
     for (let i = 0; i < keys.length; i++) {
      subt+=  myCart[keys[i]].price * myCart[keys[i]].qty
      
     }
     setTotal(subt);
  }

  const addToCart=(itemCode,qty,price,name,size,variant)=>{
let newCart = cart;
  if(itemCode in cart){
      newCart[itemCode].qty = cart[itemCode].qty +qty ;
  }else{
    newCart[itemCode] = {qty:1,price,name,size,variant}
  }
  setCart(newCart);
  saveCart(newCart);

  }
   
  const clearCart=()=>{
    setCart({}); // request and not a order
    saveCart({});

  }
  const removeFromCart=(itemCode,qty,price,name,size,variant)=>{
    let newCart = cart;
      if(itemCode in cart){
          newCart[itemCode].qty = cart[itemCode].qty -qty;
      }
      if(newCart[itemCode]["qty"]<=0){
        delete newCart[itemCode] ;
      }
      setCart(newCart);
      saveCart(newCart);
    
      }
  return (

  <>
  <Navbar key={total} cart={cart}  removeFromCart={removeFromCart} addToCart={addToCart} clearCart={clearCart} total={total} />
  <Component cart={cart}  removeFromCart={removeFromCart} addToCart={addToCart} clearCart={clearCart} total={total}  {...pageProps} />
  <Footer/>
  </>
  )
}
