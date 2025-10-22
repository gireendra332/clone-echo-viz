import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VisionMission from "@/components/VisionMission";
import Projects from "@/components/Projects";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <VisionMission />
      <Projects />
      <HowItWorks />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
