"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdOutlineDehaze } from "react-icons/md";
import { Merriweather } from "next/font/google";
import DarkModeSwitcher from "./DarkModeSwitcher";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: "700",
  subsets: ["latin"],
});

export default function Header() {
    const pathname = usePathname();
    

    return (
        <header className={`grid grid-cols-[3rem_1fr_3rem] items-center p-4 ${pathname.startsWith("/detail") ? "absolute top-0 left-0 w-full" : ""}`}>
            {pathname === "/" ? <MdOutlineDehaze size={24} /> : <Link href="/"><IoMdArrowRoundBack size={24} /></Link>}
          <h1 className={`${merriweather.className} text-center`}>{pathname === "/" ? "MyMovie" : ""}</h1>
          
          
          <DarkModeSwitcher />
        </header>
    )

}