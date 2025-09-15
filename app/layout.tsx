import './globals.css'

export const metadata = {
  title: 'Mebi Zone',
  description: 'Starter site',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        {/* header removed to avoid duplication with page-level hero */}
        <main>{children}</main>
        <footer className="container py-8 text-sm text-charcoal/70">© {new Date().getFullYear()} Mebi Zone</footer>
      </body>
    </html>
  )
}
