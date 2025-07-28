"use client";

import Lenis from "lenis";
import { useEffect } from "react";
// import QuickIntro from "./components/quick-intro";
import { AnimatePresence } from "framer-motion";
import useGeneralStore from "../../store/store";
import FullPage from "./components/full-page";

export default function LandingPage() {
  const { setLenis } = useGeneralStore();

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    setLenis(lenis);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const request = requestAnimationFrame(raf);
    () => {
      cancelAnimationFrame(request);
    };
  }, []);
  return (
    <main>
      <AnimatePresence>
        {/* <QuickIntro key={"quick-intro"} /> */}
        <FullPage />
      </AnimatePresence>
    </main>
  );
}
