import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const animationVariant = {
    initial: {
      opacity: 0,
      y: 40,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <>
      <div className="overflow-hidden w-full flex justify-center items-center mt-[106px] ">
        <div className="w-[1288px] flex flex-col justify-center items-center">
          <motion.div
            variants={animationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="w-full sm:hidden xl:block "
          >
            <Image
              src={"./about.svg"}
              width={286.004}
              height={309.31}
              alt="img"
              className="xl:ml-[84px] 2xl:ml-0"
            />
          </motion.div>

          <div className="bg-[#C8BEFF] sm:mt-0 xl:mt-[-72px] rounded-[5px] px-[55px]  py-[133px] flex justify-center items-center flex-col gap-y-[39px]">
            <h1 className="ep ab-title sm:text-[38px] md:text-[48px] lg:text-[58px] xl:text-[64px] 2xl:text-[68px]">
              About me
            </h1>
            <p className="wo ab-text  sm:w-[76vw] xl:w-[780px] 2xl:w-[940px]   sm:text-[12px] lg:text-[16px] xl:text-[18px]">
           Hi there! I'm a web developer who loves turning code into cool online stuff. I started with basic HTML, then added style with CSS, and made things interactive using JavaScript—like magic! I enjoy solving problems and coming up with new ideas. When I'm not coding, I'm into sci-fi and trying out new recipes. Excited to collaborate and make the web a fun place for everyone!
            </p>
          </div>

          <motion.div
            variants={animationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="w-full sm:hidden xl:flex  justify-end"
          >
            <Image
              src={"./about.svg"}
              width={286.004}
              height={309.31}
              alt="img"
              className="sm:mt-0 xl:mt-[-66px] rotate-180"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
