'use server'

import { utils, web3 } from "@coral-xyz/anchor"
import serverEnv from "./env/server"
import promiser from "./promiser"
import publicEnv from "./env/public"

const UNDERDOG_PROJECTS_URL = `${serverEnv.UNDERDOG_BASE_URL}/projects/${serverEnv.UNDERDOG_PROJECT_ID}/nfts`

export async function getNft(publicKey: string): Promise<{image: string, mintKey: string} | null> {
  console.log("getNFT() was called")
  const url = new URL(`${UNDERDOG_PROJECTS_URL}/search`)
  url.searchParams.set("limit", serverEnv.UNDERDOG_PROJECT_ID)
  url.searchParams.set("search", publicKey)
  const options: RequestInit = {
    headers: {
      "accept": "application/json",
      "authorization": `Bearer ${serverEnv.UNDERDOG_API}`
    }
  }
  const [response, responseError] = await promiser(fetch(url, options))
  if(responseError) {
    console.error(responseError.error)
    throw new Error(`getNFT() - Error while fetching underdog - ${responseError.message}`)
  }
  const [data, dataError] = await promiser(response.json())

  if(dataError) {
    console.error(dataError.message)
    throw new Error(`getNFT() -Error while converting response to json - ${dataError.message}`)
  }

  if(!response.ok) {
    console.error(`getNFT() - Response was not OK - ${response.status}`)
    throw new Error(`getNFT() - Response was not OK - ${response.status} \n ${JSON.stringify(data)}`)
  }

  console.log("getNFT() was ended")
  if(data.results.length === 0) return null
  else {
    const d = data['results'][0]
    return ({
      image: d['image'],
      mintKey: d['mintAddress']
    })
  }
}

export async function mintNft(imageLink: string, userPublicKey: string): Promise<number> {
  console.log("mintNFT() was called")
  const mintUrl = new URL(UNDERDOG_PROJECTS_URL)
  const mintOptions: RequestInit = {
    method: "POST",
    headers: {
      "accept": "application/json",
      "authorization": `Bearer ${serverEnv.UNDERDOG_API}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      name: 'Solana Quest PFP',
      image: imageLink,
      receiverAddress: userPublicKey
    })
  }

  const [response, responseError] = await promiser(fetch(mintUrl, mintOptions))
  if(responseError) {
    console.error(responseError.error)
    throw new Error(`mintNFT() - Error while fetching underdog - ${responseError.message}`)
  }
  const [data, dataError] = await promiser(response.json())

  if(dataError) {
    console.error(dataError.message)
    throw new Error(`mintNFT() - Error while converting response to json - ${dataError.message}`)
  }

  if(!response.ok) {
    console.error(`mintNFT() - Response was not OK - ${response.status}`)
    throw new Error(`mintNFT() - Response was not OK - ${response.status} \n ${JSON.stringify(data)}`)
  }

  console.log("mintNFT() was ended")
  return data['nftId']
}

export async function getMintKeyOfNft(nftId: number): Promise<string> {
  console.log("getMintKeyOfNft() was called")
  const url = new URL(`${UNDERDOG_PROJECTS_URL}/${nftId}`)
  const options: RequestInit = {
    headers: {
      "accept": "application/json",
      "authorization": `Bearer ${serverEnv.UNDERDOG_API}`
    }
  }
  const [response, responseError] = await promiser(fetch(url, options))
  if(responseError) {
    console.error(responseError.error)
    throw new Error(`getMintKeyOfNft() - Error while fetching underdog - ${responseError.message}`)
  }
  const [data, dataError] = await promiser(response.json())

  if(dataError) {
    console.error(dataError.message)
    throw new Error(`getMintKeyOfNft() - Error while converting response to json - ${dataError.message}`)
  }

  if(!response.ok) {
    console.error(`getMintKeyOfNft() - Response was not OK - ${response.status}`)
    throw new Error(`getMintKeyOfNft() - Response was not OK - ${response.status} \n ${JSON.stringify(data)}`)
  }

  console.log("Mint Retrieve info ? - ", data)

  console.log("getMintKeyOfNft() was ended")
  return data['mintAddress']
}

function getAdminWallet() {
    return web3.Keypair.fromSecretKey(
        utils.bytes.bs58.decode(serverEnv.GAS_PRIVATE_KEY)
    );
}

// export async function initializeAccount(base64Tx: string) {
//   const serializedTransaction = Buffer.from(base64Tx, 'base64');
//   const transaction = web3.Transaction.from(serializedTransaction);
//
//   console.log(serverEnv.GAS_PRIVATE_KEY)
//   const payer = getAdminWallet()
//   transaction.partialSign(payer)
//
//   const endpoint = web3.clusterApiUrl(publicEnv.NEXT_PUBLIC_DEVNET ? "devnet" : "mainnet-beta")
//   const connection = new web3.Connection(endpoint); // Or devnet/testnet
//   const [confirm, confirmError] = await promiser(web3.sendAndConfirmTransaction(connection, transaction, [payer], {
//     skipPreflight: true
//   }))
//
//   if(confirmError) {
//     console.error(`Initialize Account Server - Error while sendAndConfirm ${JSON.stringify(confirmError)}`)
//     throw new Error(`Initialize Account Server - Error while sendAndConfirm ${JSON.stringify(confirmError)}`)
//   }
//   
//   return confirm
//
// }
