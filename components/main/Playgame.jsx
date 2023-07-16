import Image from "next/image";
import React from "react";

export default function Playgame() {
  const data = [
    {
      name: "Score board",
      des: "Player who earn score 20 first, will win the game",
      img: "/game1.png",
      dev1: "HTML",
      dev2: "CSS",
      dev3: "JS",
    },
    {
      name: "Guess the number",
      des: "Player have to guess the number under 20 chances",
      img: "/game2.png",
      dev1: "HTML",
      dev2: "CSS",
      dev3: "JS",
    },
  ];
  return (
    <>
      <div className="text-black mt-[106px] w-full flex justify-center items-center">
        <div className="sm:w-[289px] md:w-[684.633px] lg:w-[899px] xl:w-[1135px] 2xl:w-[1264px] ">
          <div className="flex justify-center items-center w-full">
            <Image
              src={"./play2xl.svg"}
              alt="svg"
              width={641}
              height={74}
              className="sm:hidden 2xl:block"
            />
            <Image
              src={"./playxl.svg"}
              alt="svg"
              width={599}
              height={74}
              className="sm:hidden xl:block 2xl:hidden"
            />
            <Image
              src={"./playlg.svg"}
              alt="svg"
              width={521}
              height={74}
              className="sm:hidden lg:block xl:hidden"
            />
            <Image
              src={"./playmd.svg"}
              alt="svg"
              width={451}
              height={74}
              className="sm:hidden md:block lg:hidden"
            />
            <Image
              src={"./playsm.svg"}
              alt="svg"
              width={278}
              height={74}
              className="sm:block md:hidden"
            />
          </div>

          <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 sm:gap-[45px] xl:gap-[60px] place-items-center sm:mt-[26px] md:mt-[120px] lg:mt-[168px]">
            {data.map((data) => {
              return (
                <div
                  key={data.name}
                  className="2xl:w-[518.096px] lg:w-[428.857px] md:w-[310px] sm:w-full"
                >
                  <Image
                    src={data.img}
                    width={518}
                    height={253}
                    className="h-auto w-full rounded-[5px]"
                  />
                  <hr className="w-full h-[2px] bg-black mt-[5px]" />

                  <div className="flex sm:flex-col  sm:gap-y-[20px] md:gap-y-0  md:flex-row justify-between sm:mt-[10px] md:mt-[38px]">
                    <div className="text-left">
                      <h3 className="ep font-semibold sm:text-[14px] lg:text-[20px] xl:text-[22px]">
                        {data.name}
                      </h3>
                      <p className="wo font-normal sm:mt-[5px] md:mt-[12px] sm:w-full md:w-[162px] lg:w-[249px] sm:text-[12px] lg:text-[14px] xl:text-[16px]">
                        {data.des}
                      </p>
                    </div>

                    <div className="flex flex-row  gap-x-[10px]">
                      <p className="ep font-semibold sm:text-[14px]  lg:text-[20px] xl:text-[22px]">
                        {data.dev1}
                      </p>
                      <div className="w-[8px] h-[8px] rounded-full bg-black sm:mt-[5px] md:mt-[6px] lg:mt-[10px] xl:mt-[11px]"></div>
                      <p className="ep font-semibold sm:text-[14px]  lg:text-[20px] xl:text-[22px]">
                        {data.dev2}
                      </p>
                      <div className="w-[8px] h-[8px] rounded-full bg-black sm:mt-[5px] md:mt-[6px] lg:mt-[10px] xl:mt-[11px]"></div>
                      <p className="ep font-semibold sm:text-[14px] lg:text-[20px] xl:text-[22px]">
                        {data.dev3}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
