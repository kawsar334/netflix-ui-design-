import { useRef, useState } from "react"
import "./login.scss"
import {Link}  from "react-router-dom";

const Login = () => {
    const [email, setEamil] = useState("")
    const emailRef = useRef()
  
  return (
      <div className="login">
          <form action="" className="loginForm">
            <h1>Sign in </h1>
            <input type="text" name="" placeholder="Email or Phone "/>
            <input type="password" name="" placeholder="Password" />
            <button>Signin </button>
            <p>New to Netflix ? <Link to="/register">Sign up now </Link></p>
            <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, obcaecati! </span>

          </form>
      </div>
  )
}

export default Login