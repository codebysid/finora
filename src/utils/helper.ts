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

export function convertToReadableDate(date: String) {
  const curDate = new Date(date.toString());

  const formattedDate = curDate.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
  return formattedDate;
}

export function getCurrentMonthAndYear() {
  const date = new Date();
  return {
    month: date.getMonth() + 1,
    year: date.getFullYear(),
  };
}

export function getMonthName(monthNumber:number){
  if(monthNumber>12 || monthNumber<0) return
  const date=new Date()
  date.setMonth(monthNumber-1)
  return date.toLocaleString("en-us",{
    month:"long"
  })
}
