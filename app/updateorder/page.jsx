'use client';
import { useRouter } from "next/navigation"
import './page.css';
export default function UpdateOrder(){
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
            <p><strong>Order ID:93865215</strong><br />
            2023-12-24
            </p>
            <p className='green'>* Delivered</p>
            </div>
            <div className='card-4'>
                <p><strong>Person</strong><br />
                Umid <br />
                Phone: 9952663552 <br />
                Email: test@gmail.com
                </p>
                <p><strong>Delivery address</strong><br />
                124 street <br />
                Orlando, FL, 12345 <br />
                US
                </p>
                <p><strong>Payment</strong><br />
                PAID <br />
                Tax paid: $12 <br /> 
                Total paid: $34
                </p>
            </div>
            <div className='card-5'>
                <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" />
                <p className='p1'><strong>Product 1</strong><br />
                2x = $23
                </p>
            </div>
            <div className='card-6'>
            <label htmlFor="order" id='label'>Update Order Status</label>
            <select id="select">
                <option>Processing</option>
                <option>Shipped</option>
                <option>Delivered</option>
            </select>
            </div>
            <button id='buttton'>Update</button>
         </div>
        </>
    )
}