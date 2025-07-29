"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import PerLetterReveal from "../../../components/animated/per-letter-reveal/per-letter-reveal";
import VerticalCarousel from "./vertical-carousel/vertical-carousel";

export default function QuickIntro() {
  const [ye, setYe] = useState(true);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setYe(false);
    }, 7000);
    const timeout2 = setTimeout(() => {
      const ref = document.getElementById("quick-intro");
      ref?.remove();
    }, 7500);

    () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  return (
    <motion.div
      id="quick-intro"
      className="relative flex h-screen w-screen flex-col items-center justify-center gap-12"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
      }}
    >
      <div className="relative z-20 flex items-center justify-center gap-8 max-sm:flex-col">
        <AnimatePresence>
          {ye && (
            <PerLetterReveal
              key={"text1"}
              content={"Henrique Albuquerque"}
              customDelay={1}
              color="black"
              size="2xl"
            />
          )}
          {ye && <VerticalCarousel key={"carousel1"} />}
          {ye && (
            <PerLetterReveal
              key={"text2"}
              content={"Software Engineer"}
              customDelay={2}
              color="black"
            />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
