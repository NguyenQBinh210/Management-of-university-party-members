import { LeaderCard } from "../../../components/LeaderCart";
import Blog from "./Blog";
import { RightSidebar } from "./RightSiteBar";

const HomePage = () => {
  return (
    <>
      <section className=" min-w-[320px] flex flex-col md:flex-row justify-between items-start gap-5 mx-6 animate-fade-in-up">
        <div className="">
          {/* Lãnh tụ  */}
          <div
            className=" bg-gradient-to-r from-red-200 to-red-300 text-red-800 font-semibold px-3 py-2 mb-4 rounded text-lg animate-slide-in-down"
            aria-live="polite"
            aria-atomic="true"
          >
            C. Mác; Ph. Ảngghen; V. I. Lênin; Hồ Chí Minh
          </div>
          <div className=" grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <LeaderCard
              imgSrc="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b9be0149-7d3e-4e77-8fee-ade0e83c1894.png"
              alt="Chân dung C. Mác với râu dài trắng"
              name="C. Mác"
              href={
                "https://tulieuvankien.dangcongsan.vn/c-mac-angghen-lenin-ho-chi-minh/c-mac/tieu-su-cuoc-doi-va-su-nghiep"
              }
            />
            <LeaderCard
              imgSrc="https://th.bing.com/th/id/OIP.Ug50-G09wVWZ6xi9ulSNfwHaFt?w=220&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
              alt="Chân dung Ph. Ảngghen với râu trắng dài"
              name="Ph. Ảngghen"
              href={
                "https://tulieuvankien.dangcongsan.vn/c-mac-angghen-lenin-ho-chi-minh/ph-angghen/tieu-su-cuoc-doi-va-su-nghiep"
              }
            />
            <LeaderCard
              imgSrc="https://th.bing.com/th/id/OIP.95c_ZihK98H9KmIGIN4FdAHaEu?w=293&h=187&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
              alt="Chân dung V. I. Lênin nghiêm túc trong veston"
              name="V. I. Lênin"
              href={
                "https://tulieuvankien.dangcongsan.vn/c-mac-angghen-lenin-ho-chi-minh/v-i-lenin/tieu-su-cuoc-doi-va-su-nghiep"
              }
            />
            <LeaderCard
              imgSrc="https://tse3.mm.bing.net/th/id/OIP.25XCtbEboTFyqL5kWu3WWAHaGJ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Chân dung Hồ Chí Minh cười nhẹ, mặc áo màu sáng"
              name="Hồ Chí Minh"
              href={
                "https://tulieuvankien.dangcongsan.vn/c-mac-angghen-lenin-ho-chi-minh/ho-chi-minh"
              }
            />
          </div>

          <div
            className="section-title bg-gradient-to-r from-red-200 to-red-300 text-red-800 font-semibold px-3 py-2 mb-4 rounded text-lg animate-slide-in-down animate-stagger-1"
            aria-live="polite"
            aria-atomic="true"
          >
            HỆ THỐNG VĂN BẢN
          </div>
          <nav
            className="doc-system-nav text-sm text-gray-600 mb-2"
            aria-label="Hệ thống văn bản điều hướng"
          >
            <a
              href="#"
              className="text-red-600 font-semibold mr-3 hover:underline"
              tabIndex="0"
            >
              Văn bản của Đảng
            </a>
            |
            <a
              href="#"
              className="text-red-600 font-semibold mr-3 hover:underline"
              tabIndex="0"
            >
              Văn bản quy phạm pháp luật
            </a>
            |
            <a
              href="#"
              className="text-red-600 font-semibold mr-3 hover:underline"
              tabIndex="0"
            >
              Văn bản chỉ đạo điều hành
            </a>
            |
            <a
              href="#"
              className="text-red-600 font-semibold hover:underline"
              tabIndex="0"
            >
              Nghị quyết của Chính phủ
            </a>
          </nav>
          {/* Số liệu  */}
          <table
            className="docs-table w-full border-collapse text-sm animate-fade-in-up animate-stagger-2"
            role="table"
            aria-label="Danh sách văn bản"
          >
            <thead>
              <tr className="border-b-2 border-red-600">
                <th scope="col" className="text-red-600 font-bold p-3">
                  Số hiệu
                </th>
                <th scope="col" className="text-red-600 font-bold p-3">
                  Trích yếu
                </th>
                <th scope="col" className="text-red-600 font-bold p-3">
                  Ngày ban hành
                </th>
                <th scope="col" className="text-red-600 font-bold p-3">
                  Ngày hiệu lực
                </th>
                <th
                  scope="col"
                  className="text-red-600 font-bold p-3"
                  aria-label="File tài liệu"
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 hover:bg-red-50 transition-colors duration-200">
                <td className="p-3">303-QĐ/TW</td>
                <td className="p-3">
                  Ban hành Quy chế làm việc mẫu của{" "}
                  <span className="hidden md:flex">đảng ủy cơ sở đặc khu</span>{" "}
                  <span className="md:hidden">...</span>
                </td>
                <td className="p-3">09/06/2025</td>
                <td className="p-3">01/07/2025</td>
                <td className="file-icon p-3 text-center w-10 cursor-pointer">
                  <svg
                    className="w-5 h-5 text-red-600 hover:text-red-800 transition-colors hover-scale"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm7 1.5L18.5 9H13V3.5zM8 14h8v2H8v-2zm0 4h8v2H8v-2z" />
                  </svg>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3">302-QĐ/TW</td>
                <td className="p-3">
                  Ban hành Quy chế làm việc mẫu của đảng ủy
                  <span className="hidden md:flex">
                    cấp trên trực tiếp của tổ chức cơ sở đảng ở xã, phường, đặc
                    khu
                  </span>
                  <span className="md:hidden">...</span>
                </td>
                <td className="p-3">09/06/2025</td>
                <td className="p-3">01/07/2025</td>
                <td className="file-icon p-3 text-center w-10 cursor-pointer">
                  <svg
                    className="w-5 h-5 text-red-600 hover:text-red-800 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm7 1.5L18.5 9H13V3.5zM8 14h8v2H8v-2zm0 4h8v2H8v-2z" />
                  </svg>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3">301-QĐ/TW</td>
                <td className="p-3">
                  Về chức năng, nhiệm vụ, tổ chức bộ máy Cơ quan{" "}
                  <span className="hidden md:flex">
                    Ủy ban Mặt trận Tổ quốc Việt Nam cấp tỉnh, cấp xã
                  </span>
                  <span className="md:hidden">...</span>
                </td>
                <td className="p-3">09/06/2025</td>
                <td className="p-3">01/07/2025</td>
                <td className="file-icon p-3 text-center w-10 cursor-pointer">
                  <svg
                    className="w-5 h-5 text-red-600 hover:text-red-800 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm7 1.5L18.5 9H13V3.5zM8 14h8v2H8v-2zm0 4h8v2H8v-2z" />
                  </svg>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3">300-QĐ/TW</td>
                <td className="p-3">
                  Về chức năng, nhiệm vụ của đảng bộ cơ sở đặc khu
                </td>
                <td className="p-3">09/06/2025</td>
                <td className="p-3">01/07/2025</td>
                <td className="file-icon p-3 text-center w-10 cursor-pointer">
                  <svg
                    className="w-5 h-5 text-red-600 hover:text-red-800 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm7 1.5L18.5 9H13V3.5zM8 14h8v2H8v-2zm0 4h8v2H8v-2z" />
                  </svg>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3">06-HD/TW</td>
                <td className="p-3">
                  Một số vấn đề cụ thể thi hành Điều lệ Đảng
                </td>
                <td className="p-3">09/06/2025</td>
                <td className="p-3">09/06/2025</td>
                <td className="file-icon p-3 text-center w-10 cursor-pointer">
                  <svg
                    className="w-5 h-5 text-red-600 hover:text-red-800 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm7 1.5L18.5 9H13V3.5zM8 14h8v2H8v-2zm0 4h8v2H8v-2z" />
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
          {/* Lãnh đạo đảng  */}
          <div
            className=" bg-gradient-to-r from-red-200 to-red-300 text-red-800 font-semibold px-3 py-2 mb-4 rounded text-lg"
            aria-live="polite"
            aria-atomic="true"
          >
            Lãnh đạo Đảng, Nhà nước
          </div>
          <div className=" grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <LeaderCard
              imgSrc="https://th.bing.com/th/id/OIP.2RuZZaW7JR87simj6UMsUAHaE7?w=250&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
              alt="Tổng bí thư"
              name="Tổng bí thư"
              href={
                "https://tulieuvankien.dangcongsan.vn/lanh-dao-dang-nha-nuoc/tong-bi-thu"
              }
            />
            <LeaderCard
              imgSrc="https://th.bing.com/th/id/OIP.DlK1Na2iPE7TYZElZW8HSAHaEK?w=279&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
              alt="Chủ tịch nước"
              name="Chủ tịch nước"
              href={
                "https://tulieuvankien.dangcongsan.vn/lanh-dao-dang-nha-nuoc/chu-tich-nuoc"
              }
            />
            <LeaderCard
              imgSrc="https://th.bing.com/th/id/OIP.0gTh8NKeixnx5VloRzhhrAHaE8?w=278&h=185&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
              alt="Thủ tướng Chính phủ"
              name="Thủ tướng Chính phủ"
            />
            <LeaderCard
              imgSrc="https://th.bing.com/th/id/OIP.ZwGosqFlN__Vb6RZJvCoBAHaE7?w=260&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
              alt="Chủ tịch Quốc hội"
              href={
                "https://tulieuvankien.dangcongsan.vn/lanh-dao-dang-nha-nuoc/chu-tich-quoc-hoi"
              }
              name="Chủ tịch quốc hộc"
            />
          </div>
          {/* bài báo  */}
          <div
            className=" bg-gradient-to-r from-red-200 to-red-300 text-red-800 font-semibold px-3 py-2 mb-4 rounded text-lg"
            aria-live="polite"
            aria-atomic="true"
          >
            Thông tin báo chí
          </div>
          <Blog />
        </div>
        <div>
          <RightSidebar />
        </div>
      </section>
    </>
  );
};

export default HomePage;
