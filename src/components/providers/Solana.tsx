'use client';
import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import {
  WalletModalProvider,
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import { useAtom } from 'jotai'
import { lastSubmitted, userAccount } from '@lib/atoms'
import { useLayoutEffect } from 'react';
//
// Default styles that can be overridden by your app
require('@solana/wallet-adapter-react-ui/styles.css');

type Props = {
  children?: React.ReactNode
};

const Solana: FC<Props> = ({children}) => {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Devnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [network]
  );

  const [_, setLastSubmitted] = useAtom(lastSubmitted)
  const [mateAccount] = useAtom(userAccount)
  useLayoutEffect(() => {
    if(mateAccount && mateAccount['questCompletedByMate']){
      const length = mateAccount['questCompletedByMate'].length
      if(length === 0) return
      console.log("quest completed - ",mateAccount['questCompletedByMate'][length-1])
      const s = mateAccount['questCompletedByMate'][length-1].id as number
      setLastSubmitted(s)
    }
  }, [mateAccount])

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect={true} >
        <WalletModalProvider >
          { children }
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default Solana
