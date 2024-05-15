'use client';
import { useRouter } from "next/navigation"
import './page.css';
export default function OrdersAdmin(){
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
            <h1>12 Orders</h1>
            <div className='card-3'>
                <p><strong>ID</strong></p>
                <p><strong>AMOUNT PAID</strong></p>
                <p><strong>STATUS</strong></p>
                <p><strong>ACTIONS</strong></p>
            </div>
            <div className='card-4'>
                <p>12345667</p>
                <p>$232</p>
                <p>Processing</p>
                <p>Not done</p>
            </div>
         </div>
        </>
    )
}