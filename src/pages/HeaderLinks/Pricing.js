import {useState} from "react"
import axios from "axios"
import "./Pricing.css"

import Checkbox from "../../images/Checkbox.png"


const Pricing = () => {

 

    return(
        <div className="pricingContainer" >
        <div className="pricingContainer--header" >No Subscription. No Registration.</div>
        <div className="pricingContainer--text" >The transaction costs partially depend on the value of the cryptocurrency Ether.</div>
        <div className="pricingContainer--text" >At the moment, we are glad to be able to offer you this service for:</div>
        
        <div className="pricingContainer__cardSection" >
            <Card left={true} />
            <Card left={false} />
        </div>

    </div>
    )
}

const Card = (props) => {

    const [cost, setCost] = useState(42)

    if (props.left){
        return(
            <div className="cardContainer" >
                <div className="cardContainer--title"  >PAY AS YOU GO</div>
                <div className="cardContainer--body"  >€{cost}</div>
                <div style={{display:"flex",flexDirection:"column",height:"50%",justifyContent:"flex-end"}} >
                    <div style={{display:"flex",justifyContent:"flex-start",width:"60%",alignItems:"center",margin:"5px auto",fontSize:"14px"}} >
                        <img src={Checkbox} alt="Checkbox"/>
                        <div>One File Protection</div>
                    </div>
                    <div style={{display:"flex",justifyContent:"flex-start",width:"60%",alignItems:"center",margin:"5px auto",fontSize:"14px"}} >
                        <img src={Checkbox} alt="Checkbox"/>
                        <div>One File</div>
                    </div>
                    <button className="card--button" >GET STARTED</button>
                </div>
    
                
            </div>
        )
    }else {
        return(
            <div className="cardContainer" >
                <div className="cardContainer--title"  >PACKAGES</div>
                <div style={{width:"80%",margin:"25px auto 0px auto "}} >For package solution or individual solutions eg for businesses please contact us.</div>
                <div style={{display:"flex",flexDirection:"column",height:"57%",justifyContent:"flex-end"}} >
                    <div style={{display:"flex",justifyContent:"flex-start",width:"75%",alignItems:"center",margin:"5px auto",fontSize:"14px"}} >
                        <img src={Checkbox} alt="Checkbox"/>
                        <div>Multiple Files Protexction</div>
                    </div>
                    <div style={{display:"flex",justifyContent:"flex-start",width:"75%",alignItems:"center",margin:"5px auto",fontSize:"14px"}} >
                        <img src={Checkbox} alt="Checkbox"/>
                        <div>Individual Certificates per Filling</div>
                    </div>
                    <div style={{display:"flex",justifyContent:"flex-start",width:"75%",alignItems:"center",margin:"5px auto",fontSize:"14px"}} >
                        <img src={Checkbox} alt="Checkbox"/>
                        <div>No Timing Contraints</div>
                    </div>
                    <button className="card--button" >CONTACT US</button>
                </div>
    
                
            </div>)
    }

    
    
}


export default Pricing