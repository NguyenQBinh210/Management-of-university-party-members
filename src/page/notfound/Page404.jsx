import { Link } from "react-router";

const Page404 = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://source.unsplash.com/random/1920x1080?nature')",
      }}
    >
      <div className="max-w-md mx-auto text-center bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
        <div className="text-9xl font-bold text-indigo-600 mb-4">404</div>
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Oops! Trang web này không tồn tại
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Có vẻ như trang bạn đang tìm kiếm không còn tồn tại hoặc đã bị di chuyển. 
          Hãy kiểm tra lại đường dẫn hoặc quay lại trang chủ để tiếp tục khám phá.
        </p>
        <Link 
          to="/"
          className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors duration-300"
        >
          Quay lại
        </Link>
      </div>
    </div>
  );
}

export default Page404