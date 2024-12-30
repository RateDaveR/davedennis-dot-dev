import Link from "next/link"
import { Terminal } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Terminal className="h-6 w-6" />
            <span className="font-mono text-lg font-bold">DAVE_CAVE</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
  <Link href="/" passHref legacyBehavior>
    <Button variant="ghost" className="font-mono" asChild>
      <a>HOME</a>
    </Button>
  </Link>
  <Link href="#about-me" passHref legacyBehavior>
    <Button variant="ghost" className="font-mono" asChild>
      <a>ABOUT</a>
    </Button>
  </Link>
  <Link href="#projects" passHref legacyBehavior>
    <Button variant="ghost" className="font-mono" asChild>
      <a>PROJECTS</a>
    </Button>
  </Link>
  <Link href="#publications" passHref legacyBehavior>
    <Button variant="ghost" className="font-mono" asChild>
      <a>PUBLICATIONS</a>
    </Button>
  </Link>
  <Link href="#contact" passHref legacyBehavior>
    <Button variant="ghost" className="font-mono" asChild>
      <a>CONTACT</a>
    </Button>
  </Link>
  <Button variant="outline" className="font-mono">
    LOGIN
  </Button>
  <ThemeToggle />
</nav>
        </div>
      </div>
    </header>
  )
}

