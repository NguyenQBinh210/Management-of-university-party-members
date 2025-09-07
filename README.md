# 🏛️ Hệ Thống Quản Lý Đảng Viên Điện Tử

[![Deploy Status](https://img.shields.io/badge/Deploy-Netlify-00C7B7?style=for-the-badge&logo=netlify)](https://quan-ly-dang-vien.netlify.app/)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4.5-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

## 🌐 Demo Live

**🔗 [Xem Demo Trực Tuyến](https://quan-ly-dang-vien.netlify.app/)**

## 📋 Tổng Quan

Hệ thống quản lý đảng viên điện tử là một ứng dụng web hiện đại được xây dựng bằng React + Vite, giúp quản lý thông tin đảng viên, chi bộ, lịch trình hoạt động, giải thưởng và đánh giá một cách hiệu quả và chuyên nghiệp.

## 🎯 Tính Năng Chính

### 🔐 Hệ Thống Đăng Nhập
- **Phân quyền người dùng**: Admin và User
- **Bảo mật**: Xác thực tài khoản với mã hóa
- **Giao diện đăng nhập**: Thiết kế đẹp mắt với hiệu ứng animation

### 👨‍💼 Chức Năng Admin
Quản trị viên có quyền truy cập đầy đủ vào tất cả các module:

#### 📊 Dashboard Admin
- Tổng quan thống kê hệ thống
- Biểu đồ và báo cáo trực quan
- Quản lý người dùng

#### 👥 Quản Lý Đảng Viên
- **Thêm mới đảng viên**: Form nhập liệu đầy đủ thông tin
- **Chỉnh sửa thông tin**: Cập nhật thông tin đảng viên
- **Xóa đảng viên**: Xóa bỏ đảng viên khỏi hệ thống
- **Tìm kiếm**: Tìm kiếm theo tên, mã đảng viên
- **Xuất Excel**: Xuất danh sách đảng viên ra file Excel
- **Hiển thị bảng**: Bảng dữ liệu với pagination và sắp xếp

#### 🏢 Quản Lý Chi Bộ
- Quản lý thông tin các chi bộ
- Thêm, sửa, xóa chi bộ
- Liên kết đảng viên với chi bộ

#### 📅 Quản Lý Lịch Trình
- Tạo lịch trình hoạt động
- Quản lý sự kiện và hoạt động
- Theo dõi tiến độ thực hiện

#### 🏆 Quản Lý Giải Thưởng
- Ghi nhận thành tích đảng viên
- Quản lý các loại giải thưởng
- Lưu trữ lịch sử khen thưởng

#### 📈 Quản Lý Đánh Giá
- Đánh giá định kỳ đảng viên
- Xếp loại và nhận xét
- Báo cáo kết quả đánh giá

### 👤 Chức Năng User
Người dùng thông thường có quyền xem và cập nhật thông tin cá nhân:

#### 🏠 Trang Chủ
- Hiển thị thông tin lãnh tụ
- Hệ thống văn bản
- Lãnh đạo Đảng, Nhà nước
- Thông tin báo chí

#### 📄 Hồ Sơ Cá Nhân
- Xem thông tin cá nhân
- Cập nhật thông tin liên hệ
- Xem lịch sử hoạt động

#### ℹ️ Giới Thiệu
- Thông tin về hệ thống
- Hướng dẫn sử dụng
- Liên hệ hỗ trợ

## 🎨 Giao Diện & Trải Nghiệm

### ✨ Hiệu Ứng Animation
- **Trang đăng nhập**: Hiệu ứng fade-in, bounce, float
- **Chuyển trang**: Transition mượt mà giữa các trang
- **Bảng dữ liệu**: Animation cho từng hàng dữ liệu
- **Modal**: Hiệu ứng scale-in và backdrop blur
- **Button**: Ripple effect và hover animations
- **Loading**: Spinner đẹp mắt với progress indicator

### 📱 Responsive Design
- Tối ưu cho mọi thiết bị (Desktop, Tablet, Mobile)
- Giao diện thân thiện với người dùng
- Navigation menu responsive

### 🎯 UX/UI Features
- **Dark/Light mode support**: Tự động phát hiện theme
- **Accessibility**: Hỗ trợ screen reader và keyboard navigation
- **Loading states**: Hiển thị trạng thái loading cho mọi thao tác
- **Error handling**: Xử lý lỗi thân thiện với người dùng
- **Toast notifications**: Thông báo đẹp mắt với progress bar

## 🔑 Thông Tin Đăng Nhập

### 👨‍💼 Tài Khoản Admin
```
Tài khoản: dv001
Mật khẩu: 12345
```
**Quyền hạn**: Truy cập đầy đủ tất cả chức năng quản trị

### 👤 Tài Khoản User
```
Tài khoản: dv002 - dv026
Mật khẩu: 12345
```
**Quyền hạn**: Xem và cập nhật thông tin cá nhân

## 🛠️ Công Nghệ Sử Dụng

### Frontend
- **React 18.2.0**: Framework JavaScript hiện đại
- **Vite 4.4.5**: Build tool nhanh và hiệu quả
- **Tailwind CSS 3.3.0**: Utility-first CSS framework
- **React Router**: Điều hướng trang
- **React Toastify**: Thông báo toast

### Backend & Database
- **Supabase**: Backend-as-a-Service
- **PostgreSQL**: Cơ sở dữ liệu quan hệ
- **Row Level Security**: Bảo mật dữ liệu

### Development Tools
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Git**: Version control

## 🚀 Cài Đặt & Chạy Dự Án

### Yêu Cầu Hệ Thống
- Node.js >= 16.0.0
- npm >= 8.0.0

### Cài Đặt
```bash
# Clone repository
git clone <repository-url>
cd Nhom9-KTPM

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build

# Preview build
npm run preview
```

### Cấu Hình Environment
Tạo file `.env.local`:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 📁 Cấu Trúc Dự Án

```
src/
├── assets/           # Tài nguyên tĩnh
│   ├── css/         # Stylesheets
│   └── img/         # Hình ảnh
├── auth/            # Xác thực và phân quyền
├── components/      # Components tái sử dụng
├── controller/      # Logic xử lý dữ liệu
├── model/           # Models và database
├── page/            # Các trang chính
│   ├── admin/       # Trang admin
│   ├── user/        # Trang user
│   └── login/       # Trang đăng nhập
└── main.jsx         # Entry point
```

## 🎯 Tính Năng Nổi Bật

### 🔒 Bảo Mật
- Xác thực JWT token
- Phân quyền chi tiết theo role
- Row Level Security (RLS)
- Input validation và sanitization

### 📊 Báo Cáo & Thống Kê
- Dashboard với biểu đồ trực quan
- Xuất dữ liệu ra Excel
- Báo cáo định kỳ
- Thống kê theo thời gian

### 🔄 Đồng Bộ Dữ Liệu
- Real-time updates
- Offline support
- Data caching
- Conflict resolution

## 🤝 Đóng Góp

1. Fork dự án
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📄 License

Dự án này được phân phối dưới giấy phép MIT. Xem file `LICENSE` để biết thêm thông tin.

## 📞 Liên Hệ

- **Website**: [https://quan-ly-dang-vien.netlify.app/](https://quan-ly-dang-vien.netlify.app/)
- **Email**: nguyenqbinh210@gmail.com
- **GitHub**: https://github.com/NguyenQBinh210

