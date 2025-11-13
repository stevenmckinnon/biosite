import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlurFade from "./ui/blur-fade";
import { BLUR_FADE_DELAY } from "@/lib/utils";
import { Card, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";

interface PortfolioItem {
  id: string;
  title: string;
  description?: string;
  link: string;
  category?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: "01",
    title: "Photography Portfolio",
    description: "View my photography work",
    link: "https://stevenmckinnon.co.uk",
    category: "Portfolio",
  },
  {
    id: "02",
    title: "Dev Resumé",
    description: "Developer portfolio and experience",
    link: "https://stevemckinnon.co.uk",
    category: "Development",
  },
  {
    id: "03",
    title: "ICW",
    description: "Insane Championship Wrestling",
    link: "https://www.fite.tv/vl/p/icw/",
    category: "Work",
  },
  {
    id: "04",
    title: "WWE",
    description: "World Wrestling Entertainment",
    link: "https://www.wwe.com",
    category: "Work",
  },
  {
    id: "05",
    title: "Caley Invoicing",
    description: "Invoicing software for freelance work",
    link: "https://caley.app",
    category: "Development",
  },
];

export const PortfolioGrid = () => {
  return (
    <section aria-label="Portfolio and projects">
      <ul className="flex flex-col gap-4 mt-8 pb-4">
        {portfolioItems.map((item, index) => (
          <BlurFade key={item.id} delay={BLUR_FADE_DELAY * 4 + index * 0.1}>
            <li>
              <Card
                className={cn(
                  "group relative overflow-hidden border-2 border-gray-800 bg-gray-900/40 backdrop-blur-sm",
                  "hover:border-gray-600 hover:bg-gray-900/60 transition-all duration-300",
                  "hover:shadow-xl hover:shadow-white/5 hover:-translate-y-1"
                )}
              >
                <CardContent className="p-0">
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-6 gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-lg"
                    aria-label={`${item.title}${
                      item.description ? ` - ${item.description}` : ""
                    }`}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-mono text-gray-500 group-hover:text-gray-400 transition-colors">
                          {item.id}
                        </span>
                        {item.category && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-gray-800 text-gray-400 border border-gray-700">
                            {item.category}
                          </span>
                        )}
                      </div>
                      <h2 className="text-lg font-semibold text-white mb-1 group-hover:text-white transition-colors">
                        {item.title}
                      </h2>
                      {item.description && (
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                          {item.description}
                        </p>
                      )}
                    </div>
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 group-hover:bg-gray-700 border border-gray-700 group-hover:border-gray-600 transition-all duration-300 group-hover:scale-110">
                        <ArrowRight
                          className="size-5 text-gray-400 group-hover:text-white transition-all duration-300"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            </li>
          </BlurFade>
        ))}
      </ul>
    </section>
  );
};
