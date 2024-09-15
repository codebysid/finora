import { convertToINR } from "@/utils/helper";
import React, { ReactNode } from "react";

interface IBalanceCard {
  title: string;
  amount: string;
  icon: ReactNode;
}

function BalanceCard({ title, amount, icon }: IBalanceCard) {
  return (
    <div className="flex flex-col gap-4 justify-center items-start border border-secondary p-4 flex-1 rounded-lg">
      <div className=" flex flex-row justify-between items-center w-full">
        <p>{title}</p>
        {icon}
      </div>
      <p
        className={`${
          title.includes("Expense") ? "text-red-500" : "text-green-500"
        }`}
      >
        {convertToINR(Number(amount))}
      </p>
    </div>
  );
}

export default BalanceCard;
