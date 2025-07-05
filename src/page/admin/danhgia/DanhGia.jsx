import { useEffect, useState } from "react";
import {
  getDanhGiaTongHop,
  deleteDanhGiaTongHop,
  addDanhGiaTongHop,
  updateDanhGiaTongHop,
  getLastDanhGiaId,
} from "../../../controller/DataControl";
import ButtonAdd from "../../../components/ButtonAdd";
import ModalForm from "../../../components/ModalForm";
import { toast } from "react-toastify";
import ButtonEdit from "../../../components/ButtonEdit";
import ButtonDelete from "../../../components/ButtonDelete";
import { exportDanhGiaListToExcel } from "../../../controller/ExportData";

const DanhGia = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDanhGia, setSelectedDanhGia] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    const { data, error } = await getDanhGiaTongHop(1, 9999, searchText);
    if (!error) setList(data);
    setLoading(false);
  };

  const handleAddDanhGia = async (formData) => {
    const { dang_vien, danh_gia_id, ...addData } = formData;

    // Validate...
    if (!addData.ma_dang_vien) {
      toast.error("Vui lòng chọn đảng viên!");
      return;
    }
    if (!addData.ky_danh_gia) {
      toast.error("Vui lòng nhập kỳ đánh giá!");
      return;
    }
    if (!addData.ngay_danh_gia) {
      toast.error("Vui lòng chọn ngày đánh giá!");
      return;
    }
    if (!addData.nguoi_danh_gia) {
      toast.error("Vui lòng nhập người đánh giá!");
      return;
    }
    if (!addData.xep_loai) {
      toast.error("Vui lòng chọn xếp loại!");
      return;
    }

    if (addData.ngay_danh_gia) {
      addData.ngay_danh_gia = new Date(addData.ngay_danh_gia)
        .toISOString()
        .split("T")[0];
    }

    // 🔥 Thêm dòng sau
    const newId = await getLastDanhGiaId();
    addData.danh_gia_id = newId;

    console.log("Sending add data:", addData);

    const { error } = await addDanhGiaTongHop(addData);
    if (!error) {
      toast.success("Thêm đánh giá thành công!");
      setIsModalOpen(false);
      fetchData();
    } else {
      toast.error("Có lỗi xảy ra khi thêm đánh giá!");
      console.error("Add error:", JSON.stringify(error, null, 2));
    }
  };
  

  const handleUpdateDanhGia = async (formData) => {
    const { dang_vien, danh_gia_id, ...updateData } = formData;
    
    // Validation
    if (!updateData.ma_dang_vien) {
      toast.error("Vui lòng chọn đảng viên!");
      return;
    }
    if (!updateData.ky_danh_gia) {
      toast.error("Vui lòng nhập kỳ đánh giá!");
      return;
    }
    if (!updateData.ngay_danh_gia) {
      toast.error("Vui lòng chọn ngày đánh giá!");
      return;
    }
    if (!updateData.nguoi_danh_gia) {
      toast.error("Vui lòng nhập người đánh giá!");
      return;
    }
    if (!updateData.xep_loai) {
      toast.error("Vui lòng chọn xếp loại!");
      return;
    }
    if (updateData.ngay_danh_gia) {
      updateData.ngay_danh_gia = new Date(updateData.ngay_danh_gia).toISOString().split('T')[0];
    }
    
    console.log("Sending update data:", updateData);
    
    const { error } = await updateDanhGiaTongHop(formData.danh_gia_id, updateData);
    if (!error) {
      toast.success("Cập nhật đánh giá thành công!");
      setIsModalOpen(false);
      setSelectedDanhGia(null);
      fetchData();
    } else {
      toast.error("Có lỗi xảy ra khi cập nhật đánh giá!");
      console.error("Update error:", error);
    }
  };

  const handleDelete = async (id) => {
    if (confirm("Bạn chắc chắn muốn xoá đánh giá này?")) {
      const error = await deleteDanhGiaTongHop(id);
      if (!error) {
        toast.success("Xóa đánh giá thành công!");
        fetchData();
      } else {
        toast.error("Có lỗi xảy ra khi xóa đánh giá!");
      }
    }
  };

  const handleEdit = (danhGia) => {
    setSelectedDanhGia(danhGia);
    setIsModalOpen(true);
  };

  const handleExportExcel = () => {
    const result = exportDanhGiaListToExcel(list);
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
    <div className="p-8 bg-gradient-to-br from-purple-50 to-white rounded-xl shadow-lg">
      <div className="flex justify-between mb-6 gap-4">
        <h1 className="lg:text-3xl text-xl font-extrabold text-purple-700 tracking-tight">
          Danh sách Đánh giá Tổng hợp
        </h1>
        <div className="flex items-center gap-2">
          <button
            onClick={handleExportExcel}
            className="flex items-center px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition shadow-md"
          >
            Xuất Excel
          </button>
          <ButtonAdd
            onClick={() => {
              setSelectedDanhGia(null);
              setIsModalOpen(true);
            }}
          />
        </div>
      </div>

      <ModalForm
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedDanhGia(null);
        }}
        onSubmit={selectedDanhGia ? handleUpdateDanhGia : handleAddDanhGia}
        title={selectedDanhGia ? "Cập nhật đánh giá" : "Thêm đánh giá mới"}
        initialData={selectedDanhGia}
        formType="danhGia"
      />

      <div className="relative mb-6 max-w-md">
        <input
          type="text"
          placeholder="🔍 Tìm kiếm theo tên đảng viên..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition outline-none shadow-sm bg-white"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-10">
          <svg
            className="animate-spin h-8 w-8 text-purple-500 mr-2"
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
          <span className="text-purple-600 font-medium">
            Đang tải dữ liệu...
          </span>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow text-[12px] sm:text-sm md:text-base lg:text-[16px]">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-purple-100 text-purple-700">
                <th className="px-3 py-2 text-left font-semibold">Mã</th>
                <th className="px-3 py-2 text-left font-semibold">Đảng viên</th>
                <th className="px-3 py-2 text-left font-semibold">Kỳ đánh giá</th>
                <th className="px-3 py-2 text-left font-semibold">Ngày đánh giá</th>
                <th className="px-3 py-2 text-left font-semibold">Người đánh giá</th>
                <th className="px-3 py-2 text-left font-semibold">Xếp loại</th>
                <th className="px-3 py-2 text-left font-semibold">Nhận xét</th>
                <th className="px-3 py-2 text-center font-semibold">Sửa</th>
                <th className="px-3 py-2 text-center font-semibold">Xóa</th>
              </tr>
            </thead>
            <tbody>
              {list.length === 0 ? (
                <tr>
                  <td
                    colSpan="9"
                    className="text-center py-8 text-gray-400 font-medium"
                  >
                    Không có dữ liệu
                  </td>
                </tr>
              ) : (
                list.map((dg, idx) => (
                  <tr
                    key={dg.danh_gia_id}
                    className={`transition hover:bg-purple-50 ${
                      idx % 2 === 0 ? "bg-white" : "bg-purple-50/30"
                    }`}
                  >
                    <td className="px-3 py-2 border-b border-gray-100">
                      {dg.danh_gia_id}
                    </td>
                    <td className="px-3 py-2 border-b border-gray-100">
                      {dg.dang_vien?.ho_ten || dg.ma_dang_vien}
                    </td>
                    <td className="px-3 py-2 border-b border-gray-100">
                      {dg.ky_danh_gia}
                    </td>
                    <td className="px-3 py-2 border-b border-gray-100">
                      {dg.ngay_danh_gia}
                    </td>
                    <td className="px-3 py-2 border-b border-gray-100">
                      {dg.nguoi_danh_gia}
                    </td>
                    <td className="px-3 py-2 border-b border-gray-100">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        dg.xep_loai === 'Xuất sắc' ? 'bg-green-100 text-green-800' :
                        dg.xep_loai === 'Tốt' ? 'bg-blue-100 text-blue-800' :
                        dg.xep_loai === 'Khá' ? 'bg-yellow-100 text-yellow-800' :
                        dg.xep_loai === 'Trung bình' ? 'bg-orange-100 text-orange-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {dg.xep_loai}
                      </span>
                    </td>
                    <td className="px-3 py-2 border-b border-gray-100 max-w-xs truncate">
                      {dg.nhan_xet}
                    </td>
                    <td className="px-3 py-2 border-b border-gray-100 text-center space-x-2">
                      <button
                        onClick={() => handleEdit(dg)}
                        className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
                      >
                        <ButtonEdit />
                      </button>
                    </td>
                    <td className="px-3 py-2 border-b border-gray-100 text-center space-x-2">
                      <button
                        onClick={() => handleDelete(dg.danh_gia_id)}
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

export default DanhGia; 