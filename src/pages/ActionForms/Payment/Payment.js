// React
import {useState,useRef,useEffect} from "react"
import {Link,Redirect,Route,useHistory } from "react-router-dom"

import axios from "axios"

// Paypal
//import {PayPalScriptProvider,PayPalButtons, PayPalMessages } from "@paypal/react-paypal-js";

import {PayPalButton} from "react-paypal-button-v2"



// CSS
import "./Payment.css"

const clientID = "AdP-sbkzdRSRri0y42qfrqZpZ4_1HQJvDj4prJX0zuP57GCMgKPLhnLtIqZsAiq00LziPC7h06a9nwln"



const Payment = () => {

    // FIRE IO
    const [paidFor,setPaidFor] = useState(false)
    const [loaded,setLoaded] = useState(false)

    const history = useHistory();

    const onAmountChange = (e) => {
        setAmount(e.target.value)
    }

    const [amount, setAmount] = useState(2);
    const [orderID, setOrderID] = useState(false);

    useEffect(()=>{

        axios.get("http://localhost:5000/payamount").
        then(res => {
            console.log(res.data.amount)
            setAmount(res.data.amount)
        })

    },[amount])


    const buyCredentials = {
        clientID : clientID,
        amount: amount,
        currency: "EUR"
    }

    function OnSuccess (details, data){
      //  alert("Transaction complete by " + details.payer.name.given_name)
        history.push("/certificate")

        /*return fetch("/paypal-transaction-complete", {
            method: "post",
            body: JSON.stringify({
              orderID: data.orderID
            })
        })*/

    }

    const ButtonStyle = {
        layout: "horizontal",
        color: "blue",
        label: "pay",
        tagline: false

    }


    return(

        <div className="paymentContainer" >

            <form className="payment__amount" >




                <div style={{display:"flex",alignItems:"center",justifyContent:"center"}} >
                <h2 style={{fontSize:"32px"}}>€</h2>
                <div style={{fontSize:"28px",margin:"0px 25px"}} >{amount}</div>
                </div>
                
           
                <p style={{fontSize:"12px"}} >incl VAT & FEES</p>
                <input  style={{position:"relative",top:"32px"}}  className="payment__amount--input"  type="text" name="promoCode" id="promoCode" placeholder="ENTER PROMO CODE" />
                <div className="paypalContainer">

                <PayPalButton 
                    amount={buyCredentials.amount} 
                    onSuccess={OnSuccess} 
                    options={{clientId:buyCredentials.clientID , currency:buyCredentials.currency}}
                    style={ButtonStyle}
                 />
          
                </div>
                

            </form>
        </div>

    )
}


export default Payment