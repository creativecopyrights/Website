import ReactDOM from "react-dom"
import {Link} from "react-router-dom"
import {useState,useEffect} from "react"
import "./DataProtection.css"


const DataProtection = (props) => {
    return ReactDOM.createPortal(<DataProtectionContent privacy={props.privacy} />,document.getElementById("info"))
}

const DataProtectionContent = (props) => {

    let testDate = new Date(1995, 11, 17)

    const terms =  {title:"TERMS & CONDITION",lastChange: Date.now() ,text:"Mein Text"}
    const privacy =  {title:"PRIVACY",lastChange:"last update",text:"Mein Text"}


    const [text,setText] = useState(terms)

    useEffect(()=>{

        if (props.privacy){
            setText(privacy)
        }

    },[])

 

    const ChangeText = (e) => {
  
        switch(e.target.getAttribute("itemid")){
            case "terms":
                setText(terms)
                break
            case "privacy":
                setText(privacy)
                break
            case "impressum":
                window.location = "/impressum"
                break
        }


    }

    return(
        <div className="dataProtection__Container" >
            <div className="dataProtection__Container--navbar" >
                <ul>
                    <li itemID="terms" onClick={ChangeText} >
                        TERMS AND CONDITIONS
                    </li>
                    <li itemID="privacy" onClick={ChangeText}  >
                        PRIVACY POLICY
                    </li>
                    <li itemID="impressum"  onClick={ChangeText}  >
                        IMPRESSUM
                    </li>
                </ul>
            </div>
            <div className="dataProtection__Container--info" >
                    <h1>{text.title}</h1>
                    <p>{text.lastChange}</p>
                    <p>{text.text}</p>
            </div>
        </div>
    )
}

export default DataProtection