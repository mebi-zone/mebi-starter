// app/features/page.tsx
// Bản sạch: không dùng template string động, không cần thư viện icon

const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="1em" height="1em" {...props}>
    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M20 6L9 17l-5-5" />
  </svg>
);
const UsersIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="1em" height="1em" {...props}>
    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" strokeWidth={2} />
    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11" />
  </svg>
);
const TrophyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="1em" height="1em" {...props}>
    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4M17 5h3a3 3 0 0 1-3 3c-1.66 0-3-1.34-3-3V4H10v1c0 1.66-1.34 3-3 3a3 3 0 0 1-3-3h3" />
    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M8 10a4 4 0 0 0 8 0" />
  </svg>
);
const DashboardIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="1em" height="1em" {...props}>
    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M3 3h8v8H3zM13 3h8v5h-8zM13 10h8v11h-8zM3 13h8v8H3z" />
  </svg>
);
const SettingsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="1em" height="1em" {...props}>
    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06A2 2 0 1 1 7.04 4.2l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c0 .66.26 1.3.73 1.77.47.47 1.1.73 1.77.73h.1a2 2 0 1 1 0 4h-.1a2.5 2.5 0 0 0-2.5 2.5z" />
  </svg>
);

type Zone = {
  name: string;
  subtitle: React.ReactNode;
  // Use React.ReactElement type to avoid relying on the global JSX namespace in some CI environments
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
  borderClass: string;
  badgeBg: string;
  textClass: string;
  points: string[];
};

export default function Features() {
  const zones: Zone[] = [
    {
      name: "Player Zone",
      subtitle: <span className="italic">"Công cụ cho vận động viên"</span>,
      icon: UsersIcon,
      borderClass: "border-olive",
      badgeBg: "bg-olive/10",
      textClass: "text-olive",
      points: ["Đăng ký giải", "Nhận nhắc lịch SMS", "Xem thống kê hiệu suất", "Hành trình cá nhân"],
    },
    {
      name: "Organizer Zone",
      subtitle: <span className="italic">"Quản lý giải đấu hiệu quả"</span>,
      icon: TrophyIcon,
      borderClass: "border-mustard",
      badgeBg: "bg-mustard/10",
      textClass: "text-mustard",
      points: ["Tạo giải/nhánh/vòng", "Duyệt VĐV", "Kết quả & thông báo", "Thống kê hoạt động"],
    },
    {
      name: "Mebi Zone",
      subtitle: <span className="italic">"Không gian điều hành tổ chức"</span>,
      icon: DashboardIcon,
      borderClass: "border-earth",
      badgeBg: "bg-earth/10",
      textClass: "text-earth",
      points: ["Cấu hình dấu ấn riêng", "Phân cấp tổ chức", "Thống kê tổng hợp", "Xếp hạng theo tổ chức"],
    },
    {
      name: "Admin Zone",
      subtitle: <span className="italic">"Điều phối hệ thống"</span>,
      icon: SettingsIcon,
      borderClass: "border-charcoal",
      badgeBg: "bg-charcoal/10",
      textClass: "text-charcoal",
      points: ["Cấu hình hệ thống", "RBAC đa tenant", "Logs & sao lưu"],
    },
  ];

  return (
    <section className="container py-14">
      <h1 className="text-3xl font-extrabold text-olive mb-10">Tính năng</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {zones.map(({ name, subtitle, icon: Icon, borderClass, badgeBg, textClass, points }) => (
          <div key={name} className={`card p-6 hover:shadow-lg transition-shadow min-h-[260px] border-t-4 ${borderClass}`}>
            <div className="flex items-center gap-2 mb-1">
              <span className={`inline-flex items-center justify-center rounded-lg p-2 ${badgeBg}`}>
                <Icon className={`w-5 h-5 ${textClass}`} />
              </span>
              <h3 className={`font-semibold ${textClass}`}>{name}</h3>
            </div>

            <p className="text-sm text-charcoal/70 mb-3 leading-relaxed">{subtitle}</p>

            <ul className="space-y-2 text-charcoal/80">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <CheckIcon className={`mt-0.5 w-4 h-4 flex-none ${textClass}`} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}


/*export default function Features() {
  const zones = [
    { name: 'Player Zone', points: ['Đăng ký giải', 'Nhận nhắc lịch SMS', 'Xem thống kê hiệu suất', 'Hành trình cá nhân'] },
    { name: 'Organizer Zone', points: ['Tạo giải/nhánh/vòng', 'Duyệt VĐV', 'Cập nhật kết quả & thông báo', 'Thống kê hoạt động tổ chức'] },
    { name: 'Mebi Zone', points: ['Cấu hình không gian riêng', 'RBAC không gian riêng', 'Thống kê tổng hợp', 'Xếp hạng theo tổ chức'] },
    { name: 'Admin Zone', points: ['Cấu hình hệ thống', 'RBAC đa tenant', 'Logs & sao lưu'] },
  ]
  return (
    <section className="container py-14">
      <h1 className="text-3xl font-extrabold text-olive mb-6">Tính năng</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {zones.map((z) => (
          <div key={z.name} className="card p-6">
            <h3 className="font-semibold text-olive mb-3">{z.name}</h3>
            <ul className="list-disc pl-5 space-y-1 text-charcoal/80">
              {z.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
*/