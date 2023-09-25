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
            I'm a self-taught Web Developer with a deep passion for creating exceptional user experiences. Specializing in Front-end development with the MERN stack, I excel at converting Figma designs into pixel-perfect, responsive websites, all while harnessing the power of React. My expertise extends to developing scalable REST APIs using Node.js, Express.js, and MongoDB, seamlessly connecting them with front-end single-page applications. I'm also very comfortable with the Next.js framework and possess a strong foundation in both client and server-side rendering. My commitment to continuous learning and hands-on experience sets me apart. I take pride in my ability to turn design concepts into seamless, efficient web applications.
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
