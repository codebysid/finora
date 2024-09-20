import React from "react";
import TransactionMetrics from "./TransactionMetrics";
import ShowTransactions from "./ShowTransactions";
import { auth } from "@/utils/auth";

interface IDashboard {
  allTransactions: boolean;
  transactionLimit: number;
  getAllTransactionAction: (
    email: string | null | undefined,
    limit: number,
    month: number,
    year: number
  ) => Promise<any>;
  month?: string;
  year?: string;
}

const Dashboard = async ({
  allTransactions,
  transactionLimit,
  getAllTransactionAction,
  month,
  year,
}: IDashboard) => {
  const session = await auth();
  let res;
  try {
    res = await getAllTransactionAction(
      session?.user?.email,
      transactionLimit,
      Number(month) || 0,
      Number(year) || 0
    );
  } catch (err) {
    console.log(err);
  }
  return (
    <div className="pt-8">
      {!allTransactions && <TransactionMetrics transactions={res} />}
      <ShowTransactions transactions={res} />
    </div>
  );
};

export default Dashboard;
