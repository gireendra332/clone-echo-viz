const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Upload Your Content",
      description: "Upload your video or audio content to our AI platform. Supports multiple formats and high-quality files for best results."
    },
    {
      number: "2",
      title: "AI Separates Voice & Background",
      description: "Our advanced AI technology intelligently separates voice tracks from background music and ambient sounds with precision."
    },
    {
      number: "3",
      title: "Re-voice in Chosen Language",
      description: "Select your target language and let AI clone your voice perfectly, maintaining tone, emotion, and speaking style."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground">
            Three simple steps to transform your content for global audiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <img 
            src="https://images.unsplash.com/photo-1678977252570-58db7acbbeea?w=1200&h=500&fit=crop" 
            alt="AI voice technology workspace" 
            className="w-full h-80 object-cover rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
