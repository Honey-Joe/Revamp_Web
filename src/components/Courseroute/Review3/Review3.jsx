import Slider from "react-slick";
import { Review1CardApi } from "../../../API/Review1CardApi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Review3Card from "./Review3Card"
import SamplePrevArrow from "./SamplePrevArrow/SamplePrevArrow";
import SampleNextArrow from "./SampleNextArrow/SampleNextArrow";
const Review3 = () => {
  const settings = {
    dots: false,
    infinite: true,
    className: "center",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" max-w-[100%] mx-auto py-[60px]">
        <div className=" lg:w-[100%] mx-auto">
          <div className="p-4 lg:p-8 flex flex-col gap-5">
            <div className="grid grid-cols-1" >
              <Slider {...settings}>
                {Review1CardApi.map((student, index) => (
                  <Review3Card key={index} {...student} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review3;
