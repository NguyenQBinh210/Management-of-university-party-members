import { useEffect, useState } from "react";
import {
  getChiBo,
  addChiBo,
  updateChiBo,
  deleteChiBo,
} from "../../../controller/DataControl";
import ButtonAdd from "../../../components/ButtonAdd";
import ChiBoForm from "../../../components/ChiBoForm";
import { toast } from "react-toastify";
import ButtonDelete from "../../../components/ButtonDelete";
import ButtonEdit from "../../../components/ButtonEdit";
import { exportChiBoListToExcel } from "../../../controller/ExportData";

const ChiBo = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedChiBo, setSelectedChiBo] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    const { data, error } = await getChiBo(1, 9999, searchText);
    if (!error) setList(data);
    setLoading(false);
  };

  const handleAddChiBo = async (formData) => {
    const { error } = await addChiBo(formData);
    if (!error) {
      toast.success("Thêm chi bộ thành công!");
      setIsModalOpen(false);
      fetchData();
    } else {
      toast.error("Có lỗi xảy ra khi thêm chi bộ!");
    }
  };

  const handleUpdateChiBo = async (formData) => {
    const { error } = await updateChiBo(formData.ma_chi_bo, formData);
    if (!error) {
      toast.success("Cập nhật chi bộ thành công!");
      setIsModalOpen(false);
      setSelectedChiBo(null);
      fetchData();
    } else {
      toast.error("Có lỗi xảy ra khi cập nhật chi bộ!");
    }
  };

  const handleDelete = async (maChiBo) => {
    if (confirm("Bạn chắc chắn muốn xoá chi bộ này?")) {
      const error = await deleteChiBo(maChiBo);
      if (!error) {
        toast.success("Xóa chi bộ thành công!");
        fetchData();
      } else {
        toast.error("Có lỗi xảy ra khi xóa chi bộ!");
      }
    }
  };

  const handleEdit = (chiBo) => {
    setSelectedChiBo(chiBo);
    setIsModalOpen(true);
  };
  const handleExportExcel = () => {
    const result = exportChiBoListToExcel(list);
    if (!result.success) {
      toast.error(result.message);
    } else {
      toast.success("Xuất dữ liệu thành công!");
    }
  };
  useEffect(() => {
    fetchData();
  }, [searchText]);

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <h1 className="text-3xl font-extrabold text-blue-700 tracking-tight">
          Danh sách Chi bộ
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
              setSelectedChiBo(null);
              setIsModalOpen(true);
            }}
          />
        </div>
      </div>

      <ChiBoForm
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedChiBo(null);
        }}
        onSubmit={selectedChiBo ? handleUpdateChiBo : handleAddChiBo}
        title={selectedChiBo ? "Cập nhật chi bộ" : "Thêm chi bộ mới"}
        initialData={selectedChiBo}
      />

      <div className="relative mb-6 max-w-md">
        <input
          type="text"
          placeholder="🔍 Tìm kiếm theo tên chi bộ..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition outline-none shadow-sm bg-white"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-10 text-[10px] sm:text-sm md:text-base lg:text-[16px]">
          <svg
            className="animate-spin h-8 w-8 text-blue-500 mr-2"
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
          <span className="text-blue-600 font-medium">Đang tải dữ liệu...</span>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-blue-100 text-blue-700">
                <th className="px-6 py-3 text-left font-semibold">Mã chi bộ</th>
                <th className="px-6 py-3 text-left font-semibold">
                  Tên chi bộ
                </th>
                <th className="px-6 py-3 text-left font-semibold">Địa điểm</th>
                <th className="px-6 py-3 text-left font-semibold">
                  Ngày thành lập
                </th>
                <th className="px-6 py-3 text-center font-semibold">Sửa</th>
                <th className="px-6 py-3 text-center font-semibold">Xóa</th>
              </tr>
            </thead>
            <tbody>
              {list.length === 0 ? (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-8 text-gray-400 font-medium"
                  >
                    Không có dữ liệu
                  </td>
                </tr>
              ) : (
                list.map((cb, idx) => (
                  <tr
                    key={cb.ma_chi_bo}
                    className={`transition hover:bg-blue-50 ${
                      idx % 2 === 0 ? "bg-white" : "bg-blue-50/30"
                    }`}
                  >
                    <td className="px-6 py-3 border-b border-gray-100">
                      {cb.ma_chi_bo}
                    </td>
                    <td className="px-6 py-3 border-b border-gray-100">
                      {cb.ten_chi_bo}
                    </td>
                    <td className="px-6 py-3 border-b border-gray-100">
                      {cb.dia_diem}
                    </td>
                    <td className="px-6 py-3 border-b border-gray-100">
                      {cb.ngay_thanh_lap}
                    </td>
                    <td className="px-6 py-3 border-b border-gray-100 text-center space-x-2">
                      <button
                        onClick={() => handleEdit(cb)}
                        className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-1 rounded shadow transition"
                      >
                        <ButtonEdit />
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(cb.ma_chi_bo)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded shadow transition"
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

export default ChiBo;
