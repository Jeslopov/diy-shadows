"use client"

import "@/styles/globals.css"
import { ParallaxProvider } from "react-scroll-parallax"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ParallaxProvider>
        <body>
          <div className="shadow-background w-screen h-screen" />
          {children}
        </body>
      </ParallaxProvider>
    </html>
  )
}
