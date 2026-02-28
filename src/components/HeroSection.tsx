import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo_YM.png";
import phoneMockup from "@/assets/phone-mockup.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-hero">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />

      <div className="container mx-auto px-4 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3">
              <img src={logo} alt="TASHIL MAROC ECOM" className="w-14 h-14 rounded-xl object-cover" />
              <span className="font-heading font-bold text-lg tracking-tight">TASHIL MAROC ECOM</span>
            </div>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
              >
                <span className="w-2 h-2 rounded-full gradient-primary" />
                L'outil #1 des e-commerçants marocains
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                Connaissez votre{" "}
                <span className="text-gradient">bénéfice net</span>{" "}
                en temps réel
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Calculez automatiquement vos profits, suivez vos retours, analysez vos pertes
                et prenez des décisions éclairées — le tout depuis votre smartphone.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-primary text-primary-foreground text-base px-8 py-6 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow">
                <Download className="mr-2 h-5 w-5" />
                Télécharger maintenant
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 py-6 rounded-xl border-border hover:bg-muted">
                Voir la démo
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-2xl font-heading font-bold text-gradient">+2,500</p>
                <p className="text-sm text-muted-foreground">Vendeurs actifs</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <p className="text-2xl font-heading font-bold text-gradient-gold">98%</p>
                <p className="text-sm text-muted-foreground">Satisfaction</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <p className="text-2xl font-heading font-bold text-gradient">24/7</p>
                <p className="text-sm text-muted-foreground">Accès mobile</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-primary/5 blur-3xl" />
              <img
                src={phoneMockup}
                alt="TASHIL MAROC ECOM Dashboard"
                className="relative w-80 lg:w-96 animate-float drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
