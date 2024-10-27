import YoutubeVid from "../YoutubeVid/YoutubeVid";
import Navtab from "../Navtab/Navtab";
import Righttab from "../Righttab/Righttab";
import Topcourse from "../Topcourse/Topcourse";
import FindCourse from "../../FindCourse/FindCourse";

const Body = () => {
  return (
    <>
      <div className="max-w-[100%] mx-auto py-[40px]">
        <div className="grid lg:grid-cols-3 xl:grid-cols-4  grid-cols-1 w-[90%] mx-auto gap-10">
          <div className=" lg:col-span-2 xl:col-span-3 ">
            <YoutubeVid></YoutubeVid>
            <Navtab></Navtab>
          </div>
          <div className="lg:col-span-1 w-[100%]">
            <Righttab></Righttab>
          </div>
        </div>
        <div>
          <FindCourse></FindCourse>
        </div>
      </div>
    </>
  );
};

export default Body;
