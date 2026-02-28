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
          <p className="text-sm text-muted-foreground">
            © 2026 TASHIL MAROC ECOM. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
