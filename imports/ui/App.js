import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List } from "material-ui/List";
import Divider from "material-ui/Divider";

import TeamList from "./Team-list";
import TeamStats from "./Team-stats";
import Player from "./Player";

class App extends React.Component {
  getPlayers = () => {
    return [
      {
        _id: 1,
        name: "John Leer",
        ballManipulation: 1,
        kickingAbilities: 4,
        passingAbilities: 2,
        duelTacking: 2,
        fieldCoverage: 5,
        blockingAbilities: 1,
        gameStrategy: 3,
        playmakingRisks: 2
      },
      {
        _id: 2,
        name: "Hola",
        ballManipulation: 1,
        kickingAbilities: 4,
        passingAbilities: 2,
        duelTacking: 2,
        fieldCoverage: 5,
        blockingAbilities: 1,
        gameStrategy: 3,
        playmakingRisks: 2
      },
      {
        _id: 3,
        name: "Manny",
        ballManipulation: 1,
        kickingAbilities: 4,
        passingAbilities: 2,
        duelTacking: 2,
        fieldCoverage: 5,
        blockingAbilities: 1,
        gameStrategy: 3,
        playmakingRisks: 2
      }
    ];
  };

  renderPlayers = () => {
    return this.getPlayers().map(player => (
      <TeamList key={player._id} player={player} />
    ));
  };

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
              <Divider />
              <List>{this.renderPlayers()}</List>
              <Divider />
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
