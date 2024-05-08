'use client'

import EventsHero from "@/ui/events/events-hero-section";
import MainDemand from "@/ui/main/main-demands-section";
import MainDivision from "@/ui/main/main-division-section";
import MainExploreDS from "@/ui/main/main-exploreds-section";
import MainHero from "@/ui/main/main-hero-section";
import NewPost from "@/ui/main/main-newpost-section";
import NumFact from "@/ui/main/main-numfacts-section";
import { DefaultSeo } from "next-seo";
import Image from "next/image";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <EventsHero />
    </>
  );
}
