import { motion } from "framer-motion";
import { Download, ArrowRight, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const apkUrl = "https://tashil.rakopssolutions.com/TASHIL-MAROC-ECOM.apk";
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 gradient-primary opacity-95" />

      {/* Animated decorative elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary-foreground/5 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-secondary/10 blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-8 max-w-2xl mx-auto"
        >
          {/* Stars */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center gap-1"
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Star className="h-5 w-5 fill-secondary text-secondary" />
              </motion.div>
            ))}
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground">
            Prêt à booster vos profits ?
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed">
            Rejoignez des milliers de vendeurs marocains qui utilisent TASHIL pour optimiser
            leur rentabilité chaque jour.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex flex-col gap-3 w-full sm:w-auto">
              <Button
                size="lg"
                className="gradient-gold text-secondary-foreground font-semibold text-base px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden w-full"
                onClick={() => { const w = window.open(apkUrl, '_blank'); if (w) w.opener = null; }}
              >
                <span className="absolute inset-0 shimmer-btn" />
                <Download className="mr-2 h-5 w-5 relative z-10" />
                <span className="relative z-10">Télécharger & Activer</span>
              </Button>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="bg-black/40 backdrop-blur-xl px-5 py-3 rounded-2xl border border-white/10 shadow-xl flex items-center gap-3 w-full"
              >
                <div className="bg-secondary rounded-full p-1.5 shadow-lg">
                  <Zap className="w-4 h-4 text-secondary-foreground fill-current" />
                </div>
                <p className="text-sm font-black text-white uppercase tracking-tight">
                  Code d'activation : <span className="text-secondary text-base">300 DH</span>
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
