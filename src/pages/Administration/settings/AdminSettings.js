import {useState,useEffect} from "react"
import {createPortal} from "react-dom"
import axios from "axios"

import { motion } from "framer-motion"

import "./AdminSettings.css"

const AdminSettings = () => {

    const [amount,setAmount] = useState()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const Submit = (e) => {
        e.preventDefault()

        axios.post("http://localhost:5000/payamount",{
            params:{
                    amount:amount,
                    email:email,
                    password:password
           }
       })
    }

    const changeAmountValue = (e) => {

        setAmount(e.target.value)

    }

    const changeEmailValue = (e) => {

        switch(e.target.type){
            case "email":
                setEmail(e.target.value)
                break
                case "password":
                    setPassword(e.target.value)
                    break;
        }

        
    }


    return(
    <div className="settingsContainer" >
        <div style={{display:"flex",justifyContent:"space-between"}} >
            <h3 className="settingsContainer__header">Settings</h3>
            <h3 style={{margin:"5px auto 0px auto",fontSize:"32px",color:"transparent"}} >Werte geupdatet</h3>
        </div>

        <form  action="http://localhost:5000/payamount" method="POST" onSubmit={Submit}>
           
            <div className="settingsContainer__header--form" >

                <div className="settingsContainer__section" >
                    <label htmlFor="Amount">Preis</label>
                    <input type="number" value={amount} step="0.01" placeholder="Preis" onChange={changeAmountValue} />
                </div>

                <div className="settingsContainer__section" >
                    <label htmlFor="Email">Neue Email</label>
                    <input type="email" value={email} placeholder="Email" onChange={changeEmailValue} />
                </div>

                <div className="settingsContainer__section" >
                    <label htmlFor="Pssword">Neues Passwort</label>
                    <input type="password" value={password} placeholder="Passwort" onChange={changeEmailValue} />
                </div>




            </div>
            <div style={{display:"flex",justifyContent:"center"}} >
                <input className="settingsContainer__button" type="submit" value="Aktuallisieren"/>
            </div>
        </form>
    </div>
    )
}





export default AdminSettings