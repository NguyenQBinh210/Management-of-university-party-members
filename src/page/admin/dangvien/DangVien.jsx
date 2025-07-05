import { useEffect, useState } from "react";
import {
  getDangVien,
  deleteDangVien,
  addDangVien,
  updateDangVien,
} from "../../../controller/DataControl";
import ButtonAdd from "../../../components/ButtonAdd";
import ModalForm from "../../../components/ModalForm";
import { toast } from "react-toastify";
import ButtonEdit from "../../../components/ButtonEdit";
import ButtonDelete from "../../../components/ButtonDelete";
import { exportDangVienListToExcel } from "../../../controller/ExportData";

const DangVien = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDangVien, setSelectedDangVien] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    const { data, error } = await getDangVien(1, 9999, searchText);
    if (!error) setList(data);
    setLoading(false);
  };

  const handleAddDangVien = async (formData) => {
    const { error } = await addDangVien(formData);
    if (!error) {
      toast.success("Thêm đảng viên thành công!");
      setIsModalOpen(false);
      fetchData();
    } else {
      toast.error("Có lỗi xảy ra khi thêm đảng viên!");
    }
  };

  const handleUpdateDangVien = async (formData) => {
    const { error } = await updateDangVien(formData.ma_dang_vien, formData);
    if (!error) {
      toast.success("Cập nhật đảng viên thành công!");
      setIsModalOpen(false);
      setSelectedDangVien(null);
      fetchData();
    } else {
      toast.error("Có lỗi xảy ra khi cập nhật đảng viên!");
    }
  };

  const handleDelete = async (id) => {
    if (confirm("Bạn chắc chắn muốn xoá đảng viên này?")) {
      const error = await deleteDangVien(id);
      if (!error) {
        toast.success("Xóa đảng viên thành công!");
        fetchData();
      } else {
        toast.error("Có lỗi xảy ra khi xóa đảng viên!");
      }
    }
  };

  const handleEdit = (dangVien) => {
    setSelectedDangVien(dangVien);
    setIsModalOpen(true);
  };

  const handleExportExcel = () => {
    const result = exportDangVienListToExcel(list);
    if (!result.success) {
      toast.warn(result.message);
    } else {
      toast.success("Xuất file Excel thành công!");
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchText]);

  return (
    <div className="p-8 bg-gradient-to-br from-green-50 to-white rounded-xl shadow-lg">
      <div className="flex  justify-between mb-6 gap-4 ">
        <h1 className="lg:text-3xl text-xl font-extrabold text-green-700 tracking-tight">
          Danh sách Đảng viên
        </h1>
        <div className="flex items-center gap-2">
          <button
            onClick={handleExportExcel}
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition shadow-md"
          >
            Xuất Excel
          </button>
          <ButtonAdd
            onClick={() => {
              setSelectedDangVien(null);
              setIsModalOpen(true);
            }}
          />
        </div>
      </div>

      <ModalForm
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedDangVien(null);
        }}
        onSubmit={selectedDangVien ? handleUpdateDangVien : handleAddDangVien}
        title={selectedDangVien ? "Cập nhật đảng viên" : "Thêm đảng viên mới"}
        initialData={selectedDangVien}
      />

      <div className="relative mb-6 max-w-md">
        <input
          type="text"
          placeholder="🔍 Tìm kiếm theo tên đảng viên..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 transition outline-none shadow-sm bg-white"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-10">
          <svg
            className="animate-spin h-8 w-8 text-green-500 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8z"
            ></path>
          </svg>
          <span className="text-green-600 font-medium">
            Đang tải dữ liệu...
          </span>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow text-[12px] sm:text-sm md:text-base lg:text-[16px]">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-green-100 text-green-700">
                <th className="px-3 py-2 text-left font-semibold">Mã</th>
                <th className="px-3 py-2 text-left font-semibold">Họ tên</th>
                <th className="px-3 py-2 text-left font-semibold">Giới tính</th>
                <th className="px-3 py-2 text-left font-semibold">Ngày sinh</th>
                <th className="px-3 py-2 text-left font-semibold">SDT</th>
                <th className="px-3 py-2 text-left font-semibold">Email</th>
                <th className="px-3 py-2 text-left font-semibold">
                  Trạng thái
                </th>
                <th className="px-3 py-2 text-center font-semibold">Sửa</th>
                <th className="px-3 py-2 text-center font-semibold">Xóa</th>
              </tr>
            </thead>
            <tbody>
              {list.length === 0 ? (
                <tr>
                  <td
                    colSpan="8"
                    className="text-center py-8 text-gray-400 font-medium"
                  >
                    Không có dữ liệu
                  </td>
                </tr>
              ) : (
                list.map((dv, idx) => (
                  <tr
                    key={dv.ma_dang_vien}
                    className={`transition hover:bg-green-50 ${
                      idx % 2 === 0 ? "bg-white" : "bg-green-50/30"
                    }`}
                  >
                    <td className="px-3 py-2 border-b border-gray-100">
                      {dv.ma_dang_vien}
                    </td>
                    <td className="px-3 py-2 border-b border-gray-100">
                      {dv.ho_ten}
                    </td>
                    <td className="px-3 py-2 border-b border-gray-100">
                      {dv.gioi_tinh}
                    </td>
                    <td className="px-3 py-2 border-b border-gray-100">
                      {dv.ngay_sinh}
                    </td>
                    <td className="px-3 py-2 border-b border-gray-100">
                      {dv.sdt}
                    </td>
                    <td className="px-3 py-2 border-b border-gray-100">
                      {dv.email}
                    </td>
                    <td className="px-3 py-2 border-b border-gray-100">
                      {dv.trang_thai}
                    </td>
                    <td className="px-3 py-2 border-b border-gray-100 text-center space-x-2">
                      <button
                        onClick={() => handleEdit(dv)}
                        className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
                      >
                        <ButtonEdit />
                      </button>
                    </td>
                    <td className="px-3 py-2 border-b border-gray-100 text-center space-x-2">
                      <button
                        onClick={() => handleDelete(dv.ma_dang_vien)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                      >
                        <ButtonDelete />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DangVien;
