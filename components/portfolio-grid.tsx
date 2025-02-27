import BlurFade from "./ui/blur-fade";
import { BLUR_FADE_DELAY } from "@/lib/utils";

interface PortfolioItem {
  id: string;
  title: string;
  link: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: "01",
    title: "Photography Portfolio",
    link: "https://stevemckinnon.co.uk",
  },
  { id: "02", title: "Dev Resumé", link: "https://stevemckinnon.co.uk" },
];

export const PortfolioGrid = () => {
  return (
    <ul className="flex flex-col gap-6 mt-2">
      {portfolioItems.map((item, index) => (
        <BlurFade key={item.id} delay={BLUR_FADE_DELAY * 4 * index}>
          <li className="cursor-pointer w-full h-[68px] flex items-center border-b-2 border-gray-800 hover:border-gray-600 transition-all p-4 relative after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:bg-white after:w-0 hover:after:w-full after:transition-all after:duration-300">
            <a
              href={item.link}
              className="w-full h-full group relative overflow-hidden rounded-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex justify-between">
                <h2 className="text-xl font-medium">{item.title}</h2>
                <span className="text-sm text-gray-400">{item.id}</span>
              </div>
            </a>
          </li>
        </BlurFade>
      ))}
    </ul>
  );
};
