'use client';
import { useRouter } from "next/navigation"
import './page.css';
export default function ProductImage(){
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
                <h2>Upload Product Images</h2>
                <div className='card-3'>
                    <input type="file" />
                </div>
                <div className='card-4'>
                    <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" />
                </div>
                <button className='button-4'>Update</button>
         </div>
        </>
    )
}