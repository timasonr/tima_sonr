import type { NextConfig } from "next";

/**
 * Статический экспорт для GitHub Pages.
 * NEXT_PUBLIC_BASE_PATH задаётся в CI (например "/mysite" для https://user.github.io/mysite/).
 * Для user-сайта (user.github.io) и кастомного домена оставьте пустым.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  allowedDevOrigins: ["26.184.54.175"],
};

export default nextConfig;
