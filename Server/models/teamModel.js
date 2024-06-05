import mongoose, { Schema } from "mongoose";

const teamSchema = new Schema(
  {
    _id: {
      type:String,
      required:true
    },
    name: {
      type:String,
      required: true
    },
    videos:{
      type:Array,
      default: []
    },
    logo:{
      type:String,
      required:true
    },
    conference:{
      type:String,
      required:true,
    },
    topPerformers:{
      type: Array,
      default:[],
    },
    stats:{
      type: Array,
      default:[],
    }
  }
)

const Team = mongoose.model("Team", teamSchema)
export default Team;
