import { Tab, TabPanel, Tabs, TabsList } from "@mui/base";
import Slider from "react-slick";
import Coursecontent from "../Coursecontent/Coursecontent";
import Fullstackcard from "../Fullstackcontent/Fullstackcard";

const CourseTab = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
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
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };
     
      return (
        <>
        <div className='max-w-[100%]'>
          <div className='w-[94%] lg:w-[90%] mx-auto py-[20px] lg:py-[40px]'>
          <Tabs defaultValue={1}>
          <TabsList className='pb-3'>
            <div className='slider-container w-[90%] lg:w-[100%] mx-auto'>
              <Slider {...settings}>
                <div>
            <Tab value={1} slotProps={{
                root: ({ selected, disabled }) => ({
                  className: `font-[poppins]  border-b-4 ${
                    selected
                      ? 'text-[#1363df] border-b-4 border-[#1363df] '
                      : 'text-[#39557e]'
                  } ${
                    disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                  } text-[14px] lg:text-[18px]  font-semibold w-full px-1 py-2   flex justify-center focus:outline-0`,
                }),
              }}>
              
              <button  className=''>All</button>
              </Tab>
    
                </div>
                <div>
            <Tab value={2} slotProps={{
                root: ({ selected, disabled }) => ({
                  className: `font-[poppins] border-b-4 ${
                    selected
                      ? 'text-[#1363df] border-b-4 border-[#1363df] '
                      : 'text-[#39557e]'
                  } ${
                    disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                  } text-[14px] lg:text-[18px] font-semibold w-full px-1 py-2   flex justify-center focus:outline-0`,
                }),
              }}>
    
              <button className=''>
                Full Stack
              </button>
            </Tab>
    
                </div>
                <div>
            <Tab value={3} slotProps={{
                root: ({ selected, disabled }) => ({
                  className: `font-[poppins]  border-b-4 ${
                    selected
                      ? 'text-[#1363df] border-b-4 border-[#1363df] '
                      : 'text-[#39557e]'
                  } ${
                    disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                  } text-[14px] lg:text-[18px] font-semibold w-full px-1 py-2  flex justify-center focus:outline-0`,
                }),
              }}>
              <button className=''>
                App development
              </button>
              
              </Tab>
    
                </div>
                <div>
                  <Tab value={4} slotProps={{
                root: ({ selected, disabled }) => ({
                  className: `font-[poppins] border-b-4 ${
                    selected
                      ? 'text-[#1363df] border-b-4 border-[#1363df] '
                      : 'text-[#39557e]'
                  } ${
                    disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                  } text-[14px] lg:text-[18px] font-semibold w-full px-1 py-2   flex justify-center focus:outline-0`,
                }),
              }}>
                    <button className=''>Designing</button>
                  </Tab>
                </div>
              </Slider>
            </div>
            
          </TabsList>
          <TabPanel value={1}>
            <Coursecontent></Coursecontent>
          </TabPanel>
          <TabPanel value={2}>
                <Fullstackcard></Fullstackcard>
            </TabPanel>
          <TabPanel value={3}>
          <Coursecontent></Coursecontent>

          </TabPanel>
          <TabPanel value={4}>
          <Coursecontent></Coursecontent>

          </TabPanel>
        </Tabs>
          </div>
        </div>
        </>
        
      );
}

export default CourseTab
