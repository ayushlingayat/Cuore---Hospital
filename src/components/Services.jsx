import React from "react";

const Services = () => {
  const service = [
    {
      img: "/glucose.svg",
      name: "Diabetes",
    },
    {
      img: "/hyper-tension.png",
      name: "Hypertension",
    },
    {
      img: "/weight-scale.svg",
      name: "Obesity",
    },
    {
      img: "/cardio3.svg",
      name: "Cardiovascular disease",
    },
  ];
  return (
    <div className=" px-[5vw] py-16">
      <h1 className=" text-center text-3xl sm:text-4xl font-semibold font-[bolld]">
        Regardless of how your health has progressed,
        <br className=" sm:block hidden" /> from now on we are by your side!
      </h1>
      {/* <p className=" text-center mt-5 sm:text-xl text-lg">
        Do you have kidney disease and possibly one of the following conditions?
      </p> */}

      <div className=" flex sm:flex-row flex-col justify-center items-center gap-5 mt-10 sm:p-5">
        {service.map((item, index) => {
          return (
            <div
              key={index}
              className=" sm:h-[fit] h-[50vh] w-full sm:w-[fit] p-7 rounded-2xl flex flex-col justify-center items-center gap-5 bg-blue-100 "
            >
              <div className=" flex-shrink-0 sm:h-[8vw] h-[50%] w-[50%] ">
                <img className=" h-full w-full object-cover" src={item.img} alt="" />
              </div>
              <p className=" text-center text-xl font-[bolld] font-semibold">
                {item.name}
              </p>
              {/* <button className=" flex-shrink-0 px-3 py-2 h-fit bg-blue-900 rounded-full text-white text-md sm:text-md ">
                Learn more <i className="ri-arrow-right-line"></i>
              </button> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
