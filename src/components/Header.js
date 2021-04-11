import "./Header.css"
import {Link,useLocation} from "react-router-dom"
import HomeImage from "../images/Home.png"



const Header = () => {

    const location = useLocation()

    return(
        <div className="navBar" >


            {location.pathname !== "/admin" && 
            
            <div className="navBar__container" >
                <ul>
                    <li>
                        <Link to="/" className="link home "> <img src={HomeImage} alt="HOME" /> </Link>
                    </li>
                    <li>
                        <Link to="/pricing" className="link">PRICING</Link>
                    </li>
                    <li>
                        <Link to="/usecases" className="link">USE CASES</Link>
                    </li>
                    <li>
                        <Link to="/how" className="link">HOW IT WORKS</Link>
                    </li>
                    <li>
                        <Link to="/verify" className="link">VERIFY A FILING</Link>
                    </li>
                </ul>  
            </div>}
           
            
        </div>
    )
}




export default Header