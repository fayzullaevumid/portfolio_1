'use client';
import { useRouter } from "next/navigation"
import './page.css'
export default function Adress(){
    const router = useRouter();
    return(
        <>
         <div className='navbar'><p className='p1'>Breadcrumbs</p></div>
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
            <h1 className='h1'>Add new Address</h1>
            <label htmlFor="adress">Address*</label>
            <input type="text" id='address' placeholder='Type your address'/>
                <label htmlFor="city">City</label>
                <input type="text" id='city' placeholder='Type your city'/>
                <label htmlFor="state">State</label>
                <input type="text" id='state' placeholder='Type state here'/>
            <label htmlFor="code">Zipcode</label>
                <input type="number" id='code' placeholder='Type zip code here '/>
                <label htmlFor="phone">Phone No</label>
                <input type="number" id='phone' placeholder='Type phone no here'/>
                <button className='button-1'>Add</button>
         </div>
        </>
    )
}