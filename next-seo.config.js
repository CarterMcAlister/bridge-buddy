/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: 'Bridge Buddy',
  titleTemplate: '%s',
  defaultTitle: 'Bridge Buddy',
  description:
    'Find the best bridge to move funds between any blockchain, rollup, or L2',
  canonical: 'https://bridgebuddy.vercel.app',
  openGraph: {
    url: 'https://bridgebuddy.vercel.app',
    title: 'Bridge Buddy',
    description:
      'Find the best bridge to move funds between any blockchain, rollup, or L2',
    images: [
      {
        url: 'https://bridgebuddy.vercel.app/banner.png',
        alt: 'bridgebuddy.vercel.app og-image',
      },
    ],
    site_name: 'Bridge Buddy',
  },
  twitter: {
    cardType: 'summary_large_image',
  },
}

export default defaultSEOConfig
