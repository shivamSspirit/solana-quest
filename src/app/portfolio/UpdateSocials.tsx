"use client"
import { Button } from "@components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@components/ui/dialog"
import { At, Tick } from "@lib/icons"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@components/ui/form"
import { Input } from "@components/ui/input"
import { useAtom } from "jotai"
import { solQuestAnchor, userAccount, userAccountPDA } from "@lib/atoms"
import { useWallet } from "@solana/wallet-adapter-react"
import * as anchor from "@coral-xyz/anchor"
import { useLayoutEffect, useState } from "react"
import { toast } from "@components/ui/use-toast"
import { Loader2 } from "lucide-react"

const socialsSchema = z.object({
    telegram: z.string().regex(/^([^@]*)$/, "Telegram handle should not contain '@'.").optional(),
    twitter: z.string().regex(/^([^@]*)$/, "Twitter handle should not contain '@'.").optional(),
    discord: z.string().regex(/^[^#]*$/, "Discord username should not contain '#'.").optional(),
    github: z.string().optional(),
    email: z.string().email().optional(),
    instagram: z.string().optional(),
})

interface SocialInput {
    name: "telegram" | "twitter" | "github" | "email" | "instagram",
    label: string,
    placeholder: string,
}
const socialsInputs: SocialInput[] = [
    {
        name: "telegram",
        label: "Telegram",
        placeholder: "Your Telegram handle without the @"
    }, {
        name: "twitter",
        label: "Twitter",
        placeholder: "Your Twitter handle without the @"
    }, {
        name: "github",
        label: "GitHub",
        placeholder: "Your GitHub username"
    }, {
        name: "email",
        label: "E-mail",
        placeholder: "Your email address"
    }, {
        name: "instagram",
        label: "Instagram",
        placeholder: "Your Instagram handle without the @"
    }
]

const UpdateSocials: React.FC = () => {

    const [mateAccountPDA] = useAtom(userAccountPDA)
    const [solQuest] = useAtom(solQuestAnchor)
    const [mateAccount, setMateAccount] = useAtom(userAccount)

    const {wallet} = useWallet()

    const [loading, setLoading] = useState(false)

    const form = useForm<z.infer<typeof socialsSchema>>({
        resolver: zodResolver(socialsSchema),
    })

    useLayoutEffect(() => {
        if(mateAccount) {
            console.log("Mate Account Socials - ",mateAccount.socials)
            mateAccount.socials.forEach((s: any) => {
                if(s['socialLink'] === "") return
                form.setValue(s['socialName'], s['socialLink'])
            })
        }
    }, [mateAccount])



    async function onSubmit(values: z.infer<typeof socialsSchema>) {
        setLoading(true)
        const socials: {socialName: string, socialLink: string}[] = []
        console.log(values)
        for (const social in values) {
            socials.push({
                socialName: social,
                // @ts-ignore
                socialLink: (values[social] as string) ?? ""
            })
        }
        console.table({old: mateAccount.socials, new: socials})
        if(mateAccount.socials === socials) {
            toast({
                title: "No Updates",
                description: "All values are same"
            })
            setLoading(false)
            return
        } 
        if(wallet?.adapter.publicKey && mateAccountPDA) {
            const signature = await solQuest?.methods.addMateSocial(socials).accounts({
                signer: wallet?.adapter.publicKey,
                user: mateAccountPDA,
                systemProgram: anchor.web3.SystemProgram.programId
            }).rpc().catch(() => {
                    setLoading(false)
                    toast({
                        title: "Failed",
                        description: "Unable to update, Please try agian later"
                    })
                })
            if(signature) {
                setMateAccount({
                    ...mateAccount,
                    socials
                })
                toast({
                    title: "Successfull",
                    description: "Updated your socials"
                })
            } else {
                toast({
                    title: "Failed",
                    description: "Unable to update, Please try agian later"
                })
            }
            
        }
        setLoading(false)
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="gap-2" >
                    <At /> Update Socials
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Update your socials</DialogTitle>
                </DialogHeader>
                <Form {...form} >
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4" >
                        {socialsInputs.map(s => (
                            <FormField 
                                key={s.name}
                                control={form.control}
                                name={s.name}
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>{s.label}</FormLabel>
                                        <FormControl>
                                            <Input placeholder={s.placeholder}
                                            {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        ))}
                        <Button className="font-medium w-full gap-2" outerClass="w-full" 
                            disabled={loading}
                        >
                            {loading ? (<>
                                <Loader2 className="animate-spin" /> Loading
                            </>) : (<>
                                <Tick /> Update
                            </>)}
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

export default UpdateSocials
