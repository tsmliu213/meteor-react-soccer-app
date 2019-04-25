import React from "react";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List } from "material-ui/List";
import Divider from "material-ui/Divider";
import { createContainer } from "meteor/react-meteor-data";
import { Link } from "react-router-dom";

// database
import { Players } from "../api/players";

import TeamList from "./Team-list";
import TeamStats from "./Team-stats";
import Player from "./Player";
import AccountsWrapper from "./AccountsWrapper";

const tempPlayer = {
  name: "Ooga",
  team: "Booga",
  ballManipulation: 2,
  kickingAbilities: 3,
  passingAbilities: 4,
  duelTackling: 2,
  fieldCoverage: 2,
  blockingAbilities: 2,
  gameStrategy: 2,
  playmakingRisks: 2,
  notes: 2
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPlayer: tempPlayer
    };

    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
  }

  renderPlayers = () => {
    return this.props.players.map(player => (
      <TeamList
        key={player._id}
        player={player}
        updateCurrentPlayer={this.updateCurrentPlayer}
      />
    ));
  };

  updateCurrentPlayer(player) {
    this.setState({
      currentPlayer: player
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <AppBar
            title="Soccer Application"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            showMenuIconButton={false}
          >
            <AccountsWrapper />
          </AppBar>
          <div className="row">
            <div className="col s12 m7">
              <Player player={this.state.currentPlayer} />
            </div>
            <div className="col s12 m5">
              <h2>Team list</h2>
              <Link to="/new" className="waves-effect waves-light btn">
                Add Player
              </Link>
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

App.propTypes = {
  players: PropTypes.array.isRequired
};

export default createContainer(() => {
  Meteor.subscribe("players");
  const user = Meteor.userId();

  return {
    players: Players.find({ owner: user }, { sort: { name: 1 } }).fetch()
  };
}, App);
