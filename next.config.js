/** @type {import('next').NextConfig} */
const repoName = process.env.GITHUB_REPOSITORY
  ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}`
  : "";

// Prefer explicit base path from CI; fall back to repo name on GitHub Actions.
// Empty string from a misconfigured workflow must not wipe project-site paths.
const envBase = process.env.NEXT_PUBLIC_BASE_PATH;
const basePath =
  envBase && envBase.length > 0
    ? envBase
    : process.env.GITHUB_ACTIONS
      ? repoName
      : "";

const nextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
