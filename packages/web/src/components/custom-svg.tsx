import * as React from "react"
import { cn } from "@/lib/utils"

export interface CustomSvgProps extends React.SVGProps<SVGSVGElement> {
  size?: number
  strokeWidth?: number
  className?: string
}

export const CustomSvg = React.forwardRef<SVGSVGElement, CustomSvgProps>(
  ({ size = 24, strokeWidth = 2, className, children, ...props }, ref) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn("", className)}
        ref={ref}
        {...props}
      >
        {children}
      </svg>
    )
  }
)

CustomSvg.displayName = "CustomSvg"

