"use client"
import Divider from "./ui/Divider"
import StarsLight from "@lib/assets/stars-light.png"
import StarsDark from "@lib/assets/stars-dark.png"
import { useTheme } from "next-themes"
import Image from "next/image"
import { Github, Heart } from "@lib/icons"
import { Button } from "./ui/button"
import Link from "next/link"

const Footer: React.FC = () => {
  const {theme} = useTheme()

  return (
    <footer className="relative text-center mt-8 lg:mt-16">
      {theme === "dark" && (
        <Image src={StarsDark} layout="responsive" alt="Stars" className="absolute top-4 left-0" />
      )}
      {theme === "light" && (
        <Image src={StarsLight} layout="responsive" alt="Stars" className="absolute top-4 left-0" />
      )}
      <Divider className="w-full lg:w-3/4 h-0.5 " />
      <div className="w-fit mx-auto my-6 pb-8">
        <h2 className="font-title py-4 text-4xl sm:text-5xl md:text-6xl lg:text-6xl bg-gradient-to-b from-title to-title/60 bg-clip-text text-transparent">SOLANA QUEST</h2>
        <span className="flex gap-4 w-fit mx-auto">
          <Button className="flex gap-2 h-auto p-0 text-base font-normal" variant="link" >
            <Link target="_blank" className="flex items-center gap-2" href="https://github.com/">
              <Github gradient /> 
              Fork me
            </Link>
          </Button>
          | 
          <span className="flex">
            Built with <Heart className="mx-2" /> at Solana Quest
          </span>
        </span>
      </div>
    </footer>
  )
}

export default Footer
