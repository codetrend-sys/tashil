import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-primary opacity-95" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary-foreground/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-secondary/10 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-8 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground">
            Prêt à booster vos profits ?
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed">
            Rejoignez des milliers de vendeurs marocains qui utilisent TASHIL pour optimiser
            leur rentabilité chaque jour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="gradient-gold text-secondary-foreground font-semibold text-base px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <Download className="mr-2 h-5 w-5" />
              Télécharger gratuitement
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8 py-6 rounded-xl"
            >
              En savoir plus
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
