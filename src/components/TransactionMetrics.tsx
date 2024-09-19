import React from "react";
import BalanceCard from "./BalanceCard";
import { ObjectId } from "mongoose";
import { getTotalAmount } from "@/utils/helper";
import { BadgeIndianRupee, MoveDownRight, MoveUpRight } from "lucide-react";
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

function TransactionMetrics({ transactions }: IShowTransaction) {
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
          icon={
            <MoveDownRight
              className=" lg:h-10
                lg:w-10"
            />
          }
        />
      )}
      {income > 1 && (
        <BalanceCard
          title="Total Income"
          amount={income}
          icon={
            <MoveUpRight
              className=" lg:h-10
                lg:w-10"
            />
          }
        />
      )}
      {income > 1 && expenses > 1 && (
        <BalanceCard
          title={"Current Balance"}
          amount={String(income - expenses)}
          icon={
            <BadgeIndianRupee
              className="lg:h-10
                lg:w-10"
            />
          }
        />
      )}
    </div>
  );
}

export default TransactionMetrics;
