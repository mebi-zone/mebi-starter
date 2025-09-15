import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'MeBi Zone — Quản lý giải đấu & phân hạng bida',
  description: 'MeBi: Đăng ký, lịch thi đấu tự động, kết quả minh bạch, thống kê theo người chơi & giải.',
  metadataBase: new URL('https://mebi.zone'),
}

function Nav() {
  return (
    <header className="border-b border-sand/60 bg-offwhite/60 backdrop-blur sticky top-0 z-50">
      <div className="container py-3 flex items-center justify-between">
        <Link href="/" className="font-extrabold text-xl text-olive">MeBi<span className="text-mustard">.zone</span></Link>
        <nav className="flex gap-5 text-sm">
          <Link href="/features" className="hover:text-olive">Tính năng</Link>
          <Link href="/pricing" className="hover:text-olive">Bảng giá</Link>
          <Link href="/blog" className="hover:text-olive">Blog</Link>
          <Link href="/changelog" className="hover:text-olive">Changelog</Link>
          <a href="https://app.mebi.zone" className="btn btn-primary text-sm">Đăng nhập</a>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-sand/60 mt-16">
      <div className="container py-10 text-sm text-charcoal/80 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} MeBi Zone. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
