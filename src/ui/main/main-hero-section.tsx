import Grafic1 from "@/components/vectors/home-grafic-1";
import Grafic2 from "@/components/vectors/home-grafic-2";
import Grafic3 from "@/components/vectors/home-grafic-3";
import Vector6 from "@/components/vectors/home-vector-6";

import { Poppins } from "next/font/google";


const poppins700 = Poppins({ weight: "700", subsets: ["latin"] });
const poppins500 = Poppins({ weight: "500", subsets: ["latin"] });

const MainHero = () => {
  return (
      <section className="flex flex-col px-5 py-20 align-middle justify-center relative lg:min-h-screen lg:p-10 md:flex-row  lg:space-x-[20%]">
        <div className="flex flex-col md:w-[100%] xl:my-auto">
          <h1
            className={
              "text-7xl min-h-max md:text-7xl lg:text-9xl text-303F9A  " +
              poppins700.className
            }
          >
            DATA <br />
            SCIENCE <br />
            CLUB
          </h1>
          <Vector6 />
          <p className="text-[#7C5295] border-l-4 p-2 mt-10 md:text-lg">
            Data science is the domain of study that deals with vast volumes of
            data using modern tools and techniques to find unseen patterns,
            derive meaningful information, and make business decisions.
          </p>
          <button className="text-left bg-303F9A w-fit px-7 py-2 rounded-3xl text-white font-medium mt-5 tracking-wide md:text-xl">
            Read More
          </button>
        </div>
        <Grafic1 />
      </section>
  );
};

export default MainHero;