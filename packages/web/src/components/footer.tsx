"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import Link from 'next/link'

export function Footer() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      console.log("Form submitted:", { name, email, message })
      // Here you would typically send the form data to your backend
      setName("")
      setEmail("")
      setMessage("")
      // Show success message (you might want to add a state for this)
    } catch (error) {
      console.error("Error submitting form:", error)
      // Show error message (you might want to add a state for this)
    }
  }

  return (
    <footer className="border-t-2 border-primary mt-12 py-8 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-mono text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="font-mono hover:underline">Home</Link></li>
              <li><Link href="/about" className="font-mono hover:underline">About</Link></li>
              <li><Link href="/blog" className="font-mono hover:underline">Blog</Link></li>
              <li><Link href="/projects" className="font-mono hover:underline">Projects</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-lg font-bold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-primary" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-primary" aria-label="Github">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-primary" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://www.youtube.com/channel/yourchannelid" target="_blank" rel="noopener noreferrer" className="hover:text-primary" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
              <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-primary" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="/rss.xml" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500" aria-label="RSS Feed">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M4 11a9 9 0 0 1 9 9"></path>
                  <path d="M4 4a16 16 0 0 1 16 16"></path>
                  <circle cx="5" cy="19" r="1"></circle>
                </svg>
              </a>
            </div>
            <h3 className="font-mono text-lg font-bold mb-4">LET'S CONNECT</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="font-mono border-2 border-primary [box-shadow:4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-white"
                required
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="font-mono border-2 border-primary [box-shadow:4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-white"
                required
              />
              <Textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="font-mono border-2 border-primary [box-shadow:4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-white"
                required
              />
              <Button 
                type="submit"
                className="font-mono border-2 border-primary [box-shadow:4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-white"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center font-mono text-sm">
          <p className="mb-4">
            Disclaimer: This site is an interactive development playground. It's used to experiment with new technologies and ideas. Please don't take anything seen here too literally or seriously. It's all in good fun!
          </p>
          <p>
            © {new Date().getFullYear()} Dave Dennis. All rights reserved. 
            <span className="ml-2">
              Everything on this site is <a href="https://github.com/yourusername/your-repo" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">open source</a>.
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

