import './page.css'
export default function Login(){

    return(
        <div className="login-container">
            <p className='h1'>Login</p>
         <label className='label-login'>Email</label>
         <input type="text" id="login" placeholder='Type your email' />
         <label  className='label-password'>Password</label>
         <input type="text" id="password" placeholder='Type your password' />
         <button className="button-login">Sign</button>
         <p className='login-text'>Don't an account? <a href='./'>Register</a></p>
        </div>
    )
}