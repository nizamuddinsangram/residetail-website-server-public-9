import React, { useState } from "react";
import img1 from "../../../public/image1.avif";
import img2 from "../../../public/image2.avif";
import img3 from "../../../public/image3.avif";
// Import Swiper React components
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
const Banner = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="h-[80vh] my-2">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 "
      >
        <SwiperSlide>
          <img src={img1} className=" h-[90vh] rounded-lg w-full	" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img2} className="rounded-lg h-[90vh] 	w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} className="rounded-lg h-[90vh] 	w-full" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
