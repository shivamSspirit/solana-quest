import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import JotaiProvider from '@components/providers/Jotai'
import ThemeProvider from '@components/providers/Theme'
import SolanaProvider from '@components/providers/Solana'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
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
