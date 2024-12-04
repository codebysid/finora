import Hero from "@/components/Hero";
import Features from "../components/Features";
import ContactDeveloper from "@/components/ContactDeveloper";
import WhyToUse from "@/components/WhyToUse";
import GithubStarBtn from "@/components/GithubStarBtn";
import { ThreeDCardDemo } from "@/components/ui/ThreeDCardDemo";

export default function Home() {
  return (
    <div className=" h-[100vh]">
      <GithubStarBtn />
      <Hero />
      <ThreeDCardDemo />
      <div className="p-10 flex flex-col justify-center items-center gap-16 lg:gap-40">
        <Features />
        <WhyToUse />
        <ContactDeveloper />
      </div>
    </div>
  );
}
