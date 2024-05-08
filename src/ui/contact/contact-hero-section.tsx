import Image from "next/image"
import { Poppins } from "next/font/google";

const poppins700 = Poppins({ weight: "700", subsets: ["latin"] });
const poppins300 = Poppins({ weight: "300", subsets: ["latin"] });

const ContactHero = () => {
    return <section className="flex flex-row align-middle justify-center bg-contactus-main bg-no-repeat bg-center bg-cover p-5 space-x-2 lg:p-28 lg:space-x-5">
    <div className="w-[100px] h-[100px] lg:w-[400px] lg:h-[400px]">
        <Image
            alt="Data Science Club Logo"
            src={"/main-logo.png"}
            width={1000}
            height={1000}
        />
    </div>
    <span
        className={
            "text-white text-4xl h-min my-auto lg:text-8xl  " +
            poppins700.className
        }
    >
        DATA
        <br />
        SCIENCE
        <br />
        CLUB
    </span>
</section>
}

export default ContactHero;