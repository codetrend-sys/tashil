import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

const DemoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 bg-muted/30" id="demo">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 space-y-4"
        >
          <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-widest">
            Démonstration
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            Voyez <span className="text-gradient-gold">TASHIL</span> en action
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Découvrez comment notre application simplifie la gestion de votre e-commerce au quotidien.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 aspect-video bg-foreground/5">
            {!isPlaying ? (
              <div
                className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                onClick={() => setIsPlaying(true)}
              >
                {/* Placeholder thumbnail */}
                <div className="absolute inset-0 gradient-primary opacity-90" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 z-10">
                  <div className="w-20 h-20 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-primary-foreground/40">
                    <Play className="h-8 w-8 text-primary-foreground ml-1" />
                  </div>
                  <p className="text-primary-foreground font-heading font-semibold text-xl">
                    Regarder la démo
                  </p>
                </div>
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-foreground/5">
                <p className="text-muted-foreground font-medium text-center px-8">
                  🎬 Intégrez ici votre vidéo de démonstration
                  <br />
                  <span className="text-sm opacity-70">
                    Remplacez ce placeholder par un embed YouTube ou une vidéo locale
                  </span>
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
