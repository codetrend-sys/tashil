import { motion } from "framer-motion";
import { Calculator, RotateCcw, TrendingDown, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Calculator,
    title: "Calcul automatique du bénéfice",
    description: "Revenus – publicité – coût produit – livraison = votre profit net, calculé instantanément.",
    accent: "primary" as const,
  },
  {
    icon: RotateCcw,
    title: "Suivi des retours clients",
    description: "Identifiez les produits avec le plus de retours et optimisez votre catalogue en conséquence.",
    accent: "gold" as const,
  },
  {
    icon: TrendingDown,
    title: "Analyse des pertes",
    description: "Détectez où vous perdez de l'argent : publicité inefficace, livraison coûteuse, retours excessifs.",
    accent: "primary" as const,
  },
  {
    icon: BarChart3,
    title: "Rapports journaliers",
    description: "Consultez des rapports détaillés chaque jour pour piloter votre business avec précision.",
    accent: "gold" as const,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="absolute inset-0 gradient-hero opacity-50" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest">
            Fonctionnalités
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            Tout ce qu'il vous faut pour{" "}
            <span className="text-gradient">maximiser vos profits</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Des outils puissants conçus spécifiquement pour les vendeurs e-commerce au Maroc.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass-card rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 ${
                  feature.accent === "primary" ? "gradient-primary" : "gradient-gold"
                }`}
              >
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
