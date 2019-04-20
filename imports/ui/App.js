import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import AppBar from "material-ui/AppBar";

import TeamList from "./Team-list";
import TeamStats from "./Team-stats";
import Player from "./Player";

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <AppBar
            title="Soccer Application"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            showMenuIconButton={false}
          />
          <div className="row">
            <div className="col s12 m7">
              <Player />
            </div>
            <div className="col s12 m5">
              <TeamList />
            </div>
            <div className="col s12 m7">
              <TeamStats />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
