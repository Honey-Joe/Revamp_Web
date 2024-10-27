import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navcard from "./Navcard";

function AutoPlay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container ">
      <Slider {...settings}>
        <div>
          <h3><Navcard></Navcard></h3>
        </div>
        <div>
          <h3><Navcard></Navcard></h3>
        </div>
        <div>
          <h3><Navcard></Navcard></h3>
        </div>
        <div>
          <h3><Navcard></Navcard></h3>
        </div>
        <div>
          <h3><Navcard></Navcard></h3>
        </div>
        <div>
          <h3><Navcard></Navcard></h3>
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
