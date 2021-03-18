//PDF
import pdfMake from "pdfmake/build/pdfmake"
import pdfFonts from "pdfmake/build/vfs_fonts"

import BackgroundImage from "../../../images/Background.png"

// CSS
import "./Certificate.css"

import Placeholder from "../../../images/formular.png"

pdfMake.vfs = pdfFonts.pdfMake.vfs

const Certificate = () => {


    const onDownloadClick = () => {
        
      //  pdfMake.createPdf(docType)
      //  pdfMake.createPdf(docType).download("certification")
      pdfMake.createPdf(docType).open()
    }

    const date = new Date().toUTCString()
    console.log(date)

    var docType = {
        background:{
            image:"bg",
            fit: [1500, 1500]
        },

        content:[
            { text:"CERTIFICATE" ,style:"header"},
            { text:date, style:"header" },
        {
            qr: "21619a0e2009d34091acb7fa09637b905c630f49e4633aa36032b6580c8787d8",
            style:"qr"
        }

    ],
    styles:{
        header:{
            alignment:"center",
            color:"white",
            fontSize:32,
            bold:true
        },
        qr:{
            alignment:"center"
        }
    },
    images: {
        bg: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhZGllbnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
      }
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
           
                    <input className="certificate--input"  onClick={onDownloadClick} type="button" value="download"/>
              
            </div>

        </div>
    )
}


export default Certificate

