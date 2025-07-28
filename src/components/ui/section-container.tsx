import { motion, MotionProps } from "motion/react";
import { PropsWithChildren } from "react";

const revealFromOpacity: MotionProps = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
  exit: {
    opacity: 0,
  },
};

interface Props {
  id?: string;
  className?: string;
}

export default function SectionContainer({
  id,
  className,
  children,
}: PropsWithChildren<Props>) {
  return (
    <motion.div
      id={id}
      className={`relative min-h-screen w-screen p-6 max-sm:w-full ${className}`}
      {...revealFromOpacity}
    >
      {children}
    </motion.div>
  );
}
