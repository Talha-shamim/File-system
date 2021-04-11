import React, { Component } from 'react';
import { Route , Switch , Redirect} from 'react-router-dom';
import FileInfo from './Component/fileInfo/fileinfo';
import LandingPage from './Component/LandingPage/landindPage';
import Form from './Component/newFiles/newfile';

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Switch>
                    <Route path="/landingpage" component={LandingPage}/>
                    <Route path="/newFile" component={Form}/>
                    <Route path="/fileInfo/:h/:d" component={FileInfo}/>
                </Switch>
            </React.Fragment>
         );
    }
}
 
export default App;