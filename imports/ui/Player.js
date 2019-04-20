import React from "react";
import {
  Card,
  CardActions,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import Avatar from "material-ui/Avatar";
import Chip from "material-ui/Chip";
import { blue200, blue900 } from "material-ui/styles/colors";

const styles = {
  chip: {
    margin: 4
  },
  wrapper: {
    display: "flex",
    flexFlow: "row wrap"
  },
  button: {
    margin: 12
  }
};

export default class Player extends React.Component {
  render() {
    return (
      <Card>
        <CardMedia
          overlay={
            <CardTitle title="Barbara" subtitle="Offense: 12 - Defense: 8" />
          }
        >
          <img src="player.jpg" alt="" />
        </CardMedia>
        <CardText>
          <div style={styles.wrapper}>
            <Chip backgroundColor={blue200} style={styles.chip}>
              <Avatar size={32} color={blue200} backgroundColor={blue900}>
                2
              </Avatar>
              Ball Manipulation
            </Chip>
            <Chip backgroundColor={blue200} style={styles.chip}>
              <Avatar size={32} color={blue200} backgroundColor={blue900}>
                2
              </Avatar>
              Kicking Abilities
            </Chip>
            <Chip backgroundColor={blue200} style={styles.chip}>
              <Avatar size={32} color={blue200} backgroundColor={blue900}>
                2
              </Avatar>
              Passing Abilities
            </Chip>
            <Chip backgroundColor={blue200} style={styles.chip}>
              <Avatar size={32} color={blue200} backgroundColor={blue900}>
                2
              </Avatar>
              Duel/Tacking abilities
            </Chip>
            <Chip backgroundColor={blue200} style={styles.chip}>
              <Avatar size={32} color={blue200} backgroundColor={blue900}>
                2
              </Avatar>
              Field speed coverage
            </Chip>
            <Chip backgroundColor={blue200} style={styles.chip}>
              <Avatar size={32} color={blue200} backgroundColor={blue900}>
                2
              </Avatar>
              Blocking abilities
            </Chip>
            <Chip backgroundColor={blue200} style={styles.chip}>
              <Avatar size={32} color={blue200} backgroundColor={blue900}>
                2
              </Avatar>
              Game Strategy
            </Chip>
            <Chip backgroundColor={blue200} style={styles.chip}>
              <Avatar size={32} color={blue200} backgroundColor={blue900}>
                2
              </Avatar>
              Playmaking Risks
            </Chip>
          </div>
        </CardText>
        <CardActions />
      </Card>
    );
  }
}
