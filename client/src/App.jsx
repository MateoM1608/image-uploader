import React from "react";
import { Route } from "react-router";

import Uploader from "./components/Uploader/Upoloader";
import FileUploader from "./components/FileUploader/FileUploader";

function App (){
    return(
        <React.Fragment>
            <Route exact path="/" component={Uploader}/>
            <Route exact path="/image" component={FileUploader} />
        </React.Fragment>
    );
}

export default App;