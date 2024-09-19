import { convertToINR } from "@/utils/helper";
import React, { ReactNode } from "react";

interface IBalanceCard {
  title: string;
  amount: string;
  icon: ReactNode;
}

function BalanceCard({ title, amount, icon }: IBalanceCard) {
  return (
    <div className="px-3 py-4 lg:p-4 flex-1 rounded-lg flex flex-col gap-4 lg:gap-32 justify-center items-start bg-secondary">
      <div className=" flex flex-row justify-between items-center w-full">
        <p className="lg:text-3xl font-bold">{title}</p>
        {icon}
      </div>
      <p
        className={`lg:text-4xl text-sm font-extrabold text-white 
          ${title.includes("Expense") && "text-red-500"} 
          ${title.includes("Income") && "text-green-500"}`}
      >
        {convertToINR(Number(amount))}
      </p>
    </div>
  );
}

export default BalanceCard;
