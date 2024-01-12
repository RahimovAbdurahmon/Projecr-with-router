// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./Swager.css"

import React from "react";

const Swager = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper h-[50vh] sm:my-[100px] md:m-[0]"
    >
      <SwiperSlide>
        <div className="flex items-center p-[20px] bg-blue-50 rounded-[10px] lg:p-[35px]">
          <aside className="left text-start">
            <h1 className="text-[30px] font-[600] lg:text-[40px]">
              Калифорния <span className="text-orange-500">в подарок</span> при
              первом заказе
            </h1>
            <p>от 1500 ₽ </p>
          </aside>
          <div className="lg:w-[400px]"></div>
          <img src="src/assets/IMG.png" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex items-center p-[20px] bg-blue-50 rounded-[10px] lg:p-[35px]">
          <aside className="left text-start">
            <h1 className="text-[30px] font-[600] lg:text-[40px]">
              Калифорния <span className="text-orange-500">в подарок</span> при
              первом заказе
            </h1>
            <p>от 1500 ₽ </p>
          </aside>
          <div className="lg:w-[400px]"></div>
          <img src="src/assets/IMG.png" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex items-center p-[20px] bg-blue-50 rounded-[10px] lg:p-[35px]">
          <aside className="left text-start">
            <h1 className="text-[30px] font-[600] lg:text-[40px]">
              Калифорния <span className="text-orange-500">в подарок</span> при
              первом заказе
            </h1>
            <p>от 1500 ₽ </p>
          </aside>
          <div className="lg:w-[400px]"></div>
          <img src="src/assets/IMG.png" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex items-center p-[20px] bg-blue-50 rounded-[10px] lg:p-[35px]">
          <aside className="left text-start">
            <h1 className="text-[30px] font-[600] lg:text-[40px]">
              Калифорния <span className="text-orange-500">в подарок</span> при
              первом заказе
            </h1>
            <p>от 1500 ₽ </p>
          </aside>
          <div className="lg:w-[400px]"></div>
          <img src="src/assets/IMG.png" alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Swager;
