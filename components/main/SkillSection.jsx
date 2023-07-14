import React from "react";
import Image from "next/image";

export default function SkillSection() {
  const data = [
    {
      name: "Front-end",
      skill: [
        "Html",
        "Css",
        "Tailwind",
        "Bootstrap",
        "Javascript",
        "React",
        "Nextjs",
      ],
    },
    {
      name: "Back-end",
      skill: ["Node.js", "Express", "Mongodb", "Firebase"],
    },
    {
      name: "Tools",
      skill: [
        "Vscode",
        "Git",
        "Github",
        "Photoshop",
        "Npm",
        "Pieces",
        "Webflow",
        "Yarn",
        "Figma",
      ],
    },
  ];

  return (
    <>
      <div className="w-full flex justify-center items-center mt-[106px] bg-[#FF5C00]">
        <div className="sm:w-[320px] md:w-[682px] lg:w-[903px] xl:w-[1142px] 2xl:w-[1250px] inline-flex flex-col sm:items-center md:items-start gap-y-[100px]">
          <section className="skill flex justify-center items-center mt-[121px]">
            <p className="ep text-[#D9D9D9] text-[26px] font-medium">Skill</p>
          </section>

          {data.map((data) => {
            return (
              <div key={data.name} className="w-full">
                <h1 className="w-full ep skill-title sm:text-center md:text-left sm:text-[38px] md:text-[48px] lg:text-[58px] xl:text-[64px] 2xl:text-[68px]">
                  {data.name}
                </h1>
                <hr className="w-full mt-[21px] bg-white" />

                <div className="overflow-hidden w-full flex flex-col sm:items-center md:items-end mt-[44px]">
                  <div className="grid sm:grid-cols-2 md:grid-cols-4  gap-x-[90px] gap-y-[25px] sm:text-[18px] md:text-[18px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px] text-left skill-text wo">
                    {data.skill.map((data) => (
                      <p key={data}>{data}</p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          <Image
            src={"./rec1.svg"}
            width={330}
            height={57.835}
            className="mb-[121.6px]"
          />
        </div>
      </div>
    </>
  );
}
