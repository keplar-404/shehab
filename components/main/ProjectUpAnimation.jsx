import { useRef } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

export default function ProjectUpAnimation() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 0", "1 1"],
        // it means target er top viewport er top e animation start and tartget er bottom view port er top e animation end hobe
      });
      const percentDiv = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);
      const titleDivMargin = useTransform(
        scrollYProgress,
        [0, 0.5, 0.7],
        ["-45.6rem", "-45.6rem", "0rem"]
      );
      const titleOpacity = useTransform(
        scrollYProgress,
        [0, 0.5, 0.7],
        ["100%", "100%", "0%"]
      );
    
      const titleTranslate = useTransform(
        scrollYProgress,
        [0, 0.5, 0.7, 0.9],
        ["0%", "0%", "0%", "-52%"])
    
    
    
    
      const style = useMotionTemplate`radial-gradient(circle, transparent ${percentDiv}, #E1E8EA 0%)`;
    
      useMotionValueEvent(titleOpacity, "change", (latest) => {
        console.log(latest);
      });
  return (
   <>
    <div ref={ref} className="text-white mt-[106px] bg-black relative w-full h-[600vh]">
          <motion.div
            className="sticky top-0  w-full h-screen z-[20]"
            style={{ background: style }}
            backgroundSize={percentDiv}
            backgroundPosition={percentDiv}
          ></motion.div>

          <motion.div
            className="sticky mt-[-45.6rem] top-0 w-full h-screen z-[19] flex justify-center items-center"
            style={{ marginTop: titleDivMargin }}
          >
            <motion.h1 className=" text-center ep fe sm:text-[33px] md:text-[48px] lg:text-[58px] xl:text-[64px] 2xl:text-[68px] text-white overflow-hidden" style={{ marginLeft:titleTranslate }}>
              <motion.span className="opacity-[100%]" style={{ opacity: titleOpacity }}>
                Check out some <br /> of my
              </motion.span>{" "}
              Featured projects <motion.span style={{ opacity: titleOpacity }}>👇</motion.span>
            </motion.h1>
          </motion.div>
        </div>
   
   </>
  )
}
