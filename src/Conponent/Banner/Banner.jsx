import React, { useRef } from "react";
import img8 from "../../../public/image1.avif";
import img2 from "../../../public/image2.avif";
import img3 from "../../../public/image3.avif";
import img4 from "../../../public/image4.avif";
import img5 from "../../../public/image5.jpg";
import img6 from "../../../public/image6.avif";
import img7 from "../../../public/photo-1474606179262-1ac393ca3316.avif";
import img1 from "../../../public/photo-1494526585095-c41746248156.avif";
import img9 from "../../../public/photo-1651375773887-6bafd073f37e.avif";
// Import Swiper React components
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Banner.css";
// Import Swiper styles
import "swiper/css";
const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="h-[45vh]  lg:h-[87vh]  mb-2">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img2} className="h-full  rounded-b-lg w-full	" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img1} className="rounded-lg h-full	w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} className="rounded-lg h-full 	w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} className="  rounded-b-lg w-full	h-full" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img5} className="rounded-lg  h-full 	w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} className="rounded-lg h-full 	w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} className=" rounded-b-lg w-full	h-full" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img8} className="rounded-lg  h-full 	w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img9} className="rounded-lg h-full  	w-full" />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
