export default function Privacy() {
  return (
    <section className="container py-14 prose prose-lg max-w-3xl">
      <h1 className="text-3xl font-extrabold text-olive mb-6">Chính sách bảo mật</h1>

      <p>
        Ứng dụng Mebi cam kết bảo vệ thông tin cá nhân của bạn. Chính sách này mô tả cách chúng tôi thu thập,
        sử dụng và chia sẻ dữ liệu.
      </p>

      <h2>1. Thông tin chúng tôi thu thập</h2>
      <ul>
        <li>Thông tin đăng ký tài khoản: tên, số điện thoại, email</li>
        <li>Dữ liệu sử dụng: lịch thi đấu, kết quả, thống kê người chơi</li>
        <li>Thông tin thanh toán (nếu có tích hợp sau này)</li>
      </ul>

      <h2>2. Cách chúng tôi sử dụng thông tin</h2>
      <ul>
        <li>Xác thực và quản lý tài khoản</li>
        <li>Cung cấp tính năng: đăng ký giải, xếp hạng, thống kê</li>
        <li>Gửi thông báo liên quan đến lịch thi đấu, kết quả</li>
      </ul>

      <h2>3. Chia sẻ dữ liệu</h2>
      <p>
        Chúng tôi không bán thông tin cá nhân cho bên thứ ba. Dữ liệu chỉ được chia sẻ với đối tác tổ chức giải
        đấu hoặc khi có yêu cầu pháp luật.
      </p>

      <h2>4. Quyền của người dùng</h2>
      <ul>
        <li>Truy cập, chỉnh sửa hoặc xóa thông tin cá nhân</li>
        <li>Yêu cầu ngừng nhận thông báo tiếp thị</li>
      </ul>

      <h2>5. Liên hệ</h2>
      <p>
        Nếu có thắc mắc về chính sách bảo mật, vui lòng liên hệ:{" "}
        <a href="mailto:support@mebiapp.com">support@mebiapp.com</a>
      </p>
    </section>
  )
}

/*export default function Page(){return (<section className='container py-14'><h1 className='text-3xl font-extrabold text-olive mb-6'>Privacy</h1><p>Coming soon.</p></section>)}
*/