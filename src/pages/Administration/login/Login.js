import {useState} from "react"
import {Redirect, useHistory} from "react-router-dom"

import axios from "axios"

import "./Login.css"

const Login = ({setToken}) => {

    const backendAction = "http://localhost:5000/"

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const [message,setMessage] = useState("Password vergessen?")

    let mouseHover = false

    const SubmitLogin = (e) => {
        e.preventDefault()
    
       axios.post(backendAction,{
           params:{
                email:email,
                password:password
          }
      }).then(res => {

        setToken(res.data.token)


        })
    }

    const onChangeEmail = (e) =>{
        setEmail(e.target.value)
    }

    const onChangePassword = (e) =>{
        setPassword(e.target.value)
    }

    const recoverPassword = () => {

        axios.get(backendAction+"recover").then(()=>{
            setMessage("Passwort wurde an die Email gesendet")
        })

        
    }

    return(
        <div className="loginContainer" >
        <h2>Administration Login</h2>

        <form className="loginContainer__form" onSubmit={SubmitLogin} >
            <input className="loginContainer__form--input" required  type="email" name="email" placeholder="Email Adresse" value={email} onChange={onChangeEmail} id="email"/>
            <input className="loginContainer__form--input" required  type="password" name="password" placeholder="Password" value={password} onChange={onChangePassword} id="password"/>
            <input className="loginContainer__form--input" type="submit" name="button" value="Login" id="button"/>
        </form>

        <div style={{marginTop:"25px",fontSize:"14px",cursor:"pointer"}} onClick={recoverPassword} >{message}</div>


    </div>
    )
}


export default Login