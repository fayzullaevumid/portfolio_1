'use client';
import { useRouter } from "next/navigation"
import './page.css'
export default function NewProduct(){
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
            <h1>Create New Product</h1>
            <label htmlFor="name">Name</label>
            <input type="text" id='name' placeholder='Product name'/>
            <label htmlFor="description">Description</label>
            <input type="text" id='description' placeholder='Product description'/>
            <label htmlFor="price">Price</label>
            <input type="text" id='price' placeholder='0.00'/>
            <label htmlFor="select">Category</label>
            <select id="select">
                <option value="">Electronics</option>
                <option value="">Laptops</option>
                <option value="">Cameras</option>
                <option value="">Accesories</option>
                <option value="">Headphones</option>
                <option value="">Sports</option>
            </select>
            <label htmlFor="brand">Seller / Brand</label>
            <input type="text" id="brand" placeholder='Seller or Brand' />
            <label htmlFor="stock">Stock</label>
            <input type="text" id="stock" placeholder='0' />
            <button id='button-2'>Create Product</button>
         </div>
        </>
    )
}