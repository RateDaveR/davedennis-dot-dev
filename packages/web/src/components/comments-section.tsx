"use client"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export function CommentsSection() {
  return (
    <div className="mt-12 space-y-8 relative">
      <div className="absolute inset-0 bg-background/50 backdrop-blur-sm z-10 flex items-center justify-center">
        <p className="font-mono text-lg font-bold text-primary">Comment support coming soon!</p>
      </div>

      <div className="space-y-4">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <Textarea
            placeholder="Join the discussion..."
            className="font-mono min-h-[100px] border-2 border-primary [box-shadow:4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-white"
            disabled
          />
          <Button 
            type="submit"
            className="font-mono border-2 border-primary [box-shadow:4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-white"
            disabled
          >
            Post Comment
          </Button>
        </form>
      </div>

      {/* Mock comments (commented out for later use)
      <div className="space-y-6">
        {initialComments.map((comment) => (
          <CommentComponent
            key={comment.id}
            comment={comment}
          />
        ))}
      </div>
      */}
    </div>
  )
}

{/* 
Commented out for later use:

interface Author {
  name: string
  avatar: string
}

interface Comment {
  id: number
  author: Author
  content: string
  date: string
  likes: number
  isLiked?: boolean
  replies?: Comment[]
}

const initialComments: Comment[] = [
  {
    id: 1,
    author: {
      name: "Jane Cooper",
      avatar: "/placeholder.svg?text=JC"
    },
    content: "This is exactly what I needed! I've been struggling with AWS Lambda cold starts for a while now. The tip about using provisioned concurrency is gold. 🚀",
    date: "2 hours ago",
    likes: 5,
    replies: [
      {
        id: 3,
        author: {
          name: "Dave Dennis",
          avatar: "/placeholder.svg?text=DD"
        },
        content: "Thanks Jane! Glad you found it helpful. I'll be writing more about AWS optimization techniques in upcoming posts.",
        date: "1 hour ago",
        likes: 2
      },
      {
        id: 4,
        author: {
          name: "Alex Thompson",
          avatar: "/placeholder.svg?text=AT"
        },
        content: "Have you tried implementing this with container images? I'd love to hear your thoughts on the cold start differences.",
        date: "30 minutes ago",
        likes: 1
      }
    ]
  },
  {
    id: 2,
    author: {
      name: "Mark Wilson",
      avatar: "/placeholder.svg?text=MW"
    },
    content: "Great write-up! Would love to see a comparison with other cloud providers' serverless offerings.",
    date: "1 hour ago",
    likes: 3
  }
]

function CommentComponent({ 
  comment, 
  depth = 0 
}: { 
  comment: Comment
  depth?: number
}) {
  return (
    <div className={`${depth > 0 ? 'ml-8 mt-4' : ''}`}>
      <div
        className="border-2 border-primary p-4 [box-shadow:4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-white blur-sm"
      >
        <div className="flex items-start space-x-4">
          <Avatar>
            <AvatarImage src={comment.author.avatar} />
            <AvatarFallback>{comment.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono font-semibold">{comment.author.name}</p>
                <p className="font-mono text-sm text-muted-foreground">{comment.date}</p>
              </div>
            </div>
            <p className="font-mono text-sm">{comment.content}</p>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="font-mono"
                disabled
              >
                <Heart className={`mr-2 h-4 w-4 ${comment.isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                <span className="font-mono">{comment.likes}</span>
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="font-mono"
                disabled
              >
                <Reply className="mr-2 h-4 w-4" />
                Reply
              </Button>
            </div>
          </div>
        </div>
      </div>
      {comment.replies?.map((reply) => (
        <CommentComponent
          key={reply.id}
          comment={reply}
          depth={depth + 1}
        />
      ))}
    </div>
  )
}
*/}

