import { AlertCircle, AlertTriangle, Info, Lightbulb, MessageSquare } from 'lucide-react'

interface CalloutProps {
  type?: "note" | "tip" | "important" | "warning" | "caution"
  children: React.ReactNode
}

const icons = {
  note: Info,
  tip: Lightbulb,
  important: MessageSquare,
  warning: AlertTriangle,
  caution: AlertCircle,
}

export function Callout({ type = "note", children }: CalloutProps) {
  const Icon = icons[type]

  return (
    <div className={`callout callout-${type}`}>
      <Icon className="h-5 w-5 shrink-0 mt-1" />
      <div className="font-mono [&>p]:mt-0 [&>p]:mb-0">{children}</div>
    </div>
  )
}

