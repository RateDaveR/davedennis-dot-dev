import { ProjectCard } from "@/components/project-card"

export function ProjectsSection() {
  return (
    <section className="space-y-4">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          title="DSQR Framework"
          description="A plug-and-play cloud deployment framework that eliminates infrastructure overhead. DSQR provides ready-to-use components for AWS services like AppSync, ECS Fargate, DynamoDB, and API Gateway, enabling rapid serverless development with zero configuration."
          tags={["AWS", "Serverless", "Infrastructure", "TypeScript", "Cloud"]}
          githubUrl="#"
          demoUrl="#"
        />
        <ProjectCard
          title="Pixar"
          description="An open-source web-based image editing suite, currently featuring powerful background removal capabilities. Built to evolve into a comprehensive AI-powered alternative to traditional photo editing tools, making professional-grade image manipulation accessible to everyone."
          tags={["AI", "Image Processing", "Web App", "Open Source"]}
          githubUrl="#"
          demoUrl="#"
        />
        <ProjectCard
          title="TCG Price Guide"
          description="A real-time pricing tool for trading card game enthusiasts. Get instant market values for Pokemon, One Piece, and other TCG cards. Features include price history tracking, condition adjustments, and market trend analysis."
          tags={["Trading Cards", "Price Tracking", "API", "Database"]}
          githubUrl="#"
          demoUrl="#"
        />
      </div>
    </section>
  )
}

