import React from "react";

interface IShowBalance {
  expenses: string | undefined;
  income: string | undefined;
}

function ShowBalance({ expenses, income }: IShowBalance) {
  return (
    <div>
      <p>{expenses && expenses}</p>
      <p>{income && income}</p>
    </div>
  );
}

export default ShowBalance;
