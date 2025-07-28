import { ArrowUpIcon } from "@radix-ui/react-icons";
import SimpleTextReveal from "../../../../components/animated/simple-text-reveal/simple-text-reveal";
import { useTranslations } from "next-intl";

const texts = ["Conquering Complexity with Software.", "Available for hiring"];

export default function HireSection() {
  const t = useTranslations();

  return (
    <div className="h-full px-4 py-20 text-white">
      <ArrowUpIcon className="ml-auto h-[5vw] w-[5vw]" />
      {/* <SimpleTextReveal className="font-helvetica ml-auto block w-fit pt-6 text-[5vw]">
        PROJECTS
      </SimpleTextReveal> */}
      <div
        className="font-helvetica flex h-full items-center justify-center"
        style={{ letterSpacing: "-2px" }}
      >
        <div className="flex h-fit flex-row flex-wrap items-center justify-between text-[7vw] leading-[7vw]">
          {texts.map((phrase) =>
            phrase.split(" ").map((word, i) => (
              <SimpleTextReveal
                key={`hire-${word}`}
                className={`my-12 block w-[50%] ${i % 2 != 0 ? "text-right" : ""}`}
              >
                {word}
              </SimpleTextReveal>
            )),
          )}
          <SimpleTextReveal className="w-[50%] text-right text-lg tracking-normal">
            {t("hire3")}{" "}
            {/* Every challenge I've faced led me to here, thanks for checking out
            my website {"<3"}. I'm always looking for new challenges, interview
            invitations, and freelance proposals. Feel free to reach out to me
            at{" "} */}
            <a
              className="inline-block underline"
              href="https://www.linkedin.com/in/henrique-albuquerque-dev/"
            >
              @henriquealbuquerque
            </a>
          </SimpleTextReveal>
        </div>
      </div>
    </div>
  );
}
