import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <section className="container pt-16 pb-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <span className="inline-block rounded-full border border-mustard/40 bg-offwhite px-3 py-1 text-sm text-earth">Giải pháp chuyên nghiệp cho Đơn vị tổ chức & CLB Billiards</span>
            <h1 className="font-extrabold leading-snug">
              <span className="block text-4xl md:text-4xl text-mustard">Nền tảng quản lý giải đấu & </span>
              <span className="block text-4xl md:text-4xl text-olive">phân hạng VĐV Billiards</span>
            </h1>
            {/*<h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-olive">
              Ứng dụng {" "}
              <span className="block">Quản lý giải đấu & </span>
              <span className="block">Phân hạng người chơi</span>
            </h1>*/}
            <p className="mt-3 text-xl text-charcoal/80 text-earth">
              Dễ dàng — Chuẩn xác — Minh bạch trong một hệ thống duy nhất
            </p>
            <ul className="text-lg text-charcoal/80 space-y-2 list-disc list-inside">
              <li>Đăng ký & duyệt tham gia trong vài phút</li>
              <li>Cập nhật lịch đấu nhanh chóng</li>
              <li>Thông báo tự động</li>
              <li>Kết quả minh bạch</li>
              <li>Thống kê chuyên nghiệp</li>
              <li>Phân hạng chuẩn xác</li>
            </ul>
            <div className="flex gap-3">
              <Link href="/pricing" className="btn btn-primary">Dùng thử miễn phí</Link>
              <Link href="/features" className="btn btn-ghost">Xem tính năng</Link>
            </div>
          </div>
          <div className="relative">
            <div className="card p-2">
              <img
                src="/mebi-mockup.png"
                alt="MeBi App mockup"
                className="rounded-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Đăng ký & Duyệt VĐV', desc: 'Đăng ký dễ dàng, xét duyệt nhanh, mã VĐV đồng bộ hệ thống.' },
            { title: 'Tạo giải & Cập nhật lịch đấu', desc: 'Thể thức linh hoạt, vòng đấu đa tầng, hệ thống sinh lịch và thông báo thông minh.' },
            { title: 'Thống kê & Phân hạng', desc: 'Cập nhật nhanh chóng, thống kê xếp hạng chuẩn xác, số liệu minh bạch.' },
          ].map((f, i) => (
            <div key={i} className="card p-6">
              <h3 className="font-semibold text-olive mb-2">{f.title}</h3>
              <p className="text-charcoal/80">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
