import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PostPeak – Optimize Social Media Posting Times',
  description: 'Analyze audience activity patterns, predict optimal posting times, and schedule content for peak engagement across all platforms.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d7309b78-89ef-4842-9de6-e996bc923310"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
