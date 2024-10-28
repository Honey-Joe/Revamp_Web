import { Clock, FileText, Star, Users } from "lucide-react";
import { author_image, coursedhead745, coursedheadmob, courseheader } from "../../../assets/image";

const Header = () => {
  return (
    <>
      <div className="max-w-[100%] ">
        <div className="w-[100%] mx-auto grid grid-cols-1">
        <img src={coursedhead745} alt="" className="hidden md:block xl:hidden" />
          <img src={courseheader} alt="" className="hidden xl:block" />
          <img src={coursedheadmob} alt="" className=" md:hidden xl:hidden" />
          
        </div>
      </div>
    </>
  );
};

export default Header;
