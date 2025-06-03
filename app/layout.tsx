import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta'
})
// Di layout.tsx tambahkan meta tags
export const metadata: Metadata = {
  title: 'ManufacTech - Leading Manufacturing Solutions',
  description: 'Professional manufacturing company providing innovative solutions for industrial needs',
  keywords: 'manufacturing, CNC machining, custom manufacturing, industrial solutions',
  authors: [{ name: 'ManufacTech Team' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={plusJakartaSans.className}>
        {children}
      </body>
    </html>
  )
}