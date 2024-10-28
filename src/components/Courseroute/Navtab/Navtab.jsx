import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Curriculam from "../Curriculam/Curriculam";
import Review from "../Navreview/Navreview";
import Announcement from "../Announcement/Announcement";
import Content from "../Navcourse/Navcourse";
import { Tab, TabPanel, Tabs, TabsList } from "@mui/base";
import UpcomingEvent from "../UpcomingEvent/UpcomingEvent";
import ProjectSection from "../ProjectSection/ProjectSection";
import Review3 from "../Review3/Review3";

function Navtab() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      <div className="2xl:container">
        <div className="lg:w-[100%]  w-[95%] mx-auto grid grid-cols-1 mb-28  py-[40px]">
          <Tabs defaultValue={1}>
            <TabsList className="pb-3">
              <div className="slider-container py-5 px-3 rounded-lg " id="certi">
                <Slider {...settings}>
                  <div>
                    <Tab
                      value={1}
                      slotProps={{
                        root: ({ selected, disabled }) => ({
                          className: `font-[Poppins]  ${
                            selected
                              ? " bg-[#FF9F00] text-white rounded-lg "
                              : "text-black"
                          } ${
                            disabled
                              ? "cursor-not-allowed opacity-50"
                              : "cursor-pointer"
                          } text-[14px] lg:text-[16px]  font-medium w-full px-1 py-2   flex justify-center focus:outline-0`,
                        }),
                      }}
                    >
                      <button className="">Course Info</button>
                    </Tab>
                  </div>
                  <div>
                    <Tab
                      value={2}
                      slotProps={{
                        root: ({ selected, disabled }) => ({
                          className: `font-[Poppins]  ${
                            selected
                              ? " bg-[#FF9F00] text-white rounded-lg  "
                              : "text-black"
                          } ${
                            disabled
                              ? "cursor-not-allowed opacity-50"
                              : "cursor-pointer"
                          } text-[14px] lg:text-[16px]  font-medium w-full px-1 py-2   flex justify-center focus:outline-0`,
                        }),
                      }}
                    >
                      <button className="">Curriculam</button>
                    </Tab>
                  </div>
                  <div>
                    <Tab
                      value={3}
                      slotProps={{
                        root: ({ selected, disabled }) => ({
                          className: `font-[Poppins]   ${
                            selected
                              ? " bg-[#FF9F00] text-white rounded-lg  "
                              : "text-black"
                          } ${
                            disabled
                              ? "cursor-not-allowed opacity-50"
                              : "cursor-pointer"
                          } text-[14px] lg:text-[16px]   font-medium w-full px-1 py-2  flex justify-center focus:outline-0`,
                        }),
                      }}
                    >
                      <button className="">Review</button>
                    </Tab>
                  </div>

                  <div>
                    <Tab
                      value={4}
                      slotProps={{
                        root: ({ selected, disabled }) => ({
                          className: `font-[Poppins]  ${
                            selected
                              ? " bg-[#FF9F00] text-white rounded-lg "
                              : "text-black"
                          } ${
                            disabled
                              ? "cursor-not-allowed opacity-50"
                              : "cursor-pointer"
                          } text-[14px] lg:text-[16px]  font-medium w-full px-1 py-2   flex justify-center focus:outline-0`,
                        }),
                      }}
                    >
                      <button className="">Projects</button>
                    </Tab>
                  </div>
                  <div>
                    <Tab
                      value={5}
                      slotProps={{
                        root: ({ selected, disabled }) => ({
                          className: `font-[Poppins]  ${
                            selected
                              ? " bg-[#FF9F00] text-white rounded-lg  "
                              : "text-black"
                          } ${
                            disabled
                              ? "cursor-not-allowed opacity-50"
                              : "cursor-pointer"
                          } text-[14px] lg:text-[16px]  font-medium w-full px-1 py-2   flex justify-center focus:outline-0`,
                        }),
                      }}
                    >
                      <button className="">Announcement</button>
                    </Tab>
                  </div>
                </Slider>
              </div>
            </TabsList>
            <TabPanel value={1}>
              <Content></Content>
            </TabPanel>
            <TabPanel value={2}>
              <Curriculam></Curriculam>
            </TabPanel>
            <TabPanel value={3}>
                      <Review3></Review3>
            </TabPanel>
            <TabPanel value={4}>
              <ProjectSection></ProjectSection>
            </TabPanel>
            <TabPanel value={5}>
              <UpcomingEvent></UpcomingEvent>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default Navtab;
