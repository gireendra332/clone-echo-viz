const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 px-4">
      <div className="container mx-auto text-center">
        <p className="text-sm opacity-80">
          Made with ❤️ by EchoViz Team. © {new Date().getFullYear()} EchoViz. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
