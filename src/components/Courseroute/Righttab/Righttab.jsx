import {
  CalendarCheck2Icon,
  Check,
  Clock,
  Facebook,
  File,
  GraduationCap,
  Instagram,
  Linkedin,
  MessageCircleMore,
  Phone,
  RotateCcw,
  Share2,
  Signal,
  Star,
  Twitter,
  User,
} from "lucide-react";

const Righttab = () => {
  return (
    <>
      <div className="w-[100%] grid grid-cols-1 gap-6">
        <div className="flex flex-col gap-2 px-5 py-7 rounded-lg border" id="certi">
          <div className="flex flex-col gap-5">
            <div className="flex gap-7">
              <p className="font-[Regular] text-[24px] font-bold">₹ 3500</p>
              <p className="flex justify-end items-end font-[Regular] text-[14px]">
                <strike>₹4000</strike>
              </p>
            </div>
            <div className="flex justify-center">
              <button className="flex rounded-md xl:px-24 lg:px-16 md:px-24 px-16 py-3 bg-[#FF9F00] font-[Regular] text-white font-medium">
                Enroll Now
              </button>
            </div>
          </div>
          <hr />
          <div className="flex flex-col gap-3">
            <div className="flex gap-4">
              <div>
                <Signal fill="#FF9F00" color="#FF9F00"></Signal>
              </div>
              <div>
                <p className="font-[Regular]">Intermediate</p>
              </div>
            </div>
            <div className="flex gap-4">
              <GraduationCap color="#FF9F00"></GraduationCap>
              <div>
                <p className="font-[Regular]">0 Totally Enrolled</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock color="#FF9F00"></Clock>
              <div>
                <p className="font-[Regular]">1 Hour 30 Minutes Duration</p>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="flex gap-4 xl:px-12 lg:px-9 md:px-24 px-14 rounded-md  py-3 bg-[#F8F8F9] hover:text-[#FF9F00]">
                <Share2></Share2> Share this Course
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 px-5 py-7 rounded-lg border" id="certi">
          <div className="font-[Regular] text-[24px]">
            <p>Materials Includes</p>
          </div>
          <div className="flex justify-center">
            <ul className=" list-disc flex flex-col gap-3 font-[Regular]">
              <li>4 hours on-demand video</li>
              <li>4 articles</li>
              <li>3 downloadable resources</li>
              <li>Full lifetime access</li>
              <li>Access on mobile and TV</li>
              <li>Certificate of Completion</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 py-7 px-10 rounded-lg border" id="certi">
          <div>
            <p className="font-[Regular] text-[22px] font-medium">Requirements</p>
          </div>
          <div className="flex justify-center">
            <ul className="flex flex-col gap-3 list-disc font-[Regular]">
              <li>No prior health knowledge is required or assumed</li>
              <li>A digital food scale will help but is not required</li>
            </ul>
          </div>

        </div>
        <div className="flex flex-col gap-4 py-7 px-10 rounded-lg border" id="certi">
          <div>
            <p className="font-[Regular] text-[22px] font-medium">Audience</p>
          </div>
          <div className="flex justify-center">
            <ul className="flex flex-col gap-3 list-disc font-[Regular]">
              <li>This course is meant for TOTAL beginners in PHP</li>
              <li>No programming experience is needed at all</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 py-7 px-10 rounded-lg border" id="certi">
          <div>
            <p className="font-[Regular] text-[24px]">Tags</p>
          </div> 
            <div className="font-[Regular] flex flex-wrap gap-2">
              <button className="px-5 py-3 border rounded-lg hover:border-[#FF9F00]">Graphic Design</button>
              <button className="px-5 py-3 border rounded-lg hover:border-[#FF9F00]">PHP</button>
              <button className="px-5 py-3 border rounded-lg hover:border-[#FF9F00]">Health and Fitness</button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Righttab;
