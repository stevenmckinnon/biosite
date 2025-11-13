import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import BlurFade from "./ui/blur-fade";
import { BLUR_FADE_DELAY } from "@/lib/utils";

export const Header = () => {
  return (
    <header className="relative w-full px-0 min-h-[280px] md:min-h-[320px] lg:min-h-[360px] z-0 flex flex-col items-center">
      <div className="absolute top-0 left-0 mx-auto p-0 w-full -z-10 h-[280px] md:h-[320px] lg:h-[360px]">
        <Image
          src="/bg.png"
          alt=""
          width={1024}
          height={800}
          className="w-full h-full object-cover"
          priority
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      <BlurFade
        delay={BLUR_FADE_DELAY}
        className="flex flex-col items-center w-full"
      >
        <div className="container mt-8 md:mt-12 mx-auto z-20 px-4">
          <p className="text-center text-xs sm:text-sm md:text-base text-gray-200 drop-shadow-lg font-medium tracking-wide">
            Glasgow based photographer & camera operator
          </p>
        </div>
        <h1 className="text-center mt-4 md:mt-6 max-w-4xl mx-auto px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-2xl z-10">
          Steve McKinnon
        </h1>
      </BlurFade>

      <BlurFade
        delay={BLUR_FADE_DELAY * 2}
        className="flex flex-col items-center w-full z-10"
      >
        <div className="relative mt-6 md:mt-8 mb-4">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-pulse" />
          <Avatar className="size-48 sm:size-56 md:size-64 lg:size-72 relative z-10 border-4 border-white/20 shadow-2xl ring-4 ring-white/10">
            <AvatarImage
              src="/me.jpg"
              alt="Steve McKinnon"
              className="object-cover"
            />
            <AvatarFallback className="bg-gradient-to-br from-gray-700 to-gray-900 text-white text-2xl font-semibold">
              SM
            </AvatarFallback>
          </Avatar>
        </div>
      </BlurFade>
    </header>
  );
};
