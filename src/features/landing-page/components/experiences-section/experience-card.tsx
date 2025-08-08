"use client";

import useGeneralStore from "@/store/store";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

export default function ExperienceCard({
  experience: { title, company, date, description },
}: {
  experience: {
    title: string;
    company: string;
    date: string;
    description: string;
  };
}) {
  const t = useTranslations();
  const { lenis } = useGeneralStore();
  const ref = useRef<null | HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [showHoverEffect, setShowHoverEffect] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 800) {
      return;
    }

    if (!lenis) {
      return;
    }

    lenis?.on("scroll", () => {
      if (!ref || !ref.current) return;

      const offsetTop = ref.current.getBoundingClientRect().top;

      setShowHoverEffect(offsetTop <= window.innerHeight / 2 && offsetTop > 0);
    });
  }, [lenis]);

  const renderHover = isHovering || showHoverEffect;

  return (
    <AnimatePresence>
      <motion.div
        id="visible-block"
        key="visible-block"
        ref={ref}
        className="relative z-10 my-8"
        onHoverStart={() => setIsHovering(true)}
        onHoverEnd={() => setIsHovering(false)}
        // onHoverStart={() => !isMobile && setIsHovering(true)}
        // onHoverEnd={() => !isMobile && setIsHovering(false)}
        // onClick={() => expand()}
      >
        <div className="relative z-10 flex items-center justify-between max-sm:my-8 max-sm:flex-col max-sm:items-start">
          <span
            className="z-10 text-[5vw] font-light tracking-tighter whitespace-nowrap uppercase mix-blend-difference max-sm:whitespace-normal"
            style={{
              fontSize: "clamp(2.8rem, 5vw, 10rem)",
            }}
          >
            {t(title)}
          </span>
          <div className="flex w-full items-center justify-between">
            <span
              className="z-10 mr-auto ml-6 block text-[2vw] font-light whitespace-nowrap text-gray-300 mix-blend-difference max-sm:ml-0"
              style={{
                fontSize: "clamp(1rem, 2vw, 10rem)",
              }}
            >
              at {t(company)}
            </span>
            <span className="z-10 mx-2 block h-[1px] w-full bg-white mix-blend-difference transition-all"></span>

            <span className="z-10 block whitespace-nowrap mix-blend-difference">
              {t(date)}
            </span>
          </div>
        </div>

        <motion.div
          className="pointer-events-auto absolute top-0 left-0 z-10 flex h-full w-full flex-col items-center justify-center bg-white hover:mask-size-[100%]"
          style={{
            maskImage:
              "linear-gradient(to right, black 0%, black 20%, black 100%)",
            maskRepeat: "no-repeat",
            maskPosition: "0% 0%",
            maskSize: "0%",
          }}
          animate={{
            maskSize: renderHover ? "100%" : "0%",
            transition: {
              duration: 0.25,
              ease: "easeInOut",
            },
          }}
        >
          <span
            className="z-10 px-2 text-center text-[3vw] font-light tracking-tighter whitespace-normal text-black uppercase"
            style={{
              fontSize: "clamp(2rem, 3vw, 10rem)",
              lineHeight: "clamp(2rem, 3vw, 10rem)",
            }}
          >
            {t(description)}
          </span>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
