'use client';
import { useRouter } from "next/navigation"
import './page.css'
export default function Profile(){
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
            <div className='card-3'>
                <img className='card-foto' src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" />
                <p className='p1'><strong>Umid</strong><br />
                <strong>Email:</strong>test@gmail.com | <strong>Joined On:</strong>2023-12-24
                </p>
            </div>
            <div className='card-4'>
                <div className='dumaloq'></div>
                <p className='p4'>123 street <br />
                Orlando,FL,25631, US <br />
                Phone no:1234567
                </p>
            </div>
            <button className='button-1'  onClick={() => router.push('./adress')}>Add new Adress</button>
        </div>
        </>
    )
}