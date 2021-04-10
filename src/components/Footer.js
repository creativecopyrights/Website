import {Link,useLocation} from "react-router-dom"

import PressKit from "../download/presskit/PressKit.zip"

import "./Footer.css"


const Footer = () => {

    const location = useLocation()


    return(
        <div className="footer" >

{location.pathname !== "/admin" &&

<div className="footer__container" >
                <ul >
                    <li>
                        <a className="footerLink__pressKit" href={PressKit} >PRESS KIT</a>
                    </li>
                    <li>
                        <Link className="footerLink" to="/impressum" >IMPRESSUM</Link>
                    </li>
                    <li>
                        <Link className="footerLink" to="/termsandconditions"  >TERMS & CONDITIONS</Link>
                    </li>
                    <li>
                        <Link className="footerLink" to="/dataprotection"  >DATA PROTECTION</Link>
                    </li>
                </ul>
            </div>
}

            
        </div>
    )
}


export default Footer