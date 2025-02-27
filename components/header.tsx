import Image from "next/image";
import { Avatar, AvatarImage } from "./ui/avatar";
import BlurFade from "./ui/blur-fade";
import { BLUR_FADE_DELAY } from "@/lib/utils";

export const Header = () => {
  return (
    <header className="relative w-full px-0 min-h-[270px] z-0 flex flex-col items-center pb-[20px] uppercase">
      <BlurFade delay={BLUR_FADE_DELAY} className="flex flex-col items-center">
        <div className="container mt-6 mx-auto z-20">
          <p className="text-center text-xs md:text-base">
            Glasgow based photographer & camera operator
          </p>
        </div>
      </BlurFade>
      <BlurFade
        delay={BLUR_FADE_DELAY * 2}
        className="flex flex-col items-center"
      >
        <h1 className="text-center mt-8 flex-auto max-w-[300px] flex items-center justify-center text-5xl tracking-tighter sm:text-6xl xl:text-7xl/none z-10 relative">
          Steve McKinnon
        </h1>
        <Avatar className="size-56 -mt-6 z-0 sm:size-64 md:size-72">
          <AvatarImage src="/me.jpg" alt="Steve McKinnon" />
        </Avatar>
      </BlurFade>
      <div className="absolute top-0 left-0 mx-auto p-0 w-full -z-1 h-[270px]">
        <Image
          src="/bg.png"
          alt="Steve McKinnon"
          width={1024}
          height={800}
          className="w-full h-[270px]"
        />
      </div>
    </header>
  );
};
