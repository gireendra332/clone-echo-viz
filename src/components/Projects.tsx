import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Projects = () => {
 const projects = [
  {
    title: "Voice Dubbing Service",
    description:
      "We provide high-quality AI dubbing for creators who want to expand their reach across India. Our team takes your original videos (e.g., Hindi) and dubs them into regional languages like Telugu, Tamil, Kannada, and Malayalam, ensuring your unique voice tone is perfectly preserved.",
    tags: ["Voice Dubbing", "Tone Preservation"]
  },
  {
    title: "Regional Channel Management",
    description:
      "We don’t just dub, we also create and manage dedicated regional channels or pages for your brand. From uploading dubbed videos to engaging with local audiences, we help you grow region-specific fan bases with authentic cultural alignment.",
    tags: ["Channel Management", "Audience Growth", "Localization"]
  },
  {
    title: "Content Distribution & Scheduling",
    description:
      "Our team handles the end-to-end process of content distribution across multiple regional platforms. We schedule, optimize, and publish your dubbed content to ensure consistent visibility and engagement in each target region.",
    tags: ["Content Strategy", "Automation", "Scheduling"]
  },
  {
    title: "Regional Audience Insights",
    description:
      "We analyze performance across different language markets, providing insights into audience behavior, engagement patterns, and growth opportunities. These insights help creators refine their regional content strategy effectively.",
    tags: ["Analytics", "Regional Insights", "Growth Strategy"]
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
            <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 bg-white border border-border/50">
              <h3 className="text-2xl font-bold text-primary mb-4">{project.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary" className="text-xs px-3 py-1">
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
