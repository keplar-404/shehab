import Image from "next/image";
import { motion, useInView } from "framer-motion";

export default function Project() {
  const projectData = [
    {
      id: 1,
      name: "SkillSpring",
      description:
        "Landing page of an e-learning platform. A web application where the learning process becomes effortless with the aid of an AI platform.",
      dev1: "Design",
      dev2: "Development",
      img: "/skillspring.png",
      blurImg: "/skillspring1.png",
    },
    {
      id: 2,
      name: "Bureau",
      description:
        "A website dedicated to firefighting form submissions, which incorporates third-party API integration for streamlined form submission by users.",
      dev1: "Design",
      dev2: "Development",
      img: "/bureau.png",
      blurImg: "/bureau1.png",
    },
  ];

  const animationVariant = {
    initial: {
      width: "100%",
    },
    animate: {
      width: "0%",
      transition: { duration: 1 },
    },
    viewport: {
      once: true,
    },
  };

  return (
    <>
      <div className="w-full h-[100vh] bg-black"></div>
      <div className="translate-y-[-54.5%] w-full relative text-white bg-black">
        <div className="mt=[14rem]  w-full flex justify-center items-center py-[126px] ">
          <div className="flex flex-col sm:gap-y-[75px] md:gap-y-[141px] sm:w-[289px] md:w-[684.633px] lg:w-[899px] xl:w-[1135px] 2xl:w-[1264px]">
            <h1 className="ep fe sm:text-[33px] md:text-[48px] lg:text-[58px] xl:text-[64px] 2xl:text-[68px] sm:text-center md:text-left text-[#E1E8EA] opacity-0">
              Featured projects
            </h1>

            {projectData.map((data) => {
              return (
                <div
                  key={data.id}
                  className="w-full flex flex-col gap-y-[54px]"
                >
                  <div className="w-full bg-[#D9D9D9] rounded-[5px] flex justify-center items-baseline">
                    <Image
                      src={data.img}
                      width={896}
                      height={615}
                      placeholder="blur"
                      // quality={100}
                      blurDataURL={data.blurImg}
                      className="mt-[56px] h-auto sm:w-[234px] md:w-[586.393px] lg:w-[770px] xl:w-[896px] "
                    />
                  </div>
                  <div className="flex sm:flex-col  sm:gap-y-[29px] md:gap-y-0  md:flex-row justify-between">
                    <div className="text-left">
                      <div className="w-fit h-fit relative">
                        <motion.div
                          initial={animationVariant.initial}
                          whileInView={animationVariant.animate}
                          className="w-full h-full absolute bg-white"
                        ></motion.div>
                        <h3 className="w-fit h-fit ep font-semibold sm:text-[20px] lg:text-[22px] xl:text-[26px]">
                          {data.name}
                        </h3>
                      </div>
                      <div className="w-fit h-fit relative">
                        <motion.div
                          initial={animationVariant.initial}
                          whileInView={animationVariant.animate}
                          className="w-full h-full absolute bg-white"
                        ></motion.div>
                        <p className="wo font-normal mt-[12px] sm:w-full md:w-[353px] lg:w-[461px] sm:text-[16px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
                          {data.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-row  gap-x-[15px]">
                      <div className="w-fit h-fit relative">
                        <motion.div
                          initial={animationVariant.initial}
                          whileInView={animationVariant.animate}
                          className="w-full h-full absolute bg-white"
                        ></motion.div>
                        <p className="ep font-semibold sm:text-[20px] lg:text-[22px] xl:text-[26px]">
                          {data.dev1}
                        </p>
                      </div>
                      <div className="w-[10px] h-[10px] rounded-full bg-white sm:mt-[9px] lg:mt-[12px] xl:mt-[15px]"></div>
                      <div className="w-fit h-fit relative">
                        <motion.div
                          initial={animationVariant.initial}
                          whileInView={animationVariant.animate}
                          className="w-full h-full absolute bg-white"
                        ></motion.div>

                        <p className="ep font-semibold sm:text-[20px] lg:text-[22px] xl:text-[26px]">
                          {data.dev2}
                        </p>
                      </div>
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
