import mongoose from 'mongoose';
const { Schema } = mongoose;

 const PostSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  date: { type: Date, default: Date.now },
});

export const Post = mongoose.model('Posts', PostSchema )
