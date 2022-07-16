import mongoose from 'mongoose';

const toDoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please Enter Todo Title'],
    unique: true,
    maxlength: [40, "Title Can't be more than 40 characters"],
  },
  description: {
    type: String,
    required: [true, 'Please Enter Todo Description'],
    maxlength: [200, "Title Can't be more than 40 characters"],
  },
  isDone: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default toDoSchema;