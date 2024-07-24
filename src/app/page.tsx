'use client';
import { useTheme } from 'next-themes';
import Image from "next/image"
import backgroundDark from "lib/assets/background-dark.png"
import backgroundLight from "lib/assets/background-light.png"
import hero from "lib/assets/hero.png"
import join from "@lib/assets/join-illustration.png"

import { Button } from '@components/ui/button';
import ChallengeCard from '@components/ui/ChallengeCard';
import Divider from '@components/ui/Divider';
import Link from 'next/link';
import { Lock, Rocket } from '@lib/icons';
import { allChallenges } from 'contentlayer/generated';
import { useAtom } from 'jotai';
import { lastSubmitted as lastSubmittedAtom } from '@lib/atoms';

export default function Home() {

  const { theme } = useTheme()
  const sortedChallenges = allChallenges.sort((a, b) => a.serial - b.serial);

  const firstThreeChallenges = sortedChallenges.slice(0, 4)
  const restOfChallenges = sortedChallenges.slice(3)
  const [lastSubmitted] = useAtom(lastSubmittedAtom);

  console.log("last", firstThreeChallenges);




  return (
    <>
      <section>
        <span className="pointer-events-none overscroll-none snap-none overflow-hidden ">
          {theme === "dark" && (
            <Image priority src={backgroundDark} alt="dark background"
              className="scale-150 overflow-x-hidden max-w-full lg:scale-100 origin-top mx-auto absolute -z-50 top-0 pointer-events-none !h-auto"
              objectFit="contain"
              objectPosition="top center"
              layout="responsive"
            />
          )}
          {theme === "light" && (
            <Image priority src={backgroundLight} alt="light background"
              className="scale-150 overflow-x-hidden max-w-full lg:scale-100 origin-top mx-auto absolute -z-50 top-0 pointer-events-none  !h-auto"
              objectFit="contain"
              objectPosition="top center"
              layout="responsive"
            />
          )}
        </span>
        <div className="text-center my-16 lg:my-24 2xl:my-32">
          <h1 className="font-title py-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-b from-title to-title/60 bg-clip-text text-transparent">SOLANA QUEST</h1>
          <p className="lg:text-lg">Learn how to build on Solana; <br /> the superpowers and the gotchas.</p>
          <span className="relative md:-top-20 inline-block w-full">
            <Image priority src={hero} alt="Solana Quest Illustration"
              className="w-full h-auto block" layout="responsive" />
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
            <HowItRow serial={2} >then use sol-dapp-scaffold to copy/paste each solana concept and tinker: Accounts, Programs, Transaction, CPI, and PDA</HowItRow>
            <HowItRow serial={3} >Watch this getting started
              <Link className='underline' href={'https://www.youtube.com/watch?v=0P8JeL3TURU&list=PLilwLeBwGuK6NsYMPP_BlVkeQgff0NwvU'}> playlist </Link>
              to become a power user and sol-dapper.</HowItRow>
          </div>
        </section>

        <section className="w-5/6 mx-auto space-y-8" id="explore">
          <span className="w-auto space-y-2 tracking-wider">
            <h2 className="text-2xl lg:text-3xl w-fit font-bold">Explore Quests</h2>
            <Divider className="w-3/5 lg:w-1/5 h-0.5" />
          </span>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {firstThreeChallenges.map(c => (
              <ChallengeCard key={c.serial}
                serial={c.serial}
                link={`/challenge/${c.slugAsParams}`}
                title={c.title}
                description={c.description}
              //  unlocked={c.serial <= lastSubmitted}
                icon={c.icon}
              />
            ))}
          </div>
        </section>

        <section className="w-5/6 mx-auto flex flex-col-reverse lg:flex-row lg:gap-24 xl:gap-32">
          <div>
            <h2 className="font-title py-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-b from-title to-title/60 bg-clip-text text-transparent -mb-2 ">Join BuidlGuidl</h2>
            <Divider className="w-full lg:w-4/6 h-0.5 lg:h-1 block mb-6" />
            <p>The BuidlGuidl is a curated group of Solana builders creating products, prototypes, and tutorials to enrich the web3 ecosystem. A place to show off your builds and meet other builders. Start crafting your Web3 portfolio by submitting your d-apps.</p>
            <Button asChild disabled={true} className={"tracking-wide px-10 gap-2 w-fit "}
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
                )}
              </Link>
            </Button>
          </div>
          <div>
            <Image src={join} layout="repsonsive" alt="Join Illustration" />
          </div>
        </section>

        <section className="w-5/6 mx-auto">
          {/* <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {restOfChallenges.map(c => (
              <ChallengeCard key={c.serial}
                serial={c.serial}
                link={`/challenge/${c.title}`}
                title={c.title}
                description={c.description}
              //  unlocked={c.serial <= lastSubmitted}
                icon={c.icon}
              />
            ))}
          </div> */}
        </section>
      </main>
    </>
  )
}

const HowItRow: React.FC<{ children: React.ReactNode, serial: number }> = ({ children, serial }) => {
  return (
    <span className="flex items-start text-lg lg:text-xl">
      <span className=" bg-gradient-to-b w-fit from-title to-title/60 p-[3px] rounded-full block mr-6 lg:mr-8" >
        <span className="bg-background text-center h-8 w-8 rounded-full text-2xl block ">{serial}</span>
      </span>
      <p>{children}</p>
    </span>
  )
}
