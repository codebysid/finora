import Dashboard from "@/components/Dashboard";

async function page() {
  return (
    <div>
      <Dashboard transactionLimit={10} allTransactions={false} />
    </div>
  );
}

export default page;
