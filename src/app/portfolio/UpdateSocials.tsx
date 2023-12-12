"use client"
import { Button } from "@components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@components/ui/dialog"
import { At, Tick } from "@lib/icons"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@components/ui/form"
import { Input } from "@components/ui/input"

const socialsSchema = z.object({
    telegram: z.string().regex(/^([^@]*)$/, "Telegram handle should not contain '@'.").optional(),
    twitter: z.string().regex(/^([^@]*)$/, "Twitter handle should not contain '@'.").optional(),
    discord: z.string().regex(/^[^#]*$/, "Discord username should not contain '#'.").optional(),
    github: z.string().optional(),
    email: z.string().email().optional(),
    instagram: z.string().optional(),
})

interface SocialInput {
    name: "telegram" | "twitter" | "discord" | "github" | "email" | "instagram",
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
        name: "discord",
        label: "Discord",
        placeholder: "Your Discord username (new username, without the hash)"
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

    const form = useForm<z.infer<typeof socialsSchema>>({
        resolver: zodResolver(socialsSchema),
    })
    function onSubmit(values: z.infer<typeof socialsSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
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
                        <Button className="font-medium w-full" outerClass="w-full" >
                            <Tick /> Update
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

export default UpdateSocials
