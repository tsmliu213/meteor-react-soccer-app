import React from "react";
import Avatar from "material-ui/Avatar";
import { ListItem } from "material-ui/List";

export default class TeamList extends React.Component {
  render() {
    return (
      <ListItem
        primaryText={this.props.player.name}
        leftAvatar={<Avatar src="player.jpg" />}
      />
    );
  }
}
