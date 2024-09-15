import { ObjectId } from "mongoose";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { convertToINR, getTotalAmount } from "@/utils/helper";
import ShowBalance from "./ShowBalance";
import BalanceCard from "./BalanceCard";
import { BadgeIndianRupee, MoveDownRight, MoveUpRight } from "lucide-react";

type TransactionT = {
  type: "Income" | "Expense";
  description: String;
  amount: number;
  _id: ObjectId;
  createdBy: String;
  result: {
    email: string;
    name: string;
    _id: ObjectId;
  };
};

interface IShowTransaction {
  transactions: TransactionT[];
}

function ShowTransactions({ transactions }: IShowTransaction) {
  let expenses, income;
  if (transactions && transactions.length > 0) {
    expenses = getTotalAmount(transactions, "Expense");
    income = getTotalAmount(transactions, "Income");
    console.log({ expenses, income });
  }

  return (
    <div>
      <div className=" flex flex-row gap-2 p-2 flex-wrap">
        {expenses && (
          <BalanceCard
            title="Total Expenses"
            amount={expenses}
            icon={<MoveDownRight className=" text-red-500" />}
          />
        )}
        {income && (
          <BalanceCard
            title="Total Income"
            amount={income}
            icon={<MoveUpRight className="text-green-500" />}
          />
        )}
        {income && expenses && (
          <BalanceCard
            title={"Current Balance"}
            amount={String(income - expenses)}
            icon={<BadgeIndianRupee />}
          />
        )}
      </div>
      {transactions && transactions.length > 0 ? (
        <Table>
          <TableCaption>A list of your transactions.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="">Description</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => {
              return (
                <TableRow key={transaction.result.email}>
                  <TableCell className=" font-medium">
                    {transaction.description}
                  </TableCell>
                  <TableCell
                    className={`${
                      transaction.type == "Income"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {transaction.type}
                  </TableCell>
                  <TableCell className="text-right">
                    {convertToINR(transaction.amount)}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      ) : (
        <p>No transactions</p>
      )}
    </div>
  );
}

export default ShowTransactions;
