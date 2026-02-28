import { motion } from "framer-motion";
import { Calculator, RotateCcw, TrendingDown, BarChart3, ArrowUpRight } from "lucide-react";

const features = [
  {
    icon: Calculator,
    title: "Calcul automatique du bénéfice",
    description: "Revenus – publicité – coût produit – livraison = votre profit net, calculé instantanément.",
    accent: "primary" as const,
    stat: "3x plus rapide",
  },
  {
    icon: RotateCcw,
    title: "Suivi des retours clients",
    description: "Identifiez les produits avec le plus de retours et optimisez votre catalogue en conséquence.",
    accent: "gold" as const,
    stat: "-40% retours",
  },
  {
    icon: TrendingDown,
    title: "Analyse des pertes",
    description: "Détectez où vous perdez de l'argent : publicité inefficace, livraison coûteuse, retours excessifs.",
    accent: "primary" as const,
    stat: "Détection en temps réel",
  },
  {
    icon: BarChart3,
    title: "Rapports journaliers",
    description: "Consultez des rapports détaillés chaque jour pour piloter votre business avec précision.",
    accent: "gold" as const,
    stat: "Données en direct",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
    },
  }),
} as const;

const FeaturesSection = () => {
  return (
    <section className="py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-50" />
      
      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(187 78% 42%) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 space-y-5"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-widest bg-primary/5 px-4 py-2 rounded-full"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Fonctionnalités
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            Tout ce qu'il vous faut pour{" "}
            <span className="text-gradient">maximiser vos profits</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Des outils puissants conçus spécifiquement pour les vendeurs e-commerce au Maroc.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group glass-card rounded-2xl p-8 relative overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                feature.accent === "primary"
                  ? "bg-gradient-to-br from-primary/5 to-transparent"
                  : "bg-gradient-to-br from-secondary/10 to-transparent"
              }`} />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${
                      feature.accent === "primary" ? "gradient-primary" : "gradient-gold"
                    }`}
                  >
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </motion.div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    feature.accent === "primary"
                      ? "bg-primary/10 text-primary"
                      : "bg-secondary/20 text-secondary-foreground"
                  }`}>
                    {feature.stat}
                  </span>
                </div>

                <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{feature.description}</p>
                
                <motion.div
                  className="flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                >
                  En savoir plus <ArrowUpRight className="h-4 w-4" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
