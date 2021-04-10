import {NavLink} from "react-router-dom"

// CSS
import "./LinkGroup.css"


const LinkGroup = () => {
    return(
        <div className="linkGroup" >
            <div className="hLine" >
                <NavLink style={{pointerEvents:"none"}}  exact className="linkTag first" activeStyle={{backgroundColor:"#84CFF6"}} to="/" >1 Fill Form</NavLink>
                <NavLink style={{pointerEvents:"none"}} exact className="linkTag" activeStyle={{backgroundColor:"#84CFF6"}}  to="/payment" >2 Payment</NavLink>
                <NavLink style={{pointerEvents:"none"}} exact className="linkTag last" activeStyle={{backgroundColor:"#84CFF6"}}  to="/certificate" >3 Certificate</NavLink>
            </div>
        </div>
    )
}



export default LinkGroup