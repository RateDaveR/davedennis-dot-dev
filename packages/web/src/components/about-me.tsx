import Image from 'next/image'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { JSX, SVGProps } from 'react'

export function AboutMe() {
  return (
    <section id="about-me" className="space-y-8">
      <div className="lg:flex lg:space-x-8">
        <div className="lg:w-2/3 space-y-8">
          <Card className="border-2 border-primary">
            <CardHeader>
              <h3 className="font-mono text-xl font-bold">Profile</h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Dave Dennis"
                  width={100}
                  height={100}
                  className="rounded-full border-2 border-primary"
                />
                <div>
                  <h4 className="font-mono text-lg font-semibold">Dave Dennis</h4>
                  <p className="font-mono text-sm text-muted-foreground">Cloud Infrastructure Enthusiast</p>
                </div>
              </div>
              <p className="font-mono text-sm">
                Hello! I'm Dave Dennis, a passionate cloud infrastructure developer with a love for serverless architectures and optimizing developer experiences. When I'm not coding, you can find me enjoying time with my family or tinkering with the latest tech gadgets.
              </p>
            </CardContent>
          </Card>
          <Card className="border-2 border-primary">
            <CardHeader>
              <h3 className="font-mono text-xl font-bold">Work Experience</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="relative flex items-start pb-6 border-l-2 border-primary pl-6">
                  <div className="absolute left-0 top-0 w-6 h-6 -translate-x-1/2 rounded-full border-2 border-primary bg-background"></div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <div className="w-12 h-12 rounded-lg border-2 border-primary overflow-hidden [box-shadow:4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-white">
                        <Image
                          src="/placeholder.svg?text=GS"
                          alt="Goldman Sachs logo"
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-mono text-lg font-semibold">Goldman Sachs</h4>
                        <p className="font-mono text-sm text-muted-foreground">Vice President, Cloud Development | New York, NY</p>
                      </div>
                    </div>
                    <p className="font-mono text-sm mt-2">Leading cloud infrastructure development, optimizing deployment processes, and implementing serverless architectures for complex financial systems.</p>
                  </div>
                </div>
                <div className="relative flex items-start pb-6 border-l-2 border-primary pl-6">
                  <div className="absolute left-0 top-0 w-6 h-6 -translate-x-1/2 rounded-full border-2 border-primary bg-background"></div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <div className="w-12 h-12 rounded-lg border-2 border-primary overflow-hidden [box-shadow:4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-white">
                        <Image
                          src="/placeholder.svg?text=AF"
                          alt="American Funds logo"
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-mono text-lg font-semibold">American Funds</h4>
                        <p className="font-mono text-sm text-muted-foreground">Software Engineer III, Team Lead | Los Angeles, CA</p>
                      </div>
                    </div>
                    <p className="font-mono text-sm mt-2">Led a team in modernizing retirement plan services infrastructure, implementing cloud-native solutions to improve system reliability and reduce costs.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="lg:w-1/3 space-y-8 mt-8 lg:mt-0">
          <NewsletterSignup />
          <Card className="border-2 border-primary">
            <CardHeader>
              <h3 className="font-mono text-xl font-bold">Skills</h3>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2 group">
                    <div className="w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground rounded">
                      <skill.icon className="w-6 h-6 group-hover:animate-bounce" />
                    </div>
                    <span className="font-mono text-sm group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

const skills = [
  { name: 'AWS', icon: CloudIcon },
  { name: 'TypeScript', icon: CodeIcon },
  { name: 'Go', icon: CodeIcon },
  { name: 'Serverless', icon: ServerIcon },
  { name: 'React', icon: ComponentIcon },
  { name: 'Node.js', icon: ServerIcon },
]

function CloudIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
  )
}

function CodeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
  )
}

function ServerIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>
  )
}

function ComponentIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"/><path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"/><path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"/><path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"/></svg>
  )
}

