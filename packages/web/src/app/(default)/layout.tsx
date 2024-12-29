import type { Metadata, Viewport } from "next"
import "@/styles/globals.css"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import { cn } from "@davedennisdotdev/core/ui/lib/index"

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"), // Change to https://pixsa.xyz for production
  title: "Dave",
  description: "Web & mobile applications supporting the Pixsa application",
  openGraph: {
    title: "Pixsa",
    description: "Web & mobile applications supporting the Pixsa application",
    url: "https://davedennis.dev",
    siteName: "Dave",
  },
  twitter: {
    card: "summary_large_image",
    site: "@RateDaveR",
    creator: "@RateDaveR",
  },
  icons: {
    icon: "/favicon.svg",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen flex flex-col antialiased",
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        {children}
      </body>
    </html>
  )
}
