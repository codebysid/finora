import Loader from "../../components/Loader";
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
