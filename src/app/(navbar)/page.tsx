import Explore from "@/src/components/UI/Explore";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full flex flex-col lg:flex-row gap-12  items-center max-w-[1600px] mx-auto">
      <section className="flex flex-col items-center justify-center gap-3 lg:flex-1 lg:items-start">
        <p className="barlowCondensed text-[#D0D7F8] uppercase text-lg lg:text-3xl lg:tracking-widest">
          So, you want to travel to
        </p>
        <p className="text-8xl lg:text-[200px] bellefair">SPACE</p>

        <p className="text-center barlow text-[#D0D7F8] lg:text-left max-w-[400px]">
          Let’s face it, if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </section>
      <Explore />
    </main>
  );
}
