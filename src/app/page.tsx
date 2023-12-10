'use client';
// import {
//   WalletMultiButton
// } from '@solana/wallet-adapter-react-ui';
// import {useAnchorWallet, useWallet} from "@solana/wallet-adapter-react"
// import { useAtom } from 'jotai';
// import { anchorProgram } from '../lib/anchor';
// import { useEffect } from 'react';
// import { anchor } from 'lib/atoms';
// import { Wallet } from '@coral-xyz/anchor';
// import { Button } from 'components/ui/button';
// import {Sun} from "lucide-react"
import { useTheme } from 'next-themes';
import Image from "next/image"
import backgroundDark from "lib/assets/background-dark.png"
import backgroundLight from "lib/assets/background-light.png"
import hero from "lib/assets/hero.png"
import join from "@lib/assets/join-illustration.png"
import challenges from '@lib/fakeChallenges';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card"
import { Button } from '@components/ui/button';
import ChallengeCard from '@components/ui/ChallengeCard';
import Divider from '@components/ui/Divider';
import Link from 'next/link';
import { Lock, Rocket } from '@lib/icons';

export default function Home() {
  // const anchorWallet = useAnchorWallet()
  // const [anchorAtom, setAnchorAtom] = useAtom(anchor)
  // useEffect(() => {
  //   if(anchorWallet) {
  //     setAnchorAtom(anchorProgram(anchorWallet as Wallet))
  //   }
  // },[])

  // <WalletMultiButton />
  //

  const {theme} = useTheme()


  return (
    <>
      <section>
        <span className="pointer-events-none">
          {theme === "dark" && (
            <Image priority src={backgroundDark} alt="dark background" 
              className="scale-150 lg:scale-100 origin-top mx-auto absolute -z-50 top-0 lg:-top-32"  />
          )}
          {theme === "light" && (
            <Image priority src={backgroundLight} alt="dark background" 
              className="scale-150 lg:scale-100 origin-top mx-auto absolute -z-50 top-0 "  />
          )}
        </span>
        <div className="text-center my-16 lg:my-24 2xl:my-32">
          <h1 className="font-title py-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-b from-title to-title/60 bg-clip-text text-transparent">SOLANA QUEST</h1>
          <p className="lg:text-lg">Learn how to build on Solana; <br /> the superpowers and the gotchas.</p>
          <span className="relative md:-top-20 inline-block">
            <Image priority src={hero} alt="Solana Quest Illustration" 
              className="w-full h-auto block"/>
            <span className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent
              via-transparent to-background " />
          </span>
        </div>
      </section>
      <main className="space-y-16">

        <section className="w-5/6 mx-auto flex gap-8 lg:gap-16 flex-col lg:flex-row justify-between">
          <div className="space-y-4 lg:w-2/5" >
            <h2 className="text-4xl lg:text-6xl font-medium">How it works</h2>
            <p className="lg:text-lg">A few simple steps to get you started with the Solana Quest</p>
          </div>
          <div className="lg:w-2/4 space-y-8">
            <HowItRow serial={1} >When you are ready to test your knowledge, Quest Solana!</HowItRow>
            <HowItRow serial={2} >then use 🏗 scaffold-eth 2 to copy/paste each solidity concept and tinker: global units, primitives, mappings, structs, modifiers, events, inheritance, sending eth, and payable/fallback functions.</HowItRow>
            <HowItRow serial={3} >Watch this getting started playlist to become a power user and eth scripter.</HowItRow>
            <HowItRow serial={4} >When you are ready to test your knowledge, Quest Solana!</HowItRow>
          </div>
        </section>

        <section className="w-5/6 mx-auto space-y-8">
          <span className="w-auto space-y-2 tracking-wider">
            <h2 className="text-2xl lg:text-3xl w-fit font-bold">Explore Quests</h2>
            <Divider className="w-3/5 lg:w-1/5 h-0.5"  />
          </span>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {challenges.map(c => (
              <ChallengeCard {...c} key={c.serial} />
            ))}
          </div>
        </section>

        <section className="w-5/6 mx-auto flex flex-col-reverse lg:flex-row lg:gap-24 xl:gap-32">
          <div>
            <h2 className="font-title py-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-b from-title to-title/60 bg-clip-text text-transparent -mb-2 ">Join BuidlGuidl</h2>
            <Divider className="w-full lg:w-4/6 h-0.5 lg:h-1 block mb-6" />
            <p>The BuidlGuidl is a curated group of Solana builders creating products, prototypes, and tutorials to enrich the web3 ecosystem. A place to show off your builds and meet other builders. Start crafting your Web3 portfolio by submitting your DEX, Multisig or SVG NFT build.</p>
            <Button  asChild disabled={true} className={"tracking-wide px-10 gap-2 w-fit "}
              outerClass="w-fit h-fit mt-8" >
              <Link href={"/"} >
                {false ? (
                  <>
                    <Rocket />
                    START QUEST
                  </>
                ) : (
                    <>
                      <Lock />
                      LOCKED
                    </>
                  ) }
              </Link>
            </Button>
          </div>
          <div>
            <Image src={join} alt="Join Illustration" />
          </div>
        </section>

        <section className="w-5/6 mx-auto">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {challenges.map(c => (
              <ChallengeCard {...c} key={c.serial} />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

const HowItRow: React.FC<{children: React.ReactNode, serial: number}> = ({children, serial}) => {
  return (

    <span className="flex items-start text-lg lg:text-xl">
      <span className=" bg-gradient-to-b w-fit from-title to-title/60 p-[3px] rounded-full block mr-6 lg:mr-8" >
        <span className="bg-background text-center h-8 w-8 rounded-full text-2xl block ">{serial}</span>
      </span> 
      <p>{children}</p>
    </span>
  )
}
