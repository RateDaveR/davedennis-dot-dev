"use client"

import { useState, useEffect } from 'react'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Image from 'next/image'
import { Badge } from "@/components/ui/badge"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Callout } from '@/components/callout'

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="font-mono text-4xl font-bold tracking-tight mb-6" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="font-mono text-3xl font-bold tracking-tight mt-12 mb-6" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="font-mono text-2xl font-bold tracking-tight mt-8 mb-4" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="font-mono leading-7 mb-6" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="font-mono my-6 ml-6 list-disc [&>li]:mt-2" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="font-mono my-6 ml-6 list-decimal [&>li]:mt-2" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="font-mono" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="font-mono text-blue-600 underline underline-offset-4 hover:text-blue-800" {...props} />
  ),
  Image: (props: React.ComponentProps<typeof Image>) => (
    <Image className="rounded-lg border-2 border-zinc-200 my-8" {...props} />
  ),
  Badge: (props: React.ComponentProps<typeof Badge>) => (
    <Badge className="font-mono" {...props} />
  ),
  Callout,
  code: ({ node, inline, className, children, ...props }: any) => {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter
        style={oneDark}
        language={match[1]}
        PreTag="div"
        className="syntax-highlighter"
        showLineNumbers
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    )
  },
}

interface MDXContentProps {
  source: string;
}

export function MDXContent({ source }: MDXContentProps) {
  const [content, setContent] = useState<MDXRemoteSerializeResult | null>(null)

  useEffect(() => {
    async function prepareMDX() {
      const mdxSource = await serialize(source)
      setContent(mdxSource)
    }
    prepareMDX()
  }, [source])

  if (!content) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="font-mono text-lg">Loading...</div>
      </div>
    )
  }

  return (
    <div className="blog-content">
      <MDXRemote
        {...content}
        components={components}
      />
    </div>
  )
}

