import { Meteor } from "meteor/meteor";
import { Players } from "../imports/api/players";

Meteor.startup(() => {
  Meteor.publish("players", function() {
    return Players.find({});
  });
});

Meteor.methods({
  insertPlayer: function(player) {
    Players.insert(player);
  }
});
