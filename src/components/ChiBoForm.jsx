import { useState, useEffect } from 'react';
import { getLastChiBoId } from '../controller/DataControl';

const ChiBoForm = ({ isOpen, onClose, onSubmit, title, initialData = null }) => {
  const [formData, setFormData] = useState({
    ma_chi_bo: '',
    ten_chi_bo: '',
    dia_diem: '',
    ngay_thanh_lap: ''
  });

  useEffect(() => {
    const generateMaChiBo = async () => {
      if (isOpen && !initialData) {
        const newId = await getLastChiBoId();
        setFormData(prev => ({
          ...prev,
          ma_chi_bo: newId
        }));
      }
    };
    generateMaChiBo();
  }, [isOpen, initialData]);

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50">
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
              Mã chi bộ
            </label>
            <input
              type="text"
              name="ma_chi_bo"
              value={formData.ma_chi_bo}
              className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              disabled
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tên chi bộ
            </label>
            <input
              type="text"
              name="ten_chi_bo"
              value={formData.ten_chi_bo}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Địa điểm
            </label>
            <textarea
              name="dia_diem"
              value={formData.dia_diem}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              rows="3"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Ngày thành lập
            </label>
            <input
              type="date"
              name="ngay_thanh_lap"
              value={formData.ngay_thanh_lap}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
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

export default ChiBoForm; 