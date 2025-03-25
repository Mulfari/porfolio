import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jscm.my.canva.site',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; frame-src 'self' https://jscm.my.canva.site https://*.canva.site https://*.canva.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.canva.site https://*.canva.com; style-src 'self' 'unsafe-inline' https://*.canva.site https://*.canva.com; img-src 'self' data: https://*.canva.site https://*.canva.com;"
          }
        ],
      },
    ];
  },
};

export default nextConfig;
