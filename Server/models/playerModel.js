import mongoose, { Schema } from 'mongoose'

const PlayerSchema = new mongoose.Schema(
  {
    _id:{
      type:String,
      required: true
    },
    name: {
      type:String,
      required: true
    },
    stats:{
      type: Array,
      default: []
    },
  },
  {timestamps: true}
);

const Player = mongoose.model("Player", PlayerSchema)
export default Player;