import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import FileInfo from "./Component/fileInfo/fileinfo";
import fileInfo_ from "./Component/fileInfo_/fileinfo";
import NewFile from "./Component/file_to_folder/file_to_folder";
import LandingPage from "./Component/LandingPage/landindPage";
import Form from "./Component/newFiles/newfile";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/landingpage" component={LandingPage} />
          <Route exact path="/newFile/:place" component={Form} />
          <Route path="/fileInfo/:h/:d/:place" component={FileInfo} />
          <Route path="/fileInfo_/:h/:d/:place" component={fileInfo_} />
          <Route path="/newFileInFolder/:d/:h" component={NewFile} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
