import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ToDo App',
  description: 'Mon premier todo in Next',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  )
}
