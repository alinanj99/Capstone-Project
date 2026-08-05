import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema(
  {
    title: String,
    date: String,
    url: String,
    media_type: String,
    explanation: String,
    note: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Favorite = mongoose.model("Favorite", favoriteSchema);

export default Favorite;