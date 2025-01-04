import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'
import { CustomSvg } from "./custom-svg"

export function ProfileHeader() {
  return (
    <Card className="border-2 border-primary">
      <CardContent className="p-6">
        <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-6 md:space-y-0 md:items-start">
          <div className="relative w-48 h-48 border-2 border-primary [box-shadow:4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-white">
            <Image
              src="/me.jpg?text=DD"
              alt="Dave Dennis"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4 text-center md:text-left flex-1">
            <div>
              <h1 className="font-mono text-3xl font-bold tracking-tight">Dave Dennis</h1>
              <p className="font-mono text-muted-foreground">
                Vice President @Goldman Sachs
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground md:justify-start">
              <div className="flex items-center">
                <CustomSvg size={16} className="mr-1 h-4 w-4">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </CustomSvg>
                <span className="font-mono">Dallas, TX</span>
              </div>
              <div className="flex items-center">
                <CustomSvg size={16} className="mr-1 h-4 w-4">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </CustomSvg>
                <span className="font-mono">Joined April 16, 1994</span>
              </div>
            </div>
            <div className="flex justify-center space-x-4 md:justify-start">
              <a href="https://twitter.com/RateDaveR" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-[#1DA1F2]">
                <CustomSvg>
                  <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
                </CustomSvg>
              </a>
              <a href="https://github.com/DaveVED" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-[#6e5494]">
                <CustomSvg>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </CustomSvg>
              </a>
              <a href="https://www.linkedin.com/in/davedennis93" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-[#0077b5]">
                <CustomSvg>
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </CustomSvg>
              </a>
              <a href="https://www.youtube.com/@RateDaveR" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-[#ff0000]">
                <CustomSvg>
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </CustomSvg>
              </a>
              <a href="https://www.twitch.tv/YourTwitchUsername" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-[#9146FF]">
                <CustomSvg>
                  <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" />
                </CustomSvg>
              </a>
              <a href="https://instagram.com/davedennis" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-[#e4405f]">
                <CustomSvg>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </CustomSvg>
              </a>
            </div>
            <p className="font-mono text-sm max-w-prose">
              Software and cloud enthusiast, focused on serverless architectures, developer tooling, system design, distributed systems, and delivering scalable solutions. In my free time recently, I've been tinkering with frontend frameworks and design.
            </p>
            <Button 
              variant="outline" 
              className="font-mono transition-colors duration-200 hover:bg-primary hover:text-primary-foreground"
            >
              <Link href="#about-me">Learn More About Me</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

