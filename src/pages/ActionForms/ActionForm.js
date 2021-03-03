
// CSS
import "./ActionForm.css"

// Component
import LinkGroup from "../../components/LinkGroup/LinkGroup"

const ActionForm = ({children}) => {
    return(
        <div className="actionFormContainer" >
            
            
            <div className="actionFormContainer__nav"  >
                <LinkGroup />
            </div>



            <div className="actionFormContainer__form" >
                <div style={{margin:"15px",width:"100%"}} >
                    {children}
                </div>
            </div>
     
        </div>
    )
}


export default ActionForm