// Components
import ImageDropper from "../../components/imagedropper/ImageDropper"

// LinkGroup
import LinkGroup from "../../components/LinkGroup/LinkGroup"

// CSS
import "./BodyForm.css"


const BodyForm = ({props,childrenLeft,childrenRight}) => {
    return(
        <div className="bodyFormContainer" >

        <div className="bodyFormContainer__form" >
            {childrenLeft}
        </div>    

        <div className="bodyFormContainer__body" >
            {childrenRight }
           
        </div>
            
        </div>
    )
}

export default BodyForm