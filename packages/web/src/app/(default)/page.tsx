import { ProfileHeader } from "@/components/profile-header"
import { BlogPostCard } from "@/components/blog-post-card"
import { ProjectsSection } from "@/components/projects-section"
import { AboutMe } from "@/components/about-me"
import { Publications } from "@/components/publications"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-mono">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <ProfileHeader />
          
          <section className="space-y-4">
            <div className="flex items-center">
              <h1 className="font-mono text-2xl font-bold tracking-tight mr-4">LATEST POSTS</h1>
              <div className="flex-grow border-t-2 border-primary"></div>
            </div>
            <div className="grid gap-6">
              <BlogPostCard
                title="Deploying a Go CLI to npm"
                excerpt="I'm building a CLI tool similar to `npx create-xyz@latest`. Rather than using TypeScript, which lacks robust templating support, I prefer Go for its powerful `text/template` and `html/template` packages..."
                date="2024-08-07"
                readTime="30 min read"
                slug="deploying-go-cli-npm"
                likes={42}
                views={1337}
                comments={8}
                tags={["BLOG", "Go", "CLI"]}
                imageUrl="/placeholder.svg?height=100&width=100"
              />
              <BlogPostCard
                title="Quick Tip: Optimizing AWS Lambda Cold Starts"
                excerpt="Today I learned a neat trick to significantly reduce cold start times for AWS Lambda functions. By leveraging..."
                date="2024-08-05"
                readTime="5 min read"
                slug="optimizing-lambda-cold-starts"
                likes={23}
                views={567}
                comments={3}
                tags={["TIL", "AWS", "Lambda"]}
                imageUrl="/placeholder.svg?height=100&width=100"
              />
            </div>
          </section>

          {/*<section id="publications" className="space-y-4">
            <div className="flex items-center">
              <h2 className="font-mono text-2xl font-bold tracking-tight mr-4">PUBLICATIONS</h2>
              <div className="flex-grow border-t-2 border-primary"></div>
            </div>
            <Publications />
          </section>*/}

          <section id="projects" className="space-y-4">
            <div className="flex items-center">
              <h2 className="font-mono text-2xl font-bold tracking-tight mr-4">PROJECTS</h2>
              <div className="flex-grow border-t-2 border-primary"></div>
            </div>
            <ProjectsSection />
          </section>

          <section id="about" className="space-y-4">
            <div className="flex items-center">
              <h2 className="font-mono text-2xl font-bold tracking-tight mr-4">ABOUT ME</h2>
              <div className="flex-grow border-t-2 border-primary"></div>
            </div>
            <AboutMe />
          </section>
        </div>
      </main>
    </div>
  )
}

