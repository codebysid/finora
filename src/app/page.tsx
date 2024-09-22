import Hero from "@/components/Hero";
import Features from "../components/Features";
import ContactDeveloper from "@/components/ContactDeveloper";
import WhyToUse from "@/components/WhyToUse";
import GithubStarBtn from "@/components/GithubStarBtn";
import * as motion from "framer-motion/client";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }} // initial state before animation
      animate={{ opacity: 1 }} // final state after animation
      transition={{ duration: 1 }}
      className=" h-[100vh]"
    >
      <GithubStarBtn />
      <Hero />
      <div className="p-10 flex flex-col justify-center items-center gap-16 lg:gap-40">
        <Features />
        <WhyToUse />
        <ContactDeveloper />
      </div>
    </motion.div>
  );
}
