import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useRef, useEffect } from "react";

const Testimonials = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const videos = videoRefs.current;
    
    const handleVideoPlay = (playingVideo: HTMLVideoElement) => {
      videos.forEach((video) => {
        if (video && video !== playingVideo) {
          video.pause();
        }
      });
    };

    videos.forEach((video) => {
      if (video) {
        video.addEventListener('play', () => handleVideoPlay(video));
      }
    });

    // Cleanup event listeners when component unmounts
    return () => {
      videos.forEach((video) => {
        if (video) {
          video.removeEventListener('play', () => handleVideoPlay(video));
        }
      });
    };
  }, []);

  const testimonials = [
    {
  quote:
    "The voice cloning quality is unbelievable. My Hindi content now reaches Telugu audiences without losing my personal touch.",
  author: "FoodPharmer",
  role: "Content Creator",
  originalLang: "Original (Hindi)",
  dubbedLang: "Dubbed (Telugu)",
  originalVideo: "/videos/testimonial1making_original.mp4",
  dubbedVideo: "/videos/testimonial1making_Telugu_translated.mp4"
  
},
    // {
    //   quote: "AutoReach helped me scale from 1 to 5 regional channels in weeks. My audience grew 300% without extra recording time.",
    //   author: "Raj Malhotra",
    //   role: "YouTuber",
    //   originalLang: "Original (English)",
    //   dubbedLang: "Dubbed (Tamil)",
    //   originalImage: "https://images.unsplash.com/photo-1678977252570-58db7acbbeea?w=400&h=300&fit=crop",
    //   dubbedImage: "https://images.unsplash.com/photo-1617994452722-4145e196248b?w=400&h=300&fit=crop"
    // },
    // {
    //   quote: "The emotional accuracy is what impressed me most. My fans can't tell the difference between original and dubbed content.",
    //   author: "Priya Sharma",
    //   role: "Influencer",
    //   originalLang: "Original (Hindi)",
    //   dubbedLang: "Dubbed (Kannada)",
    //   originalImage: "https://images.unsplash.com/photo-1662018107866-48b6244c9a1f?w=400&h=300&fit=crop",
    //   dubbedImage: "https://images.unsplash.com/photo-1615821430729-d3c98749eba4?w=400&h=300&fit=crop"
    // }
  ];

  return (
    <section id="testimonials" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">What People Say</h2>
          <p className="text-lg text-muted-foreground">
            Real results from creators who broke language barriers
          </p>
        </div>
        
        <div className="space-y-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
                <div className="flex items-center gap-4 flex-1">
                  <video 
                    ref={el => videoRefs.current[index * 2] = el}
                    src={testimonial.originalVideo}
                    controls
                    className="w-32 h-64 object-cover rounded-lg custom-video"
                  />
                  <div className="text-sm font-medium text-muted-foreground">
                    {testimonial.originalLang}
                  </div>
                </div>
                
                <ArrowRight className="text-muted-foreground flex-shrink-0" size={24} />
                
                <div className="flex items-center gap-4 flex-1">
                  <video 
                    ref={el => videoRefs.current[index * 2 + 1] = el}
                    src={testimonial.dubbedVideo}
                    controls
                    className="w-32 h-64 object-cover rounded-lg custom-video"
                  />
                  <div className="text-sm font-medium text-muted-foreground">
                    {testimonial.dubbedLang}
                  </div>
                </div>
              </div>
              
              <blockquote className="text-lg text-primary mb-4 italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div>
                <div className="font-semibold text-primary">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
