"use client"
import Image from "next/image"
import profilePic from "lib/assets/profile.png"
import { useWallet } from "@solana/wallet-adapter-react"
import { copyToClipboard, sleep, trimKey } from "@lib/utils"
import { Button } from "@components/ui/button"
import { At, Copy, Rocket, Star, Badge, Crown, Telegram, X, Discord, Github, Instagram, Mail } from "@lib/icons"
import Divider from "@components/ui/Divider"
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { useToast } from "@components/ui/use-toast"
import UpdateSocials from "./UpdateSocials"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@components/ui/table"
import { Loader2 } from "lucide-react"
import { useAtom } from "jotai"
import { pfp, userAccount } from "@lib/atoms"
import { useLayoutEffect, useState } from "react"
import Link from "next/link"
import ChallengeTable from "./ChallengeTable"
import { allChallenges } from "contentlayer/generated"
import BN from "bn.js"

export interface Challenge {
        name: string,
        live: string,
        status: string,
        contract: string,
        updated: Date
    }
const Portfolio: React.FC = () => {
    const {wallet, connecting } = useWallet()
    const [userChallenges, setUserChallenges] = useState<Challenge[]>([])
    const [image] = useAtom(pfp)
    const {toast} = useToast();

    const [mateAccount] = useAtom(userAccount);

    const [profile, setProfile] = useState<Record<string, string>>({})

    useLayoutEffect(() => {
        console.log(mateAccount);
        console.log("image",image)
        if(mateAccount) {
            const profile: Record<string, string> = {}
            mateAccount.socials.forEach((s: any) => {
                profile[s['socialName']] = s['socialLink']
            })
            setProfile(profile)

            const challenges = mateAccount['questCompletedByMate'] as any[]
            const displayChallenges: any[] = []
            challenges.map(c => {
                const currChallengeFromContent = allChallenges?.find((a) => {
                    return a.serial === c.id
                })
                console.log(Object.keys(c['status'])[0])
                const newChallenge = {
                    name: currChallengeFromContent?.title,
                    contract: c['transaction'],
                    live: c['deployedUrl'],
                    updated: new Date(new BN(c['updatedTime']).toNumber() * 1000),
                    status: Object.keys(c['status'])[0]
                }
                displayChallenges.push(newChallenge)
            })

            setUserChallenges(displayChallenges)
        }
    }, [mateAccount!])

    if(!wallet) return (
        <div className="text-center text-4xl h-[60vh] flex items-center justify-center text-muted-foreground">
            Please Connect First
        </div>
    )

    if(connecting || !image) return (
        <div className="text-center text-4xl h-[60vh] flex items-center justify-center text-muted-foreground">
            <Loader2 className="animate-spin w-12 h-12 mr-4" /> Connecting Wallet...
        </div>
    )

    return (
        <main className="w-5/6 lg:w-4/6 mx-auto py-12 lg:py-14" >
            <div className="flex flex-col justify-center items-center" >
                <span className="block w-3/5 lg:w-[20%] bg-gradient-to-b from-primary to-transparent
                    p-0.5 rounded-full overflow-hidden" >
                    <Image layout="responsive" width={400} height={400}
                        src={image} alt="Profile Pic" />
                </span>
                <span className="flex gap-2 items-center text-lg pt-2 lg:pt-4">
                    <p>{trimKey(wallet?.adapter.publicKey?.toString() || "")}</p>
                    <Button onClick={async () => {
                        await copyToClipboard(wallet?.adapter.publicKey?.toString() || "")
                        const {dismiss} = toast({
                            title: "Copied",
                        })
                        await sleep(3000)
                        dismiss()
                    }}
                        className="px-2" variant="ghost">
                        <Copy className="w-6 h-6" />
                    </Button>
                </span>

                <span className="flex gap-4 pt-2 pb-4" >
                    {profile.telegram && (
                        <a target="_blank" href={"https://t.me/" + profile.telegram}>
                        <Telegram gradient />
                        </a>
                    )}
                    {profile.twitter && (
                        <a target="_blank" href={"https://twitter.com/" + profile.twitter}>
                        <X gradient />
                        </a>
                    )}
                    {profile.github && (
                        <a target="_blank" href={"https://github.com/" + profile.github}>
                        <Github gradient />
                        </a>
                    )}
                    {profile.email && (
                        <a target="_blank" href={"mailto:" + profile.email}>
                        <Mail gradient />
                        </a>
                    )}
                    {profile.instagram && (
                        <a target="_blank" href={"https://www.instagram.com/"+profile.instagram}>
                        <Instagram gradient />
                        </a>
                    )}
                </span>

                <UpdateSocials />

            </div>
            <Divider className="my-8 lg:my-12" />
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2" >
                <Card className="">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-xl lg:text-2xl" >
                            <Crown className="lg:h-8 lg:w-8" /> Challenges Completed
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{`${userChallenges.length} challenges completed`}</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex gap-2 items-center text-xl lg:text-2xl">
                            <Star className="lg:h-8 lg:w-8" /> Roles
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{Object.keys(mateAccount.mateRole)[0]}</p>
                    </CardContent>
                </Card>

                <Card className="[&>*]:!bg-transparent lg:col-span-2" >
                    <CardHeader>
                        <CardTitle className="flex gap-2 items-center text-xl lg:text-2xl" >
                            <Badge className="lg:h-8 lg:w-8" /> Challenges
                        </CardTitle>
                        <CardContent className="text-center flex flex-col my-8 items-center gap-4" >
                            {(userChallenges?.length) === 0 && (
                                <>
                                    <p className="text-lg">Show off your skills. <br /> 
                                        Learn everything you need to build on Solana!</p>
                                    
                                    <Button className="w-fit gap-2 text-lg" size="lg" outerClass="w-fit"  asChild >
                                        <Link href="/#explore">
                                        <Rocket /> Start a Challenge
                                        </Link>
                                    </Button>
                                </>
                            )}
                            {userChallenges?.length !== 0 && (
                                <ChallengeTable  challenges={userChallenges} />
                            )}
                        </CardContent>
                    </CardHeader>
                </Card>

            </div>
        </main>
    )
}

export default Portfolio
