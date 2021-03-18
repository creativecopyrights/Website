// React
import {useState} from "react"

// Paypal
import {PayPalScriptProvider,PayPalButtons, PayPalMessages } from "@paypal/react-paypal-js";



// CSS
import "./Payment.css"

const clientID = "AfFgcvEojFMqHfzGQQGyLAmsf3KaTSvTlXWKgV5GDg2q4dZZpBiH0hYhKHdybTMlU_WA69iwSZaRQXp7"
const sandboxAccount = "sb-cqnlt5320031@business.example.com"
const secret = "EOX4VjKj_DsLt-cbtByQsJUXFmBSBOImXFjG-Pb9ify1FOUvRPoQ6XA8uHrUbYo8iH0oDYsiRRcEWBhs"


const Payment = () => {



    const onAmountChange = (e) => {
        setAmount(e.target.value)
    }

    const [amount, setAmount] = useState(2);
    const [orderID, setOrderID] = useState(false);

    function onChange({ target: { value } }) {
        setAmount(value);
        setOrderID(false);
    }

    function createOrder(data, actions) {
        return actions.order
            .create({
                purchase_units: [
                    {
                        amount: {
                            value: amount,
                        },
                    },
                ],
            })
            .then((orderID) => {
                setOrderID(orderID);
                return orderID;
            });
    }


    const initialOptions = {
        "client-id": "sb",
        currency: "EUR",
        intent: "capture",
        "data-client-token": "",
        debug: true,
        "disable-funding": ["card","giropay","sepa","sofort"],
        "enable-funding":["credit"]
    
    }

    return(
        <PayPalScriptProvider options={initialOptions} >
        <div className="paymentContainer" >
            <form className="payment__amount" >

                <div style={{display:"flex",alignItems:"center",justifyContent:"center"}} >
                <h2 style={{fontSize:"32px"}}>€</h2>
                <input className="amountInput" type="number" name="amountInput" id="amountInput" value={amount} onChange={onAmountChange} />
                </div>
                
           
                <p style={{fontSize:"12px"}} >incl VAT & FEES</p>
                <input  style={{position:"relative",top:"32px"}}  className="payment__amount--input"  type="text" name="promoCode" id="promoCode" placeholder="ENTER PROMO CODE" />
                <div className="paypalContainer">

                <PayPalButtons createOrder={createOrder}  forceReRender={amount} />
             
                </div>
                

            </form>
        </div>
        </PayPalScriptProvider>
    )
}


export default Payment