import PrimaryHero from "@/components/common/PrimraryHero";
import Navbar from "@/components/navbar/Navbar";
import AboutCards from "@/components/about/AboutCards";
import Logo from "@/components/Logos/AdSection";
import AboutSection from "@/components/about/AboutSection";
export default function AboutPage() {
  return (
    <div>
      <PrimaryHero
        title="ABOUT"
        subtitle="Insights & Vision"
        imageUrl="https://live.staticflickr.com/65535/54649151003_1eed26325c_c.jpg"
      />
      <AboutSection/>
      <Navbar />
      <AboutCards />
      <Logo />
    </div>
  );
}