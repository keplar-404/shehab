import React from "react";

export default function CSS() {
  return (
    <>
      <div className="w-full mt-[106px]">
        <div className="w-full justify-center items-center flex">
          <hr className="bg-black w-full h-[2px]" />
          <h1 className="bg-[#E1E8EA] ep absolute  fe sm:text-[33px] md:text-[48px] lg:text-[58px] xl:text-[64px] 2xl:text-[68px] sm:text-center md:text-left">
            <span className="gradient-text">CSS</span> is fun
          </h1>
        </div>

        <div className="sm:mt-[40px] md:mt-[63px] flex flex-col justify-center items-center">
          <hr className="bg-black sm:w-[184px] md:w-[429px] h-[2px]" />
          <hr className="bg-black w-[1px] sm:h-[150px] md:h-[270px] rotate-180" />
        </div>

        <div className="flex justify-center items-center w-full">
          <div className="sm:w-[289px] md:w-[684.633px] lg:w-[899px] xl:w-[1135px] 2xl:w-[1264px]">
            <div className="grid sm:grid-cols-1 md:grid-cols-4 place-items-center ">
              <div className="border-[1px] border-black">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Maiores, nam.
              </div>
              <div className="border-[1px] border-black">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Maiores, nam.
              </div>
              <div className="border-[1px] border-black">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Maiores, nam.
              </div>
              <div className="border-[1px] border-black">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Maiores, nam.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
