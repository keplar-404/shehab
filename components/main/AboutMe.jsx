import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <>
      <div className="overflow-hidden w-full flex justify-center items-center mt-[106px] ">
        <div className="w-[1288px] flex flex-col justify-center items-center">
          <div className="w-full sm:hidden xl:block ">
            <Image
              src={"./about.svg"}
              width={286.004}
              height={309.31}
              className="xl:ml-[84px] 2xl:ml-0"
            />
          </div>

          <div className="bg-[#C8BEFF] sm:mt-0 xl:mt-[-72px] rounded-[5px] px-[55px]  py-[133px] flex justify-center items-center flex-col gap-y-[39px]">
            <h1 className="ep ab-title sm:text-[38px] md:text-[48px] lg:text-[58px] xl:text-[64px] 2xl:text-[68px]">
              About me
            </h1>
            <p className="wo ab-text sm:w-[76vw] xl:w-[780px] 2xl:w-[940px]   sm:text-[12px] lg:text-[16px] xl:text-[18px]">
              I am a self-taught passionate Web Application Developer
              especiaiized in Front-end development with MERN stack .As a web
              developer I can convert a figma design to a pixel perfect
              responsive website and can convert it in reactjs. I can develop
              salable REST API using Node.js FxpressjS &MongoDB and connect with
              them front end sing!e page applications. l am very comfortable
              with Next.js framework and have sound knowledge in botn client and
              server side rendering.
            </p>
          </div>

          <div className="w-full sm:hidden xl:flex  justify-end">
            <Image
              src={"./about.svg"}
              width={286.004}
              height={309.31}
              className="sm:mt-0 xl:mt-[-66px] rotate-180"
            />
          </div>
        </div>
      </div>
    </>
  );
}
