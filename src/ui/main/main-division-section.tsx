import Image from "next/image"

import { Poppins } from "next/font/google";

const poppins700 = Poppins({ weight: "700", subsets: ["latin"] });
const poppins500 = Poppins({ weight: "500", subsets: ["latin"] });

const MainDivision = () => {
    return <section
        className={
          "bg-[#EBF2FF] rounded-3xl flex-col align-middle justify-center text-center p-8 space-y-8 md:p-20 " +
          poppins500.className
        }
      >
        <h1 className="text-[#2A6FA6] font-bold text-5xl">Our Divisions</h1>
        <div className="flex flex-col align-middle justify-center w-full space-y-5 md:grid md:grid-cols-2 md:space-y-0  md:gap-5 lg:gap-10">
          <div className="bg-white rounded-3xl w-full min-h-[100px] flex flex-row p-5 space-x-5 md:p-10">
            <div className="w-40 h-20 flex my-auto md:h-32">
              <Image
                alt="Art"
                src={"/icons/art.svg"}
                width={70}
                height={70}
                className="my-auto mx-auto w-32 h-32"
              />
            </div>
            <div className="flex flex-col align-middle text-left space-y-3 my-auto">
              <h3 className="text-xl font-bold text-[#41ABC3] md:text-3xl">
                Creative
              </h3>
              <p className="text-sm text-[#07819C] text-justify md:text-lg md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </p>
            </div>
          </div>
          <div className="bg-white rounded-3xl w-full min-h-[100px] flex flex-row p-5 space-x-5 md:p-10">
            <div className="w-40 h-20 flex my-auto md:h-32">
              <Image
                alt="Computer"
                src={"/icons/computer.svg"}
                width={80}
                height={80}
                className="my-auto mx-auto"
              />
            </div>
            <div className="flex flex-col align-middle text-left space-y-3 my-auto">
              <h3 className="text-xl font-bold text-[#41ABC3] md:text-3xl">
                Education & Development
              </h3>
              <p className="text-sm text-[#07819C] text-justify md:text-lg md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </p>
            </div>
          </div>
          <div className="bg-white rounded-3xl w-full min-h-[100px] flex flex-row p-5 space-x-5 md:p-10">
            <div className="w-40 h-20 flex my-auto md:h-32">
              <Image
                alt="People"
                src={"/icons/people.svg"}
                width={100}
                height={100}
                className="my-auto mx-auto"
              />
            </div>
            <div className="flex flex-col align-middle text-left space-y-3 my-auto">
              <h3 className="text-xl font-bold text-[#41ABC3] md:text-3xl">
                Human Capital
              </h3>
              <p className="text-sm text-[#07819C] text-justify md:text-lg md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </p>
            </div>
          </div>
          <div className="bg-white rounded-3xl w-full min-h-[100px] flex flex-row p-5 space-x-5 md:p-10">
            <div className="w-40 h-20 flex my-auto md:h-32">
              <Image
                alt="Video"
                src={"/icons/video.svg"}
                width={100}
                height={100}
                className="my-auto mx-auto"
              />
            </div>
            <div className="flex flex-col align-middle text-left space-y-3 my-auto">
              <h3 className="text-xl font-bold text-[#41ABC3] md:text-3xl">
                Media and Relation
              </h3>
              <p className="text-sm text-[#07819C] text-justify md:text-lg md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </p>
            </div>
          </div>
        </div>
      </section>
}

export default MainDivision