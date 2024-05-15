'use client';
import { useRouter } from "next/navigation"
import './page.css';
export default function AllProductsAdmin(){
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
            <h1>12 Products</h1>
            <div className='card-3'>
                <p><strong>NAME</strong></p>
                <p><strong>STOCK</strong></p>
                <p><strong>PRICE</strong></p>
                <p><strong>ACTIONS</strong></p>
            </div>
            <div className='card-4'>
                <p>Product name</p>
                <p>12</p>
                <p>$456</p>
                <p>Not done</p>
            </div>
         </div>
        </>
    )
}