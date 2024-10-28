import { certifcate } from "../../../assets/image";

const Navcertificate = () => {
  return (
    <>
      <div className="3xl:container">
        <div
          className=" lg:py-6 lg:px-8 py-3  gap-5 rounded-xl bg-white"
          id="certi"
        >
          <div className=" grid grid-cols-1 lg:grid-cols-2 rounded-xl py-4 px-4">
            <div className="py-3 px-3 flex flex-col gap-2 ">
              <p className="font-[Poppins] font-bold text-[16px] md:text-[20px]">
                Earn a certificate
              </p>
              <hr />
              <p className="font-[Poppins] text-[14px] md:text-[16px] text-black ">
                Add this certificate to your resume to demonstrate your skills &
                increase your chances of getting noticed.
              </p>
            </div>
            <div className=" flex justify-center">
              <img src={certifcate} alt="certificate" className="w-[80%]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navcertificate;
