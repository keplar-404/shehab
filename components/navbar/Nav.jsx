import React from "react";
import Image from "next/image";
function Nav() {
  return (
    <>
      <div className="flex justify-center items-center w-full">
        <div className="mt-[10px] sm:w-[85vw] lg:w-[861px] xl:w-[1062px] flex py-[10px] px-[20px]  justify-between items-center rounded-[50px] bg-black text-white">
          <div>
            <p className="ep text-[18px] font-bold">SH.</p>
          </div>

          <div className="sm:hidden lg:flex flex-row justify-center items-center wo font-medium text-[16px] gap-x-[24px]">
            <a href="#">Home</a>
            <a href="#">Skill</a>
            <a href="#">About</a>
            <a href="#">Work</a>
            <button className="btn-layout btn-bg">Resume</button>
          </div>

          <Image
            src={"./hamber.svg"}
            width={35}
            height={12}
            className="sm:block lg:hidden cursor-pointer"
          />
        </div>
      </div>
    </>
  );
}

export default Nav;
