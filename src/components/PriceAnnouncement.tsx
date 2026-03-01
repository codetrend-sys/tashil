import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, Zap } from "lucide-react";

const PriceAnnouncement = () => {
    return (
        <section className="py-20 relative overflow-hidden bg-background">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative max-w-4xl mx-auto"
                >
                    {/* Decorative Glow Background */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-[3rem] blur-3xl opacity-50" />

                    <div className="relative glass-card rounded-[2.5rem] p-8 md:p-12 border border-white/10 dark:border-white/5 overflow-hidden shadow-2xl">
                        {/* Animated Light Beam */}
                        <motion.div
                            className="absolute -top-[100%] -left-[100%] w-[300%] h-[300%] bg-gradient-to-br from-transparent via-white/5 to-transparent rotate-45"
                            animate={{ x: ["0%", "100%"] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                        />

                        <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
                            <div className="space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary-foreground text-xs font-bold uppercase tracking-wider"
                                >
                                    <Sparkles className="w-3 h-3" />
                                    Offre de lancement
                                </motion.div>

                                <h2 className="text-3xl md:text-4xl font-heading font-bold leading-tight">
                                    Accès à vie avec <br />
                                    <span className="text-gradient-gold">Code d'Activation</span>
                                </h2>

                                <ul className="space-y-3">
                                    {[
                                        "Calcul de profit illimité",
                                        "Analyses en temps réel",
                                        "Zéro frais mensuels",
                                        "Support prioritaire 24/7"
                                    ].map((item, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.4 + (i * 0.1) }}
                                            className="flex items-center gap-2 text-muted-foreground"
                                        >
                                            <CheckCircle2 className="w-4 h-4 text-primary" />
                                            <span className="text-sm font-medium">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            <div className="relative flex flex-col items-center justify-center p-8 rounded-3xl bg-primary/5 border border-primary/10 overflow-hidden">
                                <motion.div
                                    animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="absolute inset-0 bg-primary/10 blur-2xl"
                                />

                                <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2 relative z-10">
                                    Prix Unique
                                </p>

                                <div className="flex items-baseline gap-1 relative z-10">
                                    <span className="text-5xl md:text-7xl font-heading font-black text-gradient">300</span>
                                    <span className="text-2xl font-bold text-primary">DH</span>
                                </div>

                                <p className="text-xs text-muted-foreground mt-4 text-center font-medium opacity-70 relative z-10">
                                    Pas d'abonnement. Payez une seule fois, <br /> utilisez pour toujours.
                                </p>

                                <motion.div
                                    className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground w-12 h-12 rounded-full flex items-center justify-center shadow-lg rotate-12 z-20"
                                    animate={{ rotate: [12, -12, 12] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                >
                                    <Zap className="w-6 h-6 fill-current" />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PriceAnnouncement;
