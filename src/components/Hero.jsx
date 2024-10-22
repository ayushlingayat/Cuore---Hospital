import React, { useState } from "react";

const Hero = () => {
    const [open, setOpen] = useState(false)
  return (
    <div className=" overflow-x-hidden relative overflow-hidden h-fit pb-[25vh] sm:pb-5 w-full pt-7 px-[5vw] lg:px-[10vw] font-[bolld]">
      <nav className="relative h-fit  w-full flex justify-between items-center">
        {/* <h1 className="relative z-[999] text-3xl">OSKA</h1> */}
        <div className=" relative z-[999] sm:h-[4vw] sm:w-[10vw] h-[8vh] w-[12vh] flex items-center justify-center ">
          <img className=" h-full w-full object-contain scale-125" src="/Logoo-removebg-preview.png" alt="" />
        </div>

        <div className=" lg:flex items-center gap-10 text-[1.05vw] font-bold lg:visible hidden">
          {/* <p>Individuals</p>
          <p>Medical professionals</p>
          <p>How it works</p> */}
          <p>About us</p>
          <p>Contact us</p>
        </div>

        <div className=" sm:hidden block">
          <i onClick={()=>setOpen(true)} className="ri-menu-line text-xl"></i>
        </div>
      </nav>

      <div className={`h-fit rounded-2xl w-full absolute top-0 right-0 bg-zinc-100 shadow-2xl z-[899] flex flex-col gap-10 sm:hidden items-start px-5 py-10 text-xl transform ${open ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500`}>
        <div className=" w-full flex justify-end text-xl"><i onClick={()=>setOpen(false)} className="ri-close-line"></i></div>
        {/* <p>Individuals</p>
        <p>Medical professionals</p>
        <p>How it works</p> */}
        <p>About us</p>
        <p>Contact us</p>
      </div>

      <div className=" w-full h-[80vh] lg:h-[70vh] mt-[3vw] rounded-2xl flex lg:flex-row flex-col lg:overflow-hidden relative bg-red-300">
        <div className="lg:pl-[5vw] lg:pr-[6vw] pl-[3vw] pr-[3vw] py-[7.5vw] lg:h-full h-[100%] lg:w-[55%] lg:rounded-none rounded-2xl w-full bg-blue-400 flex justify-center items-center">
          <div className="h-full w-full ">
            <h1 className=" rounded-2xl text-white text-3xl lg:text-4xl font-bold">
              A healthier you: Personal support for long-lasting change
            </h1>
            <p className=" text-white mt-5">
              Sustainable health plans for the prevention & reversal of
              cardiometabolic diseases.
            </p>
            <div className="flex flex-col lg:flex-row gap-5 pt-5">
              <button className=" text-sm w-fit font-semibold px-7 lg:px-5 py-3 bg-white text-black rounded-full sm:text-lg">
                Start now <i className="ri-arrow-right-line"></i>
              </button>
              <button className=" text-sm w-fit font-semibold px-4 py-2 border-[4px] border-white text-white rounded-full sm:text-lg">
                Find out more
              </button>
            </div>
          </div>
        </div>
        <div className=" lg:h-full h-[50vh] lg:w-[45%] w-[70vw] lg:rounded-none rounded-2xl lg:overflow-visible bg-green-300 lg:relative absolute lg:top-0 top-[60vh] right-0">
          <img
            className="sm:rounded-none rounded-2xl h-full w-full object-cover"
            src="/hero2.jpg"
            alt=""
          />

          {/* <div className=" rounded-xl absolute top-1/2 left-[0%] lg:h-[21vw] h-[36vh] w-[17vh] lg:w-[10vw] -translate-x-1/2 -translate-y-1/2 ">
            <img
              className=" h-full w-full object-cover"
              src="https://www.oska-health.com/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Ffile%2Fassets%252F23300f312f264ce6a97ab86ef3552a46%252F9735e32cbe794a148c26d0c59c57769c&w=1920&q=75"
              alt=""
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
