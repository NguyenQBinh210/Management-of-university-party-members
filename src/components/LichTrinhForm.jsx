import { useState, useEffect } from "react";
import { getLastLichTrinhId, getChiBo } from "../controller/DataControl";

const LichTrinhForm = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  initialData = null,
}) => {
  const [formData, setFormData] = useState({
    lich_trinh_id: "",
    ma_chi_bo: "",
    tieu_de: "",
    noi_dung: "",
    thoi_gian: "",
    dia_diem: "",
  });

  const [chiBoList, setChiBoList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const generateLichTrinhId = async () => {
      if (isOpen && !initialData) {
        const newId = await getLastLichTrinhId();
        setFormData((prev) => ({
          ...prev,
          lich_trinh_id: newId,
        }));
      }
    };
    generateLichTrinhId();
  }, [isOpen, initialData]);

  useEffect(() => {
    const fetchChiBo = async () => {
      if (isOpen) {
        setLoading(true);
        const { data, error } = await getChiBo();
        if (!error && data) {
          setChiBoList(data);
        }
        setLoading(false);
      }
    };
    fetchChiBo();
  }, [isOpen]);

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

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

  return (
    <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm  flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
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
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mã lịch trình
            </label>
            <input
              type="text"
              name="lich_trinh_id"
              value={formData.lich_trinh_id}
              className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              disabled
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
              Tiêu đề
            </label>
            <input
              type="text"
              name="tieu_de"
              value={formData.tieu_de}
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
              rows="4"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Thời gian
            </label>
            <input
              type="datetime-local"
              name="thoi_gian"
              value={formData.thoi_gian}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Địa điểm
            </label>
            <input
              type="text"
              name="dia_diem"
              value={formData.dia_diem}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

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

export default LichTrinhForm;
