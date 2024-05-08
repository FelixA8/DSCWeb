import Image from "next/image"
import { Poppins } from "next/font/google";

const poppins700 = Poppins({ weight: "700", subsets: ["latin"] });
const poppins500 = Poppins({ weight: "500", subsets: ["latin"] });

const AboutusVision = () => {
    return <section
    className={
        "bg-[#fbfbfb] w-screen flex flex-col align-middle p-10 space-y-6 md:space-y-0 md:flex-row md:p-24 md:h-screen md:space-x-24"
    }
>
    <div className="md:w-full md:flex md:flex-col md:align-middle md:justify-center">
        <Image
            src={"/backgrounds/vision-bg.png"}
            alt="Vision Background"
            width={1000}
            height={1000}
            className="mx-auto my-auto"
        />
    </div>
    <div className="flex flex-col align-middle justify-center md:space-y-9">
        <h2
            className={
                "text-4xl md:text-5xl lg:text-8xl " + poppins700.className
            }
        >
            Our Vision
        </h2>
        <p
            className={
                poppins500.className +
                " font-bold text-justify text-sm md:text-xl lg:text-2xl"
            }
        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus.
        </p>
    </div>
</section>
}

export default AboutusVision;