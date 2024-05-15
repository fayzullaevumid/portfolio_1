import './page.css'
export default function Register(){

    return(
        <div className="login-container">
            <p className='h1'>Register Account</p>
          <label className='name-label'>Full name</label>
          <input type="text" id='name' placeholder='Type your name'/>
         <label className='login-label'>Email</label>
         <input type="text" id="login" placeholder='Type your email' />
         <label  className='password-label'>Password</label>
         <input type="text" id="password" placeholder='Type your password' />
         <button className="button-login">Sign</button>
         <p className='login-text'>Don't an account? <a href='./'>Sign in</a></p>
        </div>
    )
}