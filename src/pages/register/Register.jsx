import { useRef, useState } from "react"
import "./register.scss"

const Register = () => {

  const [email, setEamil]= useState("")
  const emailRef = useRef()
  const handleStart= (e)=>{
    setEamil(emailRef.current.value) ;
    
  }
   return (
    <div className="register">
        <div className="top">
            <div className="wrapper">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt=""  className="logo"/>
            <button className="loginButton">Signin in </button>
            </div>
        </div>
        <div className="registerContainer">
            <h1>Unliited movies, TV shows , and more. </h1>
            <p>Ready to watch ? Enter your email to create or restart your membership. </p>
            <div className="input">
                <input type="email" name="email" ref={emailRef} placeholder="Email Address .." />
                <button className="registerButton" onClick={handleStart}>Get started .</button>
            </div>
        </div>

    </div>
  )
}

export default Register