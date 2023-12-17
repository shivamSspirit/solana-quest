'use server'

import serverEnv from "./env/server"
import promiser from "./promiser"

const UNDERDOG_PROJECTS_URL = `${serverEnv.UNDERDOG_BASE_URL}/projects/${serverEnv.UNDERDOG_PROJECT_ID}/nfts`

export async function getNft(publicKey: string): Promise<string | null> {
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

  if(data.results.length === 0) return null
  else return data.results[0]['image'] as string
}

export async function mintNft(imageLink: string, userPublicKey: string): Promise<number> {
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

  return data['nftId']
}

export async function getMintKeyOfNft(nftId: number): Promise<string> {
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

  return data['mintAddress']
}
