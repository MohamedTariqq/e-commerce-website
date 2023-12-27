import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SliderProducts } from "../../data/products";
import "./Slider.css";
const Slider = () => {
  return (
    <div className="s-container">
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        modules={[Pagination, Navigation]}
        navigation={true}
        className="mySwiper"
        loopFillGroupWithBlank={true}
        slidesPerView={2}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
      >
        {SliderProducts.map((slide, i) => (
          <SwiperSlide>
            <div className="left-s">
              <div className="name">
                <span>{slide.name}</span>
                <span>{slide.detail}</span>
              </div>
              <span>{slide.price}</span>
              <div>Shop now</div>
            </div>
            <img src={slide.img} alt="Product" className="img-p" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
