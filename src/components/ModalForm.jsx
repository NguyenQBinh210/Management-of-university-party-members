import { useState, useEffect } from "react";
import { getLastDangVienId, getChiBo, getDangVien, getLastGiaiThuongId, getLastDanhGiaId } from "../controller/DataControl";

const ModalForm = ({ isOpen, onClose, onSubmit, title, initialData, formType = "dangVien" }) => {
  const [formData, setFormData] = useState({});
  const [chiBoList, setChiBoList] = useState([]);
  const [dangVienList, setDangVienList] = useState([]);
  const [loading, setLoading] = useState(false);

  // Khởi tạo form data dựa trên loại form
  const initializeFormData = (type) => {
    switch (type) {
      case "giaiThuong":
        return {
          giai_thuong_id: "",
          ngay_khen_thuong: "",
          noi_dung: "",
          cap_ky: "",
        };
      case "danhGia":
        return {
          danh_gia_id: "",
          ma_dang_vien: "",
          ky_danh_gia: "",
          ngay_danh_gia: "",
          nguoi_danh_gia: "",
          xep_loai: "Tốt",
          nhan_xet: "",
          ghi_chu: "",
        };
      default: // dangVien
        return {
          ma_dang_vien: "",
          ho_ten: "",
          gioi_tinh: "Nam",
          ngay_sinh: "",
          sdt: "",
          email: "",
          dia_chi: "",
          ngay_vao_dang: "",
          trang_thai: "Hoạt động",
          ma_chi_bo: "",
        };
    }
  };

  useEffect(() => {
    const setupForm = async () => {
      if (isOpen) {
        if (initialData) {
          // Xử lý initialData dựa trên formType
          const processedData = { ...initialData };
          
          // Format dates cho từng loại form
          if (formType === "dangVien") {
            processedData.ngay_sinh = initialData.ngay_sinh
              ? new Date(initialData.ngay_sinh).toISOString().split("T")[0]
              : "";
            processedData.ngay_vao_dang = initialData.ngay_vao_dang
              ? new Date(initialData.ngay_vao_dang).toISOString().split("T")[0]
              : "";
          } else if (formType === "giaiThuong") {
            processedData.ngay_khen_thuong = initialData.ngay_khen_thuong
              ? new Date(initialData.ngay_khen_thuong).toISOString().split("T")[0]
              : "";
          } else if (formType === "danhGia") {
            processedData.ngay_danh_gia = initialData.ngay_danh_gia
              ? new Date(initialData.ngay_danh_gia).toISOString().split("T")[0]
              : "";
          }
          
          setFormData(processedData);
        } else {
          let newId = "";
          if (formType === "giaiThuong") {
            newId = await getLastGiaiThuongId();
          } else if (formType === "danhGia") {
            newId = await getLastDanhGiaId();
          } else {
            newId = await getLastDangVienId();
          }
          
          const baseData = initializeFormData(formType);
          if (formType === "giaiThuong") {
            baseData.giai_thuong_id = newId;
          } else if (formType === "danhGia") {
            baseData.danh_gia_id = newId;
          } else {
            baseData.ma_dang_vien = newId;
          }
          setFormData(baseData);
        }
      }
    };
    setupForm();
  }, [isOpen, initialData, formType]);

  useEffect(() => {
    const fetchData = async () => {
      if (isOpen) {
        setLoading(true);
        if (formType === "dangVien") {
          const { data, error } = await getChiBo();
          if (!error && data) {
            setChiBoList(data);
          }
        } else if (formType === "danhGia") {
          const { data, error } = await getDangVien(1, 9999);
          if (!error && data) {
            setDangVienList(data);
          }
        }
        setLoading(false);
      }
    };
    fetchData();
  }, [isOpen, formType]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

  const renderForm = () => {
    switch (formType) {
      case "giaiThuong":
        return (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mã giải thưởng
              </label>
              <input
                type="text"
                name="giai_thuong_id"
                value={formData.giai_thuong_id}
                className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                disabled
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Ngày khen thưởng
              </label>
              <input
                type="date"
                name="ngay_khen_thuong"
                value={formData.ngay_khen_thuong}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nội dung
              </label>
              <textarea
                name="noi_dung"
                value={formData.noi_dung}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows="3"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Cấp ký
              </label>
              <input
                type="text"
                name="cap_ky"
                value={formData.cap_ky}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
          </>
        );

      case "danhGia":
        return (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mã đánh giá
              </label>
              <input
                type="text"
                name="danh_gia_id"
                value={formData.danh_gia_id}
                className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                disabled
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Đảng viên
              </label>
              <select
                name="ma_dang_vien"
                value={formData.ma_dang_vien}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
                disabled={loading}
              >
                <option value="">Chọn đảng viên</option>
                {dangVienList.map((dv) => (
                  <option key={dv.ma_dang_vien} value={dv.ma_dang_vien}>
                    {dv.ho_ten} - {dv.ma_dang_vien}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Kỳ đánh giá
              </label>
              <input
                type="text"
                name="ky_danh_gia"
                value={formData.ky_danh_gia}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="VD: 2024"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Ngày đánh giá
              </label>
              <input
                type="date"
                name="ngay_danh_gia"
                value={formData.ngay_danh_gia}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Người đánh giá
              </label>
              <input
                type="text"
                name="nguoi_danh_gia"
                value={formData.nguoi_danh_gia}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Xếp loại
              </label>
              <select
                name="xep_loai"
                value={formData.xep_loai}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              >
                <option value="Xuất sắc">Xuất sắc</option>
                <option value="Tốt">Tốt</option>
                <option value="Khá">Khá</option>
                <option value="Trung bình">Trung bình</option>
                <option value="Yếu">Yếu</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nhận xét
              </label>
              <textarea
                name="nhan_xet"
                value={formData.nhan_xet}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows="3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Ghi chú
              </label>
              <textarea
                name="ghi_chu"
                value={formData.ghi_chu}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows="2"
              />
            </div>
          </>
        );

      default: // dangVien
        return (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mã đảng viên
              </label>
              <input
                type="text"
                name="ma_dang_vien"
                value={formData.ma_dang_vien}
                className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                disabled
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Họ tên
              </label>
              <input
                type="text"
                name="ho_ten"
                value={formData.ho_ten}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Giới tính
              </label>
              <select
                name="gioi_tinh"
                value={formData.gioi_tinh}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              >
                <option value="Nam">Nam</option>
                <option value="Nữ">Nữ</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Ngày sinh
              </label>
              <input
                type="date"
                name="ngay_sinh"
                value={formData.ngay_sinh}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Ngày vào đảng
              </label>
              <input
                type="date"
                name="ngay_vao_dang"
                value={formData.ngay_vao_dang}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Số điện thoại
              </label>
              <input
                type="tel"
                name="sdt"
                value={formData.sdt}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Địa chỉ
              </label>
              <textarea
                name="dia_chi"
                value={formData.dia_chi}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows="3"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Chi bộ
              </label>
              <select
                name="ma_chi_bo"
                value={formData.ma_chi_bo}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
                disabled={loading}
              >
                <option value="">Chọn chi bộ</option>
                {chiBoList.map((chiBo) => (
                  <option key={chiBo.ma_chi_bo} value={chiBo.ma_chi_bo}>
                    {chiBo.ten_chi_bo}
                  </option>
                ))}
              </select>
              {loading && (
                <p className="text-sm text-gray-500 mt-1">
                  Đang tải danh sách chi bộ...
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Trạng thái
              </label>
              <select
                name="trang_thai"
                value={formData.trang_thai}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              >
                <option value="Hoạt động">Hoạt động</option>
                <option value="Không hoạt động">Không hoạt động</option>
              </select>
            </div>
          </>
        );
    }
  };

  return (
    <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {renderForm()}

          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              {initialData ? "Cập nhật" : "Thêm"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
