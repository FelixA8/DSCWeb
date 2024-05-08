import Link from "next/link";
import { Poppins } from "next/font/google";
import Grafic2 from "@/components/vectors/home-grafic-2";

const poppins700 = Poppins({ weight: "700", subsets: ["latin"] });
const poppins500 = Poppins({ weight: "500", subsets: ["latin"] });

const MainExploreDS = () => {
  return (
    <section
      className={
        "min-h-screen bg-[#3E4D9E] p-8 space-y-5 flex flex-col align-middle justify-center" +
        poppins500.className
      }
    >
      <h2 className="text-white text-center text-4xl tracking-wider font-medium">
        Explore Data Science
      </h2>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="text-center lg:text-end mb-10 lg:mb-0">
          <p className="text-white font-thin text-xl tracking-wide mb-10  lg:pl-5">
            Data science experts are needed in virtually every job sector—not
            just in technology. In fact, the five biggest tech companies—Google,
            Amazon, Apple, Microsoft, and Facebook—only employ one-half of one
            percent of U.S. employees. However—in order to break into these
            high-paying, in-demand roles—an advanced education is generally
            required.
          </p>
          <Link
            className="w-fit bg-white px-10  tracking-wide py-2 rounded-xl mx-auto"
            href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
          >
            Start now
          </Link>
        </div>
        <Grafic2 />
      </div>
    </section>
  );
};

export default MainExploreDS;
