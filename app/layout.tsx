import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Mebi Zone',
  description: 'Starter site',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <header className="border-b border-sand/60 bg-offwhite/60 backdrop-blur sticky top-0 z-50">
          <div className="container py-3 flex items-center justify-between">
            <Link href="/" className="font-extrabold text-xl text-olive">MeBi<span className="text-mustard">.zone</span></Link>
            <nav className="flex gap-5 text-sm items-center">
              <Link href="/features" className="hover:text-olive">Tính năng</Link>
              <Link href="/pricing" className="hover:text-olive">Bảng giá</Link>
              <Link href="/blog" className="hover:text-olive">Blog</Link>
              <Link href="/changelog" className="hover:text-olive">Changelog</Link>
              <a href="https://app.mebi.zone" className="btn btn-primary text-sm">Đăng nhập</a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="container py-8 text-sm text-charcoal/70">© {new Date().getFullYear()} Mebi Zone</footer>
      </body>
    </html>
  )
}
