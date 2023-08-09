
import Navbar from '@/components/Navbar'
import '../styles/globals.css'
import Footer from '@/components/Footer'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {
  const [cart,setCart]= useState({});
  const [total,setTotal]= useState(0);
  const [user,setUser]= useState({value:null});
  const [key,setKey]= useState(0);
  const router = useRouter()

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
    
    const token= localStorage.getItem('token');
    if(token){
      setUser({value:token});
      setKey(Math.random())
    }
  },[router.query])
  //router.query is se jb bhi url change hoga tb useEffect run hoga

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
      const logout=()=>{
        
        localStorage.removeItem('token');
        setUser({value:null})
        setKey(Math.random());
      }
  return (

  <>
  <Navbar logout={logout} user={user} key={key} cart={cart}  removeFromCart={removeFromCart} addToCart={addToCart} clearCart={clearCart} total={total} />
  <Component cart={cart}  removeFromCart={removeFromCart} addToCart={addToCart} clearCart={clearCart} total={total}  {...pageProps} />
  <Footer/>
  </>
  )
}
