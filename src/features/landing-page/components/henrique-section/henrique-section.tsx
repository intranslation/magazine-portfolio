import Image from "next/image";
import SimpleTextReveal from "../../../../components/animated/simple-text-reveal/simple-text-reveal";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

const skills = [
  ,
  { title: "AI agents using Langchain", description: [] },
  { title: "Data ingestion and transformation with Pandas", description: [] },
  { title: "Motion and 3D based web development", description: [] },
  {
    title: "Enterprise level front-ends with React +",
    description: [],
  },
  {
    title: "Enterprise level back-ends using FastAPI and Django",
    description: [],
  },
  {
    title: "Continuous integration pipelines built from scratch",
    description: [],
  },
  {
    title: "Scalable and reusable deployment scripts with terraform",
    description: [],
  },
  {
    title:
      "Deployiment and scaling of apps on the cloud with GCP and AWS (EKS, VPCs, Lambdas)",
    description: [],
  },
];
export default function HenriqueSection() {
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true, amount: "all" });
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
            <SimpleTextReveal>IM HENRIQUE</SimpleTextReveal>
            <SimpleTextReveal>ALBUQUERQUE</SimpleTextReveal>
            <SimpleTextReveal>A SENIOR SOFTWARE</SimpleTextReveal>
          </div>
        </div>
        <div className="ml-auto flex w-fit flex-col items-end justify-end">
          <SimpleTextReveal>ENGINEER</SimpleTextReveal>
          <SimpleTextReveal>BASED IN SÃO PAULO</SimpleTextReveal>
          <SimpleTextReveal>BRAZIL</SimpleTextReveal>
        </div>
      </div>

      <div className="font-base mt-[10rem] mr-8 ml-auto w-[50vw] text-white">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: "all" }}
        >
          <span className="block h-[2rem]">SKILLS</span>
          <span className="pl-[15vw]">I’m</span> a full-stack engineer with a
          broad and versatile skill set, specializing in front-end development.
          I have a proven track record of delivered end-to-end solutions across
          market sectors like airlines, retail, and marketing. Here's a few
          technologies I have professional experience with
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
              {skill?.title}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
