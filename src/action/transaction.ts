"use server";
import Transaction from "@/models/Transaction";
import connectToMongo from "@/utils/connectToMongo";

export async function addTransaction({
  description,
  type,
  amount,
  email,
}: {
  description: string;
  type: "Income" | "Expense";
  amount: number;
  email: string | undefined | null;
}) {
  if (!description || !type || !amount || !email) {
    throw new Error("not enough info");
  }
  console.log({ description, amount, type }, "action");
  try {
    await connectToMongo();
    const transaction = await Transaction.create({
      description,
      amount,
      type,
      createdBy: email,
    });
    if (transaction)
      return JSON.parse(JSON.stringify({ status: 200, message: "Successful" }));
    throw new Error("Can't access DB");
  } catch (err) {
    console.log(err);
    throw new Error("some error occurred");
  }
}

export async function getAllTransactions(email: string | undefined | null) {
  if (!email) throw new Error("No email provided");
  console.log("action", { email });
  try {
    await connectToMongo();
    const allTransactions = await Transaction.aggregate([
      {
        $match: {
          createdBy: email,
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "createdBy",
          foreignField: "email",
          as: "result",
        },
      },
      {
        $unwind: {
          path: "$result",
          preserveNullAndEmptyArrays: true,
        },
      },
    ]);
    console.log({ allTransactions });
    if (allTransactions.length > 0)
      return JSON.parse(JSON.stringify(allTransactions));
    throw new Error("no transactions found");
  } catch (err) {
    console.log(err);
    throw new Error("error in getAllTransactions");
  }
}
