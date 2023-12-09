'use client';
import {
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import {useAnchorWallet, useWallet} from "@solana/wallet-adapter-react"
import { useAtom } from 'jotai';
import { anchorProgram } from '../lib/anchor';
import { useEffect } from 'react';
import { anchor } from 'lib/atoms';
import { Wallet } from '@coral-xyz/anchor';
import { Button } from 'components/ui/button';
import {Sun} from "lucide-react"
import { useTheme } from 'next-themes';
import ThemeSwitcher from '@components/ThemeSwitcher';

export default function Home() {

  const anchorWallet = useAnchorWallet()
  // const [anchorAtom, setAnchorAtom] = useAtom(anchor)
  // useEffect(() => {
  //   if(anchorWallet) {
  //     setAnchorAtom(anchorProgram(anchorWallet as Wallet))
  //   }
  // },[])

  // <WalletMultiButton />
  //
  const {setTheme} = useTheme()
  return (
    <main>
      <h1 className="text-3xl">Mah nwoo</h1>
      <Button variant="default"  >Connect Wallet</Button>
      <Button variant="secondary">Connect Wallet</Button>
      <Button variant="outline">Connect Wallet</Button>
      <Button variant="destructive">Connect Wallet</Button>
      <Button variant="ghost">Connect Wallet</Button>
      <Button variant="link">Connect Wallet</Button>
      
      <ThemeSwitcher />
    </main>
  )
}
