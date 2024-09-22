"use server";

import Budget from "@/models/Budget";
import connectToMongo from "@/utils/connectToMongo";

export async function setBudget(
  budget: number,
  month: number,
  year: number,
  createdBy: string | null | undefined
) {
  console.log("setting budget", { budget, month, year, createdBy });
  if (!budget || !month || !year || !createdBy)
    throw new Error("all info required");

  try {
    await connectToMongo();
    const res = await Budget.findOne({ month, year, createdBy });
    if (res) {
      const res = await Budget.updateOne(
        { month, year, createdBy },
        { $set: { budget } }
      );
      if (res)
        return JSON.parse(
          JSON.stringify({ status: 200, msg: "budget set successfully" })
        );
      throw new Error("cant update the budget");
    }
    const data = await Budget.create({ budget, month, year, createdBy });
    if (data)
      return JSON.parse(
        JSON.stringify({ status: 200, msg: "budget set successfully" })
      );
    throw new Error("not able to set budget");
  } catch (err) {
    console.log(err);
    throw new Error("err on setBudget");
  }
}

export async function getBudget(
  createdBy: string | null | undefined,
  month: number,
  year: number
) {
  if (!createdBy || !month || !year)
    throw new Error("getBudget:All info required");
  try {
    const res = await Budget.findOne({ createdBy, month, year });
    if (res) return JSON.parse(JSON.stringify(res));
    throw new Error("Error in fetching from mongodb or no data is present");
  } catch (err) {
    console.log(err);
    throw new Error("error in setBudget action");
  }
}
