import logo from "@/assets/logo_YM.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground/[0.03] border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="TASHIL MAROC ECOM" className="w-10 h-10 rounded-lg object-cover" />
            <span className="font-heading font-bold text-sm tracking-tight">TASHIL MAROC ECOM</span>
          </div>
          <div className="flex flex-col items-center md:items-end gap-1">
            <p className="text-sm text-muted-foreground">
              © 2026 TASHIL MAROC ECOM. Tous droits réservés.
            </p>
            <p className="text-xs text-muted-foreground/80">
              Développé par{" "}
              <a
                href="https://thecodetrend.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors font-medium underline underline-offset-4"
              >
                Code Trend Agency
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
