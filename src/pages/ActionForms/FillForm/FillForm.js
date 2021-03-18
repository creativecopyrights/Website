import {useEffect,useState} from "react"
import sha256 from 'crypto-js/sha256';

// Icons
import { BsPlusCircle } from "react-icons/bs";

// CSS
import "./FillForm.css"

// DropZone
import {useDropzone} from 'react-dropzone';
import { Link, Redirect } from "react-router-dom";



const FillForm = () => {

    let hash = ""

    const [files,setFiles] = useState([])
    const [name,setName] = useState("")
    const [email,setEmail] =useState("")


    useEffect(()=>{
        console.log(hash)
    },[hash])

    const ChangeName = (e) => {

        setName(e.target.value)
    } 

    const ChangeEmail = (e) => {
        setEmail(e.target.value)
    } 

    function CreateHashFromFile(e) {


        const reader = new FileReader()

        reader.onload = function(){

            hash = ""
            hash = sha256(reader.result)
            console.log("HASH " + hash)
            setFiles(e.target.files)
        }


            if (e.target.files.length > 0 ){
                reader.readAsDataURL(e.target.files[0])
            }
          
        
     
      
        
        
    }

    return(
        <div className="fillFormContainer" >

           
            <div className="fillFormContainer__dropzone" >
            <form className="fillFormContainer_form" >
            <div className="dropzone"  >            
                <input type="file"  className="filepicker" onChange={CreateHashFromFile} />
                <div className="inputOverlay" >
                <BsPlusCircle style={{height:"30px",width:"30px",marginBottom:"15px"}} />
                {files.length === 0 ? <div>DRAG AND DROP ANY DIGITAL FILE FORMAT HERE</div> :  <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
                    <div style={{width:"100%",wordWrap:"break-word"}} >
                        {"Filename: " + files[0].name}
                    </div>
                    <br/>
                    <div>
                        {"File Size: " + Number(files[0].size/ 1000000).toFixed(2) +  " MB"}
                    </div>
                </div>}
                </div>
                          
               
            </div>

                <input onChange={ChangeName} value={name} className="fillFormContainer_form--input" type="text" name="name" id="name" placeholder="YOUR NAME *" />
                <input onChange={ChangeEmail} value={email}  className="fillFormContainer_form--input"  type="email" name="email" id="email" placeholder="YOUR EMAIL ADRESS *" />
                <textarea className="fillFormContainer_form--textarea" name="textarea" id="" rows="6" placeholder="OPTIONAL NOTES                                   DESCRIBE YOUR WORK OR WRITE NOTES                      FOR YOUR MENVINIENCE THIS WILL BE SHOWN ON            THE FINAL CERTIFICATE" ></textarea>
                {files.length !== 0 && name !== "" && email !== "" ?

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
        </div>
    )
}



export default FillForm