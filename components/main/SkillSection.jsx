import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function SkillSection() {
  const data = [
    {
      name: "Languages",
      skill: ["Html", "Css", "Javascript", "Typescript", "Node.js"],
    },
    {
      name: "Related Technology",
      skill: [
        "Tailwind css",
        "Bootstrap",
        "Mongodb",
        "React",
        "Nextjs",
      ],
    },
    {
      name: "Tools",
      skill: [
        "Vscode",
        "Git",
        "Github",
        "Npm",
        "Yarn",
        "Figma",
        "Firebase",
        "Vercel",
      ],
    },
  ];

  const delayOfSkillTransiton = (index) => {
    const delay = 1 + index * 0.3;
    return delay;
  };

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 0.1 + i * 0.5;
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

  return (
    <>
      <div className="w-full flex justify-center items-center mt-[106px] bg-[#FF5C00]">
        <div className="sm:w-[320px] md:w-[682px] lg:w-[903px] xl:w-[1142px] 2xl:w-[1250px] inline-flex flex-col sm:items-center md:items-start gap-y-[100px]">
          <section className="skill flex justify-center items-center mt-[121px]">
            <p className="ep text-[#D9D9D9] text-[26px] font-medium">Skill</p>
          </section>

          {data.map((data) => {
            return (
              <div key={data.name} className="w-full mt-24">
                <h1
                  ref={ref}
                  className="w-full ep skill-title sm:text-center md:text-left sm:text-[38px] md:text-[48px] lg:text-[58px] xl:text-[64px] 2xl:text-[68px]"
                >
                  {data.name}
                </h1>
                <motion.hr
                  whileInView={{ width: "100%", transition: { duration: 1 } }}
                  viewport={{ once: true }}
                  initial={{ width: 0 }}
                  className="w-full mt-[21px] bg-white"
                />

                <div className="overflow-hidden w-full flex flex-col sm:items-center md:items-end mt-[44px]">
                  <div className="grid sm:grid-cols-2 md:grid-cols-4  gap-x-[90px] gap-y-[25px] sm:text-[18px] md:text-[18px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px] text-left skill-text wo">
                    {data.skill.map((data, index) => (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        viewport={{ once: true }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.5,
                            delay: delayOfSkillTransiton(index),
                          },
                        }}
                        key={data}
                      >
                        {data}
                      </motion.p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          <motion.svg
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : ""}
            className="mb-[121.6px] mt-[4rem]"
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
              stroke="white"
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
              stroke="white"
              strokeWidth="0.5"
            />
            <motion.rect
              variants={draw}
              custom={2.5}
              x="82.75"
              y="14.7087"
              width="82"
              height="13.9588"
              rx="2.75"
              stroke="white"
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
              stroke="white"
              strokeWidth="0.5"
            />
            <motion.rect
              variants={draw}
              custom={3.7}
              x="82.75"
              y="43.6263"
              width="82"
              height="13.9588"
              rx="2.75"
              stroke="white"
              strokeWidth="0.5"
            />
            <motion.rect
              variants={draw}
              custom={4.6}
              x="165.25"
              y="0.25"
              width="82"
              height="13.9588"
              rx="2.75"
              stroke="white"
              strokeWidth="0.5"
            />
            <motion.rect
              variants={draw}
              custom={5}
              x="165.25"
              y="14.7087"
              width="82"
              height="13.9588"
              rx="2.75"
              stroke="white"
              strokeWidth="0.5"
            />
            <motion.rect
              variants={draw}
              custom={1.5}
              x="165.25"
              y="29.1675"
              width="82"
              height="13.9588"
              rx="2.75"
              stroke="white"
              strokeWidth="0.5"
            />
            <motion.rect
              variants={draw}
              custom={2.5}
              x="247.75"
              y="0.25"
              width="82"
              height="13.9588"
              rx="2.75"
              stroke="white"
              strokeWidth="0.5"
            />
            <motion.rect
              variants={draw}
              custom={3}
              x="247.75"
              y="14.7087"
              width="82"
              height="13.9588"
              rx="2.75"
              stroke="white"
              strokeWidth="0.5"
            />
            <motion.rect
              variants={draw}
              custom={4}
              x="247.75"
              y="29.1675"
              width="82"
              height="13.9588"
              rx="2.75"
              stroke="white"
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
              stroke="white"
              strokeWidth="0.5"
            />
            <motion.rect
              variants={draw}
              custom={1}
              x="0.25"
              y="29.1675"
              width="82"
              height="13.9588"
              rx="2.75"
              stroke="white"
              strokeWidth="0.5"
            />
            <motion.rect
              variants={draw}
              custom={1.8}
              x="0.25"
              y="43.6263"
              width="82"
              height="13.9588"
              rx="2.75"
              stroke="white"
              strokeWidth="0.5"
            />
          </motion.svg>
        </div>
      </div>
    </>
  );
}
