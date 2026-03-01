import { motion } from "framer-motion";
import { Play, Volume2 } from "lucide-react";
import { useState } from "react";

const DemoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-28 relative overflow-hidden" id="demo">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-muted/30" />
      <motion.div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-secondary/8 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 space-y-5"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest bg-secondary/10 text-secondary-foreground px-4 py-2 rounded-full"
          >
            <Volume2 className="h-3.5 w-3.5" />
            Démonstration
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            Voyez <span className="text-gradient-gold">TASHIL</span> en action
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Découvrez comment notre application simplifie la gestion de votre e-commerce au quotidien.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 aspect-video group">
            {/* Border glow effect */}
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />

            <div className="relative rounded-3xl overflow-hidden bg-foreground/5 z-10 h-full">
              {!isPlaying ? (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  onClick={() => setIsPlaying(true)}
                >
                  <div className="absolute inset-0 bg-black/80" />

                  {/* Animated wave pattern */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute inset-0 border border-primary-foreground/10 rounded-full"
                        style={{ margin: "auto", width: "200px", height: "200px" }}
                        animate={{ scale: [1, 2.5, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{ duration: 3, delay: i * 1, repeat: Infinity }}
                      />
                    ))}
                  </div>

                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 z-10">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-20 h-20 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center border-2 border-primary-foreground/40 animate-pulse-glow"
                    >
                      <Play className="h-8 w-8 text-primary-foreground ml-1" />
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-primary-foreground font-heading font-semibold text-xl"
                    >
                      Regarder la démo
                    </motion.p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="w-full h-full relative bg-black"
                >
                  <video
                    className="w-full h-full object-contain"
                    autoPlay
                    controls
                    playsInline
                  >
                    <source src="/demo-tashil.mp4" type="video/mp4" />
                    Votre navigateur ne supporte pas la lecture de vidéos.
                  </video>
                  <button
                    onClick={() => setIsPlaying(false)}
                    className="absolute top-4 right-4 z-20 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-md transition-all sm:hidden"
                  >
                    <Play className="h-4 w-4 rotate-180" />
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
