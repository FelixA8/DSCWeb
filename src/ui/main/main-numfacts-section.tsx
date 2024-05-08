import { Poppins } from "next/font/google";

const poppins700 = Poppins({ weight: "700", subsets: ["latin"] });
const poppins500 = Poppins({ weight: "500", subsets: ["latin"] });

const NumFact = () => {
    return <section
    className={
      "p-14 space-y-10 flex flex-col align-middle justify-center lg:flex-row lg:pr-0 lg:space-x-3 " +
      poppins500.className
    }
  >
    <h2 className="text-4xl font-semibold text-303F9A text-center lg:text-left lg:h-fit lg:my-auto lg:text-5xl">
      Our numbers tell <br /> more about data science
    </h2>
    <div className="bg-[#F9ECEC] rounded-3xl w-full p-10 lg:rounded-r-none ">
      <div className="divide-y-4  text-303F9A border-303FA flex flex-col lg:flex-row lg:divide-y-0 lg:divide-x-4">
        <div className="text-center space-y-2 p-5">
          <h2 className="text-7xl font-semibold  lg:text-left">$95k</h2>
          <p className="text-2xl font-normal lg:text-left lg:text-xl">
            The median starting salary for a data scientist remains high.
          </p>
        </div>
        <div className="text-center space-y-2 p-5">
          <h2 className="text-7xl font-semibold lg:text-left">60%</h2>
          <p className="text-2xl font-normal lg:text-left lg:text-xl">
            of companies around the world use data and analytics to drive
            process and cost-efficiency (MicroStrategy, 2020).
          </p>
        </div>
        <div className="text-center space-y-2 p-5">
          <h2 className="text-7xl font-semibold lg:text-left">2.7M</h2>
          <p className="text-2xl font-normal lg:text-left lg:text-xl">
            open jobs in data analysis, data science and related careers in
            2020 (source: IBM).
          </p>
        </div>
      </div>
    </div>
  </section>
}
export default NumFact