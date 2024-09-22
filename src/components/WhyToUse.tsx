import { Filter, Flame, Lightbulb, SwatchBook } from "lucide-react";
import * as motion from "framer-motion/client";

const whyToUse = [
  {
    id: 0,
    title: "Simplicity",
    description: "Simple to use from logging in to setting budget",
    icon: <SwatchBook className="useIcon" />,
  },
  {
    id: 1,
    title: "Efficient",
    description: "Helps user to track and manage their expenses",
    icon: <Lightbulb className="useIcon" />,
  },
  {
    id: 2,
    title: "Social Good",
    description: "Promotes financial literacy",
    icon: <Flame className="w-24 h-24 lg:w-36 lg:h-36" />,
  },
  {
    id: 3,
    title: "Filtering",
    description: "Filter transactions by month and year",
    icon: <Filter className="w-24 h-24 lg:w-36 lg:h-36" />,
  },
];

export default function WhyToUse() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="flex flex-col justify-center items-center gap-10 lg:gap-20 text-2xl lg:text-3xl font-semibold py-20 w-full rounded-2xl"
    >
      <h2 className="sectionHeading">Why to use Finora? </h2>
      <div
        className={`flex flex-col lg:block lg:relative lg:h-[80vh] gap-10 w-full`}
      >
        <hr className="border-none hidden lg:block lg:bg-secondary lg:rotate-90 h-[4px] w-[55%] lg:absolute lg:top-[55%] lg:left-[23%]" />
        {whyToUse.map((ele) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              key={ele.id}
              className={`bg-gradient-to-br from-[#000428] to-[#004e92] flex-1 p-4 flex flex-row lg:w-[45%] gap-2 rounded-2xl lg:absolute ${ele.id % 2 === 0 ? `lg:left-0` : `lg:right-0`}`}
              style={{ top: `${ele.id * 240}px` }}
            >
              {ele.icon}
              <div className="flex flex-col gap-1 justify-center">
                <p>{ele.title}</p>
                <p className="text-lg text-zinc-400">{ele.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
