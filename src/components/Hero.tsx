import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-hero pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <span className="text-2xl">✨</span>
            <span className="text-sm font-medium text-primary">AI-Powered Voice Technology</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight">
            Expanding Creator Reach<br />with AI Voice & Language
          </h1>
          
          <p className="text-xl text-primary/70 mb-10 max-w-3xl mx-auto">
            AI tools that let creators speak every language — while keeping their original voice and style.
          </p>
          
          <Button 
            onClick={scrollToProjects}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 text-base font-medium"
          >
            Explore My Work
          </Button>
        </div>
        
        <div className="mt-20">
          <img 
            src="https://images.unsplash.com/photo-1617994452722-4145e196248b?w=1200&h=400&fit=crop" 
            alt="Sound wave visualization" 
            className="w-full h-64 object-cover rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
