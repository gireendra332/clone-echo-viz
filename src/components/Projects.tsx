import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Voice Dubbing AI",
      description: "Dub creators' voices into regional languages (Hindi → Telugu, Tamil, Kannada, Gujarati, etc.) while retaining tone and expression. Perfect voice cloning that maintains emotional authenticity across languages.",
      tags: ["Voice Cloning", "Regional Languages", "Tone Preservation"]
    },
    {
      title: "AutoReach",
      description: "AI platform that helps creators manage multilingual uploads automatically. Streamline your content distribution across language barriers with intelligent automation and scheduling.",
      tags: ["Automation", "Multi-lingual", "Content Management"]
    },
    {
      title: "ContentFlow",
      description: "Manage content translation, lip-sync, and dubbing through one unified dashboard. End-to-end solution for creators who want to reach global audiences without technical complexity.",
      tags: ["Lip-sync", "Translation", "Dashboard"]
    },
    {
      title: "EchoBoost",
      description: "AI system that helps influencers expand their voice to regional markets. Analyze audience demographics and automatically create localized content that resonates with each region.",
      tags: ["Analytics", "Regional Growth", "AI Insights"]
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">AI Projects & Ideas</h2>
          <p className="text-lg text-muted-foreground">
            Innovative solutions for breaking language barriers in content creation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-primary mb-4">{project.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
