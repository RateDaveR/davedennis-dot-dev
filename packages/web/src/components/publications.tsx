import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'

interface Author {
  name: string
  avatar: string
}

interface Publication {
  title: string
  description: string
  link: string
  tags: string[]
  date: string
  author: Author
}

const publications: Publication[] = [
  {
    title: "Optimizing Cloud Infrastructure for Financial Services",
    description: "An in-depth look at how financial institutions can leverage cloud technologies to improve scalability and security.",
    link: "https://aws.amazon.com/blogs/industries/example-article",
    tags: ["AWS", "Financial Services", "Cloud Infrastructure"],
    date: "2023-11-15",
    author: {
      name: "Dave Dennis",
      avatar: "/placeholder.svg?text=DD&height=40&width=40"
    }
  },
  {
    title: "Serverless Architectures: A Game Changer for Startups",
    description: "Exploring how serverless technologies can help startups reduce costs and accelerate time-to-market.",
    link: "https://medium.com/@dave-dennis/serverless-architectures",
    tags: ["Serverless", "Startups", "Cloud Computing"],
    date: "2023-09-22",
    author: {
      name: "Jane Doe",
      avatar: "/placeholder.svg?text=JD&height=40&width=40"
    }
  }
]

export function Publications() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {publications.map((pub, index) => (
        <Card key={index} className="border-2 border-primary flex flex-col">
          <CardHeader className="pb-2">
            <Link href={pub.link} target="_blank" rel="noopener noreferrer">
              <h3 className="font-mono text-lg font-semibold hover:underline">{pub.title}</h3>
            </Link>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="font-mono text-sm mb-2">{pub.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {pub.tags.map((tag, tagIndex) => (
                <Badge key={tagIndex} variant="secondary" className="font-mono text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex items-center justify-between border-t border-primary pt-4">
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={pub.author.avatar} alt={pub.author.name} />
                <AvatarFallback>{pub.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-mono text-sm">{pub.author.name}</div>
                <div className="font-mono text-xs text-muted-foreground">{pub.date}</div>
              </div>
            </div>
            <Button variant="outline" size="sm" className="font-mono" asChild>
              <Link href={pub.link} target="_blank" rel="noopener noreferrer">
                Read More
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

