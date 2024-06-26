"use client"
import { Button } from "@components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@components/ui/form"
import { Input } from "@components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@components/ui/popover"
import { zodResolver } from "@hookform/resolvers/zod"
import { solQuestAnchor, userAccountPDA, adminAccountPDA } from "@lib/atoms"
import { Lock, Rocket } from "@lib/icons"
import { useWallet } from "@solana/wallet-adapter-react"
import { useAtom } from "jotai"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import * as anchor from "@coral-xyz/anchor"
import { toast } from "@components/ui/use-toast"
import { Loader2 } from "lucide-react"
import { lastSubmitted as lastSubmittedAtom } from '@lib/atoms';

import { BN } from "@coral-xyz/anchor"

const challengeSchema = z.object({
  deployedURL: z.string().url("Must be a valid URL"),
  transactionSignature: z.string()
})

interface ChallegeInput {
  name: "deployedURL" | "transactionSignature",
  label: string,
  placeholder: string,
}

const challengeInputs: ChallegeInput[] = [
  {
    name: "deployedURL",
    label: "Deployed URL",
    placeholder: "https://your-site.vercel.app/"
  },
  {
    name: "transactionSignature",
    label: "Transaction Signature / ID",
    placeholder: "8EJChgyT2Ygjci4Z8PGEcth4YvmjFUx4ujEDCFcpAy37"
  }
]

const SubmitChallenge: React.FC<{ serial: number, title: string }> = ({ serial, title }) => {

  console.log("userAccountPDA", userAccountPDA)

  const [mateAccountPDA] = useAtom(userAccountPDA)
 // const [mainAccountPDA]= useAtom(adminAccountPDA)
  const [solQuest] = useAtom(solQuestAnchor)
  const [lastSubmitted] = useAtom(lastSubmittedAtom)

  const { wallet } = useWallet();

  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof challengeSchema>>({
    resolver: zodResolver(challengeSchema),
  })
  async function onSubmit(values: z.infer<typeof challengeSchema>) {

  //  console.log("mateAccountPDA", mateAccountPDA!.toString());
    console.log("solQuest", solQuest);
    console.log("wallet?.adapter.publicKey", wallet?.adapter.publicKey!.toString());

    const id = serial;
    const deployedUrl = values.deployedURL;
    const transaction = values.transactionSignature;




    setLoading(true)
    if (wallet?.adapter.publicKey! && mateAccountPDA! && solQuest!) {
      console.log("values", values, serial)
      const resp = await solQuest?.methods.addCompletedQuest(id, deployedUrl, transaction)
        .accounts({
          signer: wallet.adapter.publicKey,
          user: mateAccountPDA,
          systemProgram: anchor.web3.SystemProgram.programId
        })
        .rpc();
      console.log(
        "response", resp
      )
      if (resp) {
        console.log(
          "response-0", resp
        )
        toast({
          title: "Successful",
          description: "We have received your submission"
        })
      } else {
        toast({
          title: "Failed",
          description: "Unable to submit challenge, Please try agian later"
        })
      }
    }
    setLoading(false)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="gap-2" disabled={serial > lastSubmitted} >
          {serial > lastSubmitted ? (
            <>
              <Lock />
              LOCKED
            </>
          ) : (
            <>
              <Rocket />
              Submit Challenge
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <h3 className="text-xl mb-4 font-semibold">Submit Challenge</h3>
        <span>{`Challenge ${serial}: ${title}`}</span>
        <Form {...form} >
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 mt-2" >
            {challengeInputs.map(s => (
              <FormField
                key={s.name}
                control={form.control}
                name={s.name}
                render={({ field }) => (
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
            <Button className="font-medium w-full gap-2" outerClass="w-full" >
              {loading ? (<>
                <Loader2 className="animate-spin" /> Loading
              </>) : (<>
                <Rocket /> Submit
              </>)}
            </Button>
          </form>
        </Form>
      </PopoverContent>
    </Popover>
  )
}

export default SubmitChallenge
