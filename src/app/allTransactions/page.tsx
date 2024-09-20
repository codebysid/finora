import Dashboard from "@/components/Dashboard";
import MonthPicker from "@/components/MonthPicker";
function page() {
  return (
    <div>
      <MonthPicker />
      <Dashboard transactionLimit={0} allTransactions />
    </div>
  );
}

export default page;
