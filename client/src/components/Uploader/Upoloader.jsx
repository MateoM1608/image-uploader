import React ,{ useState} from "react";
import { useDispatch } from "react-redux";
import {generetImage} from '../../redux/actions/index'
import {useHistory} from 'react-router-dom'
import '../Uploader/Uploader.css'
import image from '../../image/image_uploader.JPG'


const Uploader = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    
    const handlerChanges = e => {
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            dispatch(generetImage(reader.result))
            history.push("/image")
        }
    }

    

    return(
        <div className="Home">
            <div className="uploader">
                <h1 className="title-upload">Upload your image</h1>
                <p className="txt_be">File should be Jpeg, Png...</p>
                <div className="display_image">
                    <img className="image" src={image} alt="img"/>
                </div>
                <p className="txt_or">Or</p>
                <div className="file-select">
                    <input  type="file" onChange={e => handlerChanges(e)}/>
                </div>
                {/* <img src={imageSrc} alt="img"/> */}
            </div>
        </div>
        
    )
}

export default Uploader