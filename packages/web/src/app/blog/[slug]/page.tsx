import { notFound } from "next/navigation";
import { MDXContent } from "@/components/mdx-content";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { CommentsSection } from "@/components/comments-section";

interface Post {
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  coverImage: string;
  content: string;
}

type Posts = {
  [key: string]: Post;
};

const posts: Posts = {
  "deploying-go-cli-npm": {
    title: "Deploying a Go CLI to npm",
    date: "2024-08-07",
    readTime: "30 min read",
    tags: ["BLOG", "Go", "CLI"],
    coverImage: "/placeholder.svg?height=400&width=800",
    content: `
# Deploying a Go CLI to npm

<Callout>
This guide assumes you have Go installed and are familiar with npm package publishing.
</Callout>

I'm building a CLI tool similar to \`npx create-xyz@latest\`. Rather than using TypeScript, which lacks robust templating support, I prefer Go for its powerful \`text/template\` and \`html/template\` packages...

<Callout type="important">
Make sure to set the correct permissions in your package.json file for the binary to be executable.
</Callout>

## Why Go?

Go offers several advantages for CLI development:

1. Fast compilation
2. Cross-platform support
3. Rich standard library

<Callout type="tip">
Use \`go build -o bin/cli\` to output your binary to a specific location. This helps with npm package organization.
</Callout>

## Implementation Details

Here's a simple example of using Go templates:

\`\`\`go
package main

import (
    "os"
    "text/template"
)

func main() {
    tmpl, _ := template.New("test").Parse("Hello, {{.Name}}!");
    tmpl.Execute(os.Stdout, struct{ Name string }{"World"});
}
\`\`\`

<Callout type="warning">
Always handle template parsing errors in production code. The example above omits error handling for brevity.
</Callout>

<Callout type="caution">
Be careful when executing templates with user-provided data to avoid potential security vulnerabilities.
</Callout>

## Conclusion

Go's simplicity and power make it an excellent choice for CLI development, especially when dealing with complex templating needs.
    `,
  },
  "optimizing-lambda-cold-starts": {
    title: "Quick Tip: Optimizing AWS Lambda Cold Starts",
    date: "2024-08-05",
    readTime: "5 min read",
    tags: ["TIL", "AWS", "Lambda"],
    coverImage: "/placeholder.svg?height=400&width=800",
    content: `
# Quick Tip: Optimizing AWS Lambda Cold Starts

Today I learned a neat trick to significantly reduce cold start times for AWS Lambda functions...

## The Problem

Lambda cold starts can introduce latency in serverless applications, especially for infrequently accessed functions.

## The Solution

1. Use Provisioned Concurrency
2. Optimize your function's dependencies
3. Consider using a compiled language like Go

## Example

Here's a simple Go function that starts up quickly:

\`\`\`go
package main

import (
    "github.com/aws/aws-lambda-go/lambda"
)

func handleRequest() (string, error) {
    return "Hello, Lambda!", nil;
}

func main() {
    lambda.Start(handleRequest);
}
\`\`\`

## Conclusion

By implementing these optimizations, you can significantly reduce Lambda cold start times and improve your application's responsiveness.
    `,
  },
};

export default async function BlogPost({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string[] }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { slug } = await params;
  let post;

  if (Array.isArray(slug)) {
    post = posts[slug[0]];
  } else {
    post = posts[slug];
  }

  if (!post) {
    return notFound();
  }

  return (
    <>
      <article className="container max-w-3xl py-6 lg:py-12">
        <div className="space-y-4">
          <h1 className="font-mono text-4xl font-bold">{post.title}</h1>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <time className="font-mono text-sm">{post.date}</time>
            <span>•</span>
            <span className="font-mono text-sm">{post.readTime}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                variant={tag === 'BLOG' ? 'default' : 'secondary'}
                className="font-mono"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <Image
          src={post.coverImage}
          alt={post.title}
          width={800}
          height={400}
          className="my-8 rounded-lg border-2 border-primary"
        />
        <MDXContent source={post.content} />
        <CommentsSection />
      </article>
    </>
  );
}
