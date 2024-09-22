"use client";
import React, { ChangeEvent, Dispatch, useState } from "react";
import {
  convertToINR,
  getCurrentMonthAndYear,
  getMonthName,
} from "@/utils/helper";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { setBudget as setBudgetAction } from "@/action/budget";

function BudgetForm({
  setBudgetDialog,
}: {
  setBudgetDialog: Dispatch<boolean>;
}) {
  const [budget, setBudget] = useState<number>(0);
  const auth = useSession();

  const { month, year } = getCurrentMonthAndYear();

  const handleBudgetChange = (e: ChangeEvent<HTMLInputElement>) =>
    Number(e.target.value) > 0 && setBudget(Number(e.target.value));

  const handleBudget = async () => {
    if (budget <= 0) return toast("Budget can't be 0 😵");
    try {
      const res = await setBudgetAction(
        budget,
        month,
        year,
        auth?.data?.user?.email
      );
      if (res.status == 200) {
        setBudgetDialog(false);
        return toast("Budget Set 💸");
      }
      return toast("not able to set budget at the moment 😢");
    } catch (err) {
      console.log(err);
      return toast("something went wrong, try again 🤦");
    }
  };

  return (
    <div className=" flex flex-col gap-3 ">
      <h2>
        Set your budget for {getMonthName(month)} {year}
      </h2>
      <Input
        type="number"
        placeholder={convertToINR(3500)}
        value={budget}
        onChange={handleBudgetChange}
      />
      <Button type="submit" size="sm" onClick={handleBudget}>
        Set budget
      </Button>
    </div>
  );
}

export default BudgetForm;
