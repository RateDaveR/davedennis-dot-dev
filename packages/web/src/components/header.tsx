import Link from "next/link";
import { Terminal } from 'lucide-react';

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="flex items-center space-x-2">
            <Terminal className="h-6 w-6" />
            <span className="font-mono text-lg font-bold">DAVE_CAVE</span>
          </Link>
          {/*<nav className="flex items-center space-x-1 sm:space-x-2 md:space-x-4">
            <Link href="/" passHref legacyBehavior>
              <Button variant="ghost" className="font-mono px-2 sm:px-3 md:px-4" asChild>
                <a>HOME</a>
              </Button>
            </Link>
            <Link href="#about-me" passHref legacyBehavior>
              <Button variant="ghost" className="font-mono px-2 sm:px-3 md:px-4" asChild>
                <a>ABOUT</a>
              </Button>
            </Link>
            <Link href="#projects" passHref legacyBehavior>
              <Button variant="ghost" className="font-mono px-2 sm:px-3 md:px-4" asChild>
                <a>PROJECTS</a>
              </Button>
            </Link>
            <Link href="#publications" passHref legacyBehavior>
              <Button variant="ghost" className="font-mono px-2 sm:px-3 md:px-4" asChild>
                <a>PUBLICATIONS</a>
              </Button>
            </Link>
            <Link href="#contact" passHref legacyBehavior>
              <Button variant="ghost" className="font-mono px-2 sm:px-3 md:px-4" asChild>
                <a>CONTACT</a>
              </Button>
            </Link>
            <Button variant="outline" className="font-mono px-2 sm:px-3 md:px-4">
              LOGIN
            </Button>
          </nav>*/}
        </div>
      </div>
    </header>
  );
}

