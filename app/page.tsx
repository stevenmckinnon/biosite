import { Header } from "@/components/header";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { SocialLinks } from "@/components/social-links";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 md:pb-24">
        <div className="space-y-12">
          <section aria-labelledby="social-heading">
            <h2 id="social-heading" className="sr-only">
              Social Media Links
            </h2>
            <SocialLinks />
          </section>
          <PortfolioGrid />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
