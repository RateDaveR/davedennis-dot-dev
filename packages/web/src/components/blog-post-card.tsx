"use client"

import { useState } from 'react'
import Image from "next/image"
import { Calendar, Clock, Share2, Heart, Eye, MessageSquare } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useRouter } from 'next/navigation'

interface BlogPostCardProps {
  title: string
  excerpt: string
  date: string
  readTime: string
  slug: string
  likes: number
  views: number
  comments: number
  tags: string[]
  imageUrl: string
}

export function BlogPostCard({ 
  title, 
  excerpt, 
  date, 
  readTime, 
  slug,
  likes: initialLikes,
  views,
  comments,
  tags,
  imageUrl
}: BlogPostCardProps) {
  const router = useRouter()
  const [likes, setLikes] = useState(initialLikes)
  const [isLiked, setIsLiked] = useState(false)

  const handleLike = () => {
    console.log("Like button was clicked")
    setLikes(prev => isLiked ? prev - 1 : prev + 1)
    setIsLiked(!isLiked)
  }

  const handleShare = () => {
    const url = `${window.location.origin}/blog/${slug}`
    navigator.clipboard.writeText(url)
      .then(() => console.log('Link copied to clipboard'))
      .catch(err => console.error('Failed to copy link: ', err))
  }

  const handleCardClick = () => {
    router.push(`/blog/${slug}`)
  }

  return (
    <div onClick={handleCardClick} className="cursor-pointer">
      <Card className="border-2 border-primary transition-colors hover:bg-muted/50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder.svg?text=DD&height=40&width=40" alt="Dave Dennis" />
                <AvatarFallback>DD</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-mono font-semibold">Dave Dennis</div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="font-mono">{date}</span>
                  <Clock className="ml-2 h-4 w-4" />
                  <span className="font-mono">{readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <div className="flex-shrink-0">
              <Image
                src={imageUrl}
                alt={title}
                width={100}
                height={100}
                className="rounded border-2 border-primary object-cover filter grayscale"
              />
            </div>
            <div className="flex-grow">
              <h2 className="font-mono text-xl font-bold tracking-tight hover:underline">
                {title}
              </h2>
              <p className="mt-2 font-mono text-sm text-muted-foreground">
                {excerpt}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge 
                    key={tag} 
                    variant={tag === 'BLOG' ? 'default' : 'secondary'}
                    className="font-mono text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex w-full items-center justify-between">
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="space-x-2" onClick={(e) => {e.stopPropagation(); handleLike()}}>
                <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                <span className="font-mono">{likes}</span>
              </Button>
              <Button variant="ghost" size="sm" className="space-x-2" onClick={(e) => e.stopPropagation()}>
                <Eye className="h-4 w-4" />
                <span className="font-mono">{views}</span>
              </Button>
              <Button variant="ghost" size="sm" className="space-x-2" onClick={(e) => e.stopPropagation()}>
                <MessageSquare className="h-4 w-4" />
                <span className="font-mono">{comments}</span>
              </Button>
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="sm" onClick={(e) => e.stopPropagation()} onKeyDown={(e) => e.key === 'Enter' && e.stopPropagation()}>
                  <Share2 className="mr-2 h-4 w-4" />
                  <span className="font-mono">Share</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Button
                  className="w-full justify-start rounded-none font-mono"
                  variant="ghost"
                  onClick={handleShare}
                >
                  Copy link
                </Button>
              </PopoverContent>
            </Popover>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

