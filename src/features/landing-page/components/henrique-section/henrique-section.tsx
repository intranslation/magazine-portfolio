import Image from "next/image";
import SimpleTextReveal from "../../../../components/animated/simple-text-reveal/simple-text-reveal";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

const skills = [
  { title: "skill1", description: [] },
  { title: "skill2", description: [] },
  { title: "skill3", description: [] },
  {
    title: "skill4",
    description: [],
  },
  {
    title: "skill5",
    description: [],
  },
  {
    title: "skill6",
    description: [],
  },
  {
    title: "skill7",
    description: [],
  },
  {
    title: "skill8",
    description: [],
  },
];
export default function HenriqueSection() {
  const t = useTranslations();

  return (
    <div className="flex flex-col">
      <div className="font-helvetica-light relative mr-2 flex h-full flex-wrap items-start justify-between gap-0 text-right text-[8vw] text-white">
        <div className="flex flex-nowrap items-start justify-between">
          <motion.div
            className="relative h-[400px] w-[300px] min-w-[300px] max-sm:hidden"
            initial={{ filter: "blur(0px)" }}
            whileInView={{ filter: "blur(0px)" }}
            viewport={{ once: true, amount: "all" }}
          >
            <Image src={"/me.png"} alt="" fill className="grayscale-100" />
          </motion.div>

          <div className="flex w-fit flex-col items-end justify-end">
            <SimpleTextReveal>{t("whoami1")}</SimpleTextReveal>
          </div>
        </div>
      </div>

      <div className="font-base mt-[10rem] mr-8 ml-auto w-[50vw] text-white">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: "all" }}
        >
          <span className="block h-[2rem]">SKILLS</span>
          <span className="pl-[15vw]">{t("skillsdescription1") + " "}</span>
          {t("skillsdescription2")}
        </motion.p>

        <ul className="mt-12">
          {skills.map((skill, i) => (
            <motion.li
              key={skill?.title}
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.02 * i,
                },
              }}
              className="first-letter:text-2xl first-letter:text-[#FF594A]"
            >
              {t(skill?.title)}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
