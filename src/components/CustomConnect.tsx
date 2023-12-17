"use client"
import { Button } from "./ui/button"
import { Wallet as WalletIcon } from "lucide-react"
import { useWallet, useConnection } from "@solana/wallet-adapter-react"
import { useLayoutEffect, useState } from "react"
import { useWalletModal } from "@solana/wallet-adapter-react-ui"
import { getAdminWallet, sleep, trimKey } from "@lib/utils"
import {Profile, WalletMinux} from "lib/icons"
import * as anchor from "@coral-xyz/anchor";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu"
import Link from "next/link"
import { anchorProgram } from "@lib/anchor"
import { getNft, mintNft, getMintKeyOfNft } from "@lib/actions"
import { gasKeypair, pfp, solQuestAnchor, userAccountPDA } from "@lib/atoms"
import { useAtom } from "jotai"
import publicEnv from "@lib/env/public"
import promiser from "@lib/promiser"
import { useToast } from "components/ui/use-toast"

const CustomConnect: React.FC = () => {

  const {setVisible} = useWalletModal()
  const {connecting, connected, wallet, disconnect, disconnecting, signTransaction, sendTransaction} = useWallet()
  const {connection} = useConnection()

  const [label, setLabel] = useState("Connect Wallet")
  const [_, setImage] = useAtom(pfp)
  const [gasKeys, setGasKeys] = useAtom(gasKeypair)
  const [solQuest, setSolQuest] = useAtom(solQuestAnchor)
  const [userAccount, setUserAccount] = useAtom(userAccountPDA)

  const { toast } = useToast()

  useLayoutEffect(() => {
    if(connecting) setLabel("Connecting..")
  }, [connecting])

  useLayoutEffect(() => {
    if(disconnecting) setLabel("Disconnecting..")
  }, [disconnecting])

  useLayoutEffect( () => {
    if(connected && wallet && wallet.adapter.publicKey) {
      setLabel(trimKey(wallet.adapter.publicKey?.toString() || "") || "no public key")

      setGasKeys(getAdminWallet())
      setSolQuest(anchorProgram(wallet as any))

      getNft(wallet.adapter.publicKey.toString())
        .then(async d => {
          if(d) {
              toast({
                title: "Successfull",
                description: "Account Connected"
              })
            setImage(d) //image exist in collection -> user exists
          }
          else {
            if(wallet.adapter.publicKey && gasKeys && solQuest && signTransaction) {
              const imageUrl = `https://robohash.org/${wallet.adapter.publicKey!.toString()}`
              const nftId = await mintNft(imageUrl, wallet.adapter.publicKey!.toString())
              await sleep(700)
              const mintKey = await getMintKeyOfNft(nftId)

              const [mateAccountPDA] = anchor.web3.PublicKey.findProgramAddressSync([Buffer.from("Mate"), wallet.adapter.publicKey!.toBuffer()], new anchor.web3.PublicKey(publicEnv.NEXT_PUBLIC_PROGRAM_ID));

              setUserAccount(mateAccountPDA)

              const tx = new anchor.web3.Transaction()
              const initializeAccountInstruction = await solQuest.methods
                .initializeUser(new anchor.web3.PublicKey(mintKey)).accounts({
                  signer: wallet.adapter.publicKey,
                  user: mateAccountPDA,
                  systemProgram: anchor.web3.SystemProgram.programId
                })
                .instruction()
              tx.add(initializeAccountInstruction)

              tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash
              tx.feePayer = gasKeys.publicKey
              
              tx.partialSign(gasKeys)

              const [signedTransaction,signError] = await promiser(signTransaction(tx))
              if(signError) {
                console.error(`InitialzeAccount - error while signing transaction - ${JSON.stringify(signError)}`)
                throw new Error(`InitialzeAccount - error while signing transaction - ${JSON.stringify(signError)}`)
              }
              const [sentTransaction, sendError] = await promiser(sendTransaction(signedTransaction, connection))
              if(sendError) {
                console.error(`InitialzeAccount - error while sending transaction - ${JSON.stringify(signError)}`)
                throw new Error(`InitialzeAccount - error while sending transaction - ${JSON.stringify(signError)}`)
              }
              setImage(imageUrl)
              toast({
                title: "Successfull",
                description: "Account Created"
              })
            }
          }
        })

    } else {
      setLabel("Connect Wallet")
    }
  }, [connected, wallet])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild  >
        <Button className="gap-2 px-8"
          onClick={() => setVisible(true)}>
          <WalletIcon />
          {label}
        </Button>
      </DropdownMenuTrigger>
      {wallet && (
      <DropdownMenuContent className="flex flex-col py-2">
        <DropdownMenuItem asChild >
          <Button variant="ghost" asChild className="text-base justify-start pl-4 pr-12 cursor-pointer" >
            <Link href="/portfolio" >
              <Profile className="w-6 h-6 mr-2" /> Portfolio
            </Link>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem asChild >
          <Button variant="ghost" className="text-base text-destructive justify-start pl-4 pr-12" onClick={() => disconnect()} >
              <WalletMinux className="w-6 h-6 mr-2" /> Disconnect
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>)}
    </DropdownMenu>
  )
}

export default CustomConnect
