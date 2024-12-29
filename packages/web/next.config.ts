import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,

  /** Enables hot reloading for local packages without a build setp */
  transpilePackages: [],
}

export default nextConfig