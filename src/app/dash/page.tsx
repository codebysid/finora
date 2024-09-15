import ShowTransactions from "@/components/ShowTransactions";
import { getAllTransactions } from "../../action/transaction";
import { auth } from "../../utils/auth";

async function page() {
  const session = await auth();
  let res;
  try {
    res = await getAllTransactions(session?.user?.email);
  } catch (err) {
    console.log(err);
  }
  return (
    <>
      <ShowTransactions transactions={res} />
    </>
  );
}

export default page;
