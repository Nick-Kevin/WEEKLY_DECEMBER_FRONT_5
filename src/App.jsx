import "./App.css";
import StickyNavbar2 from "./components/sections/header/StickyNavbar2";
import illustrations from "./assets/images/hero-desktop-a38b0fd77b6c.webp";
import illustrationsMobile from "./assets/images/hero-mobile-7163f4f5de41.webp";
import BuildFromHere from "./components/sections/main/BuildFromHere";
import MainContent from "./components/sections/main/MainContent";
import Footer from "./components/sections/footer/Footer";
import MyGlobe from "./components/sections/main/Globe";

function App() {
  return (
    <>
      <div className="relative z-0 top-0 right-0">
        <img
          src={illustrations}
          className="absolute top-0 left-[67%] hidden sm:block"
          style={{ width: "min(1118px, max(100vh, 100vw))" }}
          alt="hero"
        />
        <img
          src={illustrationsMobile}
          className="absolute top-0 w-full block sm:hidden"
          alt="hero"
        />
      </div>
      <StickyNavbar2 />
      <main className="px-4 sm:px-11 lg:px-4">
        <BuildFromHere />
        <MainContent />        
      </main>
      <MyGlobe />
      <div className="grid text-slate-500 px-4 lg:px-14 lg:w-8/12 gap-y-4 text-sm">
          <p className="">1 This 7X times factor is based on data from the industry’s longest running analysis of fix rates Veracode State of Software Security 2023, which cites the average time to fix 50% of flaws as 198 days vs. GitHub’s fix rates of 72% of flaws with in 28 days which is at a minimum of 7X faster when compared.</p>
          <p> 2 The Total Economic Impact™ Of GitHub Enterprise Cloud and Advanced Security, a commissioned study conducted by Forrester Consulting, 2022. Results are for a composite organization based on interviewed customers</p>
          <p> 3 There are now 100 million developers around the world using GitHub. Read the blog post.</p>
      </div>
      <Footer />
    </>
  );
}

export default App;
