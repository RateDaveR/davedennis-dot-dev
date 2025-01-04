import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,

  /** Enables hot reloading for local packages without a build setp */
  transpilePackages: [],

  /**
   * My current understanding is that if a user where to go to mydomain/x
   * this would casue it to route to my profile. For each one.
   */
  async redirects() {
    return [
      {
        source: "/(x|twitter)",
        destination: "https://x.com/RateDaveR",
        permanent: false,
      },
      {
        source: "/youtube",
        destination: "https://www.youtube.com/@RateDaveR",
        permanent: false,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/davedennis93",
        permanent: false,
      },
      {
        source: "/instragram",
        destination: "https://instagram.com/davedennis",
        permanent: false,
      },
      {
        source: "/github",
        destination: "https://github.com/DaveVED",
        permanent: false,
      },      {
        source: "/twitch",
        destination: "https://www.twitch.tv/daveved",
        permanent: false,
      },
    ];     

  }
}

export default nextConfig