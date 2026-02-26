import { type Metadata } from 'next'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://inth3loop.org'),
  title: {
    template: '%s - inth3loop.org',
    default: 'inth3loop.org',
  },
  description:
    'a software organization building at the edge of innovation, focused on quality and authentic artistic products.',
  keywords: [
    'blockchain',
    'AI',
    'web3',
    'smart contracts',
    'ERC-4337',
    'zero knowledge proofs',
    'account abstraction',
    'software engineering',
  ],
  authors: [{ name: 'Cătălin Tișcă', url: 'https://tiscacatalin.com' }],
  creator: 'inth3loop.org',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'inth3loop.org',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@inth3loop',
  },
  alternates: {
    canonical: 'https://inth3loop.org',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
