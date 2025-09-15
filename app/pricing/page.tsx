const tiers = [
  { name: 'MeSo', price: '0đ', features: ['Tạo tối đa 2 giải/tháng', '100 VĐV/tháng', 'Email support'] },
  { name: 'MePro', price: 'X68.000đ/tháng', features: ['Không giới hạn giải', '1.000 VĐV/tháng', 'SMS nhắc lịch (tính riêng)'] },
  { name: 'MeZo', price: 'Liên hệ', features: ['Cho Đơn vị tổ chức/Chuỗi CLB', 'Onboarding & hỗ trợ riêng', 'SLA & báo cáo định kỳ'] },
]

export default function Pricing() {
  return (
    <section className="container py-14">
      <h1 className="text-3xl font-extrabold text-olive mb-2">Bảng giá</h1>
      <p className="text-charcoal/80 mb-8">Giá mẫu tham khảo </p>
      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map(t => (
          <div key={t.name} className="card p-6">
            <h3 className="font-semibold text-olive">{t.name}</h3>
            <p className="text-3xl font-extrabold my-3 text-charcoal">{t.price}</p>
            <ul className="space-y-2 text-charcoal/80 mb-4">{t.features.map(f => <li key={f}>• {f}</li>)}</ul>
            <button className="btn btn-primary w-full">Chọn gói {t.name}</button>
          </div>
        ))}
      </div>
      <p className="text-xs text-charcoal/60 mt-4">*SMS OTP/nhắc lịch, tên miền riêng, hỗ trợ triển khai onsite có thể tính thêm.</p>
    </section>
  )
}
