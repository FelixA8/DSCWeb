import { Poppins } from "next/font/google";
const poppins500 = Poppins({ weight: "500", subsets: ["latin"] });
import Vector4 from "@/components/vectors/contact-vector-4";
import Vector5 from "@/components/vectors/contact-vector-5";

const ContactInfo = () => {
    return <section
    className={
        "min-h-[600px] w-screen space-y-10  flex flex-col align-middle text-center relative overflow-hidden lg:flex-row-reverse lg:justify-evenly lg:space-y-0 lg:min-h-[500px] " +
        poppins500.className
    }
>
    <div className="p-10 flex flex-col justify-center align-middle lg:w-full lg:space-y-4">
        <h2 className="font-bold text-xl lg:text-start lg:text-5xl  ">
            Location
        </h2>
        <p className="lg:text-start lg:text-3xl ">
            Student Club and Activity Center (SCAC) <br /> Jl. K H. Syahdan No.
            9, Kemanggisan – Palmerah <br /> Jakarta Barat 11480
        </p>
    </div>
    <div className="p-10 flex flex-col justify-center align-middle lg:w-full lg:border-r-2 lg:border-opacity-40 lg:border-303F9A lg:space-y-4">
        <h2 className="font-bold text-xl lg:text-end lg:text-5xl">
            Contact Us:
        </h2>
        <p className="lg:text-end lg:text-3xl ">
            www.datascienceclub.edu (Website) <br />
            datascienceclub.edu (E-Mail) <br /> @dsc_binus (Instagram)
        </p>
    </div>
    <Vector4 />
    <Vector5 />
</section>
}

export default ContactInfo;