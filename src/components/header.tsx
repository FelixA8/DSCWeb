'use client'

import { FC } from "react";
import Image from "next/image";
import SideNav from "./sidenav";
import Link from "next/link";
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

const HeaderComponent = () => {

  const navlinks = [
    {
      logo: "icons/home.svg",
      link: "/",
      name: "Home",
    },
    {
      logo: "icons/event.svg",
      link: "/events",
      name: "Events",
    },
    {
      logo: "icons/class.svg",
      link: "/classes",
      name: "Classes",
    },
    {
      logo: "icons/article.svg",
      link: "/articles",
      name: "Articles",
    },
    {
      logo: "icons/paper.svg",
      link: "/aboutus",
      name: "About Us",
    },
    {
      logo: "icons/contact.svg",
      link: "/contact",
      name: "Contact Us",
    },
  ];
  return (
    <>
      <header className="flex flex-row p-2 px-8 justify-between border-b border-black h-auto">
        <div
          id="logo-section"
          className="flex flex-row align-middle justify-center space-x-3"
        >
          <Image
            src={"/main-logo.png"}
            alt="Main-Logo"
            width={50}
            height={50}
            className="my-auto"
          />
          <span className="font-bold text-303F9A ">
            DATA
            <br />
            SCIENCE
            <br />
            CLUB
          </span>
        </div>
        <nav className="flex-row align-middle space-x-4 hidden xl:flex">
          {navlinks.map((navobject, index) => {
            return (
              <Link
                key={index}
                href={navobject.link}
                className="w-36 h-3/5 my-auto flex flex-col items-center align-middle justify-center text-[#767676] last:bg-303F9A last:text-white last:rounded-xl"
              >
                <Image src={navobject.logo} width={20} height={20} alt={navobject.name}/>
                <span
                  className={`${poppins.className} text-center text-xl`}
                >
                  {navobject.name}
                </span>
              </Link>
            );
          })}

          <Link
            href={"/auth/login"}
            className="w-36 h-3/5 my-auto flex flex-col align-middle justify-center text-[#767676] last:bg-303F9A last:text-white last:rounded-xl"
          >
            <span
              className={`${poppins.className} text-center text-xl text-white`}
            >
              Login
            </span>
          </Link>
          <Link
            href={"/profile"}
            className="flex flex-row my-auto w-36 h-3/5 space-x-2 hover:cursor-pointer"
          >
            <Image
              src={"https://static01.nyt.com/images/2024/03/05/autossell/00TB-MEOWS/00TB-MEOWS-square640.jpg"}
              width={40}
              height={40}
              alt="Profile Pic"
              className="rounded-full my-auto"
            />
            <span className="w-full text-center flex break-words align-middle my-auto">
              Felix
            </span>
          </Link>
        </nav>
        <div
          className="xl:hidden peer transition flex flex-col justify-center align-middle text-center"
          tabIndex={1}
        >
          <Image
            src={"/icons/nav-button.svg"}
            alt="Navigation Button"
            width={30}
            height={30}
            className="mx-auto"
          />
        </div>
        <SideNav navlinks={navlinks} user={null} />
      </header>
    </>
  );
};
export default HeaderComponent;
