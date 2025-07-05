const Herobanner = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="container text-center">
          <p className="text-2xl lg:text-5xl leading-none">
            Tại sao nên chọn
            <span className="text-primary text-red-500">
              {" "}
              hệ thống quản lý Đảng viên điện tử
            </span>
          </p>
          <p
            className="text-center w-full max-w-[1011px] mx-auto sm:w-full sm:max-w-full md:w-full 
          md:max-w-full lg:w-[1011px] mt-6 lg:mt-10 "
          >
            Ứng dụng dành riêng cho các Đảng viên, nhằm giúp Đảng viên có thể
            theo dõi thông tin, văn kiện, văn bản của Đảng bộ và dễ dàng thực
            hiện nghị quyết học tập và thi trực tuyến trên hệ thống quản lý Đảng
            viên điện tử.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="">
            <div className="slick-slider slick-initialized">
              <div className="px-2 md:px-4 2xl:px-6 py-6 lg:py-9">
                <div className="shadow-md rounded-lg p-4">
                  <div className="mb-6">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/save-image-15416.appspot.com/o/landingpage%2Fitem3.png?alt=media&token=8a19d9f5-0fe2-4f9e-bae3-c0538cc32f45&_gl=1*yonz6t*_ga*OTU4ODE0NDM3LjE2OTg2MzU4MDY.*_ga_CW55HF8NVT*MTY5ODY0MTA4NS4zLjEuMTY5ODY0MTE2NC40Ni4wLjA."
                      alt=""
                      className="h-full w-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="text-center">
                    <h5 className="mb-3 font-bold text-primary text-2xl">
                      Số hóa nghiệp vụ Đảng
                    </h5>
                    <p className="font-normal text-black leading-7 md:leading-8 2xl:leading-9">
                      " Hỗ trợ đảng viên trong việc nghiên cứu, học tập các nghị
                      quyết, quy định, chỉ thị, kết luận của Trung ương và của
                      cấp ủy tỉnh; đồng thời cập nhật kịp thời, chính xác những
                      thông tin thời sự của Đảng, Nhà nước, của tỉnh và các cấp
                      ủy Đảng.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="slick-slider slick-initialized ">
              <div className="px-2 md:px-4 2xl:px-6 py-6 lg:py-9">
                <div className="shadow-md rounded-lg p-4">
                  <div className="mb-6">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/save-image-15416.appspot.com/o/landingpage%2Fitem1.png?alt=media&token=32d54278-9783-4598-9ffd-c817bb810131&_gl=1*qqn5y1*_ga*OTU4ODE0NDM3LjE2OTg2MzU4MDY.*_ga_CW55HF8NVT*MTY5ODY0MTA4NS4zLjEuMTY5ODY0MTEzMy4xMi4wLjA."
                      alt=""
                      className="h-full w-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="text-center">
                    <h5 className="mb-3 font-bold text-primary text-2xl">
                      Nghiên cứu, học tập
                    </h5>
                    <p className="font-normal text-black leading-7 md:leading-8 2xl:leading-9">
                      " " Hỗ trợ đảng viên trong việc nghiên cứu, học tập các
                      nghị quyết, quy định, chỉ thị, kết luận của Trung ương và
                      của cấp ủy tỉnh; đồng thời cập nhật kịp thời, chính xác
                      những thông tin thời sự của Đảng, Nhà nước, của tỉnh và
                      các cấp ủy Đảng.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="slick-slider slick-initialized ">
              <div className="px-2 md:px-4 2xl:px-6 py-6 lg:py-9">
                <div className="shadow-md rounded-lg p-4">
                  <div className="mb-6">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/save-image-15416.appspot.com/o/landingpage%2Fitem2.png?alt=media&token=142462c5-fb67-4fda-9737-78094aba2d7b&_gl=1*1lwib5u*_ga*OTU4ODE0NDM3LjE2OTg2MzU4MDY.*_ga_CW55HF8NVT*MTY5ODY0MTA4NS4zLjEuMTY5ODY0MTE1MC42MC4wLjA."
                      alt=""
                      className="h-full w-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="text-center">
                    <h5 className="mb-3 font-bold text-primary text-2xl">
                      Đổi mới, nâng cao
                    </h5>
                    <p className="font-normal text-black leading-7 md:leading-8 2xl:leading-9">
                      " Hỗ trợ đảng viên trong việc nghiên cứu, học tập các nghị
                      quyết, quy định, chỉ thị, kết luận của Trung ương và của
                      cấp ủy tỉnh; đồng thời cập nhật kịp thời, chính xác những
                      thông tin thời sự của Đảng, Nhà nước, của tỉnh và các cấp
                      ủy Đảng. "
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herobanner;
