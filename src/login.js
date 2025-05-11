import React from 'react'
import './login.css'
import { loginUrl } from "./spotify"
const Login = () => {
    return (
        <>
            <div className=' d-grid  justify-content-center vh-100 login'>
                <img src="https://th.bing.com/th/id/OIP.q75kje3pNu0i8URBViuiKQHaCQ?cb=iwc2&rs=1&pid=ImgDetMain" alt="Spotify Logo" width='100%' className="my-5" />
                <a  className="login-btn mx-5" href={loginUrl}>Login to Spotify</a>
            </div>
        </>
    )
}

export default Login