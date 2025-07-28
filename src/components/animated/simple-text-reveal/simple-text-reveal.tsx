import { motion } from "motion/react";
import { PropsWithChildren } from "react";

interface Props {
  className?: string;
  customDelay?: number;
  whileInView?: boolean;
}

export default function SimpleTextReveal({
  children,
  customDelay = 1,
  className,
  whileInView = false,
}: PropsWithChildren<Props>) {
  return (
    <motion.div
      className={"m-0 h-fit max-h-fit overflow-hidden p-0 " + className}
    >
      <motion.span
        className={"relative m-0 p-0 uppercase"}
        initial={{
          opacity: 0,
          top: `10rem`,
        }}
        exit={{
          top: `10rem`,
        }}
        animate={{
          top: `0`,
          opacity: 1,
          transition: {
            delay: 0.5,
            duration: 1,
            ease: [0.85, 0, 0.15, 1],
          },
        }}
      >
        {children}
      </motion.span>
    </motion.div>
  );
}
