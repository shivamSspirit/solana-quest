"use client"
import { Button } from "./ui/button"
import { Wallet as WalletIcon } from "lucide-react"
import { useWallet} from "@solana/wallet-adapter-react"
import { useLayoutEffect, useState } from "react"
import { useWalletModal } from "@solana/wallet-adapter-react-ui"
import { trimKey } from "@lib/utils"
import {Profile, WalletMinux} from "lib/icons"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu"
import Link from "next/link"
import { disconnect } from "process"


const CustomConnect: React.FC = () => {

  const {setVisible} = useWalletModal()
  const {connecting, connected, wallet, disconnect, disconnecting} = useWallet()

  const [label, setLabel] = useState("Connect Wallet")

  useLayoutEffect(() => {
    if(connecting) setLabel("Connecting..")
  }, [connecting])

  useLayoutEffect(() => {
    if(disconnecting) setLabel("Disconnecting..")
  }, [disconnecting])

  useLayoutEffect(() => {
    if(connected && wallet) {
      setLabel(trimKey(wallet.adapter.publicKey?.toString() || "") || "no public key")
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
