import Dashboard from "@/components/Dashboard";
import React from "react";

function page() {
  return (
    <div>
      <Dashboard transactionLimit={0} allTransactions />
    </div>
  );
}

export default page;
