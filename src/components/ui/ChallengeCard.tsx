"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card"
import Link from "next/link"
import { Button } from "./button"
import { Lock, Rocket } from "@lib/icons"
import { cn } from "@lib/utils"
import { useLayoutEffect, useState } from "react"
import dynamic from "next/dynamic"

interface ChallegeCardProps {
  serial: number,
  icon: string,
  title: string,
  description: string,
  unlocked: boolean,
  link: string
}
const ChallengeCard: React.FC<ChallegeCardProps> =   ({unlocked, icon, title, serial, link, description}) => {

  const Icon = dynamic(() => import(`lib/icons/${icon}`), { ssr: true })

  return (
    <Link href="/challenge/intro-to-cpi" className={cn(!unlocked && "pointer-events-none")}>
    <Card className=""  >
      <CardHeader>
        <CardDescription className="text-card-foreground">Challenge #{serial}</CardDescription>
          <Icon />
        <CardTitle className="pt-1 font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="leading-6" >{description}  </p>
      </CardContent>
      <CardFooter className="w-full" >
        <Button disabled={!unlocked} className={"tracking-wide gap-2 w-full"} outerClass="w-full" >
            {unlocked ? (
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
        </Button>
      </CardFooter>
    </Card>
    </Link>
  )
}

export default ChallengeCard
