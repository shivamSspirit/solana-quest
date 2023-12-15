"use client"
import { usePathname } from "next/navigation"
import CustomConnect from "./CustomConnect"
import ThemeSwitcher from "./ThemeSwitcher"

const Header = () => {

  const pathname = usePathname()

  return (
    <header className="mt-8 flex mx-4 sm:mx-10" >
      {pathname!== "/" && (
        <a href="/" >
          <h1 className="font-title text-3xl  bg-gradient-to-b from-title to-title/60 bg-clip-text text-transparent">SOLANA QUEST</h1>
        </a>
      )} 
      <div className="flex gap-4 w-fit ml-auto ">
        <CustomConnect />      
        <ThemeSwitcher />
      </div>
    </header>
  )
}

export default Header
