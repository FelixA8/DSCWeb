import AboutusDepartment from "@/ui/aboutus/aboutus-department-section";
import AboutusHero from "@/ui/aboutus/aboutus-hero-section";
import AboutusMission from "@/ui/aboutus/aboutus-mission-section";
import AboutusVision from "@/ui/aboutus/aboutus-vision-section";

export default function Home() {
  return (
    <>
      <AboutusHero />
      <AboutusMission />
      <AboutusVision />
      <AboutusDepartment />
    </>
  );
}
