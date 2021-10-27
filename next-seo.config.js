/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: 'Bridge Buddy',
  titleTemplate: '%s',
  defaultTitle: 'Bridge Buddy',
  description: 'Find bridges between any blockchain, rollup, or L2',
  canonical: 'https://bridge-buddy.vercel.app',
  openGraph: {
    url: 'https://bridge-buddy.vercel.app',
    title: 'Bridge Buddy',
    description: 'Find bridges between any blockchain, rollup, or L2',
    images: [
      {
        url: 'https://og-image.sznm.dev/**nextarter-chakra**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250',
        alt: 'bridge-buddy.vercel.app og-image',
      },
    ],
    site_name: 'Bridge Buddy',
  },
  twitter: {
    cardType: 'summary_large_image',
  },
}

export default defaultSEOConfig
