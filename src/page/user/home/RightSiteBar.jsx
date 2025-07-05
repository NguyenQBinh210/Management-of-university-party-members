import { useState } from "react";

const SliderItem = ({ img, alt, title, text }) => (
  <article
    className="article-text h-72 overflow-y-auto"
    tabIndex="0"
    aria-live="polite"
    aria-atomic="true"
  >
    <img src={img} alt={alt} className="w-full rounded-md mb-2" />
    <p className="font-bold">{title}</p>
    <p>{text}</p>
  </article>
);

export const RightSidebar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const articles = [
    {
      img: "https://tulieuvankien.dangcongsan.vn/Uploads/2025/6/7/11/andansu.jpeg",
      alt: "Cán bộ đang phát biểu trước hội trường",
      title:
        "Bộ Chính trị, Ban Bí thư kết luận về thực hiện nhiệm vụ sắp xếp tổ chức bộ máy và đơn vị hành chính, bảo đảm tiến độ, yêu cầu",
      text: "(ĐCSVN) - Thường trực Ban Bí thư Trần Cẩm Tú vừa ký ban hành Kết luận số 160-KL/TW (ngày 31/5/2025) của Bộ Chính trị, Ban Bí thư về thực hiện nhiệm vụ sắp xếp tổ chức bộ máy và đ...",
    },
    {
      img: "https://tulieuvankien.dangcongsan.vn/Uploads/2025/6/7/10/a1-dsc-2319-6547-4721-2768-8147.jpg",
      alt: "Cuộc họp bàn chính sách tại hội trường lớn",
      title: "Thông báo mới nhất về việc đổi mới cơ chế tổ chức đảng toàn quốc",
      text: "Ban Bí thư Trung ương Đảng đã ban hành các quyết định quan trọng nhằm đổi mới cơ cấu tổ chức đảng, đảm bảo hiệu quả trong quản lý và phát triển...",
    },
    {
      img: "https://tulieuvankien.dangcongsan.vn/Uploads/2025/6/7/9/TBT.jpg",
      alt: "Đồng chí lãnh đạo Trung ương phát biểu",
      title:
        "Hội nghị Trung ương 15 sẽ tập trung thảo luận các giải pháp phát triển kinh tế - xã hội",
      text: "Dự kiến hội nghị sẽ đánh giá kết quả công tác năm qua và định hướng chiến lược phát triển trong năm tới, tập trung vào các lĩnh vực trọng điểm...",
    },
  ];

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev - 1 + articles.length) % articles.length);
  const handleNext = () =>
    setCurrentIndex((prev) => (prev + 1) % articles.length);

  return (
    <aside className="right-sidebar flex-1 md:max-w-xs max-w-full">
      <div
        className="section-title bg-gradient-to-r from-red-200 to-red-300 text-red-800 font-semibold px-3 py-2 mb-4 rounded text-lg"
        aria-live="polite"
        aria-atomic="true"
      >
        CHỦ TRƯƠNG, CHÍNH SÁCH MỚI
      </div>
      <div className="slider-container relative border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm">
        <button
          className="slider-arrow left absolute top-1/2 -translate-y-1/2 bg-white/60 rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
          onClick={handlePrev}
          aria-label="Slide trước"
        >
          ❮
        </button>
        <button
          className="slider-arrow right absolute top-1/2 -translate-y-1/2 bg-white/60 rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
          onClick={handleNext}
        >
          ❯
        </button>
        <div className="slider-content p-3 text-sm text-gray-800" tabIndex="0">
          <SliderItem {...articles[currentIndex]} />
        </div>
      </div>
      <div className="text-center mt-8 mb-2">
        <img
          src="https://tulieuvankien.dangcongsan.vn/Uploads/2025/3/2/18/Cong%20thong%20tin.jpg"
          alt="Logo Công thông tin điện tử Đảng Cộng Sản Việt Nam màu cam đỏ"
          className="max-w-[280px] mx-auto object-cover"
        />
      </div>
    </aside>
  );
};
