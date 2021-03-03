import "./Header.css"
import {Link} from "react-router-dom"


const Header = () => {
    return(
        <div className="navBar" >
            <div className="navBar__container" >
                <ul>
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
            </div>
        </div>
    )
}




export default Header