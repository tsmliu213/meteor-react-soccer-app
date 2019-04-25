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
    const { player } = this.props;
    const defense =
      player.duelTackling +
      player.fieldCoverage +
      player.gameStrategy +
      player.playmakingRisks;
    const offense =
      player.kickingAbilities +
      player.gameStrategy +
      player.ballManipulation +
      player.passingAbilities +
      player.fieldCoverage +
      player.playmakingRisks;
    const total =
      player.kickingAbilities +
      player.gameStrategy +
      player.ballManipulation +
      player.passingAbilities +
      player.fieldCoverage +
      player.duelTackling +
      player.blockingAbilities +
      player.playmakingRisks;

    return (
      <Card>
        <CardMedia
          overlay={
            <CardTitle
              title={player.name}
              subtitle={`Offense: ${offense} - Defense: ${defense} - Total: ${total}`}
            />
          }
        >
          <img src="player.jpg" alt="" />
        </CardMedia>
        <CardText>
          <div style={styles.wrapper}>
            <Chip backgroundColor={blue200} style={styles.chip}>
              <Avatar size={32} color={blue200} backgroundColor={blue900}>
                {player.ballManipulation}
              </Avatar>
              Ball Manipulation
            </Chip>
            <Chip backgroundColor={blue200} style={styles.chip}>
              <Avatar size={32} color={blue200} backgroundColor={blue900}>
                {player.kickingAbilities}
              </Avatar>
              Kicking Abilities
            </Chip>
            <Chip backgroundColor={blue200} style={styles.chip}>
              <Avatar size={32} color={blue200} backgroundColor={blue900}>
                {player.passingAbilities}
              </Avatar>
              Passing Abilities
            </Chip>
            <Chip backgroundColor={blue200} style={styles.chip}>
              <Avatar size={32} color={blue200} backgroundColor={blue900}>
                {player.duelTackling}
              </Avatar>
              Duel/Tacking abilities
            </Chip>
            <Chip backgroundColor={blue200} style={styles.chip}>
              <Avatar size={32} color={blue200} backgroundColor={blue900}>
                {player.fieldCoverage}
              </Avatar>
              Field speed coverage
            </Chip>
            <Chip backgroundColor={blue200} style={styles.chip}>
              <Avatar size={32} color={blue200} backgroundColor={blue900}>
                {player.blockingAbilities}
              </Avatar>
              Blocking abilities
            </Chip>
            <Chip backgroundColor={blue200} style={styles.chip}>
              <Avatar size={32} color={blue200} backgroundColor={blue900}>
                {player.gameStrategy}
              </Avatar>
              Game Strategy
            </Chip>
            <Chip backgroundColor={blue200} style={styles.chip}>
              <Avatar size={32} color={blue200} backgroundColor={blue900}>
                {player.playmakingRisks}
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
