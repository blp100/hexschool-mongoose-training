import type { Metadata } from "next"
import { Paytone_One, Azeret_Mono, Noto_Sans_TC } from "next/font/google"

// These styles apply to every route in the application
import "./globals.css"

const paytoneOne = Paytone_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-paytone-one",
})

const azeretMono = Azeret_Mono({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-azeret-mono",
})

const notoSansTc = Noto_Sans_TC({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-tc",
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: "/images/favicon.ico",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`bg-[url('/images/bg.svg')] ${paytoneOne.variable} ${azeretMono.variable} ${notoSansTc.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
