import { useEffect, useState } from "react";
import { getLichTrinh, addLichTrinh, updateLichTrinh, deleteLichTrinh } from "../../../controller/DataControl";
import ButtonAdd from "../../../components/ButtonAdd";
import LichTrinhForm from "../../../components/LichTrinhForm";
import { toast } from 'react-toastify';
import ButtonEdit from "../../../components/ButtonEdit";
import ButtonDelete from "../../../components/ButtonDelete";
import { exportLichTrinhListToExcel } from "../../../controller/ExportData";

const LichTrinh = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLichTrinh, setSelectedLichTrinh] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    const { data, error } = await getLichTrinh(1, 9999, searchText);
    if (!error) setList(data);
    setLoading(false);
  };

  const handleAddLichTrinh = async (formData) => {
    const { error } = await addLichTrinh(formData);
    if (!error) {
      toast.success("Thêm lịch trình thành công!");
      setIsModalOpen(false);
      fetchData();
    } else {
      toast.error("Có lỗi xảy ra khi thêm lịch trình!");
    }
  };

  const handleUpdateLichTrinh = async (formData) => {
    const updateData = { ...formData };
    delete updateData.chi_bo;

    const { error } = await updateLichTrinh(formData.lich_trinh_id, updateData);
    if (!error) {
      toast.success("Cập nhật lịch trình thành công!");
      setIsModalOpen(false);
      setSelectedLichTrinh(null);
      fetchData();
    } else {
      toast.error("Có lỗi xảy ra khi cập nhật lịch trình!");
    }
  };

  const handleDelete = async (lichTrinhId) => {
    if (confirm("Bạn chắc chắn muốn xoá lịch trình này?")) {
      const error = await deleteLichTrinh(lichTrinhId);
      if (!error) {
        toast.success("Xóa lịch trình thành công!");
        fetchData();
      } else {
        toast.error("Có lỗi xảy ra khi xóa lịch trình!");
      }
    }
  };

  const handleEdit = (lichTrinh) => {
    setSelectedLichTrinh(lichTrinh);
    setIsModalOpen(true);
  };
  const handleExportExcel=()=>{
    const result = exportLichTrinhListToExcel(list);
    if (!result.success) {
      toast.error(result.message);
    } else {
      toast.success("Xuất Excel thành công!");
    }
  }
  useEffect(() => {
    fetchData();
  }, [searchText]);

  return (
    <div className="p-6 bg-gradient-to-br from-red-50 to-white  rounded shadow">
      <div className="flex justify-between mb-3">
        <h1 className="lg:text-3xl text-xl font-extrabold text-red-700 tracking-tight">
          Danh sách lịch trình
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
              setSelectedLichTrinh(null);
              setIsModalOpen(true);
            }}
          />
        </div>
      </div>

      <LichTrinhForm
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedLichTrinh(null);
        }}
        onSubmit={
          selectedLichTrinh ? handleUpdateLichTrinh : handleAddLichTrinh
        }
        title={
          selectedLichTrinh ? "Cập nhật lịch trình" : "Thêm lịch trình mới"
        }
        initialData={selectedLichTrinh}
      />

      <div className="relative mb-6 max-w-md">
        <input
          type="text"
          placeholder="🔍 Tìm kiếm theo tiêu đề..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 transition outline-none shadow-sm bg-white"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {loading ? (
        <p>Đang tải dữ liệu...</p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow text-[12px] sm:text-sm md:text-base lg:text-[16px]">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-red-100 text-red-700">
                <th className="px-3 py-2 text-left font-semibold">
                  Mã lịch trình
                </th>
                <th className="px-3 py-2 text-left font-semibold">Chi bộ</th>
                <th className="px-3 py-2 text-left font-semibold">Tiêu đề</th>
                <th className="px-3 py-2 text-left font-semibold">Nội dung</th>
                <th className="px-3 py-2 text-left font-semibold">Thời gian</th>
                <th className="px-3 py-2 text-left font-semibold">Địa điểm</th>
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
                list.map((lt, idx) => (
                  <tr
                    key={lt.lich_trinh_id}
                    className={`transition hover:bg-red-50 ${
                      idx % 2 === 0 ? "bg-white" : "bg-red-50/30"
                    }`}
                  >
                    <td className="px-3 py-2 border-b border-gray-100">
                      {lt.lich_trinh_id}
                    </td>
                    <td className="px-3 py-2 border-b border-gray-100">
                      {lt.chi_bo?.ten_chi_bo}
                    </td>
                    <td className="px-3 py-2 border-b border-gray-100">
                      {lt.tieu_de}
                    </td>
                    <td className="px-3 py-2 border-b border-gray-100 max-w-xs truncate">
                      {lt.noi_dung}
                    </td>
                    <td className="px-3 py-2 border-b border-gray-100">
                      {new Date(lt.thoi_gian).toLocaleString()}
                    </td>
                    <td className="px-3 py-2 border-b border-gray-100">
                      {lt.dia_diem}
                    </td>
                    <td className="px-3 py-2 border-b border-gray-100 text-center">
                      <button
                        onClick={() => handleEdit(lt)}
                        className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
                      >
                        <ButtonEdit />
                      </button>
                    </td>
                    <td className="px-3 py-2 border-b border-gray-100 text-center">
                      <button
                        onClick={() => handleDelete(lt.lich_trinh_id)}
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

export default LichTrinh;
