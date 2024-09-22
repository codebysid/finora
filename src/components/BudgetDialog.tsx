import React, { ReactNode } from "react";
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
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          {triggerIcon}
          {triggerText}
        </DialogTrigger>
        <DialogContent>
          <DialogTitle></DialogTitle>
          <DialogHeader>
            <BudgetForm />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
