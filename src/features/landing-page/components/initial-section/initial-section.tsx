import Image from "next/image";
import BigPerLetterReveal from "../../../../components/animated/big-per-letter-reveal/big-per-letter-reveal";
import PerLetterReveal from "../../../../components/animated/per-letter-reveal/per-letter-reveal";
import { ArrowDownIcon } from "@radix-ui/react-icons";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

export default function InitialSection() {
  const t = useTranslations();
  return (
    <>
      <motion.div
        className="absolute bottom-0 left-0 z-30 m-[2vw] animate-bounce rounded-full border border-black"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 3,
          },
        }}
      >
        <ArrowDownIcon className="h-14 w-14" />
      </motion.div>
      <div className="absolute top-0 left-0 h-screen w-screen">
        <div className="bg-primary/80 absolute top-0 left-0 z-20 h-screen w-screen saturate-200"></div>
        <Image className="z-10 object-cover" src={"/oxa.jpg"} alt="" fill />
      </div>

      <div className="flex w-full flex-nowrap justify-between max-sm:flex-wrap">
        <div className="font-base z-30 flex flex-col text-left">
          <PerLetterReveal
            // content="Building software for top 100 companies."
            content={t("adjective1")}
            size="3xl"
            customDelay={1.5}
            className="flex-wrap"
          />

          <PerLetterReveal
            content="Working with international teams."
            size="3xl"
            customDelay={2}
          />

          <PerLetterReveal
            content="Tackling complexity with creativity."
            size="3xl"
            customDelay={2.5}
          />
        </div>

        <div className="font-base z-30 flex flex-col text-left max-sm:hidden">
          <a href="#whoami" className="hover:underline">
            <PerLetterReveal content="Who am i?" size="3xl" customDelay={2} />
          </a>

          <a href="#experiences" className="hover:underline">
            <PerLetterReveal
              content="Experiences"
              size="3xl"
              customDelay={1.5}
            />
          </a>

          <a href="#hireme" className="hover:underline">
            <PerLetterReveal content="Hire me" size="3xl" customDelay={2.5} />
          </a>
        </div>
      </div>

      <div className="z-30 mt-auto flex flex-col items-end self-end text-right">
        <BigPerLetterReveal className="text-black" text="Developing" />
        <BigPerLetterReveal className="text-black" text="Dreams" />
      </div>
    </>
  );
}
