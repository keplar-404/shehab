import React from "react";
import Image from "next/image";
import { useState } from "react";
function Nav() {
  const [display, setDisplay] = useState("hidden");

  return (
    <>
      <div className={`${display} absolute z-20 overflow-hidden w-full h-full`}>
        <div className=" w-screen h-screen bg-black flex flex-col justify-center items-center text-white gap-y-8 wo font-medium text-[16px]">
<<<<<<< HEAD
          {/* <a
            href="https://drive.google.com/file/d/1l6LHxCSBLp5QZUS-A-waMm2y-I_xbzlY/view"
=======
          {/* for mobile */}
          <a
            className=""
            href="https://drive.google.com/file/d/1l6LHxCSBLp5QZUS-A-waMm2y-I_xbzlY/view?usp=sharing"
>>>>>>> f94ac85cf994c230fb8ebadd60b7a3bd23a22e42
            target="_blank"
          > */}
            <button className="btn-layout btn-bg-mb transition-all duration-500">
              Resume sdafs
            </button>
          {/* </a> */}
          <Image
            src={"./cross1.svg"}
            width={40}
            height={40}
            alt="logo"
            className="cursor-pointer"
            onClick={() => setDisplay("hidden")}
          />
        </div>
      </div>

      <div className="z-10 flex justify-center items-center w-full">
        <div className="mt-[10px] sm:w-[85vw] lg:w-[861px] xl:w-[1062px] flex py-[10px] px-[20px]  justify-between items-center rounded-[50px] bg-black text-white">
          <div>
            <p className="ep text-[18px] font-bold">SH.</p>
          </div>

          <div className="sm:hidden lg:flex flex-row justify-center items-center wo font-medium text-[16px] gap-x-[24px]">
            {/* for desktop */}
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1l6LHxCSBLp5QZUS-A-waMm2y-I_xbzlY/view?usp=sharing"
            >
              <button className="btn-layout btn-bg-lg  transition-all duration-500">
                Resume
              </button>
            </a>
          </div>

          <Image
            src={"./hamber.svg"}
            width={35}
            height={12}
            alt="logo"
            className="sm:block lg:hidden cursor-pointer"
            onClick={() => setDisplay("block")}
          />
        </div>
      </div>
    </>
  );
}

export default Nav;
