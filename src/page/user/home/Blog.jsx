
const Blog = () => {
  return (
    <div className="flex flex-col md:flex-row space-x-0 md:space-x-6 mb-16">
      {/* main post */}
      <div className="mb-4 lg:mb-0  p-4 lg:p-0 w-full md:w-4/7 relative rounded block">
        <img
          src="https://image.baophapluat.vn/390x260/Uploaded/2025/jihvwawbvhfobu/2025_06_11/ha-noi-thanh-lap-ban-to-chuc-le-dieu-binh-ky-niem-80-nam-quoc-khanh-29-1749225972269-5259-8705.jpg"
          className="rounded-md object-cover w-full h-64"
        />
        <span className="text-green-700 text-sm hidden md:block mt-4">
          {" "}
          Thông tin{" "}
        </span>
        <h1 className="text-gray-800 text-4xl font-bold mt-2 mb-2 leading-tight">
          Dự kiến khoảng 40.000 người tham dự Lễ kỷ niệm 80 năm Quốc khánh 2/9
        </h1>
        <p className="text-gray-600 mb-4">
          Lễ kỷ niệm 80 năm Quốc khánh 2/9 dự kiến có khoảng 40.000 người tham
          dự, bao gồm khách mời, quần chúng nhân dân cùng các lực lượng diễu
          binh, diễu hành... Hà Nội sẽ lắp đặt khán đài 30.000 chỗ ngồi để phục
          vụ Lễ kỷ niệm...
        </p>
      </div>
      {/* sub-main posts */}
      <div className="w-full md:w-4/7">
        {/* post 1 */}
        <a
          className="rounded w-full flex flex-col md:flex-row mb-10"
          href="https://baophapluat.vn/hoi-nghi-unoc-3-thu-tuong-pham-minh-chinh-de-xuat-6-dinh-huong-trong-tam-post551393.html"
        >
          <img
            src="https://image.baophapluat.vn/240x160/Uploaded/2025/vngtsu/2025_06_11/thu-tuong-phat-bieu-tai-hoi-nghi-anh-vgp-5471-5231.jpg"
            className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
          />
          <div className="bg-white rounded px-4">
            <span className="text-green-700 text-sm hidden md:block">
              {" "}
              Thời sự - Chính trị{" "}
            </span>
            <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
              Hội nghị UNOC 3: Thủ tướng Phạm Minh Chính đề xuất 6 định hướng
              trọng tâm
            </div>
            <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
              Tại phiên toàn thể của Hội nghị cấp cao về đại dương của Liên hợp
              quốc (LHQ) lần thứ 3 (UNOC 3), được tổ chức tại TP Nice, Pháp, Thủ
              tướng Phạm Minh Chính ...
            </p>
          </div>
        </a>
        {/* post 2 */}
        <a
          className="rounded w-full flex flex-col md:flex-row mb-10"
          href="https://baophapluat.vn/tong-bi-thu-to-lam-lam-viec-voi-ban-thuong-vu-tinh-uy-phu-tho-vinh-phuc-hoa-binh-post551300.html"
        >
          <img
            src="https://image.baophapluat.vn/240x160/Uploaded/2025/rkxqymzrem/2025_06_10/1000000448-2176-4406.jpg"
            className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
          />
          <div className="bg-white rounded px-4">
            <span className="text-green-700 text-sm hidden md:block">
              {" "}
              Thời sự - Chính trị{" "}
            </span>
            <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
              Tổng Bí thư Tô Lâm làm việc với Ban Thường vụ Tỉnh ủy Phú Thọ,
              Vĩnh Phúc, Hòa Bình
            </div>
            <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
              Sáng 10/6, Tổng Bí thư Tô Lâm đã có buổi làm việc với Ban Thường
              vụ Tỉnh ủy các tỉnh Phú Thọ, Vĩnh Phúc và Hòa Bình. Buổi làm việc
              tập trung đánh giá tình hình và kết quả triển khai thực hiện các
              Nghị quyết ...
            </p>
          </div>
        </a>
        {/* post 3 */}
        <a
          className="rounded w-full flex flex-col md:flex-row mb-10"
          href="https://baophapluat.vn/dam-bao-moi-quyet-sach-khi-duoc-ban-hanh-thuc-su-di-vao-cuoc-song-post551360.html"
        >
          <img
            src="https://image.baophapluat.vn/240x160/Uploaded/2025/qjcqrmdwp/2025_06_10/1-1049-9783.jpg"
            className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
          />
          <div className="bg-white rounded px-4">
            <span className="text-green-700 text-sm hidden md:block">
              {" "}
              Thời sự - Chính trị{" "}
            </span>
            <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
              Đảm bảo mỗi quyết sách khi được ban hành thực sự đi vào cuộc sống
            </div>
            <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
              Chủ tịch Quốc hội Trần Thanh Mẫn cho biết, nhiều vấn đề lớn đã
              được làm rõ; những nội dung còn ý kiến khác nhau cũng đã được định
              hướng xử lý cụ thể. Đây là cơ sở rất quan trọng để các cơ quan
              tiếp tục hoàn thiện hồ sơ ...
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Blog