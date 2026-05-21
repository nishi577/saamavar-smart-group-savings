const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-md bg-gradient-hero flex items-center justify-center">
          <span className="font-display font-bold text-primary-foreground text-xs">S</span>
        </div>
        <span className="font-display font-semibold text-foreground">Saamavar</span>
      </div>
      <p className="text-sm text-muted-foreground">© 2026 Saamavar. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
