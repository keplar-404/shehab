import Home from "@/components/Home";
import Scrollbar from "smooth-scrollbar";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    Scrollbar.init(document.getElementById("my-scrollbar"), {
      damping: 0.08,
    });
  }, []);

  return (
    <>
      <div id="my-scrollbar" className="w-[100vw] h-[100vh]">
        <Home />
      </div>
    </>
  );
}
