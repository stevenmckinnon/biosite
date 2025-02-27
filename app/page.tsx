import { Header } from "@/components/header";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { SocialLinks } from "@/components/social-links";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="w-full max-w-2xl mx-auto px-4 pt-0 pb-8">
        <SocialLinks />
        <PortfolioGrid />
      </div>
    </div>
  );
};

export default HomePage;
