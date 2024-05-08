import Vector1 from "@/components/vectors/aboutus-vector-1";
import Vector2 from "@/components/vectors/aboutus-vector-2";
import Vector3 from "@/components/vectors/aboutus-vector-3";
import { Poppins } from "next/font/google";

const poppins700 = Poppins({ weight: "700", subsets: ["latin"] });
const poppins300 = Poppins({ weight: "300", subsets: ["latin"] });

const AboutusHero = () => {
    return <section
    className={
        "min-h-[600px] w-screen flex flex-col align-middle justify-between text-white bg-aboutus-main bg-no-repeat bg-cover bg-opacity-60 overflow-x-hidden relative lg:bg-[center_bottom_-20rem] lg:min-h-[800px] lg:p-14 " +
        poppins700.className
    }
>
    <div className="mx-8 my-10 space-y-10">
        <h1 className="text-5xl lg:text-9xl">Who Are We?</h1>
        <p
            className={
                "text-lg text-justify lg:text-3xl  " + poppins300.className
            }
        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue.
        </p>
    </div>
    <Vector1 />
    <Vector2 />
    <Vector3 />
</section>
}

export default AboutusHero;