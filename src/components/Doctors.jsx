import React from "react";

const Doctors = () => {
  const doctor = [
    {
      name: "Prof. Dr. med. Klemens ",
      domain: "Nephrologist",
    },
    {
      name: "Prof. Dr. med. Jürgen ",
      domain: "Nephrologist",
    },
    {
      name: "Prof. Dr. med. Christoph ",
      domain: "Nephrologist",
    },
  ];
  return (
    <div className=" px-[5vw] py-16">
      <h1 className=" sm:text-4xl text-3xl font-[bolld] font-semibold text-center">
        Cuore was developed in collaboration <br className="sm:block hidden" />{" "}
        with leading medical experts
      </h1>

      <div className=" flex sm:flex-row flex-col justify-center gap-5 mt-10">
        {doctor.map((item, index) => {
          return (
            <div
              key={index}
              className=" p-7 sm:h-[25vw] w-full h-[50vh] sm:w-[22vw] rounded-2xl bg-zinc-100 flex justify-center items-center"
            >
              <div>
                <h1 className=" text-center text-2xl font-semibold font-[bolld]">
                  {item.name}
                </h1>
                <p className="mt-3 text-center text-xl font-medium">
                  {item.domain}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Doctors;
