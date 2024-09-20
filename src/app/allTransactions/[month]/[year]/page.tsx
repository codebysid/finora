import { getAllTransactions } from "@/action/transaction";
import Dashboard from "@/components/Dashboard";
import MonthPicker from "@/components/MonthPicker";

function page({ params }: { params: { month: string; year: string } }) {
  const { month, year } = params;
  return (
    <div>
      <MonthPicker />
      <Dashboard
        getAllTransactionAction={getAllTransactions}
        transactionLimit={0}
        month={month}
        year={year}
        allTransactions
      />
    </div>
  );
}

export default page;
