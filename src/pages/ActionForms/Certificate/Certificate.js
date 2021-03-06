
// CSS
import "./Certificate.css"

import Placeholder from "../../../images/formular.png"

const Certificate = () => {


    const onDownloadClick = () => {
        
    }

    return(
        <div>
            <div className="certificateContainer" >
                <p>HERE COMES INFO ABOUT THE CERTIFICATE</p>
                <p>WHAT'S IN THERE AND SO ON</p>
                <p>STORE IT SAFELY DIGITAL AND PRINT COPY</p>
                <p>YOU CAN ALWAYS GIVE YOUR TRANSCODE FOR VARIFICATION</p>
            </div>
        
            <div className="certificate--cert" >
                <img src={Placeholder} alt="Certificate" style={{maxWidth:"100%",maxHeight:"100%"}} />
            </div>



            <div className="certificate__buttonContainer" >
                <a href={Placeholder} download="certificate"  className="certificate--a" >
                    <input className="certificate--input"  onClick={onDownloadClick} type="button" value="download"/>
                </a>
            </div>

        </div>
    )
}


export default Certificate

