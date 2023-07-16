import React from "react";

export default function Footer() {
  const data = [
    "Facebook",
    "Github",
    "Showwcase",
    "Linkedin",
    "Meetup",
    "Bdjobs",
    "Instragram",
    "Twitter",
  ];
  return (
    <>
      <div className="w-full h-[106px] bg-[#E1E8EA]"></div>
      <div className="text-white w-full">
        <div className="pt-[106px] w-full flex flex-col justify-center gap-y-[72px] items-center">
          <h1 className="ep fe sm:text-[33px] md:text-[48px] lg:text-[58px] xl:text-[64px] 2xl:text-[68px] sm:text-center md:text-left">
            Shehub hossen
          </h1>

          <button className="footer-btn hover:translate-y-[-8px] transition-all duration-500 ap footer-text sm:w-[248px] sm:h-[72px]  md:w-[552px] md:h-[116px] sm:rounded-[14px] md:rounded-[24px] border-[1px] border-white sm:text-[16px] md:text-[28px]">
            Hire me
          </button>

          <hr className="w-full h-[1px] bg-white" />

          <div className="flex flex-row justify-center items-center w-full gap-[40px] flex-wrap sm:w-[289px] md:w-[684.633px] lg:w-[899px] xl:w-[1135px] 2xl:w-[1264px] overflow-hidden">
            {data.map((data) => (
              <a href="#" key={data} className="footer-a">
                {data}
              </a>
            ))}
          </div>

          <div className="w-full">
            <hr className="w-full h-[1px] bg-white" />
            <div className="w-full flex justify-center items-center sm:flex-col md:flex-row  sm:h-[350px] md:h-[200px]">
              <div className="flex flex-col justify-center items-center  sm:w-full md:w-1/2 md:h-full sm:border-r-0 md:border-r-[1px] sm:border-black md:border-white">
                <p className="wo text-[22px] font-normal text-center">
                  Shehubhosseen@gmail.com
                </p>
                <p className="wo text-[22px] font-normal text-center mt-[14px]">
                  0164-71-53-119
                </p>
              </div>
              <div className="sm:w-full md:w-1/2 flex justify-center items-center mt-[55px]">
                google map
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
