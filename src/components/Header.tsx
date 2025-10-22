import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-semibold text-primary">AI Voice Studio</div>
          
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="text-sm text-foreground hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-sm text-foreground hover:text-primary transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-sm text-foreground hover:text-primary transition-colors">
              How It Works
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-sm text-foreground hover:text-primary transition-colors">
              Work
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sm text-foreground hover:text-primary transition-colors">
              Contact
            </button>
          </nav>

          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 text-sm font-medium"
          >
            LET'S CONNECT
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
