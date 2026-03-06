import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // use the static export feature introduced in Next 14
  // `next build` will now generate an `out/` directory suitable for
  // copying to a traditional web host like cPanel.
  output: 'export',
};

export default withNextIntl(nextConfig);
