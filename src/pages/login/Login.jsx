import { useRef, useState } from "react"
import "./login.scss"

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
            <p>New to Netflix ? <a href="/register">Sign up now </a></p>
            <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, obcaecati! </span>

          </form>
      </div>
  )
}

export default Login