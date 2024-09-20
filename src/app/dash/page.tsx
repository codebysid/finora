import { getAllTransactions } from "@/action/transaction";
import Dashboard from "@/components/Dashboard";

async function page() {
  return (
    <div>
      <Dashboard
        getAllTransactionAction={getAllTransactions}
        transactionLimit={10}
        allTransactions={false}
      />
    </div>
  );
}

export default page;
