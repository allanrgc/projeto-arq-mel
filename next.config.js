/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // AQUI ESTÁ A CORREÇÃO: 'mel' com a letra L
  basePath: '/projeto-arq-mel',
};

module.exports = nextConfig;
