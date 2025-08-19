"use client";

import { useEffect, useState } from "react";
import ExperiencesSection from "./experiences-section/experiences";
import InitialSection from "./initial-section/initial-section";
import HenriqueSection from "./henrique-section/henrique-section";
import HireSection from "./hire-section/hire-section";
import SectionContainer from "../../../components/ui/section-container";

export default function FullPage() {
  const [visible, setVisibility] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisibility(true);
    }, 7500);

    () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {visible && (
        <>
          <SectionContainer className="min-sm:p-[clamp(1rem, 7vw, 4rem)] relative flex h-[50dvh] max-h-[50dvh] min-h-[50dvh] flex-col items-start">
            <InitialSection />
          </SectionContainer>

          <SectionContainer
            id="whoami"
            className="min-h-[100dvh] bg-[var(--background)]"
          >
            <HenriqueSection />
          </SectionContainer>

          <SectionContainer
            id="experiences"
            className="-mt-1 w-full bg-[var(--background)] max-sm:p-4 max-sm:pb-[150px]"
          >
            <ExperiencesSection />
          </SectionContainer>

          <SectionContainer
            id="hireme"
            className="bg-[var(--background-red)] max-sm:p-0"
          >
            <HireSection />
          </SectionContainer>
        </>
      )}
    </>
  );
}
