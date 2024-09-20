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
import { Button } from "./ui/button";
import TransactionCell from "./TransactionCell";
import Link from "next/link";
import { getCurrentMonthAndYear } from "@/utils/helper";

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

function ShowTransactions({ transactions }: IShowTransaction) {
  const { month, year } = getCurrentMonthAndYear();
  return (
    <>
      <div className="pt-10">
        <div
          className={`${
            transactions && transactions.length <= 10 && "h-[47vh]"
          } overflow-y-auto lg:px-8`}
        >
          {transactions && transactions.length > 0 ? (
            <Table>
              <TableCaption className="lg:text-xl">
                A list of your transactions.
              </TableCaption>
              <TableHeader>
                <TableRow className=" lg:text-3xl">
                  <TableHead className="">Description</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => {
                  return (
                    <TransactionCell
                      key={transaction.result.email}
                      description={transaction.description}
                      createdAt={transaction.createdAt}
                      type={transaction.type}
                      amount={Number(transaction.amount)}
                    />
                  );
                })}
              </TableBody>
            </Table>
          ) : (
            <p>No transactions</p>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center pt-4">
        {transactions && transactions.length <= 10 && (
          <Button variant="secondary" asChild>
            <Link href={`/allTransactions/${month}/${year}`}>
              View All Transactions
            </Link>
          </Button>
        )}
      </div>
    </>
  );
}

export default ShowTransactions;
