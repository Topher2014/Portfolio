import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  metadataBase: new URL("https://topherludlow.com"),
  title: {
    template: '%s - Topher Ludlow ',
    default:
      'Topher Ludlow - Software Developer',
  },
  description:
    'I am a software developer with a passion for learning and creating, using my background in communications, management, and a love of technology to solve problems and build applications. I am always looking for work opportunities to develop websites and applications using the most efficient tools and platforms that meet your requirements.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
  openGraph: {
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
