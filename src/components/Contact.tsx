import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const WEBAPP_URL = "https://script.google.com/macros/s/AKfycbykzIcOPEc-3Wg0R-sntK6B9jAFw89zkkRvVbwrsjMe5FbwA4OnLXqpHG3fqBAaQsSP/exec";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    link: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // basic client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.link.trim()) {
      toast({
        title: "Missing fields",
        description: "Please fill out required fields (*) before submitting.",
        variant: "destructive",
      });
      return;
    }

    try {
      // Convert the data to URL-encoded format
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formBody.append(key, value);
      });

      const resp = await fetch(WEBAPP_URL, {
        method: "POST",
        mode: "no-cors", // Change to no-cors mode
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody.toString(),
      });

      // Google Apps Script might return text instead of JSON
      // With no-cors mode, we won't get a proper response status
      // So we'll assume success if we got here without an error
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "", phone: "", link: "" });
    } catch (err: any) {
      console.error("Form submission error:", err);
      toast({
        title: "Submission failed",
        description: "Unable to submit form. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Let's Collaborate</h2>
          <p className="text-lg text-muted-foreground">
            Interested in building AI tools or creative automation? Let's connect and explore possibilities together.
          </p>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4">* Required fields</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              placeholder="Your Name *"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="h-12"
            />
          </div>
          
          <div>
            <Input
              type="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="h-12"  
            />
          </div>
          <div>
            <Input
              type="number"
              placeholder="Contact Number (Optional)"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="h-12"
            />
          </div>
          <div>
            <Input
              type="text"
              placeholder="Channel / Page Name (Share Link if possible) *"
              value={formData.link}
              onChange={(e) => setFormData({ ...formData, link: e.target.value })}
              required
              className="h-12"
            />
          </div>
          
          <div>
            <Textarea
              placeholder="Message (Optional)"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              
              className="min-h-32"
            />
          </div>
          
          <Button 
            type="submit" 
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
