import { Schema, models, model } from "mongoose";

const budgetSchema = new Schema({
  budget: {
    type: Number,
    required: true,
  },
  month: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  createdBy: {
    type: String,
    ref: "User",
    required: true,
  },
});

const Budget = models?.Budget || model("Budget", budgetSchema);
export default Budget;
