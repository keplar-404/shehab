import Image from "next/image";
import { motion } from "framer-motion";

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
      blurImg: "/skillspring1.png"
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
      <div className="xl:translate-y-[-76vw] sm:translate-y-[-1150px] lg:translate-y-[-1180px]  w-full relative text-white bg-black">
        <div className=" w-full flex justify-center items-center py-[126px] ">
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
                      alt="img"
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
                      <div className="flex flex-row gap-x-[20px] mt-[35px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="42"
                          height="42"
                          viewBox="0 0 42 42"
                          fill="none"
                          className="cursor-pointer sm:w-[24px] lg:w-[30px] h-auto"
                        >
                          <path
                            d="M30.8684 0C29.9211 0.0526316 28.9737 0.157895 28.0789 0.473684C26.6579 1 25.2895 1.78947 24.1316 2.94737C23.7984 3.15856 23.517 3.44195 23.3081 3.77658C23.0993 4.1112 22.9683 4.4885 22.9249 4.88056C22.8815 5.27263 22.9269 5.66943 23.0575 6.04162C23.1882 6.41382 23.4008 6.75188 23.6797 7.0308C23.9587 7.30973 24.2967 7.52238 24.6689 7.65303C25.0411 7.78368 25.4379 7.82899 25.83 7.78561C26.222 7.74222 26.5993 7.61126 26.934 7.40239C27.2686 7.19353 27.552 6.91211 27.7632 6.57895C28.3421 6 29.0263 5.68421 29.7632 5.42106C31.6053 4.78948 33.8684 5.05263 35.3421 6.57895C37.3947 8.63158 37.3947 12.0526 35.3421 14.1579L27.4474 22.0526C25.1316 24.3684 23.2368 24.579 21.8684 24.5263C20.5 24.4737 19.7105 23.8421 19.7105 23.8421C19.4064 23.6693 19.0712 23.5581 18.7242 23.5149C18.3771 23.4716 18.0249 23.4971 17.6876 23.59C17.3504 23.6829 17.0348 23.8412 16.7588 24.0561C16.4827 24.2709 16.2517 24.538 16.0789 24.8421C15.9062 25.1462 15.795 25.4814 15.7517 25.8285C15.7084 26.1756 15.734 26.5278 15.8268 26.865C15.9197 27.2022 16.0781 27.5179 16.2929 27.7939C16.5077 28.0699 16.7748 28.3009 17.0789 28.4737C17.0789 28.4737 18.8684 29.6316 21.5 29.7895C24.1316 29.9474 27.8158 28.9474 31.0263 25.6842L38.9211 17.7895C43.0263 13.6842 43.0263 7.05264 38.9211 3C37.4474 1.52632 35.7105 0.631579 33.8158 0.210526C32.8684 0 31.8158 0 30.8684 0.0526316V0ZM20.3421 12.1579C17.7105 12.0526 14.0789 12.9474 10.9737 16.1053L3.07895 24C-1.02632 28.1053 -1.02632 34.7369 3.07895 38.7895C6.02632 41.7369 10.2368 42.579 13.9211 41.2632C15.3421 40.7369 16.7105 39.9474 17.8684 38.7895C18.2016 38.5783 18.483 38.2949 18.6919 37.9603C18.9007 37.6257 19.0317 37.2484 19.0751 36.8563C19.1185 36.4642 19.0732 36.0674 18.9425 35.6952C18.8118 35.323 18.5992 34.985 18.3203 34.7061C18.0413 34.4271 17.7033 34.2145 17.3311 34.0838C16.9589 33.9532 16.5621 33.9079 16.17 33.9513C15.778 33.9946 15.4007 34.1256 15.066 34.3345C14.7314 34.5433 14.448 34.8248 14.2368 35.1579C13.6579 35.7369 12.9737 36.0526 12.2368 36.3158C10.3947 36.9474 8.13158 36.6842 6.65789 35.1579C4.60526 33.1053 4.60526 29.6842 6.65789 27.579L14.5526 19.6842C16.6579 17.579 18.5 17.3158 19.9737 17.3684C21.4474 17.4211 22.4474 17.8421 22.4474 17.8421C22.7557 18.0734 23.1111 18.2341 23.4885 18.3129C23.8658 18.3917 24.2558 18.3866 24.6309 18.298C25.0061 18.2095 25.3572 18.0396 25.6594 17.8004C25.9617 17.5612 26.2077 17.2585 26.3801 16.9137C26.5525 16.569 26.647 16.1905 26.657 15.8052C26.667 15.4199 26.5923 15.0371 26.438 14.6838C26.2838 14.3306 26.0538 14.0155 25.7644 13.7609C25.475 13.5064 25.1332 13.3185 24.7632 13.2105C24.7632 13.2105 22.9737 12.1579 20.3421 12.0526V12.1579Z"
                            fill="white"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="43"
                          height="43"
                          viewBox="0 0 43 43"
                          fill="none"
                          className="cursor-pointer sm:w-[25px] lg:w-[37px] h-auto"
                        >
                          <path
                            d="M38.2148 0.461433H5.21484C2.73047 0.461433 0.714844 2.47706 0.714844 4.96143V37.9614C0.714844 40.4458 2.73047 42.4614 5.21484 42.4614H38.2148C40.6992 42.4614 42.7148 40.4458 42.7148 37.9614V4.96143C42.7148 2.47706 40.6992 0.461433 38.2148 0.461433ZM26.7117 36.4333C25.9242 36.5739 25.6336 36.0864 25.6336 35.6833C25.6336 35.1771 25.6523 32.5896 25.6523 30.4989C25.6523 29.0364 25.1648 28.1083 24.593 27.6208C28.0617 27.2364 31.718 26.7583 31.718 20.7677C31.718 19.0614 31.1086 18.2083 30.1148 17.1114C30.2742 16.7083 30.8086 15.0489 29.9555 12.8927C28.6523 12.4896 25.6711 14.5708 25.6711 14.5708C24.4336 14.2239 23.093 14.0458 21.7711 14.0458C20.4492 14.0458 19.1086 14.2239 17.8711 14.5708C17.8711 14.5708 14.8898 12.4896 13.5867 12.8927C12.7336 15.0396 13.2586 16.6989 13.4273 17.1114C12.4336 18.2083 11.9648 19.0614 11.9648 20.7677C11.9648 26.7302 15.4617 27.2364 18.9305 27.6208C18.4805 28.0239 18.0773 28.7177 17.9367 29.7114C17.0461 30.1146 14.768 30.8083 13.4086 28.4083C12.5555 26.9271 11.018 26.8052 11.018 26.8052C9.49922 26.7864 10.9148 27.7614 10.9148 27.7614C11.9273 28.2302 12.6398 30.0302 12.6398 30.0302C13.5492 32.8146 17.8992 31.8771 17.8992 31.8771C17.8992 33.1802 17.918 35.2989 17.918 35.6833C17.918 36.0864 17.6367 36.5739 16.8398 36.4333C10.6523 34.3614 6.32109 28.4739 6.32109 21.5927C6.32109 12.9864 12.9023 6.45206 21.5086 6.45206C30.1148 6.45206 37.0898 12.9864 37.0898 21.5927C37.0992 28.4739 32.8992 34.3708 26.7117 36.4333ZM17.5148 30.7052C17.3367 30.7427 17.168 30.6677 17.1492 30.5458C17.1305 30.4052 17.2523 30.2833 17.4305 30.2458C17.6086 30.2271 17.7773 30.3021 17.7961 30.4239C17.8242 30.5458 17.7023 30.6677 17.5148 30.7052ZM16.6242 30.6208C16.6242 30.7427 16.4836 30.8458 16.2961 30.8458C16.0898 30.8646 15.9492 30.7614 15.9492 30.6208C15.9492 30.4989 16.0898 30.3958 16.2773 30.3958C16.4555 30.3771 16.6242 30.4802 16.6242 30.6208ZM15.3398 30.5177C15.3023 30.6396 15.1148 30.6958 14.9555 30.6396C14.7773 30.6021 14.6555 30.4614 14.693 30.3396C14.7305 30.2177 14.918 30.1614 15.0773 30.1989C15.2648 30.2552 15.3867 30.3958 15.3398 30.5177ZM14.1867 30.0114C14.1023 30.1146 13.9242 30.0958 13.7836 29.9552C13.643 29.8333 13.6055 29.6552 13.6992 29.5708C13.7836 29.4677 13.9617 29.4864 14.1023 29.6271C14.2242 29.7489 14.2711 29.9364 14.1867 30.0114ZM13.3336 29.1583C13.2492 29.2146 13.0898 29.1583 12.9867 29.0177C12.8836 28.8771 12.8836 28.7177 12.9867 28.6521C13.0898 28.5677 13.2492 28.6333 13.3336 28.7739C13.4367 28.9146 13.4367 29.0833 13.3336 29.1583ZM12.7242 28.2489C12.6398 28.3333 12.4992 28.2864 12.3961 28.1927C12.293 28.0708 12.2742 27.9302 12.3586 27.8646C12.443 27.7802 12.5836 27.8271 12.6867 27.9208C12.7898 28.0427 12.8086 28.1833 12.7242 28.2489ZM12.0961 27.5552C12.0586 27.6396 11.9367 27.6583 11.8336 27.5927C11.7117 27.5364 11.6555 27.4333 11.693 27.3489C11.7305 27.2927 11.8336 27.2646 11.9555 27.3114C12.0773 27.3771 12.1336 27.4802 12.0961 27.5552Z"
                            fill="white"
                          />
                        </svg>
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
