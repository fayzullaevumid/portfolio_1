import './page.css'
export default function Product() {
    return(
        <>
    <div className='navbar'>Breadcrumbs</div>
    <div className='header'>
        <div className='photo-react'>
            <img className='react' src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" />
        </div>
        <div className='product-text'>
             <p>Product title </p><br />
             <img className='star' src="https://static.vecteezy.com/system/resources/previews/019/617/676/original/gold-star-symbol-png.png" alt="" />
             <img className='star' src="https://static.vecteezy.com/system/resources/previews/019/617/676/original/gold-star-symbol-png.png" alt="" />
             <img className='star' src="https://static.vecteezy.com/system/resources/previews/019/617/676/original/gold-star-symbol-png.png" alt="" />
             <img className='star' src="https://static.vecteezy.com/system/resources/previews/019/617/676/original/gold-star-symbol-png.png" alt="" />
             <img className='star' src="https://static.vecteezy.com/system/resources/previews/019/617/676/original/gold-star-symbol-png.png" alt="" />
             <h3>$234</h3>
             <p className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <button>Add to card</button>
            <p><strong>Stock</strong></p>
            <p><strong>Category:</strong>Electronics</p>
            <p><strong>Seller/Brand:</strong>Apple</p>
        </div>
    </div>
    <div className='section'>
        <p className='text-2'>Your Review</p>
        <p className='text-3'>Rating</p>
        <img className='star-1' src="https://static.vecteezy.com/system/resources/previews/019/617/676/original/gold-star-symbol-png.png" alt="" />
             <img className='star-1' src="https://static.vecteezy.com/system/resources/previews/019/617/676/original/gold-star-symbol-png.png" alt="" />
             <img className='star-1' src="https://static.vecteezy.com/system/resources/previews/019/617/676/original/gold-star-symbol-png.png" alt="" />
             <img className='star-1' src="https://static.vecteezy.com/system/resources/previews/019/617/676/original/gold-star-symbol-png.png" alt="" />
             <img className='star-1' src="https://static.vecteezy.com/system/resources/previews/019/617/676/original/gold-star-symbol-png.png" alt="" />
   <p className='text-3'>Comments</p>
   <input className='card-2'></input>
   <div className='buttom'></div>
   <button className='section-button'>Post Review</button>
    </div>
    <div className='footer'>
        <p className='text-footer'>
            Other Customers Reviews
        </p>
        <div className='card-3'>
            <img className='image-card-3' src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" />
            <p className='card-text-3'><strong>Umid</strong><br />
            Posted on: 12-12-2023
            </p> <br />
        </div>
    </div>
    </>
    )
 }