import * as motion from "framer-motion/client";

interface IFeatureItem {
  id: number;
  title: string;
  description: string;
}

export default function FeatureItem({ id, title, description }: IFeatureItem) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="flex flex-col gap-2 lg:gap-4"
    >
      <div className="flex flex-row items-center gap-2 text-xl">
        <span className="absolute left-0 h-[1px] w-5 border-t border-white bg-white"></span>
        <span className="bg-secondary py-2 px-4 rounded-full font-semibold">
          {id}
        </span>
        <h3 className="font-semibold lg:text-3xl">{title}</h3>
      </div>

      <p className="text-lg text-zinc-400 lg:text-xl">{description}</p>
    </motion.div>
  );
}
