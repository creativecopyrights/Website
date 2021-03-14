
// Icons
import { BsPlusCircle } from "react-icons/bs";

// CSS
import "./FillForm.css"

// DropZone
import {useDropzone} from 'react-dropzone';
import { Link } from "react-router-dom";

/*
    TODO: 1 FillForm   
    1 Filedropper
    2 Textinput Email
    3 Textinput Verify Email
    TextArea
    Button

*/

const FillForm = () => {

    const {acceptedFiles, getRootProps, getInputProps} = useDropzone({maxFiles:1, accept:"image/jpeg, image/png, .obj, .fbx,.pdf"});

    const files = acceptedFiles.map(file => (
        <div style={{fontSize:"1rem"}} >
            {file.path} - {(file.size / 1000000).toFixed(2)} MB
        </div>
    ))

    return(
        <div className="fillFormContainer" >

            <div className="fillFormContainer__dropzone" >
                <div {...getRootProps({className: 'dropzone'})}>
                    <input {...getInputProps()} />
                    {acceptedFiles.length === 0 ? 
                                        <div>
                                        <BsPlusCircle style={{height:"30px",width:"30px",marginBottom:"15px"}} />
                                        <div  >DRAG AND DROP ANY DIGITAL FILE FORMAT HERE</div>
                                    </div>
                                    :
                                    <div  >{files}</div>
                    }


                </div>
            </div>

            <form className="fillFormContainer_form" >
                <input className="fillFormContainer_form--input" type="text" name="name" id="name" placeholder="YOUR NAME *" />
                <input  className="fillFormContainer_form--input"  type="email" name="email" id="email" placeholder="YOUR EMAIL ADRESS *" />
                <textarea className="fillFormContainer_form--textarea" name="textarea" id="" rows="6" placeholder="OPTIONAL NOTES                                   DESCRIBE YOUR WORK OR WRITE NOTES                      FOR YOUR MENVINIENCE THIS WILL BE SHOWN ON            THE FINAL CERTIFICATE" ></textarea>
                {acceptedFiles.length !== 0 ?

                                <div className="fillFormContainer_form--button" >
                                    <Link style={{fontFamily:"Architects Daughter,cursive" ,width:"100%",height:"100%",textAlign:"center"}} to="/payment" className="link">proceed to checkout</Link>
                                </div>
                                :
                                <div className="fillFormContainer_form--buttonGrey" >
                                <div style={{fontFamily:"Architects Daughter,cursive" , width:"100%",height:"100%",textAlign:"center",color:"white",fontWeight:"100"}}>paste a file to proceed</div>
                                </div>
                }

                           
            </form>
            
        </div>
    )
}



export default FillForm