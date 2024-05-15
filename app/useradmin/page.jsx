'use client';
import { useRouter } from "next/navigation"
import './page.css'
export default function UserAdmin(){
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
            <h1>12 Users</h1>
            <div className='card-3'>
                <p><strong>NAME</strong></p>
                <p><strong>EMAIL</strong></p>
                <p><strong>ROLE</strong></p>
                <p><strong>ACTIONS</strong></p>
            </div>
            <div className='card-4'>
                <p>Umid</p>
                <p>test@gmail.com</p>
                <p>admin</p>
                <p>Not done</p>
            </div>
         </div>
        </>
    )
}