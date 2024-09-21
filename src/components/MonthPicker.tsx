"use client";
import React, { useState } from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";
import { useRouter } from "next/navigation";
import { CircleX } from "lucide-react";
import { getCurrentMonthAndYear } from "@/utils/helper";

function MonthPicker() {
  const [monthYear, setMonthYear] = useState<{ month: number; year: number }>({
    month: 0,
    year: 0,
  });
  const router = useRouter();

  const handleMonthYearChange = () => {
    const { month, year } = monthYear;
    if (!month || !year) return;
    router.push(`/allTransactions/${month}/${year}`);
  };

  const handleSelect = (date: any) => {
    setMonthYear((prev) => ({ ...prev, month: date.getMonth() + 1 }));
    setMonthYear((prev) => ({ ...prev, year: date.getFullYear() }));
  };

  return (
    <div className-="relative">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[240px] justify-start text-left font-normal",
              !monthYear.month && !monthYear.year && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {<span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <PopoverClose className="absolute right-2 top-2">
            <CircleX className="text-secondary" />
          </PopoverClose>
          <Calendar
            mode="single"
            onMonthChange={handleSelect}
            captionLayout="dropdown"
            fromYear={2020}
            toYear={2039}
            showOutsideDays={false}
            fixedWeeks={false}
          />
          <Button
            className="ml-3 mb-3"
            size="sm"
            variant="secondary"
            onClick={handleMonthYearChange}
          >
            Get Transactions
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default MonthPicker;
