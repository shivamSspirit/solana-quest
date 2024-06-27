import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@components/ui/table"
import { useLayoutEffect } from "react"
import { Challenge } from "./page"
import publicEnv from "@lib/env/public"

const ChallengeTable: React.FC<{challenges: Challenge[]}> = ({challenges}) => {
    const net = publicEnv.NEXT_PUBLIC_DEVNET ? "devnet" : "mainnet"
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Contract</TableHead>
                    <TableHead>Live Demo</TableHead>
                    <TableHead>Updated</TableHead>
                    <TableHead>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {challenges!.map(c => (
                    <TableRow key={c.contract} >
                        <TableCell>{c.name}</TableCell>
                        <TableCell className="max-w-[1rem] truncate"><a 
                            className="truncate"
                            target='_blank'
                            href={`https://xray.helius.xyz/token/${c.contract}?network=${net}`}>{c.contract}...</a></TableCell>
                        <TableCell>
                            <a target="_blank" href={c.live} >{c.live}</a></TableCell>
                        <TableCell>{c.updated.toDateString()}</TableCell>
                        <TableCell>{c.status}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default ChallengeTable
