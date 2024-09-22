import FeatureItem from "./FeatureItem";
import * as motion from "framer-motion/client";

const features = [
  {
    id: 1,
    title: "Add Transaction",
    description: "Add transactions and mark them as Income or Expense",
  },
  {
    id: 2,
    title: "Set Budget",
    description:
      "Set monthly budget for your expenses and track it on the home screen",
  },
  {
    id: 3,
    title: "View Metrics",
    description:
      "View total of Expenses, Transactions, Current Balance and the budget on the home screen",
  },
  {
    id: 4,
    title: "Filter Transactions",
    description:
      "View all your transactions and filter them with the Month and Year picker",
  },
];

export default function HowItWorks() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="flex flex-col justify-center items-center gap-10 lg:gap-20"
    >
      <h2 className="sectionHeading">Features</h2>
      <div className=" flex flex-col justify-center w-full gap-10 lg:gap-32 border-l border-white relative pl-6">
        {features.map((ele) => {
          return (
            <FeatureItem
              key={ele.id}
              title={ele.title}
              description={ele.description}
              id={ele.id}
            />
          );
        })}
      </div>
    </motion.div>
  );
}
