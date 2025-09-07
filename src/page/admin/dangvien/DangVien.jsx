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
import LoadingSpinner from "../../../components/LoadingSpinner";
import AnimatedButton from "../../../components/AnimatedButton";

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
    <div className="p-8 bg-gradient-to-br from-green-50 to-white rounded-xl shadow-lg animate-fade-in-up">
      <div className="flex  justify-between mb-6 gap-4 ">
        <h1 className="lg:text-3xl text-xl font-extrabold text-green-700 tracking-tight animate-slide-in-down">
          Danh sách Đảng viên
        </h1>
        <div className="flex items-center gap-2 animate-fade-in-right">
          <AnimatedButton
            onClick={handleExportExcel}
            variant="primary"
            size="medium"
            className="hover-lift"
          >
            Xuất Excel
          </AnimatedButton>
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

      <div className="relative mb-6 max-w-md animate-fade-in-up animate-stagger-1">
        <input
          type="text"
          placeholder="🔍 Tìm kiếm theo tên đảng viên..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 transition outline-none shadow-sm bg-white input-focus"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {loading ? (
        <LoadingSpinner 
          size="large" 
          color="green" 
          text="Đang tải dữ liệu đảng viên..." 
        />
      ) : (
        <div className="overflow-x-auto rounded-lg shadow text-[12px] sm:text-sm md:text-base lg:text-[16px] animate-fade-in-up animate-stagger-2">
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
                    className={`transition hover:bg-green-50 hover-lift ${
                      idx % 2 === 0 ? "bg-white" : "bg-green-50/30"
                    }`}
                    style={{
                      animationDelay: `${idx * 0.05}s`,
                      animation: 'fadeInUp 0.5s ease-out forwards'
                    }}
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
                      <AnimatedButton
                        onClick={() => handleEdit(dv)}
                        variant="warning"
                        size="small"
                        className="hover-scale"
                      >
                        <ButtonEdit />
                      </AnimatedButton>
                    </td>
                    <td className="px-3 py-2 border-b border-gray-100 text-center space-x-2">
                      <AnimatedButton
                        onClick={() => handleDelete(dv.ma_dang_vien)}
                        variant="danger"
                        size="small"
                        className="hover-scale"
                      >
                        <ButtonDelete />
                      </AnimatedButton>
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
