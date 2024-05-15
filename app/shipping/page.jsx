import './page.css'
export default function Shipping(){
    return(
        <>
        <div className="navbar">
            <p className='p1'>Breadcrumbs</p>
        </div>
        <div className='card-1'>
            <p className='p2'><strong>Shipping information</strong></p>
            <div className='card-ichidagi-1'>
                <input type="radio" name="" id="radio" />
                <p className='p3'><strong>1295 street</strong></p>
                <p className='p4'>Orlando FL,84758 <br />
                US <br />
                987123222
                </p>
            </div>
            <button className='button-1'>Add new adress</button>
            <button className='button-2'>Back</button>
            <button className='button-3'>Checkout</button>
        </div>
        <div className='card-2'>
            <p className='p5'><strong>Summary</strong></p>
            <p className='p6'>Ammount: <strong>$343</strong><br />
            Est Tax: <strong>$34</strong> <br />
            Total Amount: <strong>$343 </strong>
            </p>
            <h3 className='h3'>Items in cart</h3>
            <div className='card-3'>
            <img className='photo' src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" />
            <p>product name <br />
            <strong>Total:$34</strong>
            </p>
            </div>
           
        </div>
        </>
    )
}