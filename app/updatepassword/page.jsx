'use client';
import { useRouter } from "next/navigation"
import './page.css';
export default function UpdatePassword(){
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
            <h1>Update Password</h1>
            <label htmlFor="current-password">Current Password</label>
            <input type="text" id='current-password' placeholder='Type your current password'/>
            <label htmlFor="current-password">New Password</label>
            <input type="text" id='new-password' placeholder='Type your new password'/>
            <button className='button-1'>Update</button>
         </div>
        </>
    )
}