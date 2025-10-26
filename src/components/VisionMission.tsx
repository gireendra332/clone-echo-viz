const VisionMission = () => {
  const stats = [
    { value: "10+", label: "Languages Supported" },
    { value: "95%", label: "Voice Accuracy" },
    { value: "Real-time", label: "AI Processing" }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Vision & Mission</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm exploring AI that empowers creators to break language barriers, from real-time dubbing to voice cloning and video localization. My goal is to make global content accessible, natural, and emotionally accurate.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-10 bg-white rounded-2xl shadow-md border border-border/50">
              <div className="text-5xl font-bold text-primary mb-3">{stat.value}</div>
              <div className="text-muted-foreground text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
