import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function framer() {
  const ref= useRef(null)
  const container = useRef(null)

  const { scrollYProgress } = useScroll({
    target:ref,
    offset: ["0 0", "1 0"]
    // it means target er top viewport er top e animation start and tartget er bottom view port er top e animation end hobe
  });
  const scale = useTransform(scrollYProgress, [0,1],["100vw", "0vw"])
  const scalex = useTransform(scrollYProgress, [0,1],["0vw", "100vw"])
  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log("Page scroll: ", latest)
  //   n = latest
  // })

  return (
    <>
    <div className="flex fixed top-0 left-0 right-0 z-[10]">
      <motion.div 
        style={{ width: scalex }}
        className="h-[50px]"
        ></motion.div>
      <motion.div 
        style={{ width: scale }}
        className="h-[50px]  bg-lime-400 "
        ></motion.div>
        </div>


      <div ref={ref} className="w-screen h-screen bg-black"></div>
      <div ref={container} className="w-screen h-screen bg-red-400 relative"></div>
      <div className="w-screen h-screen bg-black"></div>
















      <div className="overflow-hidden  w-screen h-screen bg-red-300 clip">
      
      {/* 
            <svg xmlns="http://www.w3.org/2000/svg" width="982" height="637" viewBox="0 0 982 637" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M982 0H0V637H982V0ZM491 447C561.692 447 619 389.692 619 319C619 248.308 561.692 191 491 191C420.308 191 363 248.308 363 319C363 389.692 420.308 447 491 447Z" fill="#D9D9D9"/>
      </svg>
      
      
      <svg xmlns="http://www.w3.org/2000/svg" width="982" height="637" viewBox="0 0 982 637" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M982 0H0V637H982V0ZM491 498C589.859 498 670 417.859 670 319C670 220.141 589.859 140 491 140C392.141 140 312 220.141 312 319C312 417.859 392.141 498 491 498Z" fill="#D9D9D9"/>
      </svg> */}
      
      
              {/* <div className="overflow-hidden relative w-screen h-screen flex justify-center items-center">
                  <div className="w-[100px] h-[100px] rounded-full"></div>
              </div> */}
            {/* <motion.div 
              style={{ width: scalex }}
              className="h-[50px]"
              ></motion.div>
            <motion.div 
              style={{ width: scale }}
              className="h-[50px]  bg-lime-400 "
              ></motion.div> */}
              </div>





    </>
  );
}
