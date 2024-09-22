"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { addTransaction } from "@/action/transaction";
import { toast } from "sonner";
import { useSession } from "next-auth/react";
import { z } from "zod";

const formSchema = z.object({
  description: z.string().min(2).max(50),
  amount: z.coerce.number().gt(0),
  type: z.enum(["Income", "Expense"]),
});

function AddTransaction() {
  const session = useSession();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
      amount: 0,
      type: "Expense",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const res = await addTransaction({
        ...values,
        email: session.data?.user?.email,
      });
      if (res?.status === 200) {
        form.reset();
        return toast("Transaction Added ✅");
      }
      return toast("Not able to save transaction at the moment 😢");
    } catch (err) {
      console.log(err);
      return toast("Some error occurred 🙆");
    }
  };

  return (
    <div className=" flex justify-center items-center h-[80vh]">
      <div className=" flex flex-col justify-center items-center gap-10 h-[80vh]">
        <h1 className=" text-2xl font-bold text-primary lg:text-6xl">
          Add transaction
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Describe transaction..."
                      className="input"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount</FormLabel>
                  <FormControl>
                    <Input type="number" className="input" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="input">
                        <SelectValue placeholder="Select type..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Expense">Expense</SelectItem>
                      <SelectItem value="Income">Income</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              variant="secondary"
              className=" w-full lg:h-14"
            >
              Add
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default AddTransaction;
