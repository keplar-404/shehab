import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CSS() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0 0"],
  });
  const hrWidth = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"])
  const hrWidth2Md = useTransform(scrollYProgress, [0, 0.8], ["0px", "490px"])
  const hrWidth2Sm = useTransform(scrollYProgress, [0, 0.8], ["0px", "184px"])
  const hrHeight3Sm = useTransform(scrollYProgress, [0, 0.8], ["0px", "150px"])
  return (
    <>
      <div ref={ref} className="w-full mt-[290px]">
        <div  className="w-full justify-center items-center flex">
          <motion.hr style={{ width: hrWidth }} className="bg-black h-[2px]" />
          <h1 className="bg-[#E1E8EA] ep absolute  fe sm:text-[33px] md:text-[48px] lg:text-[58px] xl:text-[64px] 2xl:text-[68px] sm:text-center md:text-left">
            <span className="gradient-text">CSS</span> is fun
          </h1>
        </div>

        <div className="sm:mt-[40px] md:mt-[63px] flex flex-col justify-center items-center">
          <motion.hr style={{ width: hrWidth2Md }} className="bg-black sm:hidden md:block h-[2px]" />
          <motion.hr style={{ width: hrWidth2Sm }} className="bg-black sm:block md:hidden h-[2px]" />
          <motion.hr style={{ height:hrHeight3Sm }} className="bg-black w-[1px] sm:block md:hidden rotate-180" />
          <hr className="bg-black h-[270px] w-[1px] sm:hidden md:block rotate-180" />
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
