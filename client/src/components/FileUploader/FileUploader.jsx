import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../Uploader/Uploader.css'
import imageIcon from '../../image/icon-successfully.JPG'

const FileUploader = () =>{

    const Image = useSelector(state => state.image)

    return(
        <div className="Home">
            <div className='uploader'>
                <img className="icon" src={imageIcon} alt="img"/>
                <h1 className="title-upload" >Uploaded Successfully!</h1>
                <img className="imgSuccesfully" src={Image} alt="img"/>  
                <button className='buttonSave'>
                    Save Image
                </button>
            </div>
        </div>
        
    )
}

export default FileUploader

//"https://images.unsplash.com/photo-1653084019065-a4d4d2e1e508?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1109"