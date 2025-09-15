import './globals.css'

export const metadata = {
  title: 'Mebi Zone',
  description: 'Starter site',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <header className="site-header">
          <div className="container py-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="rounded-full px-3 py-1 text-sm bg-mustard/10 text-mustard border border-mustard/20">Giải pháp SaaS cho CLB & Đơn vị tổ chức giải đấu Billiards</span>
                <div className="logo">MeBi.<span className="text-mustard">zone</span></div>
              </div>

              <nav className="flex items-center gap-3">
                <a className="text-sm text-charcoal/80 px-3 py-2 rounded-md hover:bg-olive/5" href="#">Tính năng</a>
                <a className="text-sm text-charcoal/80 px-3 py-2 rounded-md hover:bg-olive/5" href="#">Bảng giá</a>
                <a className="text-sm text-charcoal/80 px-3 py-2 rounded-md hover:bg-olive/5" href="#">Blog</a>
                <a className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-olive text-white hover:bg-olive/90 shadow" href="#">Đăng nhập</a>
              </nav>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="container py-8 text-sm text-charcoal/70">© {new Date().getFullYear()} Mebi Zone</footer>
      </body>
    </html>
  )
}
