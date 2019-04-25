import React from "react";
import Avatar from "material-ui/Avatar";
import { ListItem } from "material-ui/List";

export default class TeamList extends React.Component {
  constructor(props) {
    super(props);
  }

  updateCurrentPlayer(player) {
    this.props.updateCurrentPlayer(player);
  }

  render() {
    return (
      <ListItem
        primaryText={this.props.player.name}
        leftAvatar={<Avatar src="player.jpg" />}
        onClick={this.updateCurrentPlayer.bind(this, this.props.player)}
      />
    );
  }
}
