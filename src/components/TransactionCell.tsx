import React from "react";
import { TableCell, TableRow } from "./ui/table";
import { convertToINR, convertToReadableDate } from "@/utils/helper";

interface ITransactionCell {
  description: String;
  createdAt: String;
  type: String;
  amount: number;
}

function TransactionCell({
  description,
  type,
  amount,
  createdAt,
}: ITransactionCell) {
  return (
    <TableRow className="lg:text-xl h-[70px]">
      <TableCell className="font-medium">{description}</TableCell>
      <TableCell>{convertToReadableDate(createdAt)}</TableCell>
      <TableCell
        className={`${type == "Income" ? "text-green-500" : "text-red-500"}`}
      >
        {type}
      </TableCell>
      <TableCell className="text-right">{convertToINR(amount)}</TableCell>
    </TableRow>
  );
}

export default TransactionCell;
