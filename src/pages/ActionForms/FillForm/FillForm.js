
// Icons
import { BsPlusCircle } from "react-icons/bs";

// CSS
import "./FillForm.css"

// DropZone
import {useDropzone} from 'react-dropzone';

/*
    TODO: 1 FillForm   
    1 Filedropper
    2 Textinput Email
    3 Textinput Verify Email
    TextArea
    Button

*/

const FillForm = () => {

    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();


    return(
        <div className="fillFormContainer" >

            <div className="fillFormContainer__dropzone" >
                <div {...getRootProps({className: 'dropzone'})}>
                    <input {...getInputProps()} />
                    <BsPlusCircle style={{height:"30px",width:"30px",marginBottom:"15px"}} />
                    <div>DRAG AND DROP ANY DIGITAL FILE FORMAT HERE</div>
                </div>
            </div>

            <form className="fillFormContainer_form" >
                <input className="fillFormContainer_form--input" type="text" name="name" id="name" placeholder="YOUR NAME *" />
                <input  className="fillFormContainer_form--input"  type="email" name="email" id="email" placeholder="YOUR EMAIL ADRESS *" />
                <textarea name="textarea" id="" rows="7" placeholder="OPTIONAL NOTES                                   DESCRIBE YOUR WORK OR WRITE NOTES                      FOR YOUR MENVINIENCE THIS WILL BE SHOWN ON            THE FINAL CERTIFICATE" ></textarea>
                <input className="fillFormContainer_form--button" type="submit" value="proceed to checkout"/>
            </form>
            
    
        </div>
    )
}



export default FillForm