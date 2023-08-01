import SkillSection from "@/components/main/SkillSection";
import Hero from "@/components/main/hero section/Hero";
import Nav from "@/components/navbar/Nav";
import About from "@/components/main/AboutMe";
import Head from "next/head";
import Project from "@/components/main/Project";
import Playgame from "@/components/main/Playgame";
import CSS from "@/components/main/CSS";
import Footer from "@/components/Footer";
import Scrollbar from "smooth-scrollbar";
import { useEffect } from "react";
import ProjectUpAnimation from "@/components/main/ProjectUpAnimation";

export default function Index() {
  // useEffect(() => {
  //   Scrollbar.init(document.getElementById("my-scrollbar"), {
  //     damping: 0.08,
  //   });
  // }, []);

  return (
    <>
      <Head>
        <title>shehub</title>
        <meta name="description" content="portfolio of shehab" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/sh.ico" />
      </Head>

      {/* <div className="w-full h-[5rem] fixed z-[999] sm:bg-red-400 md:bg-slate-400 lg:bg-yellow-200 xl:bg-purple-400 2xl:bg-black"></div> */}

      <div id="my-scrollbar" className="w-full h-fit">
        <nav className="bg-[#E1E8EA]">
          <Nav />
        </nav>

        <main className="bg-[#E1E8EA]">
          <Hero />
          <SkillSection />
          <About />
          <ProjectUpAnimation />
          <Project />
          <Playgame />
          <CSS />
        </main>

        <footer className="bg-black">
          <Footer />
        </footer>
      </div>
    </>
  );
}
