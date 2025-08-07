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
    setTimeout(() => {
      setVisibility(true);
    }, 7500);
  }, []);

  return (
    <>
      {visible && (
        <>
          <SectionContainer className="relative flex h-[50vh] max-h-[50vh] min-h-[50vh] flex-col items-start min-sm:p-[7vw]">
            <InitialSection />
          </SectionContainer>

          <SectionContainer
            id="whoami"
            className="min-h-[100vh] bg-[var(--background)]"
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
            className="h-screen bg-[var(--background-red)] max-sm:p-0"
          >
            <HireSection />
          </SectionContainer>
        </>
      )}
    </>
  );
}
