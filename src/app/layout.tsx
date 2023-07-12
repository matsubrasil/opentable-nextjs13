import { ReactNode } from 'react'
import './globals.css'
import { NavBar } from '@/components/layout'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'OpenTable',
  description:
    'restaurant reservations, online restaurant reservations, restaurant management software, opentable, open table',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen w-screen bg-gray-100">
          <main className="m-auto max-w-screen-2xl bg-white">
            <NavBar />
            {children}
          </main>
        </main>
      </body>
    </html>
  )
}
