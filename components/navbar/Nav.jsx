import React from "react";
import Image from "next/image";
import { useState } from "react";
function Nav() {
  const [display, setDisplay] = useState("hidden");

  // useEffect(() => {
  //   const toBackBtn = document.querySelector("#back");
  //   window.addEventListener("scroll", function () {
  //     // console.log(window.scrollY);

  //     if (window.scrollY > 100) {
  //       toBackBtn.classList.remove("hidden");
  //       toBackBtn.classList.add("block");
  //     } else {
  //       toBackBtn.classList.remove("block");
  //       toBackBtn.classList.add("hidden");
  //     }
  //   });
  // }, []);

  return (
    <>
      {/* <div className="absolute">
        <Image
          src={"/backtotop.svg"}
          width={62}
          height={62}
          alt="logo"
          className="h-auto sm:w-[35px] 2xl:w-[45px] sm:right-3 md:right-7 lg:right-8 2xl:right-12  fixed bottom-6 cursor-pointer hidden"
          id="back"
        />
      </div> */}

      <div className={`${display} absolute z-20 overflow-hidden w-full h-full`}>
        <div className=" w-screen h-screen bg-black flex flex-col justify-center items-center text-white gap-y-8 wo font-medium text-[16px]">
          <a
            className=""
            href="https://drive.google.com/file/d/1l6LHxCSBLp5QZUS-A-waMm2y-I_xbzlY/view?usp=sharing"
            target="_blank"
          >
            <button className="btn-layout btn-bg-mb transition-all duration-500">
              Resume
            </button>
          </a>
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
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1O6XG3hh-qYuhiy0tYQotyI3Lyprv97LV/view?usp=drive_link"
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
