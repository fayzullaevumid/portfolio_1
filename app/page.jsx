'use client';
import { useRouter } from "next/navigation"
import './page.css'

export default function homePage(){
const router = useRouter();
    return(
        <>
        <div className="navigation">
            <button className="list" onClick={() => router.push('./')}>Component List</button>
            <button onClick={() => router.push('./homepage')}>Home Page</button>
            <button onClick={() => router.push('./product')}>Product Details</button>
            <button onClick={() => router.push('./card')}>Cart</button>
            <button onClick={() => router.push('./login')}>Login</button>
            <button onClick={() => router.push('./register')}>Register</button>
            <button onClick={() => router.push('./shipping')}>Shipping</button>
            <button onClick={() => router.push('./profile')}>Profile</button>
            <button onClick={() => router.push('./adress')}> Add new address</button>
            <button onClick={() => router.push('./updateprofile')}>Update Profile</button>
            <button onClick={() => router.push('./updatepassword')}>Update Password</button>
            <button onClick={() => router.push('./userorder')}>User Order</button>
            <button onClick={() => router.push('./newproduct')}>New Product</button>
            <button onClick={() => router.push('./allproductsadmin')}>All Products Admin</button>
            <button onClick={() => router.push('./productimages')}>Upload Images</button>
            <button onClick={() => router.push('./ordersadmin')}>Orders Admin</button>
            <button onClick={() => router.push('./updateorder')}>Update Order</button>
            <button onClick={() => router.push('./useradmin')}>User Admin</button>
            <button onClick={() => router.push('./updateuseradmin')}>Update User Admin</button>
            </div>
      
        </>
        
    )
}

