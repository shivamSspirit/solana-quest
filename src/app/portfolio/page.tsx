"use client"
import Image from "next/image"
import profilePic from "lib/assets/profile.png"
import { useWallet } from "@solana/wallet-adapter-react"
import { copyToClipboard, sleep, trimKey } from "@lib/utils"
import { Button } from "@components/ui/button"
import { At, Copy, Rocket, Star, Badge, Crown, Telegram, X, Discord, Github, Instagram } from "@lib/icons"
import Divider from "@components/ui/Divider"
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { useToast } from "@components/ui/use-toast"
import UpdateSocials from "./UpdateSocials"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@components/ui/table"

const Portfolio: React.FC = () => {
    const {wallet} = useWallet()

    interface Challenge {
        name: string,
        live: string,
        status: string,
        contract: string,
        updated: string
    }
    const challenges: Challenge[] = []

    const {toast} = useToast()

    const profile = {
        instagram: "instagram",
        twitter: "twiiter",
        discord: "discord",
        github: "github",
        telegram: "telegram"
    }

    return (
        <main className="w-5/6 lg:w-4/6 mx-auto py-12 lg:py-14" >
            <div className="flex flex-col justify-center items-center" >
                <span className="block w-3/5 lg:w-[20%] bg-gradient-to-b from-primary to-transparent
                    p-0.5 rounded-full" >
                    <Image layout="responsive"
                        src={profilePic} alt="Profile Pic" />
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
                        <a target="_blank" href={profile.telegram}>
                        <Telegram gradient />
                        </a>
                    )}
                    {profile.twitter && (
                        <a target="_blank" href={profile.twitter}>
                        <X gradient />
                        </a>
                    )}
                    {profile.discord && (
                        <a target="_blank" href={profile.discord}>
                        <Discord gradient />
                        </a>
                    )}
                    {profile.github && (
                        <a target="_blank" href={profile.github}>
                        <Github gradient />
                        </a>
                    )}
                    {profile.instagram && (
                        <a target="_blank" href={profile.instagram}>
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
                        <p>0 challenges completed</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex gap-2 items-center text-xl lg:text-2xl">
                            <Star className="lg:h-8 lg:w-8" /> Roles
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>0 Role</p>
                    </CardContent>
                </Card>

                <Card className="[&>*]:!bg-transparent lg:col-span-2" >
                    <CardHeader>
                        <CardTitle className="flex gap-2 items-center text-xl lg:text-2xl" >
                            <Badge className="lg:h-8 lg:w-8" /> Challenges
                        </CardTitle>
                        <CardContent className="text-center flex flex-col my-8 items-center gap-4" >
                            {challenges.length === 0 && (
                                <>
                                    <p className="text-lg">Show off your skills. <br /> 
                                        Learn everything you need to build on Solana!</p>
                                    <Button className="w-fit gap-2 text-lg" size="lg" outerClass="w-fit" >
                                        <Rocket /> Start a Challenge
                                    </Button>
                                </>
                            )}
                            {challenges.length !== 0 && (
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Name</TableHead>
                                            <TableHead>Contract</TableHead>
                                            <TableHead>Live Demo</TableHead>
                                            <TableHead>Updated</TableHead>
                                            <TableHead>Status</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {challenges.map(c => (
                                            <TableRow key={c.contract} >
                                                <TableCell>{c.name}</TableCell>
                                                <TableCell>{c.contract}</TableCell>
                                                <TableCell>{c.live}</TableCell>
                                                <TableCell>{c.updated}</TableCell>
                                                <TableCell>{c.status}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            )}
                        </CardContent>
                    </CardHeader>
                </Card>

            </div>
        </main>
    )
}

export default Portfolio