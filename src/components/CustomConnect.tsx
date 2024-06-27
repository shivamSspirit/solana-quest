"use client"
import { Button } from "./ui/button"
import { Loader2, Wallet as WalletIcon } from "lucide-react"
import { useWallet, useConnection, useAnchorWallet  } from "@solana/wallet-adapter-react"
import { useLayoutEffect, useState } from "react"
import { useWalletModal } from "@solana/wallet-adapter-react-ui"
import { sleep, trimKey } from "@lib/utils"
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
import { pfp, solQuestAnchor, userAccount, userAccountPDA , adminAccountPDA, adminAccount} from "@lib/atoms"
import { useAtom } from "jotai"
import publicEnv from "@lib/env/public"
import promiser from "@lib/promiser"
import { useToast } from "components/ui/use-toast"

const CustomConnect: React.FC = () => {

  const {setVisible} = useWalletModal()
  const {connecting, connected, wallet, disconnect, disconnecting, signTransaction, sendTransaction} = useWallet()
  const {connection} = useConnection()
  const anchorWallet = useAnchorWallet()

  const [label, setLabel] = useState("Connect Wallet")
  const [image, setImage] = useAtom(pfp)
  const [_, setMateAcc] = useAtom(userAccount)
  const [__, setSolQuest] = useAtom(solQuestAnchor)
  const [___, setUserAccount] = useAtom(userAccountPDA)
 // const [____, setAdminAcc] = useAtom(adminAccount)
 // const [_____, setAdminAccount] = useAtom(adminAccountPDA)

  const { toast } = useToast()

  useLayoutEffect(() => {
    if(connecting) setLabel("Connecting...")
  }, [connecting])

  useLayoutEffect(() => {
    if(disconnecting) setLabel("Disconnecting..")
  }, [disconnecting])

  useLayoutEffect( () => {
    if(connected && wallet && wallet.adapter.publicKey) {
      // setLabel(trimKey(wallet.adapter.publicKey?.toString() || "") || "no public key")

      const solQuest = anchorProgram(anchorWallet as any)
      setSolQuest(solQuest)
      const [mateAccountPDA] = anchor.web3.PublicKey.findProgramAddressSync([Buffer.from("Mate"), wallet.adapter.publicKey!.toBuffer()], new anchor.web3.PublicKey(publicEnv.NEXT_PUBLIC_PROGRAM_ID));
    //  const [adminAccountPDA] = anchor.web3.PublicKey.findProgramAddressSync([Buffer.from("Admin"), wallet.adapter.publicKey!.toBuffer()], new anchor.web3.PublicKey(publicEnv.NEXT_PUBLIC_PROGRAM_ID));



     // console.log("adminAccountPDA", adminAccountPDA.toString());

      

      setUserAccount(mateAccountPDA)
      console.log("start get")
      const initSolQuest = async () => {

        /** creation of admin account */
   //     const [adminAcc, adminAccError] = await promiser(solQuest.account.admin.fetch(adminAccountPDA))
        const [mateAcc, mateAccError] = await promiser(solQuest.account.mate.fetch(mateAccountPDA))



     //   console.log("adminAcc",adminAcc);





        let nft: Awaited<ReturnType<typeof getNft>> = null
        try {
          if(mateAccError) {
            console.log("mate acc not found")
            console.log("account creating")
            console.table({pubkey: wallet.adapter.publicKey, signTransaction})

            if(wallet.adapter.publicKey && solQuest && signTransaction) {
              console.log("if block of acc creation passed passed")
              const imageUrl = `https://robohash.org/${wallet.adapter.publicKey!.toString()}`
              let mintkey: string
              const nftid = await mintNft(imageUrl, wallet.adapter.publicKey!.toString())
              await sleep(1000)
              mintkey = await getMintKeyOfNft(nftid)
              console.log("mint key - ",mintkey)
              let retries = 0
              while(retries < 6 && mintkey === "") {
                await sleep(1000)
                mintkey = await getMintKeyOfNft(nftid)
              }
              if(mintkey === ""){
                throw new Error("mint key was not found")
              }

              // const [confirmAdmintx,confirmAdmintxErr] = await promiser(solQuest.methods
              //   .initializeAdmin().accounts({
              //     signer: wallet.adapter.publicKey,
              //     admin: adminAccountPDA,
              //     systemProgram: anchor.web3.SystemProgram.programId,
              //   })
              //   .rpc())



              //   if(confirmAdmintxErr) {
              //     console.error(`InitialzeAccount - error while sending transaction - ${JSON.stringify(confirmAdmintxErr)}`)
              //     throw new Error(`InitialzeAccount - error while sending transaction - ${JSON.stringify(confirmAdmintxErr)}`)
              //   }

              //   if(confirmAdmintx){
              //     console.log("confirmAdmintx",confirmAdmintx);
              //   }

              const [confirmTx, confirmErr] = await promiser(solQuest.methods
                .initializeUser(new anchor.web3.PublicKey(mintkey)).accounts({
                  signer: wallet.adapter.publicKey,
                  user: mateAccountPDA,
                  systemProgram: anchor.web3.SystemProgram.programId,
                })
                .rpc())




              if(confirmErr) {
                console.error(`InitialzeAccount - error while sending transaction - ${JSON.stringify(confirmErr)}`)
                throw new Error(`InitialzeAccount - error while sending transaction - ${JSON.stringify(confirmErr)}`)
              }

              if(confirmTx) {
                setImage(imageUrl)
                setLabel(trimKey(wallet.adapter.publicKey?.toString() || "") || "no public key")
                toast({
                  title: "Successfull",
                  description: "Account Created"
                })
              }
            }
          }
          if(mateAcc) {
            console.log("mate acc found")
            nft = await getNft(mateAcc.mateNft.toString())
            setMateAcc(mateAcc)
            // TODO: nft not found but mateAcc found logic to be written
            const imageUrl = `https://robohash.org/${wallet.adapter.publicKey!.toString()}`
            setImage(nft?.image ??  imageUrl ) //image exist in collection -> user exists
            setLabel(trimKey(wallet.adapter.publicKey?.toString() || "") || "no public key")
            console.log("Account Connected")
            toast({
              title: "Successfull",
              description: "Account Connected"
            })
          }  

        } catch (error) {
          console.log("Error - ", error)
          toast({
            title: "Ohoo :(",
            description: "Something went wrong, Please try again"
          })
          setLabel("Failed :(")
          await sleep(1000)
          wallet.adapter.disconnect()
          setLabel("Connect Wallet")
        }
      } 
      initSolQuest()
    } else {
      setLabel("Connect Wallet")
    }
  }, [connected, wallet])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild  >
        <Button className="gap-2 px-8"
          disabled={label === 'Connecting...'}
          onClick={() => setVisible(true)}>
          {label === 'Connecting...' ? <Loader2 className="animate-spin" /> : 
            <WalletIcon />
          }
          {label}
        </Button>
      </DropdownMenuTrigger>
      {connected && image && (
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


// TEST CODE FOR GASLESS - NOT WORKING
// const tx = new anchor.web3.Transaction()
// const initializeAccountInstruction = await solQuest.methods
//   .initializeUser(new anchor.web3.PublicKey(mintKey)).accounts({
//     signer: wallet.adapter.publicKey,
//     user: mateAccountPDA,
//     systemProgram: anchor.web3.SystemProgram.programId,
//   })
//   .instruction()
// tx.add(initializeAccountInstruction)
//
// const latestBlockhash = await connection.getLatestBlockhash()
// tx.recentBlockhash = latestBlockhash.blockhash
// tx.feePayer = wallet.adapter.publicKey
//
// const [signedTransaction,signError] = await promiser(sendTransaction(tx, connection))
// if(signError) {
//   console.error(`InitialzeAccount - error while signing transaction - ${JSON.stringify(signError)}`)
//   throw new Error(`InitialzeAccount - error while signing transaction - ${JSON.stringify(signError)}`)
// }
// const serializedTransaction = signedTransaction.serialize({
//   requireAllSignatures: false
// });
// const base64Transaction = serializedTransaction.toString('base64');

// const confirm = await initializeAccount(base64Transaction)

// const [confirmTx, confirmErr] = await promiser(connection.confirmTransaction({
//   signature: signedTransaction,
//   ...latestBlockhash
// }))
