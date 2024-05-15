'use client';
import { useRouter } from "next/navigation"
import './page.css';
export default function UpdateUserAdmin(){
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
            <h1>Update User</h1>
            <label htmlFor="name">Full Name</label>
            <input type="text" id='name' placeholder='Type your name'/>
            <label htmlFor="email">Email</label>
            <input type="text" id='email' placeholder='Type your email'/>
            <label htmlFor="select">Role</label>
            <select id="select">
                <option>user</option>
                <option>admin</option>
            </select>
            <button className='button-4'>Update</button>
         </div>
        </>
    )
}