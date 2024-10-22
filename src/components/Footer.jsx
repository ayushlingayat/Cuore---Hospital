import React from "react";

const Footer = () => {
  return (
    <div className=" pt-10 font-[bolld]">
      <div className="  w-full sm:h-[fit] sm:pb-[10vw] bg-blue-400 sm:px-[10vw] py-[5vw] text-white">
        {/* <h1 className=" text-5xl text-white text-center sm:text-left sm:pb-5 ">
          OSKA
        </h1> */}
        <div className=" mix w-full h-fit sm:pb-5 flex items-center justify-center sm:justify-start">
          <div className=" sm:w-[14vw] sm:h-[5vw] w-[14vh] h-[5vh] flex items-center justify-center sm:ml-[-.5vw]">
            <img src="logo-cuore-white.png" alt="" />
          </div>
        </div>
        <div className=" flex sm:flex-row items-start flex-col mt-10 justify-between">
          <div className=" sm:w-[30%] text-center sm:text-left w-full">
            <p className=" text-2xl opacity-80 text-white">info@cuore.today</p>
          </div>

          <div className=" sm:w-[20%] w-full flex flex-col items-center mt-10 sm:mt-0">
            <p className=" text-xl font-semibold">About Cuore</p>
            <p className=" text-xl opacity-80 text-white mt-3">About us</p>
            <p className=" text-xl opacity-80 text-white mt-3">Contact us</p>
          </div>
          <div className=" sm:w-[20%] w-full flex flex-col items-center mt-10 sm:mt-0">
            <p className=" text-xl font-semibold">Legal</p>
            <p className=" text-xl opacity-80 text-white mt-3">Privacy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
