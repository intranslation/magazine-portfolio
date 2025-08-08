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
        className="border-background absolute right-0 bottom-0 z-30 animate-bounce rounded-full border text-black max-2xl:m-[1vw]"
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
      <div className="absolute top-0 left-0 h-full w-full">
        <div className="absolute top-0 left-0 z-20 h-screen w-screen bg-white/80 saturate-200"></div>
        <Image className="z-10 object-cover" src={"/oxa.jpg"} alt="" fill />
      </div>

      <div className="flex w-full flex-nowrap justify-between text-black max-sm:flex-wrap">
        <div className="z-30 flex flex-col text-left max-sm:gap-2">
          <PerLetterReveal
            // content="Building software for top 100 companies."
            content={t("adjective1")}
            size="3xl"
            customDelay={1.5}
            className="flex-wrap"
          />

          <PerLetterReveal
            content={t("adjective2")}
            size="3xl"
            customDelay={2}
            className="flex-wrap"
          />

          <PerLetterReveal
            content={t("adjective3")}
            size="3xl"
            customDelay={2.5}
            className="flex-wrap"
          />
        </div>

        <div className="font-base z-30 flex flex-col text-left max-sm:hidden">
          <a className="hover:underline" href="/pt">
            <PerLetterReveal
              content={t("language1")}
              size="3xl"
              customDelay={2}
            />
          </a>

          <a className="hover:underline" href="/en">
            <PerLetterReveal
              content={t("language2")}
              size="3xl"
              customDelay={1.5}
            />
          </a>
        </div>
        <div className="font-base z-30 flex flex-col text-left max-sm:hidden">
          <a href="#whoami" className="hover:underline">
            <PerLetterReveal content={t("menu1")} size="3xl" customDelay={2} />
          </a>

          <a href="#experiences" className="hover:underline">
            <PerLetterReveal
              content={t("menu2")}
              size="3xl"
              customDelay={1.5}
            />
          </a>

          <a href="#hireme" className="hover:underline">
            <PerLetterReveal
              content={t("menu3")}
              size="3xl"
              customDelay={2.5}
            />
          </a>
        </div>
      </div>

      {/* <div className="z-30 mt-auto flex flex-col items-end self-end text-right">
        <BigPerLetterReveal className="text-black" text="Developing" />
        <BigPerLetterReveal className="text-black" text="Dreams" />
      </div> */}
      <div className="z-30 mt-auto flex flex-col items-start self-start text-right">
        <BigPerLetterReveal className="text-black" text="Software" />
        <BigPerLetterReveal className="text-black" text="Engineer" />
        <BigPerLetterReveal className="text-black" text="& Front-end" />
        <BigPerLetterReveal className="text-black" text="Architect" />
      </div>
    </>
  );
}
