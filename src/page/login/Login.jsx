import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../auth/AuthProvider";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const auth = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await auth.login(username, password);
      // Navigation is now handled by PublicRoute, no need to do it here.
    } catch (error) {
      setError(error.message || "Đã có lỗi xảy ra. Vui lòng thử lại.");
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[url('https://www.dangvien.vn/sinhhd/static/media/trongdong.7352eee78f369952b777.png')] bg-cover bg-center bg-no-repeat">
      {/* Container centered */}
      <div className="flex flex-1 justify-center items-center px-4 py-12 sm:py-24">
        <div className="bg-white rounded-2xl shadow-lg max-w-5xl w-full overflow-hidden flex flex-col md:flex-row">
          {/* Left image */}
          <div className="hidden md:block md:w-1/2">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b07069a4-1082-4eac-9eb2-1cf9b74dbe72.png"
              alt="Vietnamese red flag waving with yellow hammer and sickle symbol"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Right form */}
          <div className="w-full md:w-1/2 p-8 md:p-14 flex flex-col justify-center">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6d3baf7b-0694-4d7e-b5e5-55da30e161b3.png"
                alt="Sổ Tay Đảng Viên logo icon"
                className="w-16 h-16 rounded-lg shadow-md object-contain"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c3cf5380-de18-4766-9432-a1b143cea0fc.png";
                }}
              />
            </div>

            {/* Title */}
            <h1 className="text-center text-2xl font-bold text-red-700 mb-1 select-none">
              QUẢN LÝ ĐẢNG VIÊN ĐIỆN TỬ
            </h1>
            <h2 className="text-center text-red-800 font-semibold mb-8 select-none">
              ĐĂNG NHẬP
            </h2>

            {error && (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
                role="alert"
              >
                <span className="block sm:inline">{error}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Username */}
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Tài khoản
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Nhập tài khoản"
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition"
                  autoComplete="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled={loading}
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mật khẩu
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Nhập mật khẩu"
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition pr-10"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-red-600 focus:outline-none"
                    disabled={loading}
                  >
                    {/* Eye icon can be added here */}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-red-700 hover:bg-red-800 focus:bg-red-900 text-white font-semibold py-3 rounded-md transition disabled:opacity-50"
                aria-label="Đăng nhập"
                disabled={loading}
              >
                {loading ? "ĐANG ĐĂNG NHẬP..." : "ĐĂNG NHẬP"}
              </button>
            </form>

            {/* Additional controls */}
            <div className="flex justify-between items-center mt-4 text-gray-600 text-sm">
              <label className="inline-flex items-center space-x-2 select-none">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-red-600 focus:ring-red-500 rounded"
                />
                <span>Ghi nhớ tài khoản đăng nhập</span>
              </label>

              <a
                href="#"
                className="text-red-700 hover:underline focus:underline"
                tabIndex={0}
              >
                Quên mật khẩu?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
