import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins700 = Poppins({ weight: "700", subsets: ["latin"] });
const poppins500 = Poppins({ weight: "500", subsets: ["latin"] });

const AboutusDepartment = () => {
  return (
    <section
      className={
        "bg-[#ebf2ff] min-h-screen w-screen flex flex-col align-middle p-10 space-y-6 lg:p-24 " +
        poppins500.className
      }
    >
      <h1
        className={
          "text-4xl font-semibold bg-gradient-to-r from-[#2A6FA6] to-[#7088C6] bg-clip-text text-transparent text-center mb-7 lg:text-9xl " +
          poppins700.className
        }
      >
        Our Divisons
      </h1>
      <div className="bg-white flex-col flex justify-center align-middle text-center text-[#2A6FA6] p-8 rounded-3xl space-y-5 lg:space-y-10 lg:p-12 lg:min-h-[400px] lg:justify-start">
        <h2 className="text-3xl lg:text-start lg:text-5xl">
          Education & Development
        </h2>
        <div className="flex flex-row lg:space-x-10">
          <Image
            alt="Computer"
            src={"/icons/computer.svg"}
            width={200}
            height={200}
            className="hidden lg:block"
          />
          <p className="text-xl lg:text-3xl lg:text-justify">
            The Education and Development Department plays a multifaceted role
            encompassing strategic planning, meticulous data collection,
            efficient processing, innovative curriculum development, effective
            teaching methodologies, and rigorous program evaluation.
          </p>
        </div>
      </div>
      <div className="bg-white flex-col flex justify-center align-middle text-center text-[#2A6FA6] p-8 rounded-3xl space-y-5 lg:space-y-10 lg:p-12 lg:min-h-[400px] lg:justify-start">
        <h2 className="text-3xl lg:text-start lg:text-5xl">Human Capital</h2>
        <div className="flex flex-row lg:space-x-10">
          <Image
            alt="People"
            src={"/icons/people.svg"}
            width={200}
            height={200}
            className="hidden lg:block"
          />
          <p className="text-xl lg:text-3xl lg:text-justify">
            The Human Capital Department works to strengthen the understanding
            and skills in managing, organizing, and developing human resources.
          </p>
        </div>
      </div>
      <div className="bg-white flex-col flex justify-center align-middle text-center text-[#2A6FA6] p-8 rounded-3xl space-y-5 lg:space-y-10 lg:p-12 lg:min-h-[400px] lg:justify-start">
        <h2 className="text-3xl lg:text-start lg:text-5xl">Creative</h2>
        <div className="flex flex-row lg:space-x-10">
          <Image
            alt="Art"
            src={"/icons/art.svg"}
            width={200}
            height={200}
            className="hidden lg:block"
          />
          <p className="text-xl lg:text-3xl lg:text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris.
          </p>
        </div>
      </div>
      <div className="bg-white flex-col flex justify-center align-middle text-center text-[#2A6FA6] p-8 rounded-3xl space-y-5 lg:space-y-10 lg:p-12 lg:min-h-[400px] lg:justify-start">
        <h2 className="text-3xl lg:text-start lg:text-5xl">Media</h2>
        <div className="flex flex-row lg:space-x-10">
          <Image
            alt="Camera"
            src={"/icons/video.svg"}
            width={200}
            height={200}
            className="hidden lg:block"
          />
          <p className="text-xl lg:text-3xl lg:text-justify">
            The Media Department is responsible for managing social media
            accounts and creating content to be uploaded on the internet for the
            public to read, as well as promoting the data science club
            organization.
          </p>
        </div>
      </div>
      <div className="bg-white flex-col flex justify-center align-middle text-center text-[#2A6FA6] p-8 rounded-3xl space-y-5 lg:space-y-10 lg:p-12 lg:min-h-[400px] lg:justify-start">
        <h2 className="text-3xl lg:text-start lg:text-5xl">Public Relation</h2>
        <div className="flex flex-row lg:space-x-10">
          <Image
            alt="Camera"
            src={"/icons/video.svg"}
            width={200}
            height={200}
            className="hidden lg:block"
          />
          <p className="text-xl lg:text-3xl lg:text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutusDepartment;