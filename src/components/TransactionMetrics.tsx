import React from "react";
import BalanceCard from "./BalanceCard";
import { ObjectId } from "mongoose";
import { getCurrentMonthAndYear, getTotalAmount } from "@/utils/helper";
import {
  BadgeIndianRupee,
  HandCoins,
  MoveDownRight,
  MoveUpRight,
} from "lucide-react";
import { toast } from "sonner";
import { getBudget } from "@/action/budget";
import { auth } from "@/utils/auth";

type TransactionT = {
  type: "Income" | "Expense";
  description: String;
  amount: number;
  _id: ObjectId;
  createdBy: String;
  createdAt: String;
  result: {
    email: string;
    name: string;
    _id: ObjectId;
  };
};

interface IShowTransaction {
  transactions: TransactionT[];
}

async function TransactionMetrics({ transactions }: IShowTransaction) {
  const session = await auth();
  const { month, year } = getCurrentMonthAndYear();
  let budget = 0;
  try {
    const res = await getBudget(session?.user?.email, month, year);
    if (res) budget = res?.budget;
  } catch (err) {
    console.log(err);
    toast("something is wrong, try again");
  }
  let expenses, income;
  if (transactions && transactions.length > 0) {
    expenses = getTotalAmount(transactions, "Expense");
    income = getTotalAmount(transactions, "Income");
    console.log({ expenses, income });
  }
  return (
    <div className=" flex flex-row gap-3 lg:gap-10 p-2 flex-wrap">
      {expenses > 1 && (
        <BalanceCard
          title="Total Expenses"
          amount={expenses}
          icon={<MoveDownRight className=" metricsIcon" />}
        />
      )}
      {income > 1 && (
        <BalanceCard
          title="Total Income"
          amount={income}
          icon={<MoveUpRight className=" metricsIcon" />}
        />
      )}
      {income > 1 && expenses > 1 && (
        <BalanceCard
          title={"Current Balance"}
          amount={income - expenses}
          icon={<BadgeIndianRupee className="metricsIcon" />}
        />
      )}
      {budget && budget > 0 && (
        <BalanceCard
          title="Budget Report"
          amount={budget}
          icon={<HandCoins className="metricsIcon" />}
          isBudgetCrossed={budget < expenses}
        />
      )}
    </div>
  );
}

export default TransactionMetrics;
