const initialState = {
    image: "",
    allimages: [],
    
  };

  function rootReducer(state = initialState, action) {
    switch(action.type) {
      case "GET_IMAGES" :
        return {
          ...state,
          allimages: action.payload
        }
      case "GENERATE_IMAGE":
        console.log('el payload', action.payload)
        return{
          ...state,
          image: action.payload
        }
        default:
          return{...state}
    }
  }

  export default rootReducer;