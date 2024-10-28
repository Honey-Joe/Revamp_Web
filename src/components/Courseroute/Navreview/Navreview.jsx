
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import './styles.css';

import Navcard from "./Navcard";
import { Reviewdata } from "../../../API/Reviewdata";


const Eventlist = () => {
  
  return (
    <>
      <div className="max-w-[100%]" id="event">
        <div className="w-[100%] mx-auto grid grid-cols-1  gap-5">
          
          <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"1"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
            >
              
                {Reviewdata.map((e) => {
                  return (
                    <SwiperSlide>
                    <Navcard
                      name= {e.name}
                      desc = {e.desc}
                      desig = {e.desig}
                    ></Navcard>
                    </SwiperSlide>
                  );
                })}
            
            </Swiper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Eventlist;
