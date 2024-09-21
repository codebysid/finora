import { Loader } from "lucide-react";
import dynamic from "next/dynamic";
const AddTransaction = dynamic(
  () => import("../../components/AddTransaction"),
  { loading: () => <Loader /> }
);
import React from "react";

function page() {
  return <AddTransaction />;
}

export default page;
