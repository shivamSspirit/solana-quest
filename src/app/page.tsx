'use client';
import {
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import {useAnchorWallet, useWallet} from "@solana/wallet-adapter-react"
import { useAtom } from 'jotai';
import { anchorProgram } from '../lib/anchor';
import { useEffect } from 'react';
import { anchor } from '@/lib/atoms';
import { Wallet } from '@coral-xyz/anchor';

export default function Home() {

  const anchorWallet = useAnchorWallet()
  const [anchorAtom, setAnchorAtom] = useAtom(anchor)
  useEffect(() => {
    if(anchorWallet) {
      setAnchorAtom(anchorProgram(anchorWallet as Wallet))
    }
  },[])
  
  return (
    <main>
      <WalletMultiButton />
    </main>
  )
}
