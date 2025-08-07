import LandingPage from "@/features/landing-page/landing-page";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <LandingPage />
      <Image
        className="invisible -z-10 object-cover"
        src={"/oxa.jpg"}
        alt=""
        fill
      />
    </>
  );
}
