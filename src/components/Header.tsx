import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-semibold">AI Voice Studio</div>
          
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="text-sm hover:opacity-70 transition-opacity">
              About
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-sm hover:opacity-70 transition-opacity">
              Projects
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-sm hover:opacity-70 transition-opacity">
              How It Works
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-sm hover:opacity-70 transition-opacity">
              Work
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sm hover:opacity-70 transition-opacity">
              Contact
            </button>
          </nav>

          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-6 text-sm font-medium"
          >
            LET'S CONNECT
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
