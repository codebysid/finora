import { model, models, Schema } from "mongoose";

const transactionSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    type: {
      type: ["Expense", "Income"],
      required: true,
    },
    createdBy: {
      type: String,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Transaction =
  models?.Transaction || model("Transaction", transactionSchema);

export default Transaction;
