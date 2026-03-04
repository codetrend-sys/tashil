import { motion } from "framer-motion";
import { Calculator, LayoutDashboard, TrendingDown, BarChart3 } from "lucide-react";
import { useTranslation } from "react-i18next";

const FeaturesSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Calculator,
      title: t('features.feature1_title'),
      description: t('features.feature1_desc'),
      accent: "primary" as const,
      stat: t('features.feature1_stat'),
    },
    {
      icon: LayoutDashboard,
      title: t('features.feature2_title'),
      description: t('features.feature2_desc'),
      accent: "gold" as const,
      stat: t('features.feature2_stat'),
    },
    {
      icon: TrendingDown,
      title: t('features.feature3_title'),
      description: t('features.feature3_desc'),
      accent: "primary" as const,
      stat: t('features.feature3_stat'),
    },
    {
      icon: BarChart3,
      title: t('features.feature4_title'),
      description: t('features.feature4_desc'),
      accent: "gold" as const,
      stat: t('features.feature4_stat'),
    },
  ];

  return (
    <section className=" bg-background relative overflow-hidden">
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
            {t('features.badge')}
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            {t('features.title_part1')}{" "}
            <span className="text-gradient">{t('features.title_highlight')}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('features.description')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: "easeOut" }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {/* Card Background & Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-[2.5rem] blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

              <div className="relative glass-card h-full rounded-[2rem] p-10 overflow-hidden border border-white/10 dark:border-white/5">
                {/* Internal hover gradient */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${feature.accent === "primary" ? "from-primary" : "from-secondary"
                  } to-transparent`} />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-8">
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.15 }}
                      className={`flex items-center justify-center w-16 h-16 rounded-2xl shadow-lg ${feature.accent === "primary"
                        ? "bg-primary text-primary-foreground shadow-primary/20"
                        : "gradient-gold text-white shadow-secondary/20"
                        }`}
                    >
                      <feature.icon className="h-8 w-8" />
                    </motion.div>

                    <div className="flex flex-col items-end">
                      <span className={`text-[10px] uppercase tracking-tighter font-bold mb-1 opacity-50`}>
                        {t('features.impact_label')}
                      </span>
                      <span className={`text-sm font-bold px-4 py-1.5 rounded-full border ${feature.accent === "primary"
                        ? "border-primary/20 bg-primary/5 text-primary"
                        : "border-secondary/20 bg-secondary/5 text-secondary-foreground"
                        }`}>
                        {feature.stat}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-heading font-bold mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed text-lg mb-8 flex-grow">
                    {feature.description}
                  </p>

                  <div className="flex items-center justify-end mt-auto">
                    {/* Decorative element */}
                    <div className={`w-8 h-1 rounded-full transition-all duration-500 group-hover:w-16 ${feature.accent === "primary" ? "bg-primary/30" : "bg-secondary/30"
                      }`} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
