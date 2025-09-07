# Hướng dẫn sử dụng hiệu ứng trong ứng dụng

## Tổng quan
Ứng dụng đã được cập nhật với nhiều hiệu ứng đẹp mắt và mượt mà để cải thiện trải nghiệm người dùng.

## Các hiệu ứng đã thêm

### 1. Hiệu ứng trang đăng nhập
- **Background overlay**: Hiệu ứng pulse chậm cho background
- **Logo**: Hiệu ứng bounce-in và float liên tục
- **Form**: Hiệu ứng fade-in-up với stagger delay
- **Input fields**: Hiệu ứng scale khi focus
- **Button**: Hiệu ứng ripple và glow khi hover
- **Error message**: Hiệu ứng shake khi có lỗi

### 2. Hiệu ứng chuyển trang
- **PageTransition**: Component tự động thêm hiệu ứng fade-in cho mọi trang
- **Smooth transitions**: Chuyển đổi mượt mà giữa các trang

### 3. Hiệu ứng bảng dữ liệu
- **Table rows**: Hiệu ứng fade-in-up với delay cho từng hàng
- **Hover effects**: Hiệu ứng lift và scale khi hover
- **Buttons**: Hiệu ứng scale và ripple cho các nút action

### 4. Hiệu ứng Modal
- **Backdrop**: Hiệu ứng fade-in cho background
- **Content**: Hiệu ứng scale-in cho modal content
- **Form elements**: Hiệu ứng fade-in-up với stagger

### 5. Hiệu ứng Card
- **LeaderCard**: Hiệu ứng hover-lift và scale
- **Card transitions**: Chuyển đổi mượt mà khi hover

### 6. Component mới

#### LoadingSpinner
```jsx
<LoadingSpinner 
  size="large" 
  color="green" 
  text="Đang tải dữ liệu..." 
/>
```

#### AnimatedButton
```jsx
<AnimatedButton
  variant="primary"
  size="medium"
  loading={false}
  onClick={handleClick}
>
  Nội dung button
</AnimatedButton>
```

#### NotificationToast
```jsx
<NotificationToast
  message="Thông báo thành công!"
  type="success"
  duration={3000}
  onClose={handleClose}
/>
```

## CSS Classes có sẵn

### Animation Classes
- `animate-fade-in-up`: Fade in từ dưới lên
- `animate-fade-in-left`: Fade in từ trái
- `animate-fade-in-right`: Fade in từ phải
- `animate-slide-in-down`: Slide in từ trên xuống
- `animate-scale-in`: Scale in từ nhỏ đến lớn
- `animate-bounce-in`: Bounce in effect
- `animate-pulse-slow`: Pulse chậm
- `animate-shake`: Shake effect
- `animate-float`: Float liên tục
- `animate-glow`: Glow effect

### Stagger Classes
- `animate-stagger-1`: Delay 0.1s
- `animate-stagger-2`: Delay 0.2s
- `animate-stagger-3`: Delay 0.3s
- `animate-stagger-4`: Delay 0.4s
- `animate-stagger-5`: Delay 0.5s

### Hover Effects
- `hover-lift`: Nâng lên khi hover
- `hover-scale`: Scale khi hover
- `hover-glow`: Glow khi hover
- `card-hover`: Hiệu ứng card khi hover
- `input-focus`: Hiệu ứng input khi focus

## Cách sử dụng

### 1. Thêm hiệu ứng cho component mới
```jsx
<div className="animate-fade-in-up animate-stagger-1">
  Nội dung component
</div>
```

### 2. Thêm hiệu ứng hover
```jsx
<button className="hover-lift hover-scale">
  Button với hiệu ứng
</button>
```

### 3. Sử dụng PageTransition
```jsx
<PageTransition>
  <YourComponent />
</PageTransition>
```

## Tùy chỉnh

### Thay đổi thời gian animation
Chỉnh sửa trong file `src/assets/css/animations.css`:
```css
.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out; /* Thay đổi 0.6s */
}
```

### Thêm animation mới
1. Thêm keyframes trong `animations.css`
2. Thêm class tương ứng
3. Sử dụng trong component

## Lưu ý
- Tất cả animations đều có `prefers-reduced-motion` support
- Animations được tối ưu cho performance
- Sử dụng CSS transforms thay vì thay đổi layout properties
- Có fallback cho các trình duyệt cũ

## Browser Support
- Chrome 4+
- Firefox 5+
- Safari 4+
- IE 10+
- Edge 12+
