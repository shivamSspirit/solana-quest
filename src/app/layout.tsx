import type { Metadata } from 'next'
import { Space_Grotesk, Rammetto_One } from 'next/font/google'
import './globals.css'
import JotaiProvider from '@components/providers/Jotai'
import ThemeProvider from '@components/providers/Theme'
import SolanaProvider from '@components/providers/Solana'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { Toaster } from '@components/ui/toaster'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'], display: "swap", variable: "--text-font", weight: ['400', '500', '600']
})
const RammettoOne = Rammetto_One({ weight: '400', display: "swap", variable: "--title-font", subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Solana Quest',
  description: 'Learn how to build on Solana; the superpowers and the gotchas.',
  openGraph:{
    title: 'Solana Quest',
    description: 'Learn how to build on Solana; the superpowers and the gotchas.',
    url:'https://solanaquest.vercel.app/',
    siteName:'Solana Quest',
    images:[
      {
        url:'https://ibb.co/9m0RYVGH',
        width:800,
        height:600,
        alt:'Solana quest',
        type:'image/png',
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  console.log("children",children);

  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable}  ${RammettoOne.variable} 
      `}>
      <head>
        <title>Solana Quest</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="" >
        <JotaiProvider>
          <ThemeProvider
            attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange >
            <SolanaProvider>
              <div className="w-[100vw] relative overflow-x-hidden h-[100vh]" style={{
                overflowY: 'auto',
              }}>
                <Header />
                {children}
                <Footer />
              </div>
              <Toaster />
            </SolanaProvider>
          </ThemeProvider>
        </JotaiProvider>
      </body>
    </html>
  )
}
