import {NavLink} from "react-router-dom"

// CSS
import "./LinkGroup.css"


const LinkGroup = () => {
    return(
        <div className="linkGroup" >
            <div className="hLine" >
                <NavLink exact className="linkTag" activeStyle={{backgroundColor:"white"}} to="/" >1 Fill Form</NavLink>
                <NavLink exact className="linkTag" activeStyle={{backgroundColor:"white"}}  to="/payment" >2 Payment</NavLink>
                <NavLink exact className="linkTag" activeStyle={{backgroundColor:"white"}}  to="/certificate" >3 Certificate</NavLink>
            </div>
        </div>
    )
}



export default LinkGroup