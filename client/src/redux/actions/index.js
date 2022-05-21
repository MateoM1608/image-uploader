import axios from 'axios'

export const getImages = () => dispatch => {
    axios.get("URL")
    .then(res => dispatch({type: "GET_IMAGES", payload: res.data}))
}

export const saveImage = (body) => () => {
    axios.post("URL", body)
    .then(res => res)
}   

export const generetImage = (payload) => {
    return {
        type: "GENERATE_IMAGE",
        payload
    }
}