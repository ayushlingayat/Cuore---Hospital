import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useEffect } from "react";

const Info = () => {
  const card1 = useRef();
  const card2 = useRef();
  const fe1 = useRef();
  const fe2 = useRef();
  const fe3 = useRef();
  const lb = useRef();
  const lb1 = useRef();
  const lb2 = useRef();
  const lb3 = useRef();
  const lb4 = useRef();

  const loaderPath = useRef(); // Ref for the path inside the SVG

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1 });
    const tl2 = gsap.timeline({ repeat: -1 });
    const tl3 = gsap.timeline({ repeat: -1 });

    const btl = gsap.timeline({ repeat: -1 });
    const path = loaderPath.current;
    const pathLength = path.getTotalLength();

    tl.to(card1.current, {
      duration: 1,
      delay: 1,
      bottom: 0,
      ease: "Power2.easeInOut",
    });
    tl.to(card2.current, {
      top: 5,
      opacity: 1,
      duration: 1,
      ease: "Power2.easeInOut",
    });
    tl.to(card2.current, {
      top: 10,
      opacity: 0,
      duration: 1,
      ease: "Power2.easeInOut",
      delay: 5,
    });
    tl.to(card1.current, {
      bottom: -50,
      opacity: 0,
      duration: 1,
      ease: "Power2.easeInOut",
    });

    tl2.to(fe1.current, {
      x: 60,
      opacity: 1,
      duration: 1,
      ease: "Power2.easeInOut",
    });
    tl2.to(fe2.current, {
      x: 80,
      opacity: 1,
      duration: 1,
      ease: "Power2.easeInOut",
    });
    tl2.to(fe3.current, {
      x: 100,
      opacity: 1,
      duration: 1,
      ease: "Power2.easeInOut",
    });
    tl2.to(fe1.current, {
      opacity: 0,
      duration: 1,
      delay: 4,
      ease: "Power2.easeInOut",
    });
    tl2.to(fe2.current, {
      opacity: 0,
      duration: 1,
      ease: "Power2.easeInOut",
    });
    tl2.to(fe3.current, {
      opacity: 0,
      duration: 1,
      ease: "Power2.easeInOut",
    });

    tl3.to(
      lb.current,
      {
        top: "30%",
        duration: 1,
      },
      "anim"
    );
    tl3.to(
      lb1.current,
      {
        opacity: 1,
        duration: 1,
      },
      "anim"
    );
    tl3.to(
      lb.current,
      {
        top: "20%",
        duration: 1,
      },
      "anim1"
    );
    tl3.to(
      lb2.current,
      {
        opacity: 1,
        duration: 1,
      },
      "anim1"
    );
    tl3.to(
      lb.current,
      {
        top: "10%",
        duration: 1,
      },
      "anim2"
    );
    tl3.to(
      lb3.current,
      {
        opacity: 1,
        duration: 1,
      },
      "anim2"
    );
    tl3.to(
      lb.current,
      {
        top: "0%",
        duration: 1,
      },
      "anim3"
    );
    tl3.to(
      lb4.current,
      {
        opacity: 1,
        duration: 1,
      },
      "anim3"
    );
    tl3.to(
      lb.current,
      {
        opacity: 0,
        duration: 0.5,
        delay: 2,
      },
      "b"
    );

    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: 430,
    });

    btl.to(path, {
      strokeDashoffset: 0,
      duration: 6,
    });
    btl.to(
      path,
      {
        opacity: 0,
      },
      "b"
    );
  });

  return (
    <div className=" w-full sm:py-10 font-[bolld] font-semibold px-5 pt-20">
      <h1 className=" text-black text-xl sm:text-4xl text-center sm:block hidden">
        Cuore adapts to your life - You
        <br />
        decide when and how you use it.
      </h1>
      <h1 className=" pb-10 text-3xl text-black block sm:hidden text-center">
        Cuore adapts to your life - You decide when and how you use it.
      </h1>

      <div className=" sm:px-[10vw] py-[5vw] ">
        <div className=" flex flex-col sm:flex-row justify-between items-start">
          <div className="  sm:h-[30vw] h-[30vh] w-[30vh] sm:w-[30vw] overflow-hidden  sm:ml-0 flex items-end relative">
            <div className=" sm:h-[15vw] h-[15vh] w-[25vh] sm:w-[20vw] rounded-2xl bg-red-100 relative flex justify-center">
              <div
                ref={card1}
                className=" sm:h-[25vw] h-[29vh] w-[20vh] sm:w-[17vw] rounded-xl bg-blue-300 absolute bottom-[-200%]"
              ></div>
            </div>

            <div
              ref={card2}
              className=" opacity-0 sm:h-[12vw] h-[12vh] w-[10vh] sm:w-[10vw] bg-red-500 rounded-2xl absolute top-[10%] right-[10%] sm:right-[30%]"
            ></div>
          </div>

          <div className=" w-full sm:w-[40%] mt-10 sm:mt-0">
            <h1 className=" text-3xl">Comprehensive health plan</h1>
            <p className=" font-[regular] mt-5">
              Cuore identifies your health risks, and provides you with comprehensive and personalized guidance to minimise those risks.
            </p>
          </div>
        </div>

        <div className=" flex flex-col-reverse sm:flex-row justify-between items-start pt-14">
          <div className=" w-full sm:w-[40%] mt-10 sm:mt-0">
            <h1 className=" text-3xl">Blends into your daily schedule</h1>
            <p className=" mt-5 font-[regular]">
              From better blood pressure & diabetes control, to improved
              medication intake, nutrition and much more. We help you reverse
              your condition without cutting out your favourite food
            </p>
          </div>

          <div className=" flex-shrink-0 sm:h-[25vw] h-[30vh] w-[25vh] rounded-2xl sm:w-[20vw] bg-red-100 relative">
            {/* <a className=" inline-block" href="http://www.ncbi.nlm.nih.gov"> */}
              <div
                ref={fe1}
                className=" flex px-3 items-center justify-center opacity-0 sm:h-[6vw] h-[6vh] w-[95%] rounded-2xl bg-zinc-50 shadow-xl absolute top-[10%] left-[40%] -translate-x-1/2"
              >
                <h1 className=" text-xs sm:whitespace-nowrap ">
                  Reduce Blood Pressure by ~14 mmHG 
                </h1>
              </div>
            {/* </a> */}
            {/* <a className=" inline-block" href="http://www.ncbi.nlm.nih.gov"> */}
              <div
                ref={fe2}
                className="flex px-3 items-center justify-center opacity-0 sm:h-[6vw] h-[6vh] w-[95%] rounded-2xl bg-zinc-50 shadow-xl absolute top-[40%] left-[40%] -translate-x-1/2"
              >
                <h1 className=" text-xs sm:whitespace-nowrap ">
                  Reduce Blood Sugar by ~30 mg/dl 
                </h1>
              </div>
            {/* </a> */}

            {/* <a className=" inline-block" href="http://heart.arizona.edu"> */}
              <div
                ref={fe3}
                className="flex px-3 items-center justify-center opacity-0 sm:h-[6vw] h-[6vh] w-[95%] rounded-2xl bg-zinc-50 shadow-xl absolute top-[70%] left-[40%] -translate-x-1/2"
              >
                <h1 className=" text-xs sm:whitespace-nowrap">
                  Reduce cardiac risk by ~50% 
                </h1>
              </div>
            {/* </a> */}
          </div>
        </div>

        <div className=" flex flex-col sm:flex-row justify-between items-start pt-14">
          <div className=" sm:w-1/2">
            <div className=" relative sm:h-[25vw] h-[30vh] w-[25vh] sm:w-[25vw] rounded-2xl flex justify-center items-center bg-green-100 ">
              <svg height="100%" width="80%" viewBox="0 0 200 200">
                <path
                  ref={loaderPath}
                  d="M 100,50 a 70,70 0 1,0 0,140 a 70,70 0 1,0 0,-140"
                  stroke="#75ae8f"
                  strokeWidth="10"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>

              <div className=" -translate-x-1/2 -translate-y-1/2 sm:h-[10vw] h-[10vh] w-[10vh] sm:w-[10vw] rounded-full bg-white absolute top-[58%] left-1/2"></div>

              <div
                ref={lb}
                className=" w-[15vh] sm:w-[12vw] top-[50%] absolute left-[110%] flex flex-col justify-center gap-5 -translate-x-1/2 h-full bottom-0"
              >
                <div
                  ref={lb1}
                  className="shadow-xl flex justify-start items-center px-3 opacity-0  w-full h-[5vh] sm:h-[3.5vw] bg-white rounded-2xl"
                >
                  <p className=" text-xs ">Nutrition</p>
                </div>
                <div
                  ref={lb2}
                  className="shadow-xl flex justify-start items-center px-3 opacity-0 w-full h-[5vh] sm:h-[3.5vw] bg-white rounded-2xl"
                >
                  <p className=" text-xs ">Fitness</p>
                </div>
                <div
                  ref={lb3}
                  className="shadow-xl flex justify-start items-center px-3 opacity-0  w-full h-[5vh] sm:h-[3.5vw] bg-white rounded-2xl"
                >
                  <p className=" text-xs ">Stress Reduction</p>
                </div>
                <div
                  ref={lb4}
                  className="shadow-xl flex justify-start items-center px-3 opacity-0  w-full h-[5vh] sm:h-[3.5vw] bg-white rounded-2xl"
                >
                  <p className=" text-xs ">Sleep</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className=" text-3xl mt-10 sm:mt-0">Results you hold on to</h1>
            <p className=" pt-5 font-[regular]">
              Experience how even small changes can make a difference.
            </p>
            <button className=" bg-black text-white font-medium px-4 py-3 rounded-full mt-5">
              Find out more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
