import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const animationVariant = {
    initial: {
      opacity: 0,
      y: 64,
      x: 64,
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mailSend = () => {
    const emailAddress = "shehabhossen76.services@gmail.com"; // Replace with your email address
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      // If the user is on a mobile device, open the Gmail app
      window.location.href = `mailto:${emailAddress}`;
    } else {
      // If the user is on a desktop, open the default email client in a new tab
      window.open(`mailto:${emailAddress}`);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center w-full">
        <div className="relative w-full sm:px-[20px] sm:mt-[70px] md:mt-[115px] lg:mt-[150px] xl:mt-[160px]  sm:h-[14rem] md:h-[25rem] flex justify-center items-center">
          <div className="sm:hidden lg:block">
            <motion.div
              variants={animationVariant}
              initial="initial"
              animate="animate"
            >
              <Image
                src={"./heroSection/svg/front-end.svg"}
                width={225}
                height={60}
                alt="img"
                className="lg:w-[179px] lg:h-[73px] xl:w-[227px] xl:h-[93px]"
              />
            </motion.div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              className="mt-[-28px] ml-[205px] lg:w-[23px] lg:h-[23px] xl:w-[26px] xl:h-[26px] "
            >
              <circle cx="13" cy="13" r="12.5" fill="#D9E5E9" stroke="black" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              className="mt-[33px] ml-[93px] lg:w-[26px] lg:h-[26px] xl:w-[30px] xl:h-[30px] "
            >
              <circle cx="15" cy="15" r="14.5" fill="white" stroke="black" />
            </svg>
            <motion.div
              variants={animationVariant}
              initial="initial"
              animate="animate"
              transition="transition"
            >
              <Image
                src={"./heroSection/svg/back-end.svg"}
                width={202.81}
                height={66.355}
                alt="image"
                className="mt-[38px] ml-[60px] lg:w-[168px] lg:h-[91px] xl:w-[198px] xl:h-[108px]"
              />
            </motion.div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              className="ml-[95px] mt-[-10px] lg:w-[28px] lg:h-[29px] xl:w-[33px] xl:h-[33px] "
            >
              <circle
                cx="16.5"
                cy="16.5"
                r="16"
                fill="#FED0AB"
                stroke="black"
              />
            </svg>
          </div>

          <div className=" inline-flex flex-col items-center sm:gap-y-[30px]  md:gap-y-[60px]">
            <motion.div
              className="flex flex-col items-center sm:gap-y-[5px] md:gap-[15px] lg:gap-[25px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <p className="text-black text-center ep sm:text-[32px] md:text-[48px] lg:text-[56px] xl:text-[64px] 2xl:text-[68px] font-[700] sm:leading-[47px] md:leading-[69px]  lg:leading-[83px] tracking-[-0.884px]">
                Shehab Hossen<span className="wave">👋</span> <br /> Web{" "}
                <span className="gradient-text">developer</span>
              </p>

              <p className="text-black text-center wo sm:text-[12px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-[400] sm:leading-[21px] md:leading-[33px] lg:leading-[33px] tracking-[-0.11px]">
                I'm a full-stack developer expertise in front-end development{" "}
                <br />
                based on Bangladesh.
              </p>
            </motion.div>

            <button className="group transition-all duration-500 w-[242px] h-[55px] inline-flex justify-center items-center btn-bg">
              <p
                onClick={mailSend}
                className="text-white text-center wo sm:text-[14px] text-[18px] font-[600] "
              >
                Say hello
              </p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="15"
                viewBox="0 0 28 15"
                fill="none"
                className="ml-[11px] transition-all duration-500 group-hover:ml-[18px]"
              >
                <path
                  d="M27.7071 8.20711C28.0976 7.81658 28.0976 7.18342 27.7071 6.7929L21.3431 0.428934C20.9526 0.0384096 20.3195 0.0384096 19.9289 0.428934C19.5384 0.819458 19.5384 1.45262 19.9289 1.84315L25.5858 7.5L19.9289 13.1569C19.5384 13.5474 19.5384 14.1805 19.9289 14.5711C20.3195 14.9616 20.9526 14.9616 21.3431 14.5711L27.7071 8.20711ZM-8.74228e-08 8.5L27 8.5L27 6.5L8.74228e-08 6.5L-8.74228e-08 8.5Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>

          <motion.div
            initial={{ opacity: [0, 0], y: 80 }}
            animate={{ opacity: [0, 1], y: 0 }}
            transition={{ duration: 1 }}
            className="sm:hidden lg:block lg:ml-[37px] xl:ml-[57px]"
          >
            <Image
              src={"./heroSection/svg/line.svg"}
              width={232}
              height={355}
              alt="image"
              className="xl:mt-[-180px] xl:w-[169.282px] xl:h-[256.66px] lg:w-[107px] lg:h-[162px]"
            />
          </motion.div>
          <Image
            src={"./heroSection/svg/design.svg"}
            width={148}
            height={70}
            alt="image"
            className="absolute ml-[680px] mt-[250px] xl:w-[144px] xl:h-[62px] lg:w-[133px] lg:h-[41px] sm:hidden lg:block"
          />
        </div>
      </div>

      <div className=" mt-[92px] flex justify-center items-center">
        <div className="sm:w-[289px] md:w-[684.633px] lg:w-[899px] xl:w-[1135px] 2xl:w-[1264px] flex flex-col sm:items-center md:items-end">
          <motion.svg
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : ""}
            className="mt-[-50px]"
            width="330"
            height="58"
            viewBox="0 0 330 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.rect
              variants={draw}
              custom={1}
              x="0.25"
              y="0.25"
              width="82"
              height="13.9588"
              rx="2.75"
              stroke="black"
              strokeWidth="0.5"
            />
            <motion.rect
              variants={draw}
              custom={2}
              x="82.75"
              y="0.25"
              width="82"
              height="13.9588"
              rx="2.75"
              stroke="black"
              strokeWidth="0.5"
            />
            <motion.rect
              variants={draw}
              custom={2.5}
              x="82.75"
              y="14.7088"
              width="82"
              height="13.9588"
              rx="2.75"
              stroke="black"
              strokeWidth="0.5"
            />
            <motion.rect
              variants={draw}
              custom={3}
              x="82.75"
              y="29.1675"
              width="82"
              height="13.9588"
              rx="2.75"
              stroke="black"
              strokeWidth="0.5"
            />
            <motion.rect
              variants={draw}
              custom={3.5}
              x="82.75"
              y="43.6263"
              width="82"
              height="13.9588"
              rx="2.75"
              stroke="black"
              strokeWidth="0.5"
            />
            <motion.rect
              variants={draw}
              custom={4}
              x="165.25"
              y="0.25"
              width="82"
              height="13.9588"
              rx="2.75"
              stroke="black"
              strokeWidth="0.5"
            />
            <motion.rect
              variants={draw}
              custom={4.5}
              x="165.25"
              y="14.7088"
              width="82"
              height="13.9588"
              rx="2.75"
              stroke="black"
              strokeWidth="0.5"
            />
            <motion.rect
              variants={draw}
              custom={2}
              x="165.25"
              y="29.1675"
              width="82"
              height="13.9588"
              rx="2.75"
              stroke="black"
              strokeWidth="0.5"
            />
            <motion.rect
              variants={draw}
              custom={3}
              x="247.75"
              y="0.25"
              width="82"
              height="13.9588"
              rx="2.75"
              stroke="black"
              strokeWidth="0.5"
            />
            <motion.rect
              variants={draw}
              custom={5}
              x="247.75"
              y="14.7088"
              width="82"
              height="13.9588"
              rx="2.75"
              stroke="black"
              strokeWidth="0.5"
            />
            <motion.rect
              variants={draw}
              custom={2.5}
              x="247.75"
              y="29.1675"
              width="82"
              height="13.9588"
              rx="2.75"
              stroke="black"
              strokeWidth="0.5"
            />
            <motion.rect
              variants={draw}
              custom={3.5}
              x="247.75"
              y="43.6263"
              width="82"
              height="13.9588"
              rx="2.75"
              stroke="black"
              strokeWidth="0.5"
            />
            <motion.rect
              variants={draw}
              custom={5}
              x="0.25"
              y="29.1675"
              width="82"
              height="13.9588"
              rx="2.75"
              stroke="black"
              strokeWidth="0.5"
            />
            <motion.rect
              variants={draw}
              custom={3}
              x="0.25"
              y="43.6263"
              width="82"
              height="13.9588"
              rx="2.75"
              stroke="black"
              strokeWidth="0.5"
            />
          </motion.svg>
        </div>
      </div>
    </>
  );
}
