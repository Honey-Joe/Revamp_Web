import React, { useState } from "react";
import Navabout from "../Navabout/Navabout";
import Navbenifit from "../Navbenifit/Navbenifit";
import Navcertificate from "../Navcerticate/Navcertificate";
import Coursecard from "../Coursecard/Coursecard";
const Navcourse = () => {
  return (
    <>
      <div className="2xl:container">
        <div className="w-[100%]">
          <div className="">
            <Navabout></Navabout>
          </div>

          <Navbenifit></Navbenifit>
          <Navcertificate></Navcertificate>
          <Coursecard></Coursecard>

          <div>
            {}
            <button></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navcourse;
