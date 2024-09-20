"use client";
import React, { useEffect, useRef } from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
function MonthPicker() {
  const [month, setMonth] = useState<number>();
  const [year, setYear] = useState<number>();

  const handleSelect = (date: any) => {
    setMonth(date.getMonth() + 1);
    setYear(date.getFullYear());
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            !month && !year && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {<span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          // selected={date}
          onMonthChange={handleSelect}
          captionLayout="dropdown"
          fromYear={2020}
          toYear={2039}
          showOutsideDays={false}
          fixedWeeks={false}
        />
      </PopoverContent>
    </Popover>
  );
}

export default MonthPicker;
