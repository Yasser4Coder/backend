import mongoose from "mongoose";

const deadlineSchema = mongoose.Schema({
  deadline: String,
});

const deadline = mongoose.model("deadline", deadlineSchema);

export default deadline;
