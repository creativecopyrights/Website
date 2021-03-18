//PDF
import pdfMake from "pdfmake/build/pdfmake"
import pdfFonts from "pdfmake/build/vfs_fonts"
 import s from "../../../images/BG.svg"
import BackgroundImage from "../../../images/Background.png"

// CSS
import "./Certificate.css"

import Placeholder from "../../../images/formular.png"

pdfMake.vfs = pdfFonts.pdfMake.vfs;


const Certificate = () => {


    const onDownloadClick = () => {
        
      //  pdfMake.createPdf(docType)
      //  pdfMake.createPdf(docType).download("certification")
      pdfMake.createPdf(docType).open()
    }

    const date = new Date().toUTCString()
    console.log(date)

    var docType = {
        watermark: { text: 'PDF created by Edlix Studios', color: 'white', opacity: 0.3, bold: true, italics: false },
        background:{
            image:"bg",
            fit: [1600, 1600]
        },

        content:[
            { text:"CERTIFICATE" ,style:"header"},
            { text:date, style:"header", margin: [0,75,0,75] },
            { text:"Your official Certification. Your Hashcode is saved as QR Code", style:"body"
            , margin: [0,25,0,50]  },
          
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
        body:{
            alignment:"center",
            color:"white",
            fontSize:24,
            bold:false
        },
        qr:{
            alignment:"center"
        }
    },
    images: {
        bg: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwcKCAgIBwgGBwgHBwoHBwcGBg8ICQcKIBEWIiARExMYHSggGBoxGx8TITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDg0NDisZFRktLS0tKysrKysrKzcrKysrKy0rKysrKysrKzcrKys3KysrKysrKy0rNysrKysrKysrK//AABEIAKgBLAMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAACAQADBQb/xAAWEAEBAQAAAAAAAAAAAAAAAAAAARH/xAAaAQEBAQEAAwAAAAAAAAAAAAACAQQAAwUG/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhEDEQA/APLVGfVR81VZmKIrMxQarMxCrIpRFZFKCqVlIQo06NQ450bHShUKBRsOwaJwKNOjUKBQrpQsQ4FGw6NE4FGnRqFAsCulGicChXSjUKOdGw7BonHOpTo1CgUcOjiHH1rIpvVqyKUGsqKURlRSgsqMURWZiFVRigtRsMaroFGnRonHOjXShUKBRpjUOBRp0aJRzo10sGocc7BsdKFiHAo06NEoFGnRqHHOjXSjROOdg10oVCgUTooUfVKjLHrqrMxRFZoxQVZmKDVZFKIrIpQWVFKDWaspCFGulCoUCjTo1DjnUp0UKOdGulCicCjTo1DgUadGiUc6NdKFQ4FGulCxCgUbDo2CcCjYdFDjnRdLBxCj6dkVIwKyRSRlRSg1lRigqqMUSqzMUFWZigqzMUFRpJVc50a6WDUKOdGx0oUTgUadGxCgUadGocc6NdKFE4FGnRqFAo06NE451KdGoUc6NdKFE4FE6liE+jVGFjVmYoiszLBVmY4KsilEqsikLKilBZUaENVUYoiWDTo1ywKNOjRKOdF0sCocCjTo0SgUadGocc6NdKNE450adGoUCjTo1DgUadGicc6h0UKPoWRXijKrIpRKyopQWVGKDVVGKIrMxQarMxQVZmKCrIpRFGqxIFGulCoUCjTo2IUcxsOxKNOOdGnRqHAo06NEoFCulGxDjnRp0ahQKNOjROBYJ0UOPeUVeCM6szEiszFBVmYhVkUoNVkUojKikLKjFBVUYkVUYoLUK6DVdHOjTqUTjnYNOjYhQKFdKNQ4FCulGicc6NOjUKBQrpYNE4FCulGoUc6hVEOPaVGZniVUUojKikNZUYoKqjFBqszFEVmYoNVmYhVkUoisilBqpWUhCwadGoUCwK6Uahxzo2HYKUoFGnRonAoWOlGxDjnRsOpRKOdg06NQ4FgnRsEo9hmZlgqyKURWjMUFWZigqyKQqyKUSsqKUFlRigqsRiiKzMQqzMUFqNNKro50adGocChXSjRKBQpjUOBRp0aJQKNOjUOBYFdKNQo51CqYJx6rIrHHMzMURVRSgsqMQqqNCgqzMURWZigqyKUSqyKQsqKUFlRSGsqKSDQrpRsRY50a6UKhwLBp0ahRzo10o0TjnRrpRqFHOjTo0TgUTooUekrMwmzMxQWVmKIrMxQVZmKCysxIysxQayoxQVWIxIrMxQVZmKDVZmKDVGsyuGjWZCgWDYzCcGjWZCg0azIcGhVYTgUWZCj/2Q=="
       
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

