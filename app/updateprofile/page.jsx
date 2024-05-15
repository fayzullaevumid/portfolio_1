'use client';
import { useRouter } from "next/navigation"
import './page.css'
export default function UpdateProfile(){
    const router = useRouter();
    return(
        <>
    <div className='card-1'>
            <button className='button'  onClick={() => router.push('./newproduct')}>New Product</button>
            <button className='button'  onClick={() => router.push('./allproductsadmin')}>All Products</button>
            <button className='button'  onClick={() => router.push('./userorder')}>All Orders</button>
            <button className='button'  onClick={() => router.push('./useradmin')}> All Users</button>
            <button className='button'  onClick={() => router.push('./profile')}>Your Profile</button>
            <button className='button'  onClick={() => router.push('./boshsahifa')}>Orders</button>
            <button className='button'  onClick={() => router.push('./updateprofile')}>Update Profile</button>
            <button className='button'  onClick={() => router.push('./updatepassword')}>Update Password</button>
            <button className='logout'>Logout</button>
         </div>
         <div className='card-2'>
            <h1>Update Profile</h1>
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id='fullName' placeholder='Type your name'/>
            <label htmlFor="email">Email</label>
            <input type="text" id='email' placeholder='Type your email'/>
            <p>Avatar</p>
            <div className='card-3'>
                <img className='card-foto' src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" />
                <input type="file" id="file" />
            </div>
            <button className='button-1'>Update</button>
         </div>
        </>
    )
}