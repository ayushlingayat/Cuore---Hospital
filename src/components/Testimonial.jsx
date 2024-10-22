import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Testimonial = () => {
  const one = useRef()
  const two = useRef()
  const three = useRef()
  const four = useRef()
  const five = useRef()

  useGSAP(()=>{
    const tl = gsap.timeline({repeat: -1})

    tl.from(one.current, {
      opacity: 0,
      y: 50,
      duration: 1
    })
    tl.from(two.current, {
      opacity: 0,
      y: 50,
      duration: 1
    })
    tl.from(three.current, {
      opacity: 0,
      y: 50,
      duration: 1
    })
    tl.from(four.current, {
      opacity: 0,
      y: 50,
      duration: 1
    })
    tl.from(five.current, {
      opacity: 0,
      y: 50,
      duration: 1
    })

    tl.to(one.current,{
      duration: 5
    })
    tl.to(one.current,{
      opacity: 0
    })
    tl.to(two.current,{
      opacity: 0
    })
    tl.to(three.current,{
      opacity: 0
    })
    tl.to(four.current,{
      opacity: 0
    })
    tl.to(five.current,{
      opacity: 0
    })
    tl.to(one.current,{
      duration: 2
    })
  })
  return (
    <div className=" w-full sm:px-[15vw] py-16 px-[5vw]">
      <div className="flex sm:flex-row flex-col justify-between items-center w-full">
        <div className=" sm:w-1/2 w-full px-5 pb-10 sm:pb-0">
          <p className=" text-lg sm:text-2xl font-semibold">
            For Medical Professionals
          </p>
          <h1 className=" text-4xl font-[bolld] font-semibold mt-4">
            Cuore acts as an extension of your practice
          </h1>
          <p className=" mt-4 font-[regular] font-semibold ">
            Offering patients daily lifestyle modification plans, tracking their
            progress, and notifying you of any changes in their risk levels.
          </p>
          {/* <button className=" px-6 font-semibold py-3 bg-black rounded-full text-md sm:text-lg mt-6 w-fit text-white">
            For Professionals
            <i className=" font-normal ri-arrow-right-line"></i>
          </button> */}
        </div>
        <div className=" font-[bolld] font-semibold sm:w-[40%] w-full h-[50vh] sm:h-[60vh] text-xs p-5 flex flex-col justify-between rounded-2xl overflow-hidden bg-green-100">
          <div ref={one} className=" w-full sm:h-[4vw] h-[7vh] rounded-2xl bg-white shadow-2xl flex items-center p-3">
            <p>Assess risk for focused guidance</p>
          </div>
          <div ref={two} className=" w-full sm:h-[4vw] h-[7vh] rounded-2xl bg-white shadow-2xl items-center flex p-3">
            <p>Improve Nutrition & Fitness</p>
          </div>
          <div ref={three} className=" w-full sm:h-[4vw] h-[7vh] rounded-2xl bg-white shadow-2xl items-center flex p-3">
            <p>Improve sleep and reduce stress</p>
          </div>
          <div ref={four} className=" w-full sm:h-[4vw] h-[7vh] rounded-2xl bg-white shadow-2xl items-center flex p-3">
            <p>Improve medication adherence</p>
          </div>
          <div ref={five} className=" w-full sm:h-[4vw] h-[7vh] rounded-2xl bg-white shadow-2xl items-center flex p-3">
            <p>Increase awareness for early detection</p>
          </div>
        </div>
      </div>

      <div className=" px-10 py-10 w-full sm:w-[80%] h-fit sm:h-[fit] bg-zinc-100 mt-[5vw] relative mx-auto rounded-xl">
        <h1 className=" sm:text-3xl text-2xl font-semibold font-[bolld] text-center">
          Your everyday health companion.
        </h1>
        <h1 className=" sm:text-3xl text-2xl font-semibold font-[bolld] text-center mt-5">
          Just one click away
        </h1>
        <button className=" relative left-1/2 -translate-x-1/2 mt-10 px-5 py-3 font-semibold bg-black rounded-full text-white text-md sm:text-lg ">
          Learn more <i className="ri-arrow-right-line"></i>
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
