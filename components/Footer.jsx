import { motion } from "framer-motion";

export default function Footer() {
  const data = ["Facebook", "Github", "Showwcase", "Linkedin"];
  const socialData = [
    { id: 1, name: "Facebook", link: "https://www.facebook.com/shehub101/" },
    { id: 2, name: "Github", link: "https://github.com/keplar-404" },
    { id: 4, name: "Linkedin", link: "https://www.linkedin.com/in/shehub-hossen/" },
  ];

  const repeatDelayFunction = () => {
    let delay = Math.floor(Math.random() * 4);
    if (delay === 0) {
      delay = +1;
      setTimeout(repeatDelayFunction, 4000);
      return delay;
    } else {
      setTimeout(repeatDelayFunction, 4000);
      return delay;
    }
    // console.log(delay);
  };
  const animationCustomVarient1 = {
    initial: {
      marginLeft: "-10%",
    },
    animate: {
      marginLeft: "100%",
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatDelay: repeatDelayFunction(),
      },
    },
  };
  const animationCustomVarient2 = {
    initial: {
      marginLeft: "100%",
    },
    animate: {
      marginLeft: "-10%",
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatDelay: repeatDelayFunction(),
      },
    },
  };

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
      // If the user is on a desktop, open the default email client
      window.location.href = `mailto:${emailAddress}`;
    }
  };

  return (
    <>
      <div className="w-full h-[290px] bg-[#E1E8EA]"></div>
      <div className="text-white w-full">
        <div className="pt-[106px] w-full flex flex-col justify-center gap-y-[72px] items-center">
          <h1 className="ep fe sm:text-[33px] md:text-[48px] lg:text-[58px] xl:text-[64px] 2xl:text-[68px] sm:text-center md:text-left">
            Shehub hossen
          </h1>

          <button
            onClick={mailSend}
            className="footer-btn hover:translate-y-[-8px] transition-all duration-500 ap footer-text sm:w-[248px] sm:h-[72px]  md:w-[552px] md:h-[116px] sm:rounded-[14px] md:rounded-[24px] border-[1px] border-white sm:text-[16px] md:text-[28px]"
          >
            Hire me
          </button>
          <div className="w-full relative h-[2px] flex justify-start overflow-hidden">
            <div className="w-full h-[2px] bg-white"></div>
            <motion.div
              variants={animationCustomVarient1}
              initial={animationCustomVarient1.initial}
              animate={animationCustomVarient1.animate}
              className="w-[92px] h-[2px] absolute bg-[#ff8c00]"
            ></motion.div>
          </div>

          <div className="flex flex-row justify-center items-center w-full gap-[40px] flex-wrap sm:w-[289px] md:w-[684.633px] lg:w-[899px] xl:w-[1135px] 2xl:w-[1264px] overflow-hidden">
            {socialData.map((data) => (
              <a href={data.link} target="_blank" key={data.id} className="footer-a hover:text-[#FFAF4B]">
                {data.name}
              </a>
            ))}
          </div>

          <div className="w-full">
            <div className="w-full relative h-[2px] flex justify-start overflow-hidden">
              <div className="w-full h-[2px] bg-white"></div>
              <motion.div
                variants={animationCustomVarient2}
                initial={animationCustomVarient2.initial}
                animate={animationCustomVarient2.animate}
                className="w-[92px] h-[2px] absolute bg-[#ff8c00]"
              ></motion.div>
            </div>
            <div className="w-full flex justify-center items-center sm:flex-col md:flex-row  sm:h-[350px] md:h-[200px]">
              <div className="flex flex-col justify-center items-center  sm:w-full md:w-1/2 md:h-full sm:border-r-0 md:border-r-[1px] sm:border-black md:border-white">
                <p className="wo sm:text-[18px] text-[22px] font-normal text-center">
                  shehabhossen76.services@gmail.com
                </p>
                <p className="wo sm:text-[18px] text-[22px] font-normal text-center mt-[14px]">
                  01647153119
                </p>
              </div>
              <div className="sm:w-full md:w-1/2 flex justify-center items-center relative sm:mt-9">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.512798449663!2d90.80551557520998!3d22.96816327921191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754c24720dd30fd%3A0xd3397543482e3f0!2sDalal%20Bazar!5e0!3m2!1sen!2sbd!4v1695667967792!5m2!1sen!2sbd" width="600" height="450" style={{ border: "0" }} className="rounded-[0.5rem] h-[10rem] w-[60%]" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
