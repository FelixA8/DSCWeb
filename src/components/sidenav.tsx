import { FC } from "react";
import { Poppins } from "next/font/google";
import { IoCloseSharp } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import type User from "../../types/user";
const poppins = Poppins({ weight: "500", subsets: ["latin"] });

interface Props {
	navlinks: {
		logo: string;
		link: string;
		name: string;
	}[];
	user: User | null;
}
const SideNav: FC<Props> = ({ navlinks, user }) => {
	return (
		<>
			<div className="z-50 fixed top-0 -right-full xl:hidden h-screen w-screen bg-[#E5D3D3] peer-focus:right-0  peer:transition ease-in-out delay-100 duration-300">
				<div className=" w-full border-b  border-black p-4 flex flex-row align-middle justify-end bg-[#DBC3C3]">
					<div
						className="rounded-full"
						tabIndex={1}
						onClick={(e) => {
							e.currentTarget.focus();
						}}
					>
						<IoCloseSharp size={45} />
					</div>
				</div>
				<nav className="h-auto flex flex-col align-middle justify-center">
					{navlinks.map((navobject, index) => {
						return (
							<Link
								href={navobject.link}
								className={`h-min my-auto font-bold ${poppins.className} text-767676 w-full p-6 h-16 flex flex-row align-middle last:border-t-2 last:border-[#767676] last:border-opacity-50 space-x-6`}
								key={index}
								passHref
							>
								<Image
									src={navobject.logo}
									alt={navobject.name}
									width={20}
									height={20}
								/>
								<span
									className={`my-auto text-xl text-[#767676] `}
								>
									{navobject.name}
								</span>
							</Link>
						);
					})}
					{user === null && (
						<Link
							href={"/auth/login"}
							className={`h-min my-auto font-bold ${poppins.className} text-767676 w-full p-6 h-16 flex flex-row align-middle last:border-t-2 last:border-[#767676] last:border-opacity-50 space-x-6`}
							passHref
						>
							<Image
								src={`/icons/sign-in.svg`}
								alt={"sign in"}
								width={25}
								height={25}
							/>
							<span className={`my-auto text-xl text-[#767676] `}>Login</span>
						</Link>
					)}
					{user !== null && (
						<Link
							href={"/profile"}
							className={`h-min my-auto font-bold ${poppins.className} text-767676 w-full p-6 h-16 flex flex-row align-middle last:border-t-2 last:border-[#767676] last:border-opacity-50 space-x-6`}
							passHref
						>
							<Image
								src={`https://static01.nyt.com/images/2024/03/05/autossell/00TB-MEOWS/00TB-MEOWS-square640.jpg`}
								alt={"Profile Picture"}
								width={40}
								height={40}
								className="rounded-full"
							/>
							<span className={`my-auto text-xl text-[#767676] `}>
								{user.name}
							</span>
						</Link>
					)}
				</nav>
			</div>
		</>
	);
};
export default SideNav;
