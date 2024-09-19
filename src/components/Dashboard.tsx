import React from "react";
import TransactionMetrics from "./TransactionMetrics";
import ShowTransactions from "./ShowTransactions";
import { auth } from "@/utils/auth";
import { getAllTransactions } from "@/action/transaction";

const Dashboard = async ({
  allTransactions,
  transactionLimit,
}: {
  allTransactions: boolean;
  transactionLimit: number;
}) => {
  const session = await auth();
  let res;
  try {
    res = await getAllTransactions(session?.user?.email, transactionLimit);
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
