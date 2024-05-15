'use client';
import { useRouter } from "next/navigation"
import './page.css'
import { useState } from "react";
export default function Card() {
    const router = useRouter();
    const [minimal, setMinimal] = useState(0)
    const [min , setmin] = useState(-10)
    const [max, setMax] = useState(10)

    const handleIncrement =() => {

if(minimal < max){
   setMinimal(minimal + 1)
}
}

const handleDecrement = () => {
    if(minimal > min){
        setMinimal(minimal - 1)
    }
}

    return(
        <>
    <div className='navbar'>
         <p className='navbar-text'>5  Item(s) in Cart</p>
    </div>
    <div className='card-1'>
        <img className='card-image-1' src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" />
        <p className='card-text-4'><strong>Product name:</strong> <br />
        Seller:Apple
        </p>
        <div className='card-button-3'>
        <button className='card-button-1' onClick={handleDecrement}>-</button>
        <button className='card-button-1'>{minimal}</button>
        <button className='card-button-1' onClick={handleIncrement}>+</button>
        </div>
        <p><strong>$898</strong> <br />
        $98 / per item
        </p>
        <button className='card-button-2'>Remove</button>
    </div>
    <div className='card-2'>
      <p className='card-text-2'><strong>Total price: </strong>$98</p>
      <p className='card-text-2'><strong>Total units: </strong>7 (units)</p>
      <p className='card-text-2'><strong>Tax:</strong>$88</p>
      <p className='card-text-3'><strong>Total price:</strong>$150</p>
      <button className='button-1'>Continue</button>
      <button className='button-2' onClick={() => router.push('./')}>Back to shop</button>
    </div>
    </>
    )
 }