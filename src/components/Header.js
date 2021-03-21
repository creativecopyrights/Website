import "./Header.css"
import {Link,useLocation} from "react-router-dom"



const Header = () => {

    const location = useLocation()

    return(
        <div className="navBar" >

            <Link to="/" style={{width:"130px",position:"relative",left:"50px",top:"30px",height:"180px"}} ></Link>
            {location.pathname !== "/admin" && 
            
            <div className="navBar__container" >
                <ul>
                    <li>
                        <Link to="/" className="link">HOME</Link>
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