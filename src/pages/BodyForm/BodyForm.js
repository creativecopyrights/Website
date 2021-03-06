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



/*
<div className="innerContainer" >


                <div  className="container__form" >
                    <LinkGroup />
                    <ImageDropper />
                    <form className="form" >
                        <input className="inputField" placeholder="YOUR NAME *" type="text" name="nameValue" id="name"/>
                        <input className="inputField" placeholder="YOUR EMAIL ADRESS *" type="email" name="emailValue" id="email"/>
                        <textarea className="textField" rows="7" draggable="false" placeholder="OPTIONAL NOTES DECRIBE YOUR WORK OR WRITE NOTES FOR YOUR CONVINIENCE THIS WILL BE SHOWN ON THE FINAL CERTIFICATE"  ></textarea>
                        <input className="submitButton" type="submit" value="proceed to checkout"/>
                    </form>
                </div>


                <div className="text" >
                <h3 style={{color:"white", fontSize:"62px",letterSpacing:"1.5px",fontWeight:"300",}} >YOUR IDEAS ARE YOUR POWER.</h3>
                    <h3 style={{color:"white",fontSize:"62px",fontWeight:"300",position:"relative",top:"-50px",letterSpacing:"1.5px"}} >PROTECT THEM.</h3>
                    <div style={{color:"white", fontWeighst:"100", position:"relative", top:"-70px",lineHeight:"1.5",letterSpacing:"1.5px"}} >
                        <p>We provide a timestamp for your file and save it safely on a blockchain</p>
                        <p>Lorem ipsum is a placeholder text used to fill unfilled spaces until proper text is found.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Phasellus id semper enim. 
                            Morbi nec felis vitae enim molestie sagittis id eu sem. 
                            Nulla nibh quam, commodo ac arcu a, dictum rutrum nunc. 
                            Etiam eget libero semper, feugiat sem quis, interdum libero. 
                            By the way if you were wondering that piece of text doesn't mean anything.
                        </p>
                    </div>
                    <div className="buttons" >
                        <button className="buttons_btn" >HOW IT WORKS</button>
                        <button className="buttons_btn" >GET STARTED</button>
                    </div>
                </div>

                
            </div>
*/