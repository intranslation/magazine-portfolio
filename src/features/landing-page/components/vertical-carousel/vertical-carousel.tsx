"use client";

import Image from "next/image";
import { motion } from "motion/react";

const PHOTOS = [
  "/web_design_block.svg",
  "/tech_stack_block.svg",
  "/me_stack_block.svg",
];

export default function VerticalCarousel() {
  const size = "300px";
  return (
    <motion.div
      initial={{ width: 0, height: 0 }}
      animate={{
        width: size,
        height: size,
        transition: {
          delay: 3.3,
          duration: 0.75,
          ease: [0.85, 0, 0.15, 1],
        },
      }}
      className="relative overflow-hidden"
    >
      {PHOTOS.map((url, index) => (
        <motion.div
          key={index + "car"}
          className="absolute top-0 left-0 h-full w-full"
          initial={{ top: index === 0 ? 0 : `-${size}` }}
          animate={{
            top: 0,
            transition: {
              delay: 3.7 + index / 1.5,
              duration: 0.5,
              ease: [0.85, 0, 0.15, 1],
            },
          }}
        >
          <Image
            className="object-cover"
            src={url}
            alt=""
            priority
            fill={true}
          />
        </motion.div>
      ))}

      <motion.div
        className="bg-background absolute bottom-0 left-0 w-full"
        initial={{ height: 0 }}
        animate={{ height: 0 }}
        exit={{
          height: size,
          transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          },
        }}
      ></motion.div>
    </motion.div>
  );
}
