"use client";

import { motion } from "motion/react";
import "./text.css";
import { PropsWithChildren } from "react";

interface LetterProps {
  i: number;
  customDelay?: number;
  size?: string;
  color?: string;
}

function Letter({
  i,
  customDelay = 0,
  color,
  size,
  children,
}: PropsWithChildren<LetterProps>) {
  return (
    <motion.span
      initial={{
        top: `10rem`,
      }}
      exit={{
        top: `10rem`,
      }}
      animate={{
        top: `0`,
        transition: {
          delay: 0.02 * i + customDelay,
          duration: 0.25,
          ease: [0.85, 0, 0.15, 1],
        },
      }}
      className={`text-${color} dark:text-${color} text-${size} relative m-0 h-fit p-0`}
    >
      {children}
    </motion.span>
  );
}

export default function PerLetterReveal({
  content,
  customDelay = 0,
  className,
  size = "2xl",
  color = "black",
}: {
  content: string;
  customDelay?: number;
  begoneDelay?: number;
  className?: string;
  size?: string;
  color?: string;
}) {
  return (
    <motion.div
      className={"font-helvetica m-0 h-fit max-h-fit overflow-hidden p-0"}
    >
      <motion.div
        className={`relative m-0 flex flex-row p-0 uppercase ${className}`}
      >
        {content.split(" ").map((word: string, i: number) => (
          <motion.span key={word}>
            <>
              {word.split("").map((letter: string, i) => (
                <Letter key={letter + word + i} i={i} customDelay={customDelay}>
                  {letter}
                </Letter>
              ))}
              &nbsp;
            </>
          </motion.span>
        ))}
        {/* {content.split("").map((letter, i) => (
          <motion.span
            key={content[0] + i}
            initial={{
              top: `10rem`,
            }}
            exit={{
              top: `10rem`,
            }}
            animate={{
              top: `0`,
              transition: {
                delay: 0.02 * i + customDelay,
                duration: 0.25,
                ease: [0.85, 0, 0.15, 1],
              },
            }}
            className={`text-${color} dark:text-${color} text-${size} relative m-0 h-fit p-0`}
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
        ))} */}
        <motion.div
          className="bg-background absolute bottom-0 left-0 w-full"
          initial={{ height: 0 }}
          animate={{ height: 0 }}
          exit={{
            height: "5rem",
            transition: {
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
        ></motion.div>
      </motion.div>
    </motion.div>
  );
}
