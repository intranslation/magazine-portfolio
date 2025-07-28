"use client";

import { motion } from "framer-motion";
import ExperienceCard from "./experience-card";
import { experiences } from "@/utils/constants";
import { useTranslations } from "next-intl";

export default function ExperiencesSection() {
  const t = useTranslations();
  return (
    <motion.section
      id="career"
      className="flex flex-col justify-center px-4 py-[10vh] max-sm:m-0 max-sm:p-0 dark:text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 0.5, delay: 1 } }}
    >
      <span
        className="font-helvetica-light z-10 mt-[10vh] text-[5vw] font-thin tracking-tighter uppercase"
        style={{
          fontSize: "clamp(2rem, 5vw, 10rem)",
        }}
      >
        {t("experiences")}
      </span>
      {experiences.map((experience, index) => (
        <ExperienceCard key={index} experience={experience} />
      ))}
    </motion.section>
  );
}
