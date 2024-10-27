import Slider from "react-slick";
import { bloghead1440, bloghead745, blogheadmob } from "../../../../assets/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Headercarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "ease-in",
  };
  return (
    <>
      <div className="max-w-[100%]">
        <div className="py-[40px] mt-10 w-[84%]  lg:w-[95%] mx-auto">
          <div className="slider-container">
            <Slider {...settings}>
              <div>
                <div className="hidden md:block xl:hidden">
                  <img src={bloghead745} alt="" />
                </div>
                <div className="hidden xl:block">
                  <img src={bloghead1440} alt="" />
                </div>
                <div className=" md:hidden xl:hidden">
                  <img src={blogheadmob} alt="" />
                </div>
              </div>
              <div>
                <div className="hidden md:block xl:hidden">
                  <img src={bloghead745} alt="" />
                </div>
                <div className="hidden xl:block">
                  <img src={bloghead1440} alt="" />
                </div>
                <div className=" md:hidden xl:hidden">
                  <img src={blogheadmob} alt="" />
                </div>
              </div>
              <div>
                <div className="hidden md:block xl:hidden">
                  <img src={bloghead745} alt="" />
                </div>
                <div className="hidden xl:block">
                  <img src={bloghead1440} alt="" />
                </div>
                <div className=" md:hidden xl:hidden">
                  <img src={blogheadmob} alt="" />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Headercarousel;
