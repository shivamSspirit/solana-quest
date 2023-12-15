"use client"
import { usePathname } from "next/navigation"
import CustomConnect from "./CustomConnect"
import ThemeSwitcher from "./ThemeSwitcher"
import Link from "next/link"

const Header = () => {

  const pathname = usePathname()

  return (
    <header className="mt-8 flex flex-row gap-4 mx-4 sm:mx-10" >
      {pathname!== "/" && (
        <Link href="/" >
          <h1 className="font-title hidden lg:block text-3xl  bg-gradient-to-b from-title to-title/60 bg-clip-text text-transparent">SOLANA QUEST</h1>
        </Link>
      )} 
      <div className="flex gap-4 w-fit ml-auto ">
        <CustomConnect />      
        <ThemeSwitcher />
      </div>
    </header>
  )
}

export default Header
