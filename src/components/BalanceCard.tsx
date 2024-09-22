import { convertToINR } from "@/utils/helper";
import React, { ReactNode } from "react";

interface IBalanceCard {
  title: string;
  amount: number;
  icon: ReactNode;
  isBudgetCrossed?: boolean;
}

function BalanceCard({ title, amount, icon, isBudgetCrossed }: IBalanceCard) {
  const formattedAmount = convertToINR(amount);
  return (
    <div
      className={`px-3 py-4 lg:p-4 flex-1 rounded-lg flex flex-col gap-4 lg:gap-32 justify-center items-start bg-secondary ${
        isBudgetCrossed && "bg-red-500 bg-opacity-40"
      }`}
    >
      <div className=" flex flex-row justify-between items-center w-full">
        <p className="lg:text-3xl font-bold">{title}</p>
        {icon}
      </div>
      {isBudgetCrossed && title.includes("Budget") ? (
        <p className={`lg:text-2xl text-sm font-extrabold `}>
          You expenses has crossed the budget of {formattedAmount}
        </p>
      ) : !isBudgetCrossed && title.includes("Budget") ? (
        <p className={`lg:text-2xl text-sm font-extrabold `}>
          Your expenses are in the budget of {formattedAmount}
        </p>
      ) : (
        <p
          className={`lg:text-4xl text-sm font-extrabold 
          ${title.includes("Expense") && "text-red-500"} 
          ${title.includes("Income") && "text-green-500"}`}
        >
          {formattedAmount}
        </p>
      )}
    </div>
  );
}

export default BalanceCard;
