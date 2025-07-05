import { useEffect, useState } from "react";
import {
  getGiaiThuong,
  deleteGiaiThuong,
  addGiaiThuong,
  updateGiaiThuong,
} from "../../../controller/DataControl";
import ButtonAdd from "../../../components/ButtonAdd";
import ModalForm from "../../../components/ModalForm";
import { toast } from "react-toastify";
import ButtonEdit from "../../../components/ButtonEdit";
import ButtonDelete from "../../../components/ButtonDelete";
import { exportGiaiThuongListToExcel } from "../../../controller/ExportData";

const GiaiThuong = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGiaiThuong, setSelectedGiaiThuong] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    const { data, error } = await getGiaiThuong(1, 9999, searchText);
    if (!error) setList(data);
    setLoading(false);
  };

  const handleAddGiaiThuong = async (formData) => {
    const { error } = await addGiaiThuong(formData);
    if (!error) {
      toast.success("Thêm giải thưởng thành công!");
      setIsModalOpen(false);
      fetchData();
    } else {
      toast.error("Có lỗi xảy ra khi thêm giải thưởng!");
    }
  };

  const handleUpdateGiaiThuong = async (formData) => {
    const { error } = await updateGiaiThuong(formData.giai_thuong_id, formData);
    if (!error) {
      toast.success("Cập nhật giải thưởng thành công!");
      setIsModalOpen(false);
      setSelectedGiaiThuong(null);
      fetchData();
    } else {
      toast.error("Có lỗi xảy ra khi cập nhật giải thưởng!");
    }
  };

  const handleDelete = async (id) => {
    if (confirm("Bạn chắc chắn muốn xoá giải thưởng này?")) {
      const error = await deleteGiaiThuong(id);
      if (!error) {
        toast.success("Xóa giải thưởng thành công!");
        fetchData();
      } else {
        toast.error("Có lỗi xảy ra khi xóa giải thưởng!");
      }
    }
  };

  const handleEdit = (giaiThuong) => {
    setSelectedGiaiThuong(giaiThuong);
    setIsModalOpen(true);
  };

  const handleExportExcel = () => {
    const result = exportGiaiThuongListToExcel(list);
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
    <div className="p-8 bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-lg">
      <div className="flex justify-between mb-6 gap-4">
        <h1 className="lg:text-3xl text-xl font-extrabold text-orange-700-700 tracking-tight">
          Danh sách Giải thưởng
        </h1>
        <div className="flex items-center gap-2">
          <button
            onClick={handleExportExcel}
            className="flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition shadow-md"
          >
            Xuất Excel
          </button>
          <ButtonAdd
            onClick={() => {
              setSelectedGiaiThuong(null);
              setIsModalOpen(true);
            }}
          />
        </div>
      </div>

      <ModalForm
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedGiaiThuong(null);
        }}
        onSubmit={selectedGiaiThuong ? handleUpdateGiaiThuong : handleAddGiaiThuong}
        title={selectedGiaiThuong ? "Cập nhật giải thưởng" : "Thêm giải thưởng mới"}
        initialData={selectedGiaiThuong}
        formType="giaiThuong"
      />

      <div className="relative mb-6 max-w-md">
        <input
          type="text"
          placeholder="🔍 Tìm kiếm theo nội dung giải thưởng..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition outline-none shadow-sm bg-white"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-10">
          <svg
            className="animate-spin h-8 w-8 text-orange-500 mr-2"
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
          <span className="text-orange-600 font-medium">
            Đang tải dữ liệu...
          </span>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow text-[12px] sm:text-sm md:text-base lg:text-[16px]">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-orange-100 text-orange-700">
                <th className="px-3 py-2 text-left font-semibold">Mã</th>
                <th className="px-3 py-2 text-left font-semibold">Ngày khen thưởng</th>
                <th className="px-3 py-2 text-left font-semibold">Nội dung</th>
                <th className="px-3 py-2 text-left font-semibold">Cấp ký</th>
                <th className="px-3 py-2 text-center font-semibold">Sửa</th>
                <th className="px-3 py-2 text-center font-semibold">Xóa</th>
              </tr>
            </thead>
            <tbody>
              {list.length === 0 ? (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center py-8 text-gray-400 font-medium"
                  >
                    Không có dữ liệu
                  </td>
                </tr>
              ) : (
                list.map((gt, idx) => (
                  <tr
                    key={gt.giai_thuong_id}
                    className={`transition hover:bg-blue-50 ${
                      idx % 2 === 0 ? "bg-white" : "bg-blue-50/30"
                    }`}
                  >
                    <td className="px-3 py-2 border-b border-gray-100">
                      {gt.giai_thuong_id}
                    </td>
                    <td className="px-3 py-2 border-b border-gray-100">
                      {gt.ngay_khen_thuong}
                    </td>
                    <td className="px-3 py-2 border-b border-gray-100">
                      {gt.noi_dung}
                    </td>
                    <td className="px-3 py-2 border-b border-gray-100">
                      {gt.cap_ky}
                    </td>
                    <td className="px-3 py-2 border-b border-gray-100 text-center space-x-2">
                      <button
                        onClick={() => handleEdit(gt)}
                        className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
                      >
                        <ButtonEdit />
                      </button>
                    </td>
                    <td className="px-3 py-2 border-b border-gray-100 text-center space-x-2">
                      <button
                        onClick={() => handleDelete(gt.giai_thuong_id)}
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

export default GiaiThuong; 