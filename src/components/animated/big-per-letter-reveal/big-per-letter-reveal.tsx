"use client";

import { motion } from "motion/react";

export default function BigPerLetterReveal({
  text,
  className = "",
}: {
  text: string;
  className: string;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-0">
      {text.split("").map((letter, i) => (
        <motion.span
          key={letter + i}
          className={
            "font-title text-[14vw] leading-[11vw] tracking-tighter " +
            className
          }
          style={{
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
            fontSmooth: "always",
            // color: "var(--color-primary)",
          }}
          initial={{
            opacity: 0,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            transition: {
              duration: 1.25,
              delay: Math.random(),
              ease: [0.85, 0, 0.15, 1],
            },
          }}
        >
          {letter === " " ? (
            <>
              &nbsp;
              <br />
            </>
          ) : (
            letter
          )}
        </motion.span>
      ))}
    </div>
  );
}
