"use client";
import React, { ReactNode, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import BudgetForm from "./BudgetForm";
import { Button } from "./ui/button";

interface IBudgetDialog {
  triggerText: ReactNode;
  triggerIcon: ReactNode;
}

export default function BudgetDialog({
  triggerText,
  triggerIcon,
}: IBudgetDialog) {
  const [budgetDialog, setBudgetDialog] = useState<boolean>(false);
  return (
    <div>
      <Dialog open={budgetDialog} onOpenChange={setBudgetDialog}>
        <DialogTrigger>
          {triggerIcon}
          {triggerText}
        </DialogTrigger>
        <DialogContent>
          <DialogTitle></DialogTitle>
          <DialogHeader>
            <BudgetForm setBudgetDialog={setBudgetDialog} />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
