export function convertToINR(amount: number) {
  const cur = Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "INR",
  }).format(amount);
  return cur;
}

export function getTotalAmount(transactions: any[], type: string) {
  const total = transactions.reduce((acc, cur) => {
    if (cur.type.includes(type)) {
      console.log({
        acc,
        amount: cur.amount,
        type,
      });
      return acc + cur.amount;
    } else return acc;
  }, 0);
  console.log({ total });
  return total;
}
