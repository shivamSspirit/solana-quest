import type { Metadata } from 'next'
import { Space_Grotesk, Rammetto_One } from 'next/font/google'
import './globals.css'
import JotaiProvider from '@components/providers/Jotai'
import ThemeProvider from '@components/providers/Theme'
import SolanaProvider from '@components/providers/Solana'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], display: "swap", variable: "--text-font", weight: ['400', '500', '600'] })
const RammettoOne = Rammetto_One({ weight: '400',display: "swap", variable: "--title-font", subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Solana Quest',
  description: 'Learn how to build on Solana; the superpowers and the gotchas.',
}

export default function RootLayout({
  children,
}: {
    children: React.ReactNode
  }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable}  ${RammettoOne.variable}`}>
      <body >
        <JotaiProvider>
          <ThemeProvider 
            attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange >
            <SolanaProvider>
              {children}
            </SolanaProvider>
          </ThemeProvider>
        </JotaiProvider>
      </body>
    </html>
  )
}
