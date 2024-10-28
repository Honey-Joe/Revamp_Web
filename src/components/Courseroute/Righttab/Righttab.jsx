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
        <div className="flex flex-col gap-6 px-5 pb-10 rounded-lg border bg-white" id="certi">
          <div className="flex flex-col gap-5">'
          <div className="h-fit">
            <img src="https://ik.imagekit.io/jjyo3gsee/HI-Study/image/Frame%20795.png?updatedAt=1724494883095" alt=""  className="w-[100%] h-fit"/>
          </div>
            <div className="flex gap-7">
              <p className="font-[Poppins] text-[24px] font-bold">₹ 3500</p>
              <p className="flex justify-end items-end font-[Poppins] text-[14px]">
                <strike>₹4000</strike>
              </p>
            </div>
            <div className="flex justify-center">
              <button className="text-[18px] rounded-md w-full py-4 flex justify-center bg-[#FF9F00] font-[Poppins] text-white font-medium">
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
                <p className="font-[Poppins]">Intermediate</p>
              </div>
            </div>
            <hr />
            <div className="flex gap-4">
              <GraduationCap color="#FF9F00"></GraduationCap>
              <div>
                <p className="font-[Poppins]">0 Totally Enrolled</p>
              </div>
            </div>
            <hr />
            <div className="flex gap-4">
              <Clock color="#FF9F00"></Clock>
              <div>
                <p className="font-[Poppins]">1 Hour 30 Minutes Duration</p>
              </div>
            </div>
            <hr />
            <div className="flex gap-4">
              <RotateCcw color="#FF9F00"></RotateCcw>
              <div>
                <p className="font-[Poppins]">May 22, 2024 Last Updated</p>
              </div>
            </div>
            <hr />
            <div className="flex justify-center">
              <button className="flex gap-4 w-full justify-center rounded-md  py-3 bg-[#F8F8F9] hover:text-[#FF9F00]">
                <Share2></Share2> Share this Course
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 px-10 py-7 rounded-lg border" id="certi">
          <div className="font-[Poppins] font-semibold text-[24px]">
            <p>Materials Includes</p>
          </div>
          <div className="flex">
            <ul className="marker:text-[#FF9F00] list-outside list-disc  flex flex-col gap-3 font-[Poppins] ">
              <li className="">4 hours on-demand video</li>
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
            <p className="font-[Poppins] text-[22px] font-semibold">Requirements</p>
          </div>
          <div className="flex ">
            <ul className="flex flex-col gap-3 list-disc font-[Poppins] marker:text-[#FF9F00]">
              <li>No prior health knowledge is required or assumed</li>
              <li>A digital food scale will help but is not required</li>
            </ul>
          </div>

        </div>
        <div className="flex flex-col gap-4 py-7 px-10 rounded-lg border" id="certi">
          <div>
            <p className="font-[Poppins] text-[22px] font-semibold">Audience</p>
          </div>
          <div className="flex justify-center">
            <ul className=" marker:text-[#FF9F00] flex flex-col gap-3 list-disc font-[Poppins]">
              <li>This course is meant for TOTAL beginners in PHP</li>
              <li>No programming experience is needed at all</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 py-7 px-10 rounded-lg border" id="certi">
          <div>
            <p className="font-[Poppins] font-semibold text-[22px]">Tags</p>
          </div> 
            <div className="font-[Poppins] flex flex-wrap gap-2">
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
