import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";

export const Players = new Mongo.Collection("players");

const PlayerSchema = new SimpleSchema({
  name: { type: String },
  team: { type: String },
  ballManipulation: { type: Number, defaultValue: 0 },
  kickingAbilities: { type = Number, default: 0 },
  passingAbilities: { type = Number, default: 0 },
  duelTackling: { type = Number, default: 0 },
  blockingAbilities: { type = Number, default: 0 },
  gameStrategy: { type = Number, default: 0 },
  playmakingRisks: { type = Number, default: 0 },
  notes: { type: String, optional: true }
})

Players.attachSchema(PlayerSchema);