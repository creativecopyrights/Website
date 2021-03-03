import {MdAddCircleOutline} from "react-icons/md"
import "./ImageDropper.css"
import {useCallback} from 'react'

// Dropzone
import {useDropzone} from 'react-dropzone'

const ImageDropper = () => {

    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
      }, [])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({maxFiles:1,  onDrop})

    return(
        <div style={{height:"180px",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <div {...getRootProps()} style={{width:"100%"}}>
                <input {...getInputProps()} />{isDragActive ?
                          <div className="imageDropper"> 
                          <div className="imageDropper__column" >
                              <MdAddCircleOutline className="imageDropper__icon"  />
                              <p>DRAG AND DROP ANY DIGITAL FILE FORMAT HERE</p>
                          </div>
                        </div> :
          <div className="imageDropper">
            <div className="imageDropper__column" >
                <MdAddCircleOutline className="imageDropper__icon" />
                <p>DRAG AND DROP ANY DIGITAL FILE FORMAT HERE</p>
            </div>
          </div>
      }
        </div>
        </div>
    )
}


export default ImageDropper