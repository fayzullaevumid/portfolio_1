'use client'
import React, { useState } from 'react'
import './section.css'
import { useRouter } from 'next/navigation'


const page = () => {
  const router = useRouter()
  const [minimal, setMinimal] = useState(0);
  const [min, setMin] = useState(-100)
  const [max, setMax] = useState(100)

  const handleIncrement = () => {
    if(minimal < max){
      setMinimal(minimal + 1)
    }
  }

  const handleDecrement = () => {
    if(minimal > min){
      setMinimal(minimal - 1)
    }
  }
  return (
    <div>
    <div className='navbar'>
      <div className='navbar1'>
      <img className='logo' src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" />
      <input id='input' type="text" placeholder='Enter your keyword'/>
      <button className='button'>Search</button>
      </div>
      <div className='navbar2'>
        <button className='button1' onClick={()=> router.push('./card')}>Cart <strong>(0)</strong></button>
        <button className='button1' onClick={()=> router.push('./login')}>Sign In</button>
        <img className='logo' src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" />
        <p><strong>Umid</strong><br />
        test@gmail.com
        </p>
      </div>
    </div>
    <div className='card1'>
      <div className='card'>
    <p className='p1'>Price:{minimal}</p>
    <button className='button1'onClick={handleDecrement}>Min</button>
    <button className='button1' onClick={handleIncrement}>Max</button>
    <button className='button'>Go</button>
    </div>
    <div className='card2'>
      <p className='p1'><strong>Category</strong></p>
      <div className='card3'>
      <input type="checkbox" className='check'/>
      <input type="checkbox" className='check'/>
      <input type="checkbox" className='check'/>
      <input type="checkbox" className='check'/>
      <input type="checkbox" className='check'/>
      </div>
      <div className='card5'>
        <p>Electronics</p>
        <p>Laptops</p>
        <p>Toys</p>
        <p>Office</p>
        <p>Beauty</p>
      </div>
    </div>
    <div className='card4'>
      <p>Ratings</p>
      <div className='star1'>
        <input type="checkbox" />
      <img className='star' src="https://www.svgrepo.com/show/402745/star.svg" alt="" />
      <img className='star' src="https://www.svgrepo.com/show/402745/star.svg" alt="" />
      <img className='star' src="https://www.svgrepo.com/show/402745/star.svg" alt="" />
      <img className='star' src="https://www.svgrepo.com/show/402745/star.svg" alt="" />
      <img className='star' src="https://www.svgrepo.com/show/402745/star.svg" alt="" />
      </div>
      <div className='star1'>
        <input type="checkbox" />
      <img className='star' src="https://www.svgrepo.com/show/402745/star.svg" alt="" />
      <img className='star' src="https://www.svgrepo.com/show/402745/star.svg" alt="" />
      <img className='star' src="https://www.svgrepo.com/show/402745/star.svg" alt="" />
      <img className='star' src="https://www.svgrepo.com/show/402745/star.svg" alt="" />
      <img className='star' src="https://www.svgrepo.com/show/402745/star.svg" alt="" />
      </div>
      <div className='star1'>
        <input type="checkbox" />
      <img className='star' src="https://www.svgrepo.com/show/402745/star.svg" alt="" />
      <img className='star' src="https://www.svgrepo.com/show/402745/star.svg" alt="" />
      <img className='star' src="https://www.svgrepo.com/show/402745/star.svg" alt="" />
      <img className='star' src="https://www.svgrepo.com/show/402745/star.svg" alt="" />
      <img className='star' src="https://www.svgrepo.com/show/402745/star.svg" alt="" />
      </div>
      <div className='star1'>
        <input type="checkbox" />
      <img className='star' src="https://www.svgrepo.com/show/402745/star.svg" alt="" />
      <img className='star' src="https://www.svgrepo.com/show/402745/star.svg" alt="" />
      <img className='star' src="https://www.svgrepo.com/show/402745/star.svg" alt="" />
      <img className='star' src="https://www.svgrepo.com/show/402745/star.svg" alt="" />
      <img className='star' src="https://www.svgrepo.com/show/402745/star.svg" alt="" />
      </div>
      <div className='star1'>
        <input type="checkbox" />
      <img className='star' src="https://www.svgrepo.com/show/402745/star.svg" alt="" />
      <img className='star' src="https://www.svgrepo.com/show/402745/star.svg" alt="" />
      <img className='star' src="https://www.svgrepo.com/show/402745/star.svg" alt="" />
      <img className='star' src="https://www.svgrepo.com/show/402745/star.svg" alt="" />
      <img className='star' src="https://www.svgrepo.com/show/402745/star.svg" alt="" />
      </div>
    </div>
    </div>
    <div className='card-2'>
      <img className='icon' src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" />
      <div>
        <p><strong>Lorem Ipsum is simply dummy text</strong></p>
        <img className='star' src="https://www.svgrepo.com/show/402745/star.svg" alt="" />
      <img className='star' src="https://www.svgrepo.com/show/402745/star.svg" alt="" />
      <img className='star' src="https://www.svgrepo.com/show/402745/star.svg" alt="" />
      <img className='star' src="https://www.svgrepo.com/show/402745/star.svg" alt="" />
      <img className='star' src="https://www.svgrepo.com/show/402745/star.svg" alt="" />
      <p>Lorem Ipsum is simply dummy text of the printing and <br /> 
        typesetting industry. Lorem Ipsum has been the industry's <br />
        standard dummy text ever since the 1500s.</p>
      </div>
      <div id='cardd'>
        <p id='p9'><strong>$989</strong></p>
        <p id='p8'>Free Shipping</p>
        <button id='knopka'>Add to Cart</button>
      </div>
    </div>
    </div>
  )
}


export default page