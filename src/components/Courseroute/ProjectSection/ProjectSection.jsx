import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProjectSectionData } from "../../../API/ProjectSectionData";
import ProjectSectionCard from "./ProjectSectionCard";

function ProjectSection() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: false,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-[100%]">
      <Slider {...settings}>
        {ProjectSectionData.map((e) => {
          return (
            <>
            <div className="mx-2 my-2">
            <ProjectSectionCard
                img={e.img}
                tag={e.tag}
                projecttitle={e.projecttitle}
                projectdesc={e.projectdesc}
                doneby={e.doneby}
                college={e.college}
              ></ProjectSectionCard>
            </div>
              
            </>
          );
        })}
      </Slider>
    </div>
  );
}

export default ProjectSection;
