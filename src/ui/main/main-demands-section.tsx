import { Poppins } from "next/font/google";
import Grafic1 from "@/components/vectors/home-grafic-1";

const poppins700 = Poppins({ weight: "700", subsets: ["latin"] });
const poppins500 = Poppins({ weight: "500", subsets: ["latin"] });

const MainDemand = () => {
  return (
    <section className={"p-14 space-y-10 flex-col flex" + poppins500.className}>
      <h2 className="text-4xl font-bold text-303F9A text-start">
        In-demand data science careers
      </h2>
      <div className="flex flex-col lg:flex-row items-center">
        <Grafic1 />
        <div className="bg-[#367CFF] bg-opacity-10 rounded-3xl p-5 border-b-4 border-[#407BFF]">
          <p className="font-medium  text-303F9A text-xl text-center p-4 rounded-b-md">
            Data science experts are needed in virtually every job sector not
            just in technology. In fact, the five biggest tech companies Google,
            Amazon, Apple, Microsoft, and Facebook only employ one-half of one
            percent of U.S. employees. However—in order to break into these
            high-paying, in-demand roles—an advanced education is generally
            required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainDemand;
